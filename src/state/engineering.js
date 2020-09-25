import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/engineering"
import { ENGINEERING_UPGRADE_PERCENT } from "@/data/upgrades";

const engineering = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "engineering";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);
			let upgradeCount = rootGetters["upgrades/get"]("cableManagement");
			let potion = rootGetters["potions/get"]("engineering");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				// Not on negative XP
				if (action.xp > 0)
					action.xp = (action.xp * (1 + upgradeCount * ENGINEERING_UPGRADE_PERCENT));

				if (potionItemId == "potionEngineering") {
					let originalItems = action.items;
					if (!originalItems) continue;
					if (originalItems.id != "power") {
						action.preservePotion = true;
						continue;
					};
					delete action.items;
					// action.name = ITEMS[originalItem].name

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
				} else if (potionItemId == "toolEngineering") {
					action.time -= 1;
				}
			}
			return actions;
		}
	}
});

export default engineering;