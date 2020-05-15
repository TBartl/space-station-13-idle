import { ENEMIES } from "@/data/combat";
import { createCoroutineModule } from "./coroutine";

export function createMobModule(mobType) {
	return {
		namespaced: true,
		modules: {
			swingCoroutine: createCoroutineModule()
		},
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
		mutations: {
			_setHealth(state, health) {
				state.health = health;
			}
		},
		actions: {
			cancelActions({ dispatch }) {
				dispatch("swingCoroutine/cancel");
			},
			startCombat({ state, getters, commit, dispatch }) {
				if (state.mobType == "enemy") {
					commit("_setHealth", getters.stats.maxHealth / 2);
				}
				dispatch("_startSwing");
			},
			_resume({ rootGetters, dispatch }) {
				if (rootGetters["combat/targetEnemy"]) {
					dispatch("_startSwing");
				}
			},
			_startSwing({ getters, dispatch }) {
				dispatch("swingCoroutine/start",
					{
						duration: getters.stats.attackSpeed,
						onFinish: () => {
							dispatch("finishSwing");
						}
					});
			},
			finishSwing({ state, dispatch, getters }) {
				var inverseMobType = state.mobType == "enemy" ? "player" : "enemy";
				dispatch(inverseMobType + "Mob/_getHit", 10, { root: true });
				dispatch("_startSwing", getters.stats.attackSpeed)
			},
			_getHit({ state, commit }, damage) {
				commit("_setHealth", state.health - damage);
			}
		}
	}

}