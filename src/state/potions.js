import Vue from 'vue'
import ITEMS from "@/data/items";

const upgrades = {
	namespaced: true,
	state: {
		potions: {
			// jobId: { itemId, charges }
		}
	},
	getters: {
		get(state) {
			return (jobId) => {
				return state.potions[jobId]
			}
		}
	},
	mutations: {
		set(state, itemId) {
			let item = ITEMS[itemId];
			Vue.set(state.potions, item.potionJob, {
				itemId,
				charges: item.potionCharges
			})
		},
		remove(state, jobId) {
			Vue.delete(state.potions, jobId);
		},
		useCharge(state, jobId) {
			state.potions[jobId].charges -= 1;
			if (state.potions[jobId].charges == 0) {
				//TODO add reuse
				Vue.delete(state.potion, jobId);
			}
		}
	}
}

export default upgrades;