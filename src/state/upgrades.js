import Vue from 'vue'
import ITEMS from "@/data/items";

const upgrades = {
	namespaced: true,
	state: {
		upgrades: {
			// key: upgradeId
			// value: upgradeCount
		}
	},
	getters: {
		get(state) {
			return (upgradeId) => {
				let upgradeCount = state.upgrades[upgradeId];
				return upgradeCount ? upgradeCount : 0
			}
		}
	},
	mutations: {
		set(state, upgradeId) {
			if (state.upgrades[upgradeId]) {
				state.upgrades[upgradeId] += 1;
			} else {
				Vue.set(state.upgrades, upgradeId, 1);
			}
		}
	}
}

export default upgrades;