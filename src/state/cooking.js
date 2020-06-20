import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/cooking"
import { COOKING_UPGRADE_PERCENT } from "@/data/upgrades";
import { COOKING_POTION_PERCENT } from '@/data/items/resourceChemistry';

const cooking = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "cooking";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("fryCooking");
			let potion = rootGetters["potions/get"]("cooking");
			let potionItemId = potion ? potion.itemId : null;

			if (upgradeCount || potionItemId) {

				let actionEntries = Object.values(actions);
				actionEntries.forEach((action) => {

					let originalItem = action.item;
					delete action.item;

					action.itemTables = [
						{
							chance: 1 - upgradeCount * COOKING_UPGRADE_PERCENT,
							item: originalItem
						}
					]
					delete action.item;

					if (upgradeCount) {
						action.itemTables.push({
							chance: upgradeCount * COOKING_UPGRADE_PERCENT,
							item: "q_" + originalItem
						})
					}
				})
			}

			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("cookingUnlocked");
		}
	}
});

export default cooking;