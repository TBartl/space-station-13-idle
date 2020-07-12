import Vue from 'vue'

const settings = {
	namespaced: true,
	state: {
		showVirtualLevels: false,
		inventoryFullStop: true,
		pocketsEmptyStop: false,
		autoEatEnabled: true,
		chronoPanelEnabled: false,
		darkMode: false
	},
	getters: {
		showVirtualLevels(state) {
			return state.showVirtualLevels;
		},
		inventoryFullStop(state) {
			return state.inventoryFullStop;
		},
		pocketsEmptyStop(state) {
			return state.pocketsEmptyStop;
		},
		autoEatEnabled(state) {
			return state.autoEatEnabled;
		},
		chronoPanelEnabled(state) {
			return state.chronoPanelEnabled;
		},
		darkMode(state) {
			return state.darkMode;
		},
		darkModeClass(state) {
			return state.darkMode ? 'dark-mode' : ''
		}
	},
	mutations: {
		setShowVirtualLevels(state, val) {
			state.showVirtualLevels = val;
		},
		setInventoryFullStop(state, val) {
			state.inventoryFullStop = val;
		},
		setPocketsEmptyStop(state, val) {
			state.pocketsEmptyStop = val;
		},
		setAutoEatEnabled(state, val) {
			state.autoEatEnabled = val;
		},
		setChronoPanelEnabled(state, val) {
			state.chronoPanelEnabled = val;
		},
		setDarkMode(state, val) {
			state.darkMode = val;
		}
	}
}

export default settings;