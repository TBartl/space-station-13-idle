import Vue from 'vue'

const settings = {
	namespaced: true,
	state: {
		showVirtualLevels: false,
		inventoryFullStop: true,
		autoEatEnabled: true,
		chronoPanelEnabled: false
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
		},
		chronoPanelEnabled(state) {
			return state.chronoPanelEnabled;
		}
	},
	mutations: {
		setShowVirtualLevels(state, val) {
			state.showVirtualLevels = val;
		},
		setInventoryFullStop(state, val) {
			state.inventoryFullStop = val;
		},
		setChronoPanelEnabled(state, val) {
			state.chronoPanelEnabled = val;
		}
	}
}

export default settings;