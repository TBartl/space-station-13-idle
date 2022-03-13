import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/cult"
import { ANTAG_UPGRADE_PERCENT } from "@/data/upgrades";


const cult = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "cult";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("antagUpgrade");
			let potion = rootGetters["potions/get"]("cult");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				let speedIncrease = 1 + ANTAG_UPGRADE_PERCENT * upgradeCount;
				if (potionItemId == "potionCult" && action.healthCost) {
					speedIncrease *= 2;
				} else {
					action.preservePotion = true;
				}
				if(potionItemId == "toolCult"){
					if(!action.healthCost){
						action.xp *= 2;
						action.healthCost = action.requiredLevel*1.5;
					} else {
						action.preservePotion = true;
					}
				}
				action.time *= 1 / speedIncrease;;

			}
			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("cultUnlocked");
		}
	}
});

export default cult; 