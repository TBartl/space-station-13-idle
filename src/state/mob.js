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
					let baseStats = {
						maxHealth: 100,
						attackSpeed: 1.5,
						precision: 1,
						power: 1,
						mobility: 1,
						protection: 1
					}
					return baseStats;
				}
				else if (state.mobType == "enemy") {
					let baseStats = {
						maxHealth: 10,
						attackSpeed: 2.5,
						precision: 1,
						power: 1,
						mobility: 1,
						protection: 1
					}
					return Object.assign(baseStats, ENEMIES[rootGetters["combat/targetEnemy"]].stats);
				}
			},
			baseDps() {
				return 3
			},
			powerRatio() {
				return .5;
			},
			dps(state, getters) {
				return getters.baseDps + getters.powerRatio * getters.stats.power;
			},
			maxHit(state, getters) {
				let hit = getters.dps * getters.stats.attackSpeed;
				return hit;
			}
		},
		mutations: {
			_setHealth(state, health) {
				state.health = health;
			},
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

				dispatch(inverseMobType + "Mob/_getHit", getters.maxHit, { root: true });

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
			},
			// Add health, like from healing
			addHealth({ getters, commit }, health) {
				commit("_setHealth", Math.min(getters.health + health, getters.stats.maxHealth))
			}
		}
	}

}