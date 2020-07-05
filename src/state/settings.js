import Vue from 'vue'

const settings = {
	namespaced: true,
	state: {
		showVirtualLevels: false,
		inventoryFullStop: true,
		autoEatEnabled: true
	},
	getters: {
		showVirtualLevels(state) {
			return state.showVirtualLevels;
		},
		inventoryFullStop(state) {
			return state.inventoryFullStop;
		},
		autoEatEnabled(state) {
			return state.autoEatEnabled;
		}
	},
	mutations: {
		setShowVirtualLevels(state, val) {
			state.showVirtualLevels = val;
		},
		setInventoryFullStop(state, val) {
			state.inventoryFullStop = val;
		},
		setAutoEatEnabled(state, val) {
			state.autoEatEnabled = val;
		}
	}
}

export default settings;