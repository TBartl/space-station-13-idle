import Vue from 'vue'

import { createColorModule } from '@/state/color'

const customization = {
	namespaced: true,
	modules: {
		skinColor: createColorModule(20, 100, 91),
		hairColor: createColorModule(0, 0, 15)
	},
	state: {
		race: 'human',
		hair: 'thinningrear'
	},
	getters: {
		race(state) {
			return state.race;
		},
		hair(state) {
			return state.hair;
		}
	},
	mutations: {
		setRace(state, val) {
			state.race = val;
		},
		setHair(state, val) {
			state.hair = val;
		}
	}
}

export default customization;