import Vue from 'vue'

const cheats = {
	namespaced: true,
	state: {
		showAllActions: false,
		cheatsEnabled: false
	},
	getters: {
		showAllActions(state) {
			return state.showAllActions;
		},
		cheatsEnabled(state) {
			return state.cheatsEnabled;
		}
	},
	mutations: {
		setShowAllActions(state, val) {
			state.showAllActions = val;
		},
		enableCheats(state) {
			state.cheatsEnabled = true;
		}
	}
}

export default cheats;