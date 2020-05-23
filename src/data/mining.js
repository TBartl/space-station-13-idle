export const ACTIONS = {
	mineIron: {
		time: 1.5,
		item: "iron",
		icon: require("@/assets/art/mining/OreIron.png"),
		xp: 5,
		requiredLevel: 1
	},
	mineSand: {
		time: 2.0,
		item: "glass",
		icon: require("@/assets/art/mining/OreGlass.png"),
		xp: 10,
		requiredLevel: 5
	},
	mineSilver: {
		time: 2.5,
		item: "silver",
		icon: require("@/assets/art/mining/OreSilver.png"),
		xp: 15,
		requiredLevel: 10
	},
	mineGold: {
		time: 3,
		item: "gold",
		icon: require("@/assets/art/mining/OreGold.png"),
		xp: 20,
		requiredLevel: 15
	},
	mineTitanium: {
		time: 3.5,
		item: "titanium",
		icon: require("@/assets/art/mining/OreTitanium.png"),
		xp: 25,
		requiredLevel: 20
	},
	mineUranium: {
		time: 4,
		item: "uranium",
		icon: require("@/assets/art/mining/OreUranium.png"),
		xp: 30,
		requiredLevel: 25
	},
	minePlasma: {
		time: 4.5,
		item: "plasma",
		icon: require("@/assets/art/mining/OrePlasma.png"),
		xp: 35,
		requiredLevel: 30
	},
	mineDiamond: {
		time: 5,
		item: "diamond",
		icon: require("@/assets/art/mining/OreDiamond.png"),
		xp: 40,
		requiredLevel: 35
	},
	mineBluespace: {
		time: 5.5,
		item: "bluespace",
		icon: require("@/assets/art/mining/OreBluespace.png"),
		xp: 45,
		requiredLevel: 40
	},
	mineBananium: {
		time: 6,
		item: "bananium",
		icon: require("@/assets/art/mining/OreBanana.png"),
		xp: 50,
		requiredLevel: 50
	},
}

export const JOB = {
	id: "mining",
	name: "Mining",
	icon: require("@/assets/art/mining/icon.png"),
	color: "#95857a"
}
