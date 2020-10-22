import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/research"
import { RESEARCH_UPGRADE_PERCENT } from "@/data/upgrades";
import { RESEARCH_BOUNTIES } from "@/data/researchBounties";
import { xpFromLevel } from '@/data/experience'


const research = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	state: {
		rndPoints: 0,
		rndPointsMax: 500,
		researchBountyItems: {},//list of item IDs for the player to fetch
		xpReward: 100, //todo: remove this, bounties all give 2 levels and rerolls take 1
		pointsReward: 50
	},
	getters: {
		rndPoints(state){
			return state.rndPoints;
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
		hasBountyItems(state, getters, rootState, rootGetters) {
			for (let [itemId, requiredCount] of Object.entries(state.researchBountyItems)) {
				let count = rootGetters["inventory/bank"][itemId];
				count = count ? count : 0;
				/* code to count worn items
				for (let [equipmentId, equipment] of Object.entries(rootGetters["inventory/equipment"])) {
					let equipmentItemId = equipment.itemId;
					if (!equipmentItemId || equipmentItemId != itemId) continue;
					count += equipment.count;
				}*/
				if (count < requiredCount) return false;
			}
			return true;
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
		addToPoints(state, points){
			state.rndPoints = Math.max(0, Math.min(state.rndPointsMax, state.rndPoints+points));
		},
		changeBounty(state, newBounty){
			state.researchBountyItems = newBounty.requiredItems;
			state.pointsReward = newBounty.pointsReward;
		}
	},
	actions: {
		destructiveAnalysis({ state, getters, dispatch, commit }) {
			if (!getters.hasBountyItems) return false;
			for (let [itemId, amountToRemove] of Object.entries(state.researchBountyItems)) {
				commit("inventory/changeItemCount", { itemId, count: -amountToRemove }, { root: true });
			}
			commit("addToPoints", state.pointsReward);
			dispatch("changeLevel", 2);
			console.log("tried to loot bounty");
			dispatch("rollNewBounty");
		},
		rollNewBounty({ state, getters, dispatch, commit, rootGetters }){
			let bountyTier = Math.min(5, Math.floor(rootGetters["research/level"]/10 % 10)+1);//get our bounty tier (10s place digit + 1)
			let thisTierOfBounties = Object.values(RESEARCH_BOUNTIES).filter(everyBounty => everyBounty.tier == bountyTier);//get only bounties in our tier
			console.log(bountyTier + " is our tier.");
			thisTierOfBounties = thisTierOfBounties.filter(everyBounty => everyBounty.requiredItems != state.researchBountyItems);//don't get the same bounty twice
			let chosenBounty = thisTierOfBounties[Math.floor(Math.random() * thisTierOfBounties.length)];//pick a bounty from the bounties remaining
			commit("changeBounty", chosenBounty);
			console.log("tried to roll up a new bounty of tier: "+chosenBounty.tier);
		},
		changeLevel({ state, getters, dispatch, commit, rootGetters }, levelAddition){
			let currentLevel = rootGetters["research/level"];
			let xp = xpFromLevel(currentLevel + levelAddition) - xpFromLevel(currentLevel)
			commit("research/addXP", xp, { root: true });
		}
	}
});

export default research;