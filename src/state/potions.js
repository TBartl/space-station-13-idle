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
			let currentPotion = state.potions[item.potionJob];
			// Minor optimization; don't set the whole object or anything just looking for the itemid will need to recompute
			if (currentPotion && currentPotion.itemId == itemId) {
				currentPotion.charges = item.potionCharges
			}
			else {
				Vue.set(state.potions, item.potionJob, {
					itemId,
					charges: item.potionCharges
				})
			}
		},
		_remove(state, jobId) {
			Vue.delete(state.potions, jobId);
		},
		_useCharge(state, jobId) {
			state.potions[jobId].charges -= 1;
		}
	},
	actions: {
		set({ commit }, itemId) {
			commit("_set", itemId);
			commit("inventory/changeItemCount", { itemId, count: -1 }, { root: true });
		},
		useCharge({ state, commit, dispatch, rootGetters }, jobId) {
			if (!state.potions[jobId]) return;
			commit("_useCharge", jobId)
			if (state.potions[jobId].charges <= 0) {
				let itemId = state.potions[jobId].itemId;
				if (rootGetters["inventory/bank"][itemId]) {
					console.log("Set");
					dispatch("set", state.potions[jobId].itemId);
				} else {
					commit("_remove", jobId);
				}
			}
		},
		remove({ state, commit }, jobId) {
			let potionData = state.potions[jobId];
			let chargesRemaining = potionData.charges;
			let chargesMax = ITEMS[potionData.itemId].potionCharges;
			if (chargesRemaining >= chargesMax) {
				// Refund the potion
				commit("inventory/changeItemCount", { itemId: potionData.itemId, count: 1 }, { root: true });
			}

			commit("_remove", jobId);
		}
	}
}

export default upgrades;