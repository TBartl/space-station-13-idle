import { ACTIONS, finishAction } from "@/data/mining"

import { progressAction } from "@/utils/actionUtils";

export default {
	namespaced: true,
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
		_cancelAction(state) {
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
	},
	actions: {
		tryStartAction({ commit, state }, actionId) {
			var previousActionId = state.currentActionId;
			commit("_cancelAction");
			if (previousActionId == actionId) return;

			commit("_setAction", actionId);

			var action = ACTIONS[actionId];

			progressAction(
				action.time,
				(progress, progressTimeout) => {
					commit("_updateProgress", { progress, progressTimeout })
				},
				() => { finishAction(commit, actionId) }
			);


		}
	}
}