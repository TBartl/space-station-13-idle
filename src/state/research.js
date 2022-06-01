import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';
import ITEMS from "@/data/items";

import { ACTIONS } from "@/data/research"
import { RESEARCH_UPGRADE_PERCENT } from "@/data/upgrades";
import { RESEARCH_BOUNTIES } from "@/data/researchBounties";
import { xpFromLevel } from '@/data/experience'
import { EventBus } from "@/utils/eventBus.js";


const research = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	state: {
		rndPoints: 0,
		rndPointsMax: 500,
		researchBountyItems: {},//list of item IDs for the player to fetch
		pointsReward: 0
	},
	getters: {
		rndPoints(state){
			return state.rndPoints;
		},
		rndPointsMax(state, getters, rootState, rootGetters){
			let newMax = state.rndPointsMax;
			if(rootGetters["upgrades/get"]("researchUpgrade")){
				newMax += 100 * rootGetters["upgrades/get"]("researchUpgrade")
			}
			return newMax;
		},
		researchBountyItems(state){
			return state.researchBountyItems;
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
				//also count worn items
				for (let [equipmentId, equipment] of Object.entries(rootGetters["inventory/equipment"])) {
					let equipmentItemId = equipment.itemId;
					if (!equipmentItemId || equipmentItemId != itemId) continue;
					count += equipment.count - 1; // -1 to prevent negative item bugs
				}
				if (count < requiredCount) return false;
			}
			return true;
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let potion = rootGetters["potions/get"]("research");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				// Apply potion
				if (potionItemId == "potionResearch") {
					let originalItem = action.item;
					if(originalItem.includes("tool")){
						delete action.item;
						action.name = ITEMS[originalItem].name
						action.itemTable = [
							{
								id: originalItem,
								count: 1,
								weight: 75
							},
							{
								id: originalItem,
								count: 2,
								weight: 25
							}
						]
					} else {
						action.preservePotion = true;
					}
				}
			}
			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("researchUnlocked");
		},
		levelsReward(state, getters, rootState, rootGetters){
			let xpBonus = 1;
			for (let [equipmentId, equipment] of Object.entries(rootGetters["inventory/equipment"])) {
				let itemId = equipment.itemId;
				if (!itemId || rootGetters["inventory/checkRestricted"](itemId)) continue;
				let item = ITEMS[itemId];
				if (item.xpBonuses) {
					let bonus = item.xpBonuses[getters["jobId"]];
					if (bonus) xpBonus += (bonus/100);
				}
			}
			return (2 * xpBonus);
		}
	},
	mutations: {
		changeBounty(state, newBounty){
			state.researchBountyItems = newBounty.requiredItems;
			state.pointsReward = newBounty.pointsReward;
		}
	},
	actions: {
		addToPoints({ state, getters, dispatch, commit, rootGetters }, points){
			if(points + state.rndPoints > getters["rndPointsMax"]){
				EventBus.$emit("toast", { text: `Research Points Bank overflow! ${(points + state.rndPoints) - getters["rndPointsMax"]} points were lost.`, duration: 7500 });
			}
			state.rndPoints = Math.max(0, Math.min(getters["rndPointsMax"], state.rndPoints+points));
		},
		destructiveAnalysis({ state, getters, dispatch, commit }) {
			let hasBounty = getters.hasBountyItems;
			if (hasBounty == false){
				EventBus.$emit("toast", { text: `You don't have the required items!`, duration: 3000 });
				return false;
			}
			for (let [itemId, amountToRemove] of Object.entries(state.researchBountyItems)) {
				commit("inventory/changeItemCount", { itemId, count: -amountToRemove }, { root: true });
			}
			dispatch("addToPoints", state.pointsReward);
			dispatch("changeLevel", getters["levelsReward"]);
			EventBus.$emit("toast", { text: `Analysis successful!`, duration: 3000 });
			dispatch("rollNewBounty");
		},
		cheatPoints({ state, getters, dispatch, commit }){ // used for a cheat button for debugging
			dispatch("addToPoints", 100);
		},
		startupRoll({ state, dispatch }){
			if(state.pointsReward != 0){
				return;

			} 
			dispatch("rollNewBounty", false);
		},
		rollNewBounty({ state, getters, dispatch, commit, rootGetters }, manual){
			let currentLevel = rootGetters["research/level"];
			if(manual && currentLevel <= 1){
				EventBus.$emit("toast", { text: `Your R&D level is too low to reroll!`, duration: 3000 });
				return;
			}
			if(manual) dispatch("changeLevel", -1);
			if(manual) EventBus.$emit("toast", { text: `Rerolled research bounty!`, duration: 3000 });
			let bountyTier = Math.min(5, Math.floor(currentLevel/10 % 10)+1);//get our bounty tier (10s place digit + 1)
			let thisTierOfBounties = Object.values(RESEARCH_BOUNTIES).filter(everyBounty => everyBounty.tier == bountyTier);//get only bounties in our tier
			thisTierOfBounties = thisTierOfBounties.filter(everyBounty => everyBounty.requiredItems != state.researchBountyItems);//don't get the same bounty twice
			let chosenBounty = thisTierOfBounties[Math.floor(Math.random() * thisTierOfBounties.length)];//pick a bounty from the bounties remaining
			commit("changeBounty", chosenBounty);
		},
		changeLevel({ state, getters, dispatch, commit, rootGetters }, levelAddition){
			let currentLevel = rootGetters["research/level"];
			let xp = xpFromLevel(currentLevel + levelAddition) - xpFromLevel(currentLevel)
			commit("research/addXP", xp, { root: true });
		}
	}
});

export default research;