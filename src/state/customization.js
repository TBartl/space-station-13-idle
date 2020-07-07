import Vue from 'vue'

import { createColorModule } from '@/state/color'

const customization = {
	namespaced: true,
	modules: {
		skinColor: createColorModule(20, 100, 91),
		hairColor: createColorModule(0, 0, 15),
		scaleColor: createColorModule(0, 0, 50),
	},
	state: {
		race: 'human',
		hair: 'thinningrear',
		horns: 'none',
		frills: 'none'

	},
	getters: {
		race(state) {
			return state.race;
		},
		hair(state) {
			return state.hair;
		},
		horns(state) {
			return state.horns;
		},
		frills(state) {
			return state.frills;
		}
	},
	mutations: {
		setRace(state, val) {
			state.race = val;
		},
		setHair(state, val) {
			state.hair = val;
		},
		setHorns(state, val) {
			state.horns = val;
		},
		setFrills(state, val) {
			state.frills = val;
		}
	}
}

export default customization;