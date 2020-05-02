import { ACTIONS } from "@/data/mining"

import { progressAction } from "@/utils/actionUtils";

function cancelAction(state) {
	if (!state.currentActionId) return;
	state.currentActionId = "";
	clearInterval(state.currentProgressTimeout);
}

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
		tryStartAction(state, actionId) {
			var previousActionId = state.currentActionId;
			cancelAction(state);
			if (previousActionId == actionId) return;

			state.currentActionId = actionId;
			state.currentProgress = 0;
			state.currentProgressTimeout = 0;

			var action = ACTIONS[actionId];

			progressAction(
				action.time,
				(progress, timeout) => {
					state.currentProgress = progress;
					state.currentProgressTimeout = timeout;
				},
				() => { console.log("done") }
			);
		},
		cancelAction
	}
}