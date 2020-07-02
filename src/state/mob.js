import { clone } from "lodash";

import { EventBus } from "@/utils/eventBus.js";
import ITEMS from "@/data/items";
import ENEMIES from "@/data/enemies";
import { createCoroutineModule } from "./coroutine";
import { MAX_LEVEL } from "@/data/experience";

import { PLAYER_BASE_STATS, ENEMY_BASE_STATS, combineStats, fixProtection } from "@/utils/combatUtils";
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
				let fullStats;
				if (state.mobType == "player") {
					fullStats = clone(PLAYER_BASE_STATS);
					fullStats.precision += Math.min(MAX_LEVEL, rootGetters["precision/level"]);
					if (rootGetters["combat/isRanged"]) {
						fullStats.power += Math.min(MAX_LEVEL, rootGetters["rangedPower/level"]);
					} else {
						fullStats.power += Math.min(MAX_LEVEL, rootGetters["meleePower/level"]);
					}
					fullStats.command += Math.min(MAX_LEVEL, rootGetters["command/level"]);
					fullStats.evasion += Math.min(MAX_LEVEL, rootGetters["evasion/level"]);
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
				}
				else if (state.mobType == "enemy") {
					let targetEnemy = rootGetters["combat/targetEnemy"];
					if (!targetEnemy) return ENEMY_BASE_STATS;
					fullStats = Object.assign({}, ENEMY_BASE_STATS, ENEMIES[targetEnemy].stats);
				}
				fixProtection(fullStats);
				return fullStats;
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
				return 3
			},
			powerRatio() {
				return .35;
			},
			dps(state, getters) {
				return getters.baseDps + getters.powerRatio * getters.stats.power;
			},
			targetProtection(state, getters, rootState, rootGetters) {
				var inverseMobType = state.mobType == "enemy" ? "player" : "enemy";
				var damageType = getters.stats.damageType;
				return rootGetters[inverseMobType + "Mob/stats"][damageType + "Protection"];
			},
			maxHit(state, getters) {
				let hit = getters.dps * getters.stats.attackSpeed * (1 - getters.targetProtection / 100);
				return hit;
			},
			hitSigma() {
				return 40;
			},
			hitDiff(state, getters) {
				return getters.stats.precision - getters.targetStats.evasion;
			},
			hitChance(state, getters) {
				return getZPercent(getters.hitDiff / getters.hitSigma);
			},
			baseFleeChance(state, getters, rootState, rootGetters) {
				var companionItemId = rootGetters["inventory/equipment"].companion.itemId;
				if (!companionItemId) return 0;
				return ITEMS[companionItemId].fleeChance / 100;
			},
			commandRatio() {
				return .01;
			},
			commandReduction(state, getters) {
				return getters.stats.command * getters["commandRatio"];
			},
			fleeChance(state, getters) {
				return Math.max(getters["baseFleeChance"] - getters["commandReduction"], 0);
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
			_startSwing({ getters, dispatch, state }) {
				let duration = getters.stats.attackSpeed;
				dispatch("swingCoroutine/start",
					{
						duration: getters.stats.attackSpeed,
						onFinish: () => {
							dispatch("finishSwing");
							if (state.mobType == "player") dispatch("combat/trackTime", duration, { root: true });
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
				} else {
					EventBus.$emit("dodge", state.mobType == "enemy" ? "player" : "enemy");
				}

				EventBus.$emit("swing", state.mobType);

				// Use ammo
				var pocket = rootGetters["inventory/equipment"].pocket;
				if (state.mobType == "player" && pocket.itemId && !rootGetters["inventory/checkRestricted"](pocket.itemId)) {
					pocket.count -= 1;
					if (pocket.count == 0) {
						pocket.itemId = null;
						EventBus.$emit("toast", { text: `Out of ammo!` });
					}
				}
			},
			getHit({ state, commit, getters, dispatch, rootGetters }, damage) {
				commit("_setHealth", Math.max(state.health - damage, 0));

				// Handle flee chance while in combat (not while taking damage from graytding)
				if (state.mobType == "player" && rootGetters["combat/targetEnemy"]) {
					EventBus.$emit("toast", { icon: require("@/assets/art/combat/health.gif"), text: `-${Math.round(Math.max(damage, 1))} HP` })
					dispatch("_handleSlimeFlee");
				}

				if (state.health <= 0) {
					// Handle death
					if (state.mobType == "player") {
						commit("_setHealth", getters.stats.maxHealth / 2);
						dispatch("cancelAllActions", {}, { root: true });

						// Lose a random, equipped item
						dispatch("inventory/loseEquipmentPiece", {}, { root: true });
					} else {
						dispatch("validhunting/mobKilled", rootGetters["combat/targetEnemy"], { root: true })
						commit("completion/trackEnemy", rootGetters["combat/targetEnemy"], { root: true })
						dispatch("combat/pauseCombat", {}, { root: true });
						dispatch("combat/dropEnemyLoot", {}, { root: true })
					}
				} else {
					if (state.mobType == "player") {
						dispatch("combat/tryAutoEat", {}, { root: true });
					}
				}

				EventBus.$emit("getHit", state.mobType);
			},
			_handleSlimeFlee({ rootGetters }) {
				var companion = rootGetters["inventory/equipment"].companion;
				if (!companion.count) return;
				if (Math.random() > rootGetters["playerMob/fleeChance"]) return;
				companion.count -= 1;

				EventBus.$emit("toast", { icon: ITEMS[companion.itemId].icon, text: `Your companion has fled!` });
				if (companion.count == 0) {
					companion.itemId = null;
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