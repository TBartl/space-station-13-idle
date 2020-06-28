import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import ENEMIES from "@/data/enemies";
import { calcRobustness } from "@/utils/combatUtils";

const validhunting = merge(cloneDeep(jobBase), {
	state: {
		enemyId: 'mouse',
		count: 10,
		xpReward: 250
	},
	getters: {
		targetEnemyId(state) {
			return state.enemyId;
		},
		targetCount(state) {
			return state.count;
		},
		xpReward(state) {
			return state.xpReward;
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
		}
	},
	actions: {
		mobKilled({ state, commit }, enemyId) {
			if (state.enemyId == enemyId) {
				commit("lowerCount");
			}
		},
		completeTask({ state, commit, getters }, cheat) {
			if (!cheat && state.count > 0) return;
			commit("addXP", state.xpReward);
			// Get a new task
			let minCount = 10;
			let maxAddedCount = minCount + getters.level * 4;
			let count = minCount + Math.round(Math.random() * maxAddedCount);
			commit("setNewCount", count);

			let levelCenter = getters.level * 2;
			let range = 10;
			let pickedEnemy = null;
			while (!pickedEnemy) {
				let filteredEnemies = Object.entries(ENEMIES).filter(pair => {
					if (pair[1].validhuntable == false) return false;
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
			let xpReward = Math.round(Math.max(pickedEnemyRobustness, 3) * count * .6);
			commit("setNewXpReward", xpReward);
		}
	}
});

export default validhunting;