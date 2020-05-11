import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/engineering"

const engineering = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters:{
		jobActions() {
			return ACTIONS;
		}
	}
});

export default engineering;