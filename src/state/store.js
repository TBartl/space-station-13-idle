import Vue from 'vue'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash';

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
import tinkering from "./tinkering";
import command from "./command";
import validhunting from "./validhunting";
import shitposting from "./shitposting";
import precision from "./precision";
import meleePower from "./meleePower";
import rangedPower from "./rangedPower";
import evasion from "./evasion";
import combat from './combat';
import inventory from './inventory';
import upgrades from './upgrades';
import potions from './potions';
import info from './info';
import completion from './completion';
import cheats from './cheats'
import settings from '@/state/settings';
import chrono from '@/state/chrono';
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
	tinkering,
	command,
	validhunting,
	shitposting,
	precision,
	meleePower,
	rangedPower,
	evasion,
	combat,
	inventory,
	upgrades,
	potions,
	info,
	completion,
	cheats,
	settings,
	chrono,
	playerMob: createMobModule('player'),
	enemyMob: createMobModule('enemy')
}

// Needed to Vue.set appropriately
function customMerge(obj, source) {
	Object.keys(source).forEach(key => {
		if (source[key] && source[key].constructor == Object) {
			customMerge(obj[key], source[key]);
		} else {
			Vue.set(obj, key, source[key]);
		}
	});
}

export function reducer(state) {
	let reduced = cloneDeep(state);
	for (let [moduleName, module] of Object.entries(modules)) {
		if (!module.modules) continue;
		for (let subModuleName of Object.keys(module.modules)) {
			delete reduced[moduleName][subModuleName];
		}
	}
	delete reduced.chrono.currentTimeout;
	reduced.chrono.lastLogoutTime = new Date().getTime();
	return reduced;
}

import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
	filter: (mutation) => {
		// We don't need a filter right now, but we might in the future
		return true;
	},
	reducer: reducer
})

const state = {
	visibleSidebarItem: "mining",
	welcomeMessageSeen: false
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
		welcomeMessageSeen(state) {
			return state.welcomeMessageSeen;
		}
	},
	mutations: {
		setVisibleSidebarItem(state, id) {
			state.visibleSidebarItem = id;
		},
		_resetState(state) {
			console.log(initialState);
			Object.assign(state, cloneDeep(initialState));
		},
		_setState(state, newState) {
			customMerge(state, newState);
			console.log(state);
		},
		setWelcomeMessageSeen(state) {
			state.welcomeMessageSeen = true;
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
		},
		setData({ commit, dispatch }, newData) {
			dispatch("cancelAllActions");
			commit("_setState", newData);
			dispatch("cancelAllActions");
		}
	},
	plugins: [vuexLocal.plugin]
});

export default store;