import { ENEMIES } from "@/data/combat";
import { createCoroutineModule } from "./coroutine";
import ModalDeath from "@/components/Modals/ModalDeath";

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
						attackSpeed: 1.3
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
					commit("_setHealth", getters.stats.maxHealth);
				}
				dispatch("_startSwing");
			},
			pauseCombat({ dispatch }) {
				dispatch("swingCoroutine/cancel");
			},
			_resume({ rootGetters, dispatch }) {
				if (!rootGetters["combat/targetEnemy"]) return;
				if (rootGetters["enemyMob/health"] == 0) return;
				dispatch("_startSwing");
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
				dispatch("_startSwing", getters.stats.attackSpeed)
				dispatch(inverseMobType + "Mob/_getHit", 10, { root: true });

			},
			_getHit({ state, commit, getters, dispatch }, damage) {
				commit("_setHealth", Math.max(state.health - damage, 0));

				if (state.health != 0) return;

				// Handle death
				if (state.mobType == "player") {
					commit("_setHealth", getters.stats.maxHealth / 2);
					dispatch("cancelAllActions", {}, { root: true });
					this._vm.$modal.show(ModalDeath, {}, { height: "auto", width: "320px" });
				} else {
					dispatch("combat/pauseCombat", {}, { root: true });
					dispatch("combat/dropEnemyLoot", {}, { root: true })
				}

			}
		}
	}

}