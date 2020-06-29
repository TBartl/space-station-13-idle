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
		getNoEquipment(state) {
			return (upgradeId) => {
				let upgradeCount = state.upgrades[upgradeId];
				return upgradeCount ? upgradeCount : 0
			}
		},
		get(state, getters, rootState, rootGetters) {
			return (upgradeId) => {
				let upgradeCount = getters["getNoEquipment"](upgradeId);

				let equipment = rootGetters["inventory/equipment"];
				Object.values(equipment).forEach(equip => {
					let itemId = equip.itemId;
					if (!itemId) return;

					if (ITEMS[itemId].providesUpgrade == upgradeId) upgradeCount += 1;
				});
				return upgradeCount;
			}
		},
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