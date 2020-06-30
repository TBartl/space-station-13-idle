import Vue from 'vue'
import { BIconArrowReturnRight } from 'bootstrap-vue';

const chrono = {
	namespaced: true,
	state: {
		desiredSpeed: 1,
		remainingTime: 0,
		currentTimeout: 0
	},
	getters: {
		desiredSpeed(state) {
			return state.desiredSpeed;
		},
		speed(state, getters) {
			if (getters["active"]) return getters["desiredSpeed"];
			return 1;
		},
		remainingTime(state) {
			return state.remainingTime;
		},
		maxHours() {
			return 12;
		},
		maxDuration(state, getters) {
			return getters["maxHours"] * 60 * 60 * 1000;
		},
		active(state, getters) {
			return getters["desiredSpeed"] != 1 && getters["remainingTime"] > 0;
		}
	},
	mutations: {
		setDesiredSpeed(state, val) {
			state.desiredSpeed = val;
		}
	},
	actions: {
		_resume({ state, dispatch }) {
			if (!state.currentTimeout) {
				dispatch("_progress");
			}
		},
		_progress({ state, getters, dispatch }, interval) {
			var from = new Date().getTime();

			state.currentTimeout = setTimeout(() => {
				let customInterval = 0;

				if (getters["active"]) {
					var to = new Date().getTime();
					let elapsed = to - from;

					let ratio = getters["desiredSpeed"] - 1;

					state.remainingTime = Math.max(0, state.remainingTime - elapsed * ratio);
					customInterval = 1000 / ratio
				}
				dispatch("_progress", customInterval);
			}, interval ? interval : 250);
		}
	}
}

export default chrono;