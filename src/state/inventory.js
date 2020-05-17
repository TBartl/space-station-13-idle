import Vue from 'vue'
import { EventBus } from "@/utils/eventBus.js";

const inventory = {
	namespaced: true,
	state: {
		bank: {
			"money": 100
		},
		foodId: "spaghetti",
		foodCount: 20
	},
	getters: {
		bank(state) {
			return state.bank;
		},
		money(state) {
			return state.bank.money
		},
		foodId(state) {
			if (!state.foodCount) return null;
			return state.foodId;
		},
		foodCount(state) {
			return state.foodCount;
		}
	},
	mutations: {
		changeItemCount(state, { itemId, count }) {
			if (!state.bank[itemId]) {
				Vue.set(state.bank, itemId, count)
			} else if (state.bank[itemId] + count == 0) {
				Vue.delete(state.bank, itemId);
			} else {
				state.bank[itemId] += count;
			}
			EventBus.$emit("itemCountChanged", { itemId, count });
		},
	},
	actions: {
		eat({ state, getters, rootGetters, dispatch }) {
			if (!getters.foodId) return;
			if (!getters.foodCount) return;
			if (rootGetters["playerMob/health"] >= rootGetters["playerMob/stats"].maxHealth) return;
			state.foodCount -= 1;
			dispatch("playerMob/addHealth", 3, { root: true });
		}
	}
}

export default inventory;