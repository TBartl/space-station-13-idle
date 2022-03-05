import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/graytiding"
import { GRAYTIDING_UPGRADE_PERCENT } from "@/data/upgrades";
import { GRAYTIDING_POTION_PERCENT } from '@/data/items/resourceChemistry';
import { GRAYTIDING_TOOL_PERCENT } from '@/data/items/resourceResearch';

const graytiding = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "graytiding";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("graytidingHacking");
			let potion = rootGetters["potions/get"]("graytiding");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				action.failure.chance -= GRAYTIDING_UPGRADE_PERCENT * upgradeCount;
				if (potionItemId == "potionGraytiding") {
					action.failure.chance -= GRAYTIDING_POTION_PERCENT;
				}
				if(potionItemId == "toolGraytiding") {
					action.preservePotionOnFail = true;
					action.failure.chance -= GRAYTIDING_TOOL_PERCENT;
				}
			}
			return actions;
		}
	}
});

export default graytiding;