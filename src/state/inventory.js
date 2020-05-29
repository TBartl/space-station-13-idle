import Vue from 'vue'
import { EventBus } from "@/utils/eventBus.js";
import ITEMS from "@/data/items";

import { getEquipmentSlot, getEquipmentStackable } from '@/utils/equipmentUtils';
import { acquireItemFrom } from "@/utils/itemChanceUtils";

const inventory = {
	namespaced: true,
	state: {
		bank: {
			"money": 100
		},
		equipment: {
			food: {
				itemId: null,
				count: 0
			},
			hand: {
				itemId: null,
				count: 0
			},
			chest: {
				itemId: null,
				count: 0
			},
			head: {
				itemId: null,
				count: 0
			},
			face: {
				itemId: null,
				count: 0
			},
			limb: {
				itemId: null,
				count: 0
			},
			jumpsuit: {
				itemId: null,
				count: 0
			},
			neck: {
				itemId: null,
				count: 0
			},
			pocket: {
				itemId: null,
				count: 0
			}
		}
	},
	getters: {
		bank(state) {
			return state.bank;
		},
		money(state) {
			return state.bank.money
		},
		equipment(state) {
			return state.equipment;
		},
		canEquip(state, getters, rootState, rootGetters) {
			return (itemId) => {
				let item = ITEMS[itemId];
				if (!getEquipmentSlot(itemId)) return false;
				if (!item.requires) return true;
				for (let [jobId, requiredLevel] of Object.entries(item.requires)) {
					let jobLevel = rootGetters[jobId + "/level"];
					if (jobLevel < requiredLevel) return false;
				}
				return true;
			};
		},
		checkRestricted(state, getters) {
			return (itemId) => {
				if (!itemId) return false;
				let item = ITEMS[itemId];
				if (item.restrictions) {
					for (let restriction of item.restrictions) {
						if (!getters.liftedRestrictions.includes(restriction)) return true;
					}
				}
				if (item.ammoType) {
					let equipmentSlot = getEquipmentSlot(itemId);
					let inverseSlot = equipmentSlot == "hand" ? "pocket" : "hand";
					let inverseItemId = state.equipment[inverseSlot].itemId;
					if (!inverseItemId) return true;
					let inverseItem = ITEMS[inverseItemId];
					if (item.ammoType != inverseItem.ammoType) return true;
					if (equipmentSlot == "pocket" && getters["checkRestricted"](inverseItemId)) return true;
				}
				return false;
			};
		},
		liftedRestrictions(state) {
			let lifted = [];
			for (let [equipmentSlot, equipment] of Object.entries(state.equipment)) {
				if (!equipment.itemId) continue;
				let item = ITEMS[equipment.itemId];
				if (!item.liftsRestrictions) continue;
				lifted = lifted.concat(item.liftsRestrictions);
			}
			return lifted;
		},
		shouldShowPurchase(state, getters, rootState, rootGetters) {
			return (purchase) => {
				if (purchase.requiredUpgrades) {
					for (let [upgradeId, count] of Object.entries(purchase.requiredUpgrades)) {
						if (rootGetters["upgrades/get"](upgradeId) != count) return false;
					}
				}
				return true;
			}
		},
		canPurchase(state, getters, rootState, rootGetters) {
			return (purchase) => {
				if (purchase.requiredItems) {
					for (let [itemId, count] of Object.entries(purchase.requiredItems)) {
						if (state.bank[itemId] < count) return false;
					}
				}
				if (purchase.requiredLevels) {
					for (let [jobId, level] of Object.entries(purchase.requiredLevels)) {
						if (rootGetters[jobId + "/level"] < level) return false;
					}
				}
				return true;
			}
		}
	},
	mutations: {
		changeItemCount(state, { itemId, count }) {
			if (!state.bank[itemId]) {
				Vue.set(state.bank, itemId, count)
			} else if (state.bank[itemId] + count == 0) {
				Vue.delete(state.bank, itemId);
			} else {
				state.bank[itemId] += count;
			}
			EventBus.$emit("itemCountChanged", { itemId, count });
		},
		setEquipment(state, { slot, itemId, count }) {
			state.equipment[slot].itemId = itemId;
			state.equipment[slot].count = count;
		},
		quickSort(state) {
			let allSortedKeys = Object.keys(ITEMS);
			let newBank = {};
			allSortedKeys.forEach(itemId => {
				let val = state.bank[itemId];
				if (val) {
					newBank[itemId] = val;
				}
			});
			Vue.set(state, "bank", newBank);
		}
	},
	actions: {
		unequip({ state, commit }, itemId) {
			let slot = getEquipmentSlot(itemId);
			let equippedItemId = state.equipment[slot].itemId;
			if (equippedItemId) {
				commit("changeItemCount", { itemId: equippedItemId, count: state.equipment[slot].count });
			}
			commit("setEquipment", { slot, itemId: null, count: 0 });
		},
		equip({ state, commit, dispatch }, itemId) {
			dispatch("unequip", itemId);
			let count = getEquipmentStackable(itemId) ? state.bank[itemId] : 1;
			commit("setEquipment", { slot: getEquipmentSlot(itemId), itemId, count });
			commit("changeItemCount", { itemId, count: -count });
		},
		purchase({ commit }, purchase) {
			for (let [itemId, count] of Object.entries(purchase.requiredItems)) {
				commit("changeItemCount", { itemId, count: -count });
			}

			if (purchase.upgrade) {
				commit("upgrades/set", purchase.upgrade, { root: true });
			} else {
				let yieldedItems = acquireItemFrom(purchase);
				for (let [itemId, count] of Object.entries(yieldedItems)) {
					commit("changeItemCount", { itemId, count });
				}
			}
		}
	}
}

export default inventory;