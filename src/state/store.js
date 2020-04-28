import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		visibleSidebarItem: "mining",
	},
	getters: {
		visibleSidebarItem(state) {
			return state.visibleSidebarItem;
		}
	},
	mutations: {
		setVisibleSidebarItem(state, id) {
			state.visibleSidebarItem = id;
		}
	}
});

export default store;