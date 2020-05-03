export default {
	namespaced: true,
	state: {
		xp: 0
	},
	getters: {
		xp(state) {
			return state.xp;
		}
	},
	mutations: {
		addXP(state, xp) {
			state.xp += xp;
		}
	}
}