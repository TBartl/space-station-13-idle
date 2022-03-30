import Vue from 'vue'
import Vuex from 'vuex'
import { cloneDeep, union } from 'lodash';

Vue.use(Vuex)


import ITEMS from "@/data/items";
import engineering from "./engineering";
import chemistry from "./chemistry";
import mining from "./mining";
import fabrication from "./fabrication";
import research from "./research";
import xenobiology from "./xenobiology";
import botany from "./botany";
import cooking from "./cooking";
import graytiding from "./graytiding";
import tinkering from "./tinkering";
import command from "./command";
import validhunting from "./validhunting";
import shitposting from "./shitposting";
import bartending from "./bartending";
import cargonia from "./cargonia";
import traitor from "./traitor";
import cult from "./cult";
import ling from "./ling";

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
import customization from '@/state/customization';
import { createMobModule } from "./mob";

const modules = {
	engineering,
	chemistry,
	mining,
	fabrication,
	research,
	xenobiology,
	botany,
	cooking,
	graytiding,
	tinkering,
	command,
	validhunting,
	shitposting,
	bartending,
	cargonia,
	traitor,
	cult,
	ling,
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
	customization,
	playerMob: createMobModule('player'),
	enemyMob: createMobModule('enemy')
}

// Needed to Vue.set appropriately
function customMerge(obj, source, root = true, softReset = false) {
	let allKeys = Object.keys(source);
	if (obj.constructor == Object) {
		allKeys = union(allKeys, Object.keys(obj));
	}

	allKeys.forEach(key => {
		if (key.toLowerCase().includes("coroutine")) return;
		if (softReset && root && key == "settings") return;
		if (softReset && root && key == "cheats") return;
		if (softReset && key == "simulationResetCount") return;
		if (softReset && key == "remainingTime") return;

		if (!root && obj[key] && obj[key].constructor == Object) {
			Vue.set(obj, key, {});
		}
		if (source[key] && source[key].constructor == Object) {
			if (!obj[key]) Vue.set(obj, key, {});
			customMerge(obj[key], source[key], false, softReset);
		}
		else if (Array.isArray(source[key])) {
			Vue.set(obj, key, []);
			for (let i = 0; i < source[key].length; i++) {
				Vue.set(obj[key], i, source[key][i]);
			}
		}
		else {
			if (root && !source[key]) return;
			Vue.set(obj, key, source[key]);
		}
	});
}

export function reducer(state) {
	let reduced = cloneDeep(state);
	for (let [moduleName, module] of Object.entries(modules)) {
		if (!module.modules) continue;
		for (let subModuleName of Object.keys(module.modules)) {
			if (subModuleName.toLowerCase().includes("coroutine"))
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
	update3Seen: false,
	update4Seen: false
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
		},
		isAnyAction(state, getters) {
			if (getters["combat/isActive"]) return true;

			for (let [moduleName, module] of Object.entries(modules)) {
				let isActiveFunc = getters[`${moduleName}/currentActionId`];
				if (isActiveFunc) return true;
			}

			return false;
		},
		isActionChronoProhibited(state, getters) {
			if (getters["combat/isActive"]) return false;

			for (let [moduleName, module] of Object.entries(modules)) {
				let activeActionName = getters[`${moduleName}/currentActionId`];
				if (activeActionName) {
					let activeAction = getters[`${moduleName}/baseActions`][activeActionName]
					return !!activeAction.chronoProhibited;
				}
			}
		}
	},
	mutations: {
		setVisibleSidebarItem(state, id) {
			state.visibleSidebarItem = id;
		},
		_resetState(state, softReset) {
			customMerge(state, initialState, true, softReset);
		},
		_setState(state, newState) {
			customMerge(state, newState);
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
		resetData({ commit, dispatch }, softReset) {
			dispatch("cancelAllActions");
			commit("_resetState", softReset);
			dispatch('research/startupRoll');
		},
		setData({ commit, dispatch }, newData) {
			dispatch("cancelAllActions");
			commit("_setState", newData);
			dispatch("cancelAllActions");
		},
		cleanup({ dispatch }) {
			for (let [moduleName, module] of Object.entries(modules)) {
				if (module.actions && module.actions.cleanup) {
					dispatch(moduleName + "/cleanup");
				}
			}
		}
	},
	plugins: [vuexLocal.plugin]
});

export default store;