import Vue from 'vue'
import Vuex from 'vuex'
import { cloneDeep, mergeWith, isArray } from 'lodash';
import { EventBus } from "@/utils/eventBus.js";

Vue.use(Vuex)


import ITEMS from "@/data/items";
import engineering from "./engineering";
import mining from "./mining";
import fabrication from "./fabrication";
import xenobiology from "./xenobiology";
import botany from "./botany";
import graytiding from "./graytiding";
import precision from "./precision";
import combat from './combat';

const modules = {
	engineering,
	mining,
	fabrication,
	xenobiology,
	botany,
	graytiding,
	precision,
	combat
}


import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
	filter: (mutation) => {
		let upperType = mutation.type.toUpperCase();
		if (upperType.includes("UPDATEPROGRESS")) return false;
		return true;
	},
	reducer: (state) => {
		let reduced = cloneDeep(state);
		Object.keys(modules).forEach(moduleName => {
			delete reduced[moduleName].currentProgress;
			delete reduced[moduleName].currentProgressTimeout;
		});
		return reduced;
	}
})

const state = {
	visibleSidebarItem: "mining",
	money: 50000,
	inventory: {
		"iron": 150,
		"glass": 10,
		"silver": 1
	},
	chronoSpeed: 1
}

let initialState = cloneDeep(state);
for (let [moduleName, module] of Object.entries(modules)) {
	initialState[moduleName] = cloneDeep(module.state);
}

const store = new Vuex.Store({
	modules,
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
		},
		chronoSpeed(state) {
			return state.chronoSpeed;
		}
	},
	mutations: {
		setVisibleSidebarItem(state, id) {
			state.visibleSidebarItem = id;
		},
		changeItemCount(state, { itemId, count }) {
			if (!state.inventory[itemId]) {
				Vue.set(state.inventory, itemId, 0)
			}
			state.inventory[itemId] += count;
			EventBus.$emit("itemCountChanged", { itemId, count });
		},
		sellItem(state, { itemId, count }) {
			state.inventory[itemId] -= count;
			var item = ITEMS.get(itemId);
			state.money += item.sellPrice * count;
		},
		_resetState(state) {
			Object.assign(state, cloneDeep(initialState));
		},
		setChronoSpeed(state, speed) {
			state.chronoSpeed = speed;
		}
	},
	actions: {
		cancelAllActions({ commit }) {
			for (let [moduleName, module] of Object.entries(modules)) {
				if (module.mutations && module.mutations.cancelActions) {
					commit(moduleName + "/cancelActions");
				}
			}
		},
		_resume() {
			for (let [moduleName, module] of Object.entries(modules)) {
				if (module.actions && module.actions._resume) {
					this.dispatch(moduleName + "/_resume");
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

store.dispatch("_resume");

export default store;