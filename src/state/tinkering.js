import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/tinkering"


const ALL_JUNKS = ["junk", "spacejunk", "armorjunk", "burnjunk"];

const tinkering = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "tinkering";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			
			let potion = rootGetters["potions/get"]("mining");
			let potionItemId = potion ? potion.itemId : null;

			
			if (potionItemId == "potionTinkering") {
				// TODO:
			}

			return actions;
		}
	}
});

export default tinkering;