import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/tinkering"


const ALL_JUNKS = ["junk", "spaceJunk", "armorJunk", "burnJunk"];

const tinkering = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "tinkering";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let potion = rootGetters["potions/get"]("tinkering");
			let potionItemId = potion ? potion.itemId : null;


			if (potionItemId == "potionTinkering") {
				for (let action of Object.values(actions)) {
					// TODO:
					let originalItem = action.item;
					delete action.item;
					action.itemTables = [
						{
							chance: 1,
							item: originalItem
						},
						{
							chance: .25,
							itemTable: []
						}
					]
					for (let junkId of ALL_JUNKS) {
						if (!action.requiredItems) continue;
						if (junkId == Object.keys(action.requiredItems)[0]) continue;
						action.itemTables[1].itemTable.push({
							id: junkId,
							weight: 1
						});
					}
				}

			}
			return actions;
		}
	}
});

export default tinkering;