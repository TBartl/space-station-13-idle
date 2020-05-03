import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import { progressAction } from "@/utils/actionUtils";

import { ACTIONS, finishAction } from "@/data/mining"

const mining = merge(cloneDeep(jobBase), {
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
	},
	actions: {
		tryStartAction({ commit, state, getters, dispatch }, actionId) {
			var action = ACTIONS[actionId];
			if (getters["level"] < action.requiredLevel) return;

			var previousActionId = state.currentActionId;
			dispatch("cancelAllActions", {}, { root: true });
			if (previousActionId == actionId) return;

			commit("_setAction", actionId);

			progressAction(
				action.time,
				(progress, progressTimeout) => {
					commit("_updateProgress", { progress, progressTimeout })
				},
				() => { finishAction(commit, actionId) }
			);


		}
	}
});

export default mining;