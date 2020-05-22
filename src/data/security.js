export const ITEMS = {
	innocent: {
		name: "BWOINK",
		sellPrice: -10,
		icon: require("@/assets/art/security/innocent.png")
	},
	criminal: {
		name: "Valid Points",
		sellPrice: 0,
		icon: require("@/assets/art/security/guilty.png")
	}
}

export const ACTIONS = {
	secInnocent: {
		time: 1,
		name: "Innocent Bystander",
		item: "innocent",
		icon: require("@/assets/art/security/innocent.png"),
		xp: 5,
		requiredLevel: 1
	},
	secGuilty: {
		time: 1,
		name: "Criminal",
		item: "criminal",
		icon: require("@/assets/art/security/guilty.png"),
		xp: 5,
		requiredLevel: 2
	},
}

export const JOB = {
	id: "security",
	name: "Security",
	icon: require("@/assets/art/security/icon.png"),
	color: "#A30000",
	items: ITEMS
}
