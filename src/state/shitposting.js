import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/shitposting"

const shitposting = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "shitposting";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let potion = rootGetters["potions/get"]("shitposting");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				if (potionItemId == "potionShitposting") {
					action.xp = action.xpActivated;
				} else if (potionItemId == "toolShitposting") {
					action.xp = action.xpActivated*1.5;
				}
			}

			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("shitpostingUnlocked");
		}
	}
});

export default shitposting;