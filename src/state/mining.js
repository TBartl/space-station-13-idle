import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS, finishAction } from "@/data/mining"

const mining = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters:{
		jobActions() {
			return ACTIONS;
		}
	},
	actions: {
		finishAction({ commit }, actionId) {
			finishAction(commit, actionId)
		}
	}
});

export default mining;