import Vue from 'vue'

const settings = {
	namespaced: true,
	state: {
		showVirtualLevels: false,
	},
	getters: {
		showVirtualLevels(state) {
			return state.showVirtualLevels;
		}
	},
	mutations: {
		setShowVirtualLevels(state, val) {
			state.showVirtualLevels = val;
		}
	}
}

export default settings;