import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/xenobiology"

const xenobio = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "xenobiology";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("xenobiologyPens");

			for (let action of Object.values(actions)) {
				let originalItem = action.item;
				delete action.item;
				// action.name = ITEMS[originalItem].name
				action.items = {
					id: originalItem,
					count: 2 ** (Math.max(0, upgradeCount - action.tier + 1))
				}

			}

			return actions;
		}
	}
});

export default xenobio;