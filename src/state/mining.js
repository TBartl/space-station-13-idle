import { ACTIONS } from "@/data/mining"

function runAction(state, action) {

}

export default {
	state: {
		actionId: "",
		progress: 0
	},
	mutations: {
		tryStartAction(state, actionId) {
			var action = ACTIONS[actionId];
		}
	}
}