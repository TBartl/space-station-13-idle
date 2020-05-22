import Vue from 'vue'
import { EventBus } from "@/utils/eventBus.js";
import ITEMS from "@/data/items";

import { getEquipmentSlot, getEquipmentStackable } from '@/utils/equipmentUtils';

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
				for (let [jobId, requiredLevel] of Object.entries(item.requires))
				{
					let jobLevel = rootGetters[jobId + "/level"];
					if (jobLevel < requiredLevel) return false;
				}
				return true;
			};
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
		eat({ state, getters, rootGetters, dispatch }) {
			if (!state.equipment.food.itemId) return;
			if (rootGetters["playerMob/health"] >= rootGetters["playerMob/stats"].maxHealth) return;
			dispatch("playerMob/addHealth", ITEMS[state.equipment.food.itemId].healAmount, { root: true });

			if (state.equipment.food.count == 1) {
				state.equipment.food.count = 0;
				state.equipment.food.itemId = null;
			} else {
				state.equipment.food.count -= 1;
			}
		},
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
		}
	}
}

export default inventory;