import Vue from 'vue'
import Vuex from 'vuex'
import mining from "./mining";

Vue.use(Vuex)


const state = {
	visibleSidebarItem: "mining",
	inventory: {
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
		}
	}
});


// TODO: figure out state saving at some point
// store.subscribe((mutation, state) => {
// 	// Store the state object as a JSON string
// 	localStorage.setItem('store', JSON.stringify(state));
// });


export default store;