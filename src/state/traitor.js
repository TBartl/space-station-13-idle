import Vue from "vue";
import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';
import ITEMS from "@/data/items";

import { ACTIONS } from "@/data/traitor"
import { ANTAG_UPGRADE_PERCENT } from "@/data/upgrades";


const traitor = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "traitor";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("antagUpgrade");
			let potion = rootGetters["potions/get"]("traitor");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				// Apply upgrades
				action.time *= 1 / (1 + ANTAG_UPGRADE_PERCENT * upgradeCount);

				
				// Apply potion
				// if (potionItemId == "potionTraitor") {
				// 	let originalItem = action.item;
				// 	delete action.item;


				// 	let newDropTable = cloneDeep(potionDropTableCargonia);
				// 	newDropTable.unshift({ chance: 1, item: originalItem })
				// 	action.itemTables = newDropTable;
				// }
			}
			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("traitorUnlocked");
		}
	}
});

export default traitor; 