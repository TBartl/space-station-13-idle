
import Vue from "vue";

export default {
	namespaced: true,
	state: {
		dismissed: {} // infoId: true
	},
	getters: {
		dismissed(state) {
			return (infoId) => {
				return state.dismissed[infoId];
			}
		}
	},
	mutations: {
		dismiss(state, infoId) {
			Vue.set(state.dismissed, infoId, true);
		},
		resetAll(state) {
			Object.keys(state.dismissed).forEach(key => state.dismissed[key] = false);
		}
	}
}