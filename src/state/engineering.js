import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/engineering"

const engineering = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "engineering";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);
			let upgradeCount = rootGetters["upgrades/get"]("cableManagement");
			for (let action of Object.values(actions)) {
				action.xp = Math.round(action.xp * (1 + upgradeCount * .15));
			}
			return actions;
		}
	}
});

export default engineering;