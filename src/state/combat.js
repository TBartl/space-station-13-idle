const combat = {
	namespaced: true,
	modules: {
	},
	state: {
		targetEnemy: null,
	},
	getters: {
		targetEnemy(state) {
			return state.targetEnemy;
		}
	},
	mutations: {
		_setTargetEnemy(state, enemyId) {
			state.targetEnemy = enemyId;
		}
	},
	actions: {
		cancelActions({state, commit}) {
			if (!state.targetEnemy) return;
			commit("_setTargetEnemy", null);
		},
		startCombat({ dispatch, commit }, enemyId) {
			dispatch("cancelAllActions", {}, { root: true });
			commit("_setTargetEnemy", enemyId);
			dispatch("playerMob/startCombat", {}, { root: true });
			dispatch("enemyMob/startCombat", {}, { root: true });
		}
	}
};

export default combat;