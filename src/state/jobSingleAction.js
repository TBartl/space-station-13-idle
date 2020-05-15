// Requires the store to implement getters.jobActions and actions.finishAction(actionId)

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
		hasActionRequiredItems(state, getters, rootState) {
			return (actionId) => {
				let action = getters.jobActions[actionId];
				if (!action.requiredItems) return true;
				for (let [itemId, requiredCount] of Object.entries(action.requiredItems)) {
					let count = rootState.inventory[itemId];
					count = count ? count : 0;
					if (count < requiredCount) return false;
				}
				return true;
			}
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
		cancelActions({ state, dispatch }) {
			if (!state.currentActionId) return;
			state.currentActionId = "";
			dispatch("actionCoroutine/cancel");
		},
		tryStartAction({ commit, state, getters, dispatch }, actionId) {
			let action = getters.jobActions[actionId];
			if (getters["level"] < action.requiredLevel) return;

			let previousActionId = state.currentActionId;
			dispatch("cancelAllActions", {}, { root: true });
			if (previousActionId == actionId) return;

			commit("_setAction", actionId);

			dispatch("_startCoroutine", { actionId, action })
		},
		_startCoroutine({ dispatch }, { actionId, action }) {
			dispatch("actionCoroutine/start",
				{
					duration: action.time,
					onFinish: () => {
						dispatch("finishAction", actionId)
					}
				});
		},
		finishAction({ commit, getters, dispatch }, actionId) {
			if (!getters.hasActionRequiredItems(actionId)) return;
			let action = getters.jobActions[actionId];
			acquireItemFrom(action, commit);
			commit("addXP", action.xp);

			if (action.requiredItems) {
				for (let [itemId, requiredCount] of Object.entries(action.requiredItems)) {
					commit("changeItemCount", { itemId, count: -requiredCount }, { root: true });
				}
			}

			// Start it again automatically
			dispatch("_startCoroutine", { actionId, action })
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