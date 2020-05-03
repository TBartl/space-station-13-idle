import Vue from 'vue'
import Vuex from 'vuex'
import { cloneDeep, merge } from 'lodash';

Vue.use(Vuex)

import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
	filter: (mutation) => {
		let upperType = mutation.type.toUpperCase();
		if (upperType.includes("PROGRESS")) return false;
		if (upperType.includes("TIMEOUT")) return false;
		return true;
	}
})


import ITEMS from "@/data/items";
import mining from "./mining";

const modules = {
	mining
}

const initialState = {
	visibleSidebarItem: "mining",
	money: 50000,
	inventory: {
		"iron": 150,
		"glass": 10,
		"silver": 1
	},
	mining: mining.state
}

const store = new Vuex.Store({
	modules,
	state: cloneDeep(initialState),
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
		},
		_resetState(state) {
			merge(state, cloneDeep(initialState));
		},
	},
	actions: {
		cancelAllActions({ commit }) {
			for (let [moduleName, module] of Object.entries(modules)) {
				if (module.mutations.cancelActions) {
					commit(moduleName + "/cancelActions");
				}
			}
		},
		resetData({ commit, dispatch }) {
			dispatch("cancelAllActions");
			commit("_resetState");
		}
	},
	plugins: [vuexLocal.plugin]
});

export default store;