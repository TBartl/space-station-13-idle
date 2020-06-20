import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/botany"
import { BOTANY_POTION_PERCENT } from '@/data/items/resourceChemistry';

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
					});
				}

				if (upgradeCount) {
					let originalEntries = cloneDeep(actionEntries);
					actionEntries.forEach((action, i) => {
						if (upgradeCount >= 1 && i > 0) {
							mergeAction(originalEntries[i - 1], action);
						}
						if (upgradeCount >= 2 && i < actionEntries.length - 1) {
							mergeAction(originalEntries[i + 1], action);
						}
					});
				}
			}

			return actions;
		}
	}
});

export default botany;