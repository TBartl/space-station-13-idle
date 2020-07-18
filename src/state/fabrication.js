import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/fabrication"
import { FABRICATION_UPGRADE_PERCENT } from "@/data/upgrades";
import { FABRICATION_POTION_PERCENT } from '@/data/items/resourceChemistry';

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

			let potionPowerReduction = potionItemId == "potionFabrication" ? (1 - FABRICATION_POTION_PERCENT) : 1;
			let upgradeOreReduction = 1 - upgradeCount * FABRICATION_UPGRADE_PERCENT;

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
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("fabricationUnlocked");
		}
	}
});

export default mining;