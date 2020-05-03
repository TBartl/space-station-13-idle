import { levelFromXP } from '@/data/experience'

export default {
	namespaced: true,
	state: {
		xp: 0
	},
	getters: {
		xp(state) {
			return state.xp;
		},
		level(state) {
			return levelFromXP(state.xp);
		}
	},
	mutations: {
		addXP(state, xp) {
			state.xp += xp;
		}
	}
}