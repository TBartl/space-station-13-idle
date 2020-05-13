import { ENEMIES } from "@/data/combat";


export function createMobModule(mobType) {
	return {
		namespaced: true,
		state: {
			mobType,
			health: 100
		},
		getters: {
			health(state) {
				return state.health;
			},
			stats(state, getters, rootState, rootGetters) {
				if (state.mobType == "player") {
					return {
						maxHealth: 100,
						attackSpeed: 1
					}
				}
				else if (state.mobType == "enemy") {
					return ENEMIES[rootGetters["combat/targetEnemy"]].stats;
				}
			}
		},
		actions: {
			startCombat({ state, getters }) {
				if (state.mobType == "enemy") {
					state.health = getters.stats.maxHealth;
				}
			}
		}
	}

}