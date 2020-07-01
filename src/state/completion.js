import Vue from 'vue'


import { ALL_JOBS } from "@/data/jobs";

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
		jobTime: BASE_JOB_TIME
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
		}
	}
}

export default completion;