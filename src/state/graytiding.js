import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/graytiding"

const graytiding = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "graytiding";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("graytidingHacking");
			let potion = rootGetters["potions/get"]("graytiding");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				action.failure.chance -= .1 * upgradeCount;
			}
			return actions;
		}
	}
});

export default graytiding;