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
import { createMobModule } from "./mob";

const modules = {
	engineering,
	mining,
	fabrication,
	xenobiology,
	botany,
	graytiding,
	precision,
	combat,
	playerMob: createMobModule('player'),
	enemyMob: createMobModule('enemy')
}


import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
	filter: (mutation) => {
		// We don't need a filter right now, but we might in the future
		return true;
	},
	reducer: (state) => {
		let reduced = cloneDeep(state);
		for (let [moduleName, module] of Object.entries(modules)) {
			if (!module.modules) continue;
			for (let subModuleName of Object.keys(module.modules)) {
				delete reduced[moduleName][subModuleName];
			}
		}
		return reduced;
	}
})

const state = {
	visibleSidebarItem: "mining",
	inventory: {
		"money": 50000,
		"iron": 150,
		"glass": 10,
		"silver": 1
	},
	chronoSpeed: 1
}

let initialState = cloneDeep(state);
for (let [moduleName, module] of Object.entries(modules)) {
	initialState[moduleName] = cloneDeep(module.state);
	if (!module.modules) continue;
	for (let [subModuleName, subModule] of Object.entries(module.modules)) {
		initialState[moduleName][subModuleName] = cloneDeep(subModule.state);
	}
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
			return state.inventory.money
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
		_resetState(state) {
			Object.assign(state, cloneDeep(initialState));
		},
		setChronoSpeed(state, speed) {
			state.chronoSpeed = speed;
		}
	},
	actions: {
		sellItem({ commit }, { itemId, count }) {
			commit("changeItemCount", { itemId, count: -count });
			state.inventory[itemId] -= count;
			let soldItem = ITEMS.get(itemId);
			let profit = soldItem.sellPrice * count;
			commit("changeItemCount", { itemId: "money", count: profit });
		},
		cancelAllActions({ dispatch }) {
			for (let [moduleName, module] of Object.entries(modules)) {
				if (module.actions && module.actions.cancelActions) {
					dispatch(moduleName + "/cancelActions");
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