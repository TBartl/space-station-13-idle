export const ITEMS = new Map([
	["crowbar", {
		name: "Crowbar",
		sellPrice: 1,
		icon: require("@/assets/art/fabrication/crowbar.png")
	}]
]);

export const ACTIONS = {
	fabricateCrowbar: {
		time: 2,
		item: "crowbar",
		icon: require("@/assets/art/fabrication/crowbar.png"),
		xp: 10,
		requiredLevel: 1
	}
}

export const JOB = {
	id: "fabrication",
	name: "Fabrication",
	icon: require("@/assets/art/fabrication/icon.png"),
	color: "#89adac",
	items: ITEMS
}

export function finishAction(commit, actionId) {
	var action = ACTIONS[actionId];
	commit("obtainItem", { itemId: action.item }, { root: true });
	commit("addXP", action.xp);
}