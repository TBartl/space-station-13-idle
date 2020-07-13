import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/bartending"
import { BARTENDING_UPGRADE_PERCENT } from "@/data/upgrades";

const bartending = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
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
				// Not on negative XP
				if (action.xp > 0)
					action.xp = (action.xp * (1 + upgradeCount * BARTENDING_UPGRADE_PERCENT));

				if (potionItemId == "potionbartending") {
					let originalItems = action.items;
					if (!originalItems) continue;
				    if (originalItems.id != "") { //change this later
						action.preservePotion = true;
						continue;
					};
					delete action.items;
					action.name = ITEMS[originalItem].name

					action.itemTables = [
						{
							chance: 1,
							items: originalItems
						},
						{
							chance: 1,
							items: {
								id: "money",
								count: originalItems.count * 4
							}
						}
					]
				}
			}
			return actions;
		}
	}
});

export default bartending;