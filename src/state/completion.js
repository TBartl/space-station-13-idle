import Vue from 'vue'

const completion = {
	namespaced: true,
	state: {
		items: {
			// itemId: count
		},
		enemies: {
			// enemyId: count
		},
	},
	getters: {
		getItem(state) {
			return (itemId) => {
				return state.items[itemId]
			}
		},
		getEnemy(state) {
			return (enemyId) => {
				return state.enemies[enemyId]
			}
		}
	},
	mutations: {
		trackItem(state, { itemId, count }) {
			if (count <= 0) return;
			if (!state.items[itemId]) {
				Vue.set(state.items, itemId, count);
			} else {
				state.items[itemId] += count;
			}
		},
		trackEnemy(state, enemyId) {
			if (!state.enemies[enemyId]) {
				Vue.set(state.enemies, enemyId, 1);
			} else {
				state.enemies[enemyId] += 1;
			}
		}
	}
}

export default completion;