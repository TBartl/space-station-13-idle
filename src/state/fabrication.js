import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/fabrication"

const mining = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "fabrication";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("fabricationBins");
			let potion = rootGetters["potions/get"]("fabrication");
			let potionItemId = potion ? potion.itemId : null;

			let potionPowerReduction = potionItemId == "potionFabrication" ? .6 : 1;
			let upgradeOreReduction = 1 - upgradeCount * .20;

			for (let action of Object.values(actions)) {
				for (let itemId of Object.keys(action.requiredItems)) {
					if (itemId == "power") {
						action.requiredItems[itemId] = Math.max(1, Math.round(action.requiredItems[itemId] * potionPowerReduction));
					} else {
						action.requiredItems[itemId] = Math.max(1, Math.round(action.requiredItems[itemId] * upgradeOreReduction));
					}
				}
			}

			return actions;
		}
	}
});

export default mining;