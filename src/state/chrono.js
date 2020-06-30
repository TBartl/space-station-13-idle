import Vue from 'vue'

const chrono = {
	namespaced: true,
	state: {
		desiredSpeed: 1
	},
	getters: {
		desiredSpeed(state) {
			return state.desiredSpeed;
		},
		speed(state, getters) {
			return getters["desiredSpeed"];
		},
	},
	mutations: {
		setDesiredSpeed(state, val) {
			state.desiredSpeed = val;
		}
	}
}

export default chrono;