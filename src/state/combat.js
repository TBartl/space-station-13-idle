

const combat = {
	namespaced: true,
	state: {
		targetEnemy: null
	},
	getters: {
		targetEnemy(state) {
			return state.targetEnemy;
		}
	},
	mutations: {
		setTargetEnemy(state, enemyId) {
			state.targetEnemy = enemyId;
		}
	}
};

export default combat;