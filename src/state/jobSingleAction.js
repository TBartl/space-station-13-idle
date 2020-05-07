// Requires the store to implement getters.jobActions and actions.finishAction(actionId)

import { progressAction } from "@/utils/actionUtils";

export default {
	state: {
		currentActionId: "",
		currentProgress: 0,
		currentProgressTimeout: 0
	},
	getters: {
		currentActionId(state) { return state.currentActionId },
		currentProgress(state) { return state.currentProgress },
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
		cancelActions(state) {
			if (!state.currentActionId) return;
			clearInterval(state.currentProgressTimeout);
			state.currentActionId = "";
			state.currentProgress = 0;
			state.currentProgressTimeout = 0;
		},
		_setAction(state, actionId) {
			state.currentActionId = actionId;
		},
		_updateProgress(state, { progress, progressTimeout }) {
			state.currentProgress = progress;
			state.currentProgressTimeout = progressTimeout;
		}
	}, actions: {
		tryStartAction({ commit, state, getters, rootGetters, dispatch }, actionId) {
			let action = getters.jobActions[actionId];
			if (getters["level"] < action.requiredLevel) return;

			let previousActionId = state.currentActionId;
			dispatch("cancelAllActions", {}, { root: true });
			if (previousActionId == actionId) return;

			commit("_setAction", actionId);

			progressAction(
				action.time,
				rootGetters,
				(progress, progressTimeout) => {
					commit("_updateProgress", { progress, progressTimeout })
				},
				() => { dispatch("finishAction", actionId) }
			);
		},
		finishAction({ commit, getters }, actionId) {
			if (!getters.hasActionRequiredItems(actionId)) return;
			let action = getters.jobActions[actionId];
			commit("changeItemCount", { itemId: action.item, count: 1 }, { root: true });
			commit("addXP", action.xp);


			if (action.requiredItems) {
				for (let [itemId, requiredCount] of Object.entries(action.requiredItems)) {
					commit("changeItemCount", { itemId, count: -requiredCount }, { root: true });
				}
			}

		},
		_resume({ state, commit, dispatch }) {
			if (state.currentActionId && !state.currentProgressTimeout) {
				let lastActionId = state.currentActionId
				if (!lastActionId) return;
				commit("cancelActions");
				dispatch("tryStartAction", lastActionId)
			}
		}
	}
}