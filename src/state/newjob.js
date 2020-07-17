import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/newjob"
import { NEWJOB_UPGRADE_PERCENT } from "@/data/upgrades";


const newjob = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "newjob";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("newjobUpgrade");
			let potion = rootGetters["potions/get"]("newjob");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				// Apply upgrades
				action.time *= 1 / (1 + NEWJOB_UPGRADE_PERCENT * upgradeCount);

				// Apply potion
				if (potionItemId == "potionNewjob") {
					let originalItem = action.item;
					delete action.item;
					action.itemTables = [
						{
							chance: 1,
							item: originalItem
						},
						{
							chance: 1,
							item: originalItem
						}
					]
				}
			}
			return actions;
		}
	}
});

export default newjob;