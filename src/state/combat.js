import { createCoroutineModule } from "./coroutine";

const combat = {
	namespaced: true,
	modules: {
		moveCoroutine: createCoroutineModule()
	},
	state: {
		targetEnemy: null,
		drops: [{
			item: "iron",
			count: 5
		}, {
			item: "iron",
			count: 1
		}, {
			item: "silver",
			count: 2
		}]
	},
	getters: {
		targetEnemy(state) {
			return state.targetEnemy;
		},
		moveTime() {
			return 3;
		},
		maxDrops() {
			return 16;
		},
		drops(state) {
			return state.drops;
		}
	},
	mutations: {
		_setTargetEnemy(state, enemyId) {
			state.targetEnemy = enemyId;
		},
		removeLootItem(state, index) {
			state.drops.splice(index, 1);
		}
	},
	actions: {
		cancelActions({ state, commit, dispatch }) {
			dispatch("moveCoroutine/cancel");
			if (!state.targetEnemy) return;
			commit("_setTargetEnemy", null);
		},
		_resume({ state, dispatch, rootGetters }) {
			if (!state.targetEnemy) return;

			if (rootGetters["enemyMob/health"] == 0) {
				dispatch("_startMove");
			}
		},
		startCombat({ dispatch, commit }, enemyId) {
			dispatch("cancelAllActions", {}, { root: true });
			commit("_setTargetEnemy", enemyId);
			dispatch("playerMob/startCombat", {}, { root: true });
			dispatch("enemyMob/startCombat", {}, { root: true });
		},
		pauseCombat({ dispatch }) {
			dispatch("playerMob/pauseCombat", {}, { root: true });
			dispatch("enemyMob/pauseCombat", {}, { root: true });
			dispatch("_startMove");
		},
		continueCombat({ state, dispatch }) {
			if (!state.targetEnemy) return;
			dispatch("playerMob/startCombat", {}, { root: true });
			dispatch("enemyMob/startCombat", {}, { root: true });
		},
		_startMove({ dispatch, getters }) {
			dispatch("moveCoroutine/start",
				{
					duration: getters.moveTime,
					onFinish: () => {
						dispatch("continueCombat");
					}
				});
		}
	}
};

export default combat;