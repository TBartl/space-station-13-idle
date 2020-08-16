import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/research"
import { RESEARCH_UPGRADE_PERCENT } from "@/data/upgrades";


const research = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	state: {
		rndPoint: 0,
		rndPointsMax: 500,
		researchBountyItems: {'money': 1},//list of item IDs to fetch
		xpReward: 80,
		pointsReward: 50
	},
	getters: {
		rndPoint(state){
			return state.rndPoint;
		},
		rndPointsMax(state){//later we can make this return a value modified by a cargo upgrade
			return state.rndPointsMax;
		},
		researchBountyItems(state){
			return state.researchBountyItems;
		},
		xpReward(state) {
			return state.xpReward;
		},
		pointsReward(state) {
			return state.pointsReward;
		},
		jobId() {
			return "research";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("researchUpgrade");
			let potion = rootGetters["potions/get"]("research");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				// Apply upgrades
				action.time *= 1 / (1 + RESEARCH_UPGRADE_PERCENT * upgradeCount);

				// Apply potion
				if (potionItemId == "potionResearch") {
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
	},
	mutations: {
		gainPoints(state, points){
			state.rndPoint = Math.min(state.rndPointsMax, state.rndPoint+points);
		}
	},
	actions: {
		destructiveAnalysis({ state, dispatch, commit }){
			commit("gainPoints", state.pointsReward);
			console.log("tried to loot bounty");
		},
		rollNewBounty(){
			console.log("tried to roll up a new bounty");
		}
	}
});

export default research;