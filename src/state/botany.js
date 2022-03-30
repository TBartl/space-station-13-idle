import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/botany"
import { BOTANY_POTION_PERCENT } from '@/data/items/resourceChemistry';

const toolDropTable = 
	{
		chance: 0.75,
		itemTable: [
			{
				id: "foodMeatA",
				count: [5, 10],
				weight: 1
			},
			{
				id: "foodMeatH",
				count: [5, 10],
				weight: 1
			},
			{
				id: "foodMeatZ",
				count: [5, 10],
				weight: 1
			},
			{
				id: "pillHappy",
				count: [10, 20],
				weight: 1
			},
			{
				id: "pillSpacelube",
				count: [10, 20],
				weight: 1
			},
			{
				id: "pillRegen",
				count: [10, 20],
				weight: 1
			},
			{
				id: "water",
				count: [10, 20],
				weight: 1
			},
			{
				id: "oxygen",
				count: [10, 20],
				weight: 1
			},
			{
				id: "sacid",
				count: [10, 20],
				weight: 1
			},
			{
				id: "mercury",
				count: [10, 20],
				weight: 1
			},
		]
	}

function mergeAction(action, into) {
	into.xp += action.xp;
	into.requiredItems.plantSeed += action.requiredItems.plantSeed;
	for (let itemTable of action.itemTables) {
		into.itemTables.push(itemTable);
	}
	// into.itemTables.push(action.itemTables[0]);
}

function mergeActionMutated(action, into) {
	let clonedTable = cloneDeep(action.itemTables[0]);
	clonedTable.chance = BOTANY_POTION_PERCENT;
	into.itemTables.push(clonedTable);
}

const botany = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	state: {
		upgradeLeftEnabled: true,
		upgradeRightEnabled: true
	},
	getters: {
		jobId() {
			return "botany";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("botanyTrays");
			let potion = rootGetters["potions/get"]("botany");
			let potionItemId = potion ? potion.itemId : null;

			if (upgradeCount || potionItemId) {

				let actionEntries = Object.values(actions);
				actionEntries.forEach((action) => {
					action.itemTables = [
						{
							chance: 1,
							items: action.items
						}
					]
					delete action.items;
				})


				if (potionItemId == "potionBotany") {
					actionEntries.forEach((action, i) => {
						if (i + 6 < actionEntries.length) {
							mergeActionMutated(actionEntries[i + 6], action);
						}
						else {
							action.preservePotion = true;
						}
					});
				}

				if (upgradeCount) {
					let originalEntries = cloneDeep(actionEntries);
					actionEntries.forEach((action, i) => {
						if (upgradeCount >= 1 && i > 0 && state.upgradeLeftEnabled) {
							mergeAction(originalEntries[i - 1], action);
						}
						if (upgradeCount >= 2 && i < actionEntries.length - 1 && state.upgradeRightEnabled) {
							mergeAction(originalEntries[i + 1], action);
						}
					});
				}

				if(potionItemId == "toolBotany") {
					for (let action of Object.values(actions)) {
						let newDropTable = cloneDeep(toolDropTable);
						action.itemTables.push(newDropTable);
					}
				}
			}
			

			return actions;
		},
		upgradeLeftEnabled(state) {
			return state.upgradeLeftEnabled
		},
		upgradeRightEnabled(state) {
			return state.upgradeRightEnabled
		}
	},
	mutations: {
		setUpgradeLeftEnabled(state, val) {
			state.upgradeLeftEnabled = val;
		},
		setUpgradeRightEnabled(state, val) {
			state.upgradeRightEnabled = val;
		}
	}
});

export default botany;