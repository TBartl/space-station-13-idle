import { MAX_LEVEL, levelFromXP, xpFromLevel } from '@/data/experience'

export default {
	namespaced: true,
	state: {
		xp: 0
	},
	getters: {
		xp(state) {
			return state.xp;
		},
		virtualXp(state, getters, rootState, rootGetters) {
			let xp = getters["xp"];
			if (rootGetters["settings/showVirtualLevels"]) return xp;
			return Math.min(xp, xpFromLevel(MAX_LEVEL))
		},
		level(state) {
			return levelFromXP(state.xp);
		},
		visualLevel(state, getters, rootState, rootGetters) {
			let level = getters["level"];
			if (rootGetters["settings/showVirtualLevels"]) return level;
			return Math.min(level, MAX_LEVEL)
		},
		locked() {
			return false;
		}
	},
	mutations: {
		addXP(state, xp) {
			state.xp += xp;
		}
	}
}