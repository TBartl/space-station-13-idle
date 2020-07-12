import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/cooking"
import { COOKING_UPGRADE_PERCENT } from "@/data/upgrades";
import { COOKING_POTION_PERCENT } from '@/data/items/resourceChemistry';

const cooking = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	state: {
		upgradeEnabled: true
	},
	getters: {
		jobId() {
			return "cooking";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("fryCooking");
			if (!state.upgradeEnabled) upgradeCount = 0;

			let potion = rootGetters["potions/get"]("cooking");
			let potionItemId = potion ? potion.itemId : null;

			let totalPercent = upgradeCount * COOKING_UPGRADE_PERCENT;
			if (potionItemId == "potionCooking") {
				totalPercent += COOKING_POTION_PERCENT;
			}

			if (totalPercent > 0) {
				let actionEntries = Object.values(actions);
				actionEntries.forEach((action) => {

					let originalItem = action.item;
					delete action.item;

					action.itemTable = [
						{
							weight: 1 - totalPercent,
							id: originalItem
						}
					]
					delete action.item;

					action.itemTable.push({
						weight: totalPercent,
						id: "q_" + originalItem
					})
				})
			}

			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("cookingUnlocked");
		},
		upgradeEnabled(state) {
			return state.upgradeEnabled
		}
	},
	mutations: {
		setUpgradeEnabled(state, val) {
			state.upgradeEnabled = val;
		}
	}
});

export default cooking;