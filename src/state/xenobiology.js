import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS, finishAction } from "@/data/xenobiology"

const xenobio = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters:{
		jobActions() {
			return ACTIONS;
		}
	}
});

export default xenobio;