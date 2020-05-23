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
		_set(state, itemId) {
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
	},
	actions: {
		set({ commit }, itemId) {
			commit("_set", itemId);
			commit("inventory/changeItemCount", { itemId, count: -1 }, { root: true });
		}
	}
}

export default upgrades;