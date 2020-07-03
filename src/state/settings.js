import Vue from 'vue'

const settings = {
	namespaced: true,
	state: {
		showVirtualLevels: false,
		inventoryFullStop: true
	},
	getters: {
		showVirtualLevels(state) {
			return state.showVirtualLevels;
		},
		inventoryFullStop(state) {
			return state.inventoryFullStop;
		}
	},
	mutations: {
		setShowVirtualLevels(state, val) {
			state.showVirtualLevels = val;
		},
		setInventoryFullStop(state, val) {
			state.inventoryFullStop = val;
		}
	}
}

export default settings;