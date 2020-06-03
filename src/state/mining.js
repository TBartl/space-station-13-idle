import Vue from "vue";
import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';
import ITEMS from "@/data/items";

import { ACTIONS } from "@/data/mining"

const potionDropTable = [
	{
		chance: .25,
		itemTable: [
			{
				id: "foodMeatZ",
				count: 1,
				weight: 33
			},
			{
				id: "slimeMining",
				count: 1,
				weight: 33
			},
			{
				id: "oil",
				count: 1,
				weight: 33
			},
			{
				id: "jumpsuitExplorer",
				count: 1,
				weight: 1
			},
		]
	}
]

const mining = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "mining";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("miningTools");
			let potion = rootGetters["potions/get"]("mining");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				action.time *= (1 - 0.1 * upgradeCount);

				if (potionItemId == "faunaPerfume") {
					let originalItem = action.item;
					delete action.item;
					action.name = ITEMS[originalItem].name

					let newDropTable = cloneDeep(potionDropTable);
					newDropTable.unshift({ chance: 1, item: originalItem })
					action.itemTables = newDropTable;
				}
			}
			return actions;
		}
	}
});

export default mining;