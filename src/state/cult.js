import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/cult"
import { ANTAG_UPGRADE_PERCENT } from "@/data/upgrades";


const cult = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "cult";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("antagUpgrade");
			let potion = rootGetters["potions/get"]("cult");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				// Apply upgrades
				action.time *= 1 / (1 + ANTAG_UPGRADE_PERCENT * upgradeCount);

				// Apply potion
				if (potionItemId == "potionCult") {
					let originalItem = action.item;
					delete action.item;
					action.itemTables = [
						{
							chance: 1,
							item: originalItem
						},
						{
							chance: 1,
							item: originalItem
						}
					]
				}
			}
			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("cultUnlocked");
		}
	}
});

export default cult; 