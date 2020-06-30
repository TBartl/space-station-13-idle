import Vue from 'vue'

const chrono = {
	namespaced: true,
	state: {
		desiredSpeed: 1,
		remainingTime: 0
	},
	getters: {
		desiredSpeed(state) {
			return state.desiredSpeed;
		},
		speed(state, getters) {
			return getters["desiredSpeed"];
		},
		remainingTime(state) {
			return state.remainingTime;
		},
		maxHours() {
			return 12;
		},
		maxDuration(state, getters) {
			return getters["maxHours"] * 60 * 60 * 1000;
		}
	},
	mutations: {
		setDesiredSpeed(state, val) {
			state.desiredSpeed = val;
		}
	}
}

export default chrono;