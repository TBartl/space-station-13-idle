import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/engineering"

const engineering = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters:{
		jobId() {
			return "engineering";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);
			return actions;
		}
	}
});

export default engineering;