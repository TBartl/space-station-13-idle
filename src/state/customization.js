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
		hair: 'thinningrear',
		lizard: 'lizard1',
		moth: 'moth1'

	},
	getters: {
		race(state) {
			return state.race;
		},
		hair(state) {
			return state.hair;
		},
		lizard(state) {
			return state.lizard;
		},
		moth(state) {
			return state.moth;
		}
	},
	mutations: {
		setRace(state, val) {
			state.race = val;
		},
		setHair(state, val) {
			state.hair = val;
		},
		setlizard(state, val) {
			state.lizard = val;
		},
		setMoth(state, val) {
			state.moth = val;
		}
	}
}

export default customization;