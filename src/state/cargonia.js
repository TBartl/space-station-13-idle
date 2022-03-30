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
				id: "supplyCrate",
				weight: 76
			},
			{
				id: "knifeCrate",
				weight: 23
			},
			{
				id: "hatCrate",
				weight: 1
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
			let potion = rootGetters["potions/get"]("cargonia");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				// Apply upgrades
				action.time *= 1 / (1 + ANTAG_UPGRADE_PERCENT * upgradeCount);

				
				// Apply potion
				if (potionItemId == "potionCargonia") {
					let originalItems = action.items;
					if (!originalItems) {
						action.preservePotion = true;
						continue;
					}
					if (originalItems.id != "money") {
						action.preservePotion = true;
						continue;
					};
					delete action.items;

					action.itemTables = [
						{
							chance: 1,
							items: originalItems
						},
						{
							chance: .5,
							items: {
								id: "power",
								count: originalItems.count
							}
						}
					]
				} else if (potionItemId == "toolCargonia") {
					let originalItems = action.items;
					if (!originalItems) {
						action.preservePotion = true;
						continue;
					}
					if (originalItems.id != "money") {
						action.preservePotion = true;
						continue;
					};
					delete action.items;

					action.itemTables = [
						{
							chance: 1,
							items: originalItems
						},
						{
							chance: 0.25,
							itemTable: [{
								id: "supplyCrate",
								count: 1,
								weight: 100
							},
							{
								id: "knifeCrate",
								count: 1,
								weight: 100
							},
							{
								id: "hatCrate",
								count: 1,
								weight: 80
							},
							{
								id: "hatCrate2",
								count: 1,
								weight: 80
							},
							{
								id: "revCrate",
								count: 1,
								weight: 45
							},
							{
								id: "secCrate",
								count: 1,
								weight: 30
							},
							{
								id: "lavaCrate",
								count: 1,
								weight: 15
							},
							{
								id: "contrabandCrate",
								count: 1,
								weight: 1
							}]
						}
					]
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