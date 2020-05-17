import Vue from 'vue'
import { EventBus } from "@/utils/eventBus.js";
import ITEMS from "@/data/items";

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
		setFood(state, { itemId, count }) {
			state.foodId = itemId;
			state.foodCount = count;
		}
	},
	actions: {
		eat({ state, getters, rootGetters, dispatch }) {
			if (!getters.foodId) return;
			if (!getters.foodCount) return;
			if (rootGetters["playerMob/health"] >= rootGetters["playerMob/stats"].maxHealth) return;
			state.foodCount -= 1;
			dispatch("playerMob/addHealth", ITEMS.get(state.foodId).healAmount, { root: true });
		},
		unequipFood({ state, commit }) {
			if (state.foodId) {
				commit("changeItemCount", { itemId: state.foodId, count: state.foodCount });
			}
			commit("setFood", { itemId: null, count: 0 });
		},
		equipFood({ state, commit, dispatch }, itemId) {
			dispatch("unequipFood");
			let count = state.bank[itemId];
			console.log(count);
			commit("setFood", { itemId, count });
			commit("changeItemCount", { itemId, count: -count });
		}
	}
}

export default inventory;