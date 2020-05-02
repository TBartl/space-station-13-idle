import Vue from 'vue'
import Vuex from 'vuex'
import mining from "./mining";

Vue.use(Vuex)

import ITEMS from "@/data/items";

const state = {
	visibleSidebarItem: "mining",
	money: 50000,
	inventory: {
		"iron": 150,
		"glass": 10,
		"silver": 1
	}
}

const store = new Vuex.Store({
	modules: {
		mining
	},
	state,
	getters: {
		visibleSidebarItem(state) {
			return state.visibleSidebarItem;
		},
		inventory(state) {
			return state.inventory;
		},
		money(state) {
			return state.money
		}
	},
	mutations: {
		setVisibleSidebarItem(state, id) {
			state.visibleSidebarItem = id;
		},
		obtainItem(state, { itemId }) {
			if (!state.inventory[itemId]) {
				Vue.set(state.inventory, itemId, 0)
			}
			state.inventory[itemId] += 1;
		},
		sellItem(state, { itemId, count }) {
			state.inventory[itemId] -= count;
			var item = ITEMS.get(itemId);
			state.money += item.sellPrice * count;
		}
	}
});


// TODO: figure out state saving at some point
// store.subscribe((mutation, state) => {
// 	// Store the state object as a JSON string
// 	localStorage.setItem('store', JSON.stringify(state));
// });


export default store;