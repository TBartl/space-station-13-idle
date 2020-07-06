export function createColorModule(hue, saturation, lightness) {
	return {
		namespaced: true,
		state: {
			hue,
			saturation,
			lightness
		},
		getters: {
			hue(state) {
				return state.hue;
			},
			saturation(state) {
				return state.saturation;
			},
			lightness(state) {
				return state.lightness;
			},
			hsl(state, getters) {
				return `hsl(${state.hue},${state.saturation}%,${state.lightness}%)`
			}
		},
		mutations: {
			setHue(state, val) {
				state.hue = val;
			},
			setSaturation(state, val) {
				state.saturation = val;
			},
			setLightness(state, val) {
				state.lightness = val;
			}
		}

	}
}