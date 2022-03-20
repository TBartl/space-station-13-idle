import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/ling"
import { ANTAG_UPGRADE_PERCENT } from "@/data/upgrades";


const ling = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "ling";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("antagUpgrade");
			let potion = rootGetters["potions/get"]("ling");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				// Apply upgrades
				action.time *= 1 / (1 + ANTAG_UPGRADE_PERCENT * upgradeCount);

				if (potionItemId == "potionLing") {
					Object.keys(action.requiredItems).forEach(key => {
						if (key.toLowerCase().includes('meat')) {
							action.requiredItems[key] -= 1;
							if (action.requiredItems[key] == 0) delete action.requiredItems[key];
						}
					});
					if (Object.values(action.requiredItems).length == 0) {
						delete action.requiredItems;
					}
				} else if(potionItemId == "toolLing"){
					if(action.itemTables){
						if(action.itemTables[0].itemTable[2]){
							let newOutput = action.itemTables[0].itemTable[2].id;
							delete action.itemTables;
							action.item = newOutput;
						} else {
							action.preservePotion;
						}
					} else{
						action.preservePotion;
					}
				}
			}
			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("lingUnlocked");
		}
	}
});

export default ling; 