import Vue from 'vue'

import {
	BASE_BONUS,
	ITEM_INTERVALS,
	ENEMY_INTERVALS,
	JOB_INTERVALS
} from "@/data/chrono";

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
		defaultSpeeds() {
			return
		},
		speeds(state, getters, rootState, rootGetters) {
			if (rootGetters["cheats/extraChronoOptions"]) {
				return [1, 1.5, 2, 3, 5, 10, 25, 100, 250, 500, 1000];
			}
			let options = [1, 1.5, 2, 3, 5];
			let upgradeCount = rootGetters["upgrades/get"]("timeBankOptions");
			if (upgradeCount >= 1) options.push(7.5);
			if (upgradeCount >= 2) options.push(10);
			return options;
		},

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
		maxHours(state, getters, rootState, rootGetters) {
			let hours = 12;
			let upgradeCount = rootGetters["upgrades/get"]("timeBankSize");
			if (upgradeCount >= 1) hours += 12;
			if (upgradeCount >= 2) hours += 24;
			return hours;
		},
		maxDuration(state, getters) {
			return getters["maxHours"] * 60 * 60 * 1000;
		},
		active(state, getters, rootState, rootGetters) {
			if (getters["desiredSpeed"] == 1) return false;
			if (rootGetters["isActionChronoProhibited"]) return false;
			if (rootGetters["upgrades/get"]("timeBankAutoPause") && !rootGetters["isAnyAction"]) return false;

			return getters["remainingTime"] > 0 || rootGetters["cheats/infiniteChrono"];
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
		},
		previousResetPotential(state, getters, rootState, rootGetters) {
			return rootGetters["completion/getItem"]('bluetime') || 0;
		},
		resetPotential(state, getters, rootState, rootGetters) {
			let sum = BASE_BONUS;
			sum += getters["previousResetPotential"];
			ITEM_INTERVALS.forEach(x => {
				if (x <= rootGetters["completion/itemPercent"]) sum += 1;
			});
			ENEMY_INTERVALS.forEach(x => {
				if (x <= rootGetters["completion/enemyPercent"]) sum += 1;
			});
			JOB_INTERVALS.forEach(x => {
				if (x <= rootGetters["completion/jobPercent"]) sum += 1;
			});
			return sum;
		}
	},
	mutations: {
		setDesiredSpeed(state, val) {
			state.desiredSpeed = val;
		},
		addTime(state, val) {
			state.remainingTime += val;
			state.remainingTime = Math.max(state.remainingTime, 0);
			state.remainingTime = Math.min(state.remainingTime, this.getters["chrono/maxDuration"]);

		}
	},
	actions: {
		_resume({ state, dispatch }) {
			if (!state.currentTimeout) {
				dispatch("_progress");
			}
		},
		_progress({ state, getters, dispatch, rootGetters }, interval) {
			var from = new Date().getTime();

			state.currentTimeout = setTimeout(() => {
				let customInterval = 0;

				if (getters["active"]) {
					var to = new Date().getTime();
					let elapsed = to - from;

					let ratio = getters["desiredSpeed"] - 1;

					if (!rootGetters["cheats/infiniteChrono"]) {
						state.remainingTime = Math.max(0, state.remainingTime - elapsed * ratio);
					}

					customInterval = 1000 / ratio
				}
				dispatch("_progress", customInterval);
			}, interval ? interval : 250);
		},
		updateOfflineTime({ state, getters, commit }) {
			if (!state.lastLogoutTime) return;
			let elapsedTime = new Date().getTime() - state.lastLogoutTime;
			state.lastGain = elapsedTime;
			commit("addTime", elapsedTime);
		},
		resetSimulation({ getters, commit, dispatch }) {
			let resetPotential = getters["resetPotential"];
			this.commit("completion/trackReset");
			dispatch("resetData", true, { root: true })
			commit("inventory/changeItemCount", { itemId: "bluetime", count: resetPotential }, { root: true });
		}
	}
}

export default chrono;