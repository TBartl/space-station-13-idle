import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/botany"

function mergeAction(action, into) {
	into.xp += action.xp;
	into.requiredItems.plantSeed += action.requiredItems.plantSeed;
	into.itemTables.push(action.itemTables[0]);
}

const botany = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "botany";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("botanyTrays");

			if (upgradeCount) {
				console.log("UPGRADE");

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

				actionEntries.forEach((action, i) => {
					if (upgradeCount >= 1 && i > 0) {
						mergeAction(actionEntries[i - 1], action);
					}
					if (upgradeCount >= 2 && i < actionEntries.length - 1) {
						mergeAction(actionEntries[i + 1], action);
					}
				});

			}

			return actions;
		}
	}
});

export default botany;