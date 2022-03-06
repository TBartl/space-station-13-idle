import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import ITEMS from "@/data/items";
import { ACTIONS } from "@/data/bartending"
import { BARTENDING_UPGRADE_INCREMENT, BARTENDING_UPGRADE_CAP } from "@/data/upgrades";

const BARTENDING = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "bartending";
		},
		drinkTableCount(state, getters, rootState, rootGetters) {
			let count = 0;
			let bankItemIds = rootGetters["inventory/bankItemIds"];
			bankItemIds.forEach(bankItemId => {
				if (ITEMS[bankItemId].isDrink) count += 1;
			});
			return count;
		},
		drinkTableMax(state, getters, rootState, rootGetters) {
			let upgradeCount = rootGetters["upgrades/get"]("drinkTable");
			return upgradeCount * BARTENDING_UPGRADE_CAP;
		},
		drinkTableBonus(state, getters) {
			return Math.min(getters["drinkTableCount"], getters["drinkTableMax"]) * BARTENDING_UPGRADE_INCREMENT;
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let potion = rootGetters["potions/get"]("bartending");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				action.time *= 1 / (1 + getters["drinkTableBonus"]);

				if (potionItemId == "potionBartending") {
					if (getters["level"] < action.requiredLevel) {
						action.requiredLevel -= 10;
						action.levelReduced = true;
					} else {
						action.preservePotion = true;
					}
				} else if (potionItemId == "toolBartending") {
					let originalItems = action.items;
					delete action.items;
					action.itemTables = [
						{
							chance: 1,
							items: originalItems
						},
						{
							chance: 1,
							items: {
								id: "money",
								count: ITEMS[originalItems.id].sellPrice * 2
							}
						}
					]
				}
			}

			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("bartendingUnlocked");
		},
	},
});

export default BARTENDING;