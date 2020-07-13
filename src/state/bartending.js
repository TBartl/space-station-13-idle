import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/bartending"
import { BARTENDING_UPGRADE_PERCENT } from "@/data/upgrades";

const BARTENDING = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "bartending";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("boozeDispenser");
			let potion = rootGetters["potions/get"]("bartending");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				if (action.type == "ALCOHOLIC BASES" || action.type == "NON-ALCOHOLIC BASES") {
					action.time *= (1 - BARTENDING_UPGRADE_PERCENT * upgradeCount);
				}

				if (potionItemId == "potionBartending") {
					if (getters["level"] < action.requiredLevel) {
						action.requiredLevel = 1;
					} else {
						action.preservePotion = true;
					}
				}
			}

			return actions;
		}
	}
});

export default BARTENDING;