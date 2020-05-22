import Vue from 'vue'
import Vuex from 'vuex'
import { cloneDeep, mergeWith, isArray } from 'lodash';

Vue.use(Vuex)


import ITEMS from "@/data/items";
import engineering from "./engineering";
import chemistry from "./chemistry";
import mining from "./mining";
import fabrication from "./fabrication";
import xenobiology from "./xenobiology";
import botany from "./botany";
import cooking from "./cooking";
import graytiding from "./graytiding";
import security from "./security";
import shitposting from "./shitposting";
import precision from "./precision";
import meleePower from "./meleePower";
import rangedPower from "./rangedPower";
import evasion from "./evasion";
import combat from './combat';
import inventory from './inventory';
import { createMobModule } from "./mob";

const modules = {
	engineering,
	chemistry,
	mining,
	fabrication,
	xenobiology,
	botany,
	cooking,
	graytiding,
	security,
	shitposting,
	precision,
	meleePower,
	rangedPower,
	evasion,
	combat,
	inventory,
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
		chronoSpeed(state) {
			return state.chronoSpeed;
		}
	},
	mutations: {
		setVisibleSidebarItem(state, id) {
			state.visibleSidebarItem = id;
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
			commit("inventory/changeItemCount", { itemId, count: -count });
			let soldItem = ITEMS[itemId];
			let profit = soldItem.sellPrice * count;
			commit("inventory/changeItemCount", { itemId: "money", count: profit });
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