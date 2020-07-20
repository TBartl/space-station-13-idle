import Vue from "vue";
import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';
import ITEMS from "@/data/items";

import { ACTIONS } from "@/data/cargonia"
import { ANTAG_UPGRADE_PERCENT } from "@/data/upgrades";

const potionDropTableCargonia = [
	{
		chance: .25,
		itemTable: [
			{
				id: "foodMeatA",
				count: 1,
				weight: 35
			},
			{
				id: "oil",
				count: [1,50],
				weight: 25
			},
			{
				id: "cactus",
				count: [1,3],
				weight: 23
			},
		]
	}
]

const cargonia = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "cargonia";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("antagUpgrade");
			let potion = rootGetters["potions/get"]("Cargonia");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				// Apply upgrades
				action.time *= 1 / (1 + ANTAG_UPGRADE_PERCENT * upgradeCount);

				// Apply potion
				if (potionItemId == "potionCargonia") {
					let originalItem = action.item;
					delete action.item;
					action.name = ITEMS[originalItem].name

					let newDropTable = cloneDeep(potionDropTableCargonia);
					newDropTable.unshift({ chance: 1, item: originalItem })
					action.itemTables = newDropTable;
				}
			}
			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("cargoniaUnlocked");
		}
	}
});

export default cargonia; 