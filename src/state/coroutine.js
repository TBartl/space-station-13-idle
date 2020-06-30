// Actually not at all that similair to coroutines in unity
// This allows a module to be added to a store that progresses something over time
// These will not be tracked via persistence 

const PROGRESS_INTERVAL = 0.025;

export function createCoroutineModule() {
	return {
		namespaced: true,
		state: {
			progress: 0,
			duration: 0,
			currentTimeout: 0,

			// After a timeout, we will probably have overshot the time needed
			// So let's apply this to the next timeout
			bonusTime: 0
		},
		getters: {
			progress(state) {
				return state.progress;
			},
			percent(state) {
				return state.progress / state.duration;
			},
			isActive(state) {
				return state.currentTimeout;
			}
		},
		actions: {
			start({ state, dispatch }, { duration, onFinish }) {
				if (state.currentTimeout) {
					console.error("Tried to start a coroutine when one was already occurring");
					return;
				}
				dispatch("cancel");

				// On fast enough chronoboosts, we may just be able to skip progressing this action
				if (state.bonusTime >= duration) {
					state.bonusTime -= duration;
					onFinish();
				} else {
					state.progress = state.bonusTime;
					state.bonusTime = 0;
					state.duration = duration;
					dispatch("_progress", { onFinish });
				}

			},
			cancel({ state }) {
				clearTimeout(state.currentTimeout);
				state.currentTimeout = null;
				state.progress = 0;
			},
			_progress({ state, dispatch, rootGetters }, { onFinish }) {
				var from = new Date().getTime();
				state.currentTimeout = setTimeout(() => {
					var to = new Date().getTime();
					var elapsed = (to - from) / 1000;
					state.progress += elapsed * rootGetters["chrono/speed"];

					if (state.progress >= state.duration) {
						state.bonusTime = state.progress - state.duration;

						state.progress = 0;
						state.currentTimeout = 0;
						onFinish();
					} else {
						dispatch("_progress", { onFinish });
					}
				}, PROGRESS_INTERVAL * 1000)
			}
		}
	}
}
