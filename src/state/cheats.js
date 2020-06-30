import Vue from 'vue'

const cheats = {
	namespaced: true,
	state: {
		showAllActions: false,
		cheatsEnabled: false,
		infiniteChrono: false,
		extraChronoOptions: false
	},
	getters: {
		showAllActions(state) {
			return state.showAllActions;
		},
		cheatsEnabled(state) {
			return state.cheatsEnabled;
		},
		infiniteChrono(state) {
			return state.infiniteChrono;
		},
		extraChronoOptions(state) {
			return state.extraChronoOptions;
		}
	},
	mutations: {
		setShowAllActions(state, val) {
			state.showAllActions = val;
		},
		enableCheats(state) {
			state.cheatsEnabled = true;
		},
		setInfiniteChrono(state, val) {
			state.infiniteChrono = val;
		},
		setExtraChronoOptions(state, val) {
			state.extraChronoOptions = val;
		}
	}
}

export default cheats;