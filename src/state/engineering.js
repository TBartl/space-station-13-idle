import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/engineering"

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
				action.xp = Math.round(action.xp * (1 + upgradeCount * .15));

				if (potionItemId == "potionEngineering") {
					let originalItems = action.items;
					if (!originalItems) continue;
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
								count: originalItems.count
							}
						}
					]
				}
			}
			return actions;
		}
	}
});

export default engineering;