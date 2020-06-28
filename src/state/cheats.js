import Vue from 'vue'

const cheats = {
	namespaced: true,
	state: {
		showAllActions: false
	},
	getters: {
		showAllActions(state) {
			return state.showAllActions;
		}
	},
	mutations: {
		setShowAllActions(state, val) {
			state.showAllActions = val;
		}
	}
}

export default cheats;