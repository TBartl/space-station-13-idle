import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/chemistry"

const chemistry = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "chemistry";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("chemDispenser");
			let potion = rootGetters["potions/get"]("chemistry");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				if (action.type == "bases") {
					action.time *= (1 - 0.15 * upgradeCount);
				}
			}

			return actions;
		}
	}
});

export default chemistry;