import Vue from 'vue'

const chrono = {
	namespaced: true,
	state: {
		desiredSpeed: 1,
		remainingTime: 0,
		currentTimeout: 0,
		lastLogoutTime: 0,
		lastGain: 0
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
		},
		remainingTimeText(state, getters) {
			let duration = getters["remainingTime"];
			// let date = new Date(duration)
			// let hours = `0${}`
			var seconds = parseInt((duration / 1000) % 60),
				minutes = parseInt((duration / (1000 * 60)) % 60),
				hours = parseInt((duration / (1000 * 60 * 60)) % 24);

			hours = hours < 10 ? "0" + hours : hours;
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			return `${hours}:${minutes}:${seconds}`;
		},
		lastGain(state) {
			return state.lastGain;
		}
	},
	mutations: {
		setDesiredSpeed(state, val) {
			state.desiredSpeed = val;
		},
		_updateRemainingTime(state, val) {
			state.remainingTime = val;
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
		},
		updateOfflineTime({ state, getters, commit }) {
			if (!state.lastLogoutTime) return;
			let elapsedTime = new Date().getTime() - state.lastLogoutTime;
			let newVal = Math.min(state.remainingTime + elapsedTime, getters["maxDuration"]);
			state.lastGain = elapsedTime;
			commit("_updateRemainingTime", newVal);
		}
	}
}

export default chrono;