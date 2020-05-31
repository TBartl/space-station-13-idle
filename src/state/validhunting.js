import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';

const validhunting = merge(cloneDeep(jobBase), {
	state: {
		enemyId: 'mouse',
		count: 3,
		xpReward: 500
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
		getNewTask(state){
			state.count = 5;
		}
	},
	actions: {
		mobKilled({ state, commit }, enemyId) {
			if (state.enemyId == enemyId) {
				commit("lowerCount");
			}
		},
		completeTask({ state, commit }) {
			if (state.count > 0) return;
			commit("addXP", state.xpReward);
			commit("getNewTask");

		}
	}
});

export default validhunting;