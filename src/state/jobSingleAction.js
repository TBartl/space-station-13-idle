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