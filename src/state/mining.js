import Vue from "vue";
import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';
import ITEMS from "@/data/items";

import { ACTIONS } from "@/data/mining"
import { MINING_UPGRADE_PERCENT } from "@/data/upgrades";

const potionDropTable = [
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
			{
				id: "companionMining",
				count: 1,
				weight: 15
			},
			{
				id: "exoticParts",
				count: 1,
				weight: 7
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
				action.time *= 1 / (1 + MINING_UPGRADE_PERCENT * upgradeCount);

				if (potionItemId == "potionMining") {
					let originalItem = action.item;
					let newDropTable = cloneDeep(potionDropTable);
					
					if(originalItem){
						delete action.item;
						action.name = ITEMS[originalItem].name;
						newDropTable.unshift({ chance: 1, item: originalItem });
					} else {
						newDropTable.unshift(action.itemTables[0]);
					}
					
					action.itemTables = newDropTable;
					
				} else if (potionItemId == "toolMining") {
					if(action.xp >= 0) { 
						action.xp *= 2;
					} else {
						action.xp *= 0.5;
					}
				}
			}
			return actions;
		}
	}
});

export default mining;