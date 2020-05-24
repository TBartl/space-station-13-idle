export const ACTIONS = {
	tinkerCuffs: {
		time: 10,
		item: "cuffs",
		icon: require("@/assets/art/tinkering/cuff.png"),
		xp: 2600,
		requiredLevel: 1,
		requiredItems: {
			junk: 1
		}
	},
}

export const JOB = {
	id: "tinkering",
	name: "Tinkering",
	icon: require("@/assets/art/tinkering/icon.png"),
	color: "#3681bb"
}