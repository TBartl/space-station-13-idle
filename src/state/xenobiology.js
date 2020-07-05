import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';
import ITEMS from "@/data/items";

import { ACTIONS } from "@/data/xenobiology"

const xenobio = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "xenobiology";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("xenobiologyPens");
			let potion = rootGetters["potions/get"]("xenobiology");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				let tier = action.tier;
				let originalItem = action.item;
				delete action.item;
				action.name = ITEMS[originalItem].name

				let newBaseItems = {
					id: originalItem,
					count: 2 ** (Math.max(0, upgradeCount - tier + 1))
				}

				if (potionItemId == "potionXenobiology" && tier > 1) {
					let itemTable = Object.values(ACTIONS)
						.filter(action => action.tier <= tier - 1)
						.map(action => {
							return {
								id: action.item,
								count: 1,
								weight: 1
							}
						});

					action.itemTables = [
						{
							chance: 1,
							items: newBaseItems
						},
						{
							chance: 1,
							itemTable
						}
					]

				} else {
					action.items = newBaseItems;
				}

				if (tier == 1) {
					action.preservePotion = true;
				}
			}

			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("xenobiologyUnlocked");
		}
	}
});

export default xenobio;