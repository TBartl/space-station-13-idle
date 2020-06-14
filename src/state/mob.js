import { clone } from "lodash";

import { EventBus } from "@/utils/eventBus.js";
import ITEMS from "@/data/items";
import ENEMIES from "@/data/enemies";
import { createCoroutineModule } from "./coroutine";
import ModalDeath from "@/components/Modals/ModalDeath";

import { PLAYER_BASE_STATS, ENEMY_BASE_STATS, combineStats } from "@/utils/combatUtils";
import { getZPercent } from "@/utils/mathUtils";

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
					let fullStats = clone(PLAYER_BASE_STATS);
					fullStats.precision += rootGetters["precision/level"];
					if (rootGetters["combat/isRanged"]) {
						fullStats.power += rootGetters["rangedPower/level"];
					} else {
						fullStats.power += rootGetters["meleePower/level"];
					}
					fullStats.command += rootGetters["command/level"];
					fullStats.evasion += rootGetters["evasion/level"];
					fullStats[rootGetters["combat/focus"]] += 5;
					Object.values(rootGetters["inventory/equipment"]).forEach(equipment => {
						if (!equipment.itemId) return;
						let item = ITEMS[equipment.itemId];
						if (!item) return;
						if (!item.stats) return;
						let restricted = rootGetters["inventory/checkRestricted"](equipment.itemId);
						if (restricted) return;
						combineStats(fullStats, item.stats)
					});
					return fullStats;
				}
				else if (state.mobType == "enemy") {
					return Object.assign({}, ENEMY_BASE_STATS, ENEMIES[rootGetters["combat/targetEnemy"]].stats);
				}
			},
			targetStats(state, getters, rootState, rootGetters) {
				if (state.mobType == "player") {
					return rootGetters["enemyMob/stats"];
				} else if (state.mobType == "enemy") {
					return rootGetters["playerMob/stats"];
				}
				return null
			},
			baseDps() {
				return 2
			},
			powerRatio() {
				return .5;
			},
			dps(state, getters) {
				return getters.baseDps + getters.powerRatio * getters.stats.power;
			},
			maxHit(state, getters) {
				let hit = getters.dps * getters.stats.attackSpeed * (1 - getters.targetStats.protection / 100);
				return hit;
			},
			hitSigma() {
				return 20;
			},
			hitDiff(state, getters) {
				return getters.stats.precision - getters.targetStats.evasion;
			},
			hitChance(state, getters) {
				return getZPercent(getters.hitDiff / getters.hitSigma);
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
			finishSwing({ state, dispatch, getters, rootGetters }) {
				var inverseMobType = state.mobType == "enemy" ? "player" : "enemy";
				dispatch("_startSwing", getters.stats.attackSpeed)

				if (Math.random() <= getters.hitChance) {
					let damage = Math.random() * getters.maxHit;
					let noOverkillDamage = Math.min(rootGetters[inverseMobType + "Mob/health"], damage);
					dispatch(inverseMobType + "Mob/getHit", damage, { root: true });
					if (state.mobType == "player") {
						dispatch("combat/addXP", noOverkillDamage, { root: true });
					}
				}

			},
			getHit({ state, commit, getters, dispatch, rootGetters }, damage) {
				commit("_setHealth", Math.max(state.health - damage, 0));

				
				if (state.mobType == "player") {
					EventBus.$emit("toast", { icon: require("@/assets/art/combat/health.gif"), text: `-${Math.round(Math.max(damage, 1))} HP` })
				}

				if (state.health <= 0) {
					// Handle death
					if (state.mobType == "player") {
						commit("_setHealth", getters.stats.maxHealth / 2);
						dispatch("cancelAllActions", {}, { root: true });
						this._vm.$modal.show(ModalDeath, {}, { height: "auto", width: "320px" });
					} else {
						dispatch("validhunting/mobKilled", rootGetters["combat/targetEnemy"], { root: true })
						dispatch("combat/pauseCombat", {}, { root: true });
						dispatch("combat/dropEnemyLoot", {}, { root: true })
					}
				} else {
					if (state.mobType == "player") {
						dispatch("combat/tryAutoEat", {}, { root: true });
					}
				}
			},
			// Add health, like from healing
			addHealth({ getters, commit }, health) {
				commit("_setHealth", Math.min(getters.health + health, getters.stats.maxHealth))
			},
			clampHealth({ getters, commit }) {
				commit("_setHealth", Math.min(getters.health, getters.stats.maxHealth));
			}
		}
	}

}