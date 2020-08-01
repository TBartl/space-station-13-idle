import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/tinkering"
import { TINKERING_POTION_PERCENT } from '@/data/items/resourceChemistry';
import { TINKERING_UPGRADE_INCREMENT, TINKERING_UPGRADE_CAP } from "@/data/upgrades";

const ALL_JUNKS = ["junk", "spaceJunk", "armorJunk", "burnJunk"];

const tinkering = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	state: {
		streak: 0,
		streakActionId: null
	},
	getters: {
		jobId() {
			return "tinkering";
		},
		streak(state) {
			return state.streak;
		},
		streakCap(state, getters, rootState, rootGetters) {
			let upgradeCount = rootGetters["upgrades/get"]("tinkeringSpirits");
			return upgradeCount * TINKERING_UPGRADE_CAP;
		},
		streakBonus(state, getters) {
			return Math.min(state.streak * TINKERING_UPGRADE_INCREMENT, getters["streakCap"]);
		},

		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let potion = rootGetters["potions/get"]("tinkering");
			let potionItemId = potion ? potion.itemId : null;



			for (let actionEntry of Object.entries(actions)) {
				let action = actionEntry[1];

				if (actionEntry[0] == state.streakActionId)
					action.time *= 1 / (1 + getters.streakBonus);


				if (potionItemId == "potionTinkering") {
					// TODO:
					let originalItem = action.item;
					delete action.item;
					action.itemTables = [
						{
							chance: 1,
							item: originalItem
						},
						{
							chance: TINKERING_POTION_PERCENT,
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
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("tinkeringUnlocked");
		}
	},
	mutations: {
		addXP(state, xp) {
			if (state.streakActionId != state.currentActionId) {
				state.streakActionId = state.currentActionId;
				state.streak = 0;
			}
			state.streak += 1;

			state.xp += xp;
		}
	},
});

export default tinkering;