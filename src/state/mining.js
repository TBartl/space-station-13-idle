import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/mining"

const mining = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobActions(state, getters, rootState, rootGetters) {
			let upgradeCount = rootGetters["upgrades/get"]("miningTools");
			let actions = cloneDeep(ACTIONS);
			for (let action of Object.values(actions)) {
				action.time *= (1 - 0.1 * upgradeCount);
			}
			return actions;
		}
	}
});

export default mining;