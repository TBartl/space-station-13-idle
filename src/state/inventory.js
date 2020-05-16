import Vue from 'vue'
import { EventBus } from "@/utils/eventBus.js";

const inventory = {
	namespaced: true,
	state: {
		bank: {
			"money": 100
		},
	},
	getters: {
		bank(state) {
			return state.bank;
		},
		money(state) {
			return state.bank.money
		},
	},
	mutations: {
		changeItemCount(state, { itemId, count }) {
			if (!state.bank[itemId]) {
				Vue.set(state.bank, itemId, count)
			} else {
				state.bank[itemId] += count;
			}
			EventBus.$emit("itemCountChanged", { itemId, count });
		},
	}
}

export default inventory;