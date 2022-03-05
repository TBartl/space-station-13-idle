import Vue from 'vue'



import ITEMS from "@/data/items";
import ENEMIES from "@/data/enemies";
import { ALL_JOBS } from "@/data/jobs";
import { MAX_LEVEL } from "@/data/experience";

const BASE_JOB_TIME = {};
ALL_JOBS.forEach(job => {
	BASE_JOB_TIME[job.id] = 0;
});

const completion = {
	namespaced: true,
	state: {
		items: {
			// itemId: count
		},
		enemies: {
			// enemyId: count
		},
		jobTime: BASE_JOB_TIME,
		simulationResetCount: 0
	},
	getters: {
		getItem(state) {
			return (itemId) => {
				return state.items[itemId]
			}
		},
		getEnemy(state) {
			return (enemyId) => {
				return state.enemies[enemyId]
			}
		},
		jobTime(state) {
			return (jobId) => {
				return state.jobTime[jobId];
			}
		},
		itemPercent(state, getters) {
            let itemsCounted = Object.values(ITEMS).filter(itemId => !itemId.nocomplete).length;
			let itemsComplete = Object.keys(ITEMS).filter(itemId => getters.getItem(itemId)).length;
            return Math.floor(100 * itemsComplete / itemsCounted);
        },
		enemyPercent(state, getters) {
			let enemiesComplete = Object.keys(ENEMIES).filter(enemyId => getters.getEnemy(enemyId))
				.length;
			return Math.floor(100 * enemiesComplete / Object.keys(ENEMIES).length);
		},
		jobPercent(state, getters, rootState, rootGetters) {
			let sum = 0;
			ALL_JOBS.forEach(job => (sum += Math.min(rootGetters[job.id + "/level"], MAX_LEVEL)));
			return Math.floor(100 * sum / (ALL_JOBS.length * MAX_LEVEL));
		},
		simulationResetCount(state) {
			return state.simulationResetCount;
		}
	},
	mutations: {
		trackItem(state, { itemId, count }) {
			if (count <= 0) return;
			if (!state.items[itemId]) {
				Vue.set(state.items, itemId, count);
			} else {
				state.items[itemId] += count;
			}
		},
		trackEnemy(state, enemyId) {
			if (!state.enemies[enemyId]) {
				Vue.set(state.enemies, enemyId, 1);
			} else {
				state.enemies[enemyId] += 1;
			}
		},
		trackJobTime(state, { jobId, time }) {
			state.jobTime[jobId] += time;
		},
		trackReset(state) {
			state.simulationResetCount += 1;
		}
	}
}

export default completion;