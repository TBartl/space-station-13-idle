// Requires the store to implement getters.completeActions and actions.finishAction(actionId)

import ITEMS from "@/data/items";
import { EventBus } from "@/utils/eventBus.js";
import { acquireItemFrom } from "@/utils/itemChanceUtils";
import { createCoroutineModule } from "./coroutine";

export default {
	modules: {
		actionCoroutine: createCoroutineModule()
	},
	state: {
		currentActionId: ""
	},
	getters: {
		active(state) {
			return state.currentActionId;
		},
		currentActionId(state) { return state.currentActionId },
		hasActionRequiredItems(state, getters, rootState, rootGetters) {
			return (actionId) => {
				let action = getters.completeActions[actionId];
				if (!action.requiredItems) return true;
				for (let [itemId, requiredCount] of Object.entries(action.requiredItems)) {
					let count = rootGetters["inventory/bank"][itemId];
					count = count ? count : 0;
					if (count < requiredCount) return false;
				}
				return true;
			}
		},
		completeActions(state, getters, rootState, rootGetters) {
			let xpBonus = 0;
			for (let [equipmentId, equipment] of Object.entries(rootGetters["inventory/equipment"])) {
				let itemId = equipment.itemId;
				if (!itemId) continue;
				let item = ITEMS[itemId];
				if (item.xpBonuses) {
					let bonus = item.xpBonuses[getters["jobId"]];
					if (bonus) xpBonus += bonus;
				}
			}
			// We could clone this, but it's already getting cloned a layer down so *shrug*
			let actions = getters.baseActions;
			for (let action of Object.values(actions)) {
				action.xp *= (1 + xpBonus / 100);
			}
			return actions;
		},
		// Returns entries for all actions, up to  and including the next one to unlock
		filteredActionEntries(state, getters, rootState, rootGetters) {
			let actions = getters["completeActions"];
			let entries = Object.entries(actions);

			if (rootGetters["cheats/showAllActions"]) return entries;

			let highestLevels = {} // type: highestLevel

			let currentLevel = getters["level"];
			for (let [actionId, action] of entries) {
				if (action.requiredLevel > currentLevel) {
					// Attempt to update the highest locked level
					if (highestLevels[action.type]) {
						highestLevels[action.type] = Math.min(highestLevels[action.type], action.requiredLevel);
					} else {
						highestLevels[action.type] = action.requiredLevel;
					}
				}
			}
			entries = entries.filter(entry => {
				if (!highestLevels[entry[1].type]) return true;
				return entry[1].requiredLevel <= highestLevels[entry[1].type]
			});

			return entries;

		}
	},
	mutations: {
		_setAction(state, actionId) {
			state.currentActionId = actionId;
		},
		_updateProgress(state, { progress, progressTimeout }) {
			state.currentProgress = progress;
			state.currentProgressTimeout = progressTimeout;
		}
	}, actions: {
		cancelActions({ state, dispatch, commit }) {
			if (!state.currentActionId) return;
			commit("_setAction", null);
			dispatch("actionCoroutine/cancel");
		},
		tryStartAction({ commit, state, getters, dispatch }, actionId) {
			let action = getters.completeActions[actionId];
			if (getters["level"] < action.requiredLevel) return;

			let previousActionId = state.currentActionId;
			dispatch("cancelAllActions", {}, { root: true });
			if (previousActionId == actionId) return;

			commit("_setAction", actionId);

			dispatch("_startCoroutine", { actionId, action })
		},
		_startCoroutine({ dispatch, commit, getters }, { actionId, action }) {
			dispatch("actionCoroutine/start",
				{
					duration: action.time,
					onFinish: () => {
						dispatch("finishAction", actionId);
						commit("completion/trackJobTime", { jobId: getters["jobId"], time: action.time }, { root: true });
					}
				});
		},
		finishAction({ commit, getters, dispatch, rootGetters }, actionId) {
			if (!getters.hasActionRequiredItems(actionId)) return;
			let action = getters.completeActions[actionId];

			if (action.failure) {
				if (Math.random() < action.failure.chance) {
					// At least try again
					EventBus.$emit("toast", { text: "Apprehended!" });
					dispatch("_startCoroutine", { actionId, action })
					dispatch("playerMob/getHit", action.failure.damage, { root: true });
					return;
				}
			}

			let yieldedItems = acquireItemFrom(action);
			for (let [itemId, count] of Object.entries(yieldedItems)) {
				if (!count) continue;
				commit("inventory/changeItemCount", { itemId, count }, { root: true });
			}
			commit("addXP", action.xp);

			if (action.requiredItems) {
				for (let [itemId, requiredCount] of Object.entries(action.requiredItems)) {
					commit("inventory/changeItemCount", { itemId, count: -requiredCount }, { root: true });
				}
			}

			if (!action.preservePotion) {
				dispatch("potions/useCharge", getters["jobId"], { root: true });
			}

			// Start it again automatically if we can
			// The action may have been updated (like if the user ran out of potion charges)
			action = getters.completeActions[actionId];
			let canContinue = true;
			if (!getters.hasActionRequiredItems(actionId)) {
				canContinue = false;
				EventBus.$emit("toast", { text: "Missing items!" });
			};

			if (getters.level < action.requiredLevel) canContinue = false;

			// Check that we actually got items there
			let isMissingItem = Object.entries(yieldedItems).find(entry => {
				let itemId = entry[0];
				let count = entry[1];
				if (count <= 0) return false;
				return !rootGetters["inventory/hasItem"](itemId);
			});
			if (isMissingItem) {
				canContinue = false;
			};

			if (canContinue) {
				dispatch("_startCoroutine", { actionId, action })
			} else {
				commit("_setAction", null);
			}
		},
		_resume({ state, dispatch }) {
			if (state.currentActionId && !state.currentProgressTimeout) {
				let lastActionId = state.currentActionId
				if (!lastActionId) return;
				dispatch("cancelActions");
				dispatch("tryStartAction", lastActionId)
			}
		}
	}
}