import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import ENEMIES from "@/data/enemies";
import { calcRobustness } from "@/utils/combatUtils";
import ModalValidhuntingComplete from '@/components/Modals/ModalValidhuntingComplete';
import ITEMS from "@/data/items";

const validhunting = merge(cloneDeep(jobBase), {
	state: {
		enemyId: 'mouse',
		count: 10,
		xpReward: 80,
		rerolls: 0
	},
	getters: {
		targetEnemyId(state) {
			return state.enemyId;
		},
		targetCount(state) {
			return state.count;
		},
		jobId() {
			return "validhunting";
		},
		getRerolls(state){
			return state.rerolls;
		},
		xpReward(state, getters, rootState, rootGetters) {
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
			return (state.xpReward * xpBonus);
		},
		maxRerolls(state, getters, rootState, rootGetters){
			let upgradeCount = 0;
			if(rootGetters["upgrades/get"]("chronoCombatRoll")) upgradeCount++;
			if(rootGetters["upgrades/get"]("cargoCombatRoll")) upgradeCount++;
			return upgradeCount;
		}
	},
	mutations: {
		lowerCount(state) {
			state.count = Math.max(state.count - 1, 0);
		},
		setNewCount(state, count) {
			state.count = count;
		},
		setNewEnemy(state, enemyId) {
			state.enemyId = enemyId;
		},
		setNewXpReward(state, xpReward) {
			state.xpReward = xpReward;
		},
		useReroll(state) {
			state.rerolls = Math.max(0, state.rerolls - 1);
		}
	},
	actions: {
		mobKilled({ state, commit }, enemyId) {
			if (state.enemyId == enemyId && state.count > 0) {
				commit("lowerCount");
				if (state.count == 0)
					this._vm.$modal.show(ModalValidhuntingComplete, {}, { height: "auto", width: "320px" });
			}
		},
		completeTask({ state, commit, getters, rootGetters, dispatch }, cheat) {
			if (!cheat && state.count > 0) return;
			commit("addXP", getters["xpReward"]);
			dispatch("refreshRerolls", 2); // HARDCODED, if more sources of rerolls are added bump this up
			dispatch("rollNewBounty");
		},
		rollNewBounty({ state, commit, getters, rootGetters }) {
			// Get a new task
			let minCount = 10;
			let maxAddedCount = minCount + getters.level * 2;
			let count = minCount + Math.round(Math.random() * maxAddedCount);
			commit("setNewCount", count);

			let levelCenter = getters.level * 1.9;
			let range = 10;
			let pickedEnemy = null;
			while (!pickedEnemy) {
				let filteredEnemies = Object.entries(ENEMIES).filter(pair => {
					if (pair[1].validhuntable === false) return false;
					if (pair[0] == state.enemyId) return false; // Can't get the same enemy twice
					let robustness = calcRobustness(pair[1].stats, "enemy");
					return robustness > levelCenter - range && robustness < levelCenter + range;
				});
				if (filteredEnemies.length < 5) { // we should have a few options
					range += 5;
				} else {
					pickedEnemy = filteredEnemies[Math.floor(Math.random() * filteredEnemies.length)];
				}
			}
			commit("setNewEnemy", pickedEnemy[0]);

			let pickedEnemyRobustness = calcRobustness(pickedEnemy[1].stats, "enemy");
			let xpReward = Math.round(Math.max(pickedEnemyRobustness, 3) * count * .9);
			commit("setNewXpReward", xpReward);
		},
		refreshRerolls({state, getters}, rerolls) {
			state.rerolls += Math.min(getters["maxRerolls"], rerolls);
		}
	}
});

export default validhunting;
