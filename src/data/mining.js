export const ACTIONS = {
	mineSand: {
		time: 1.5,
		item: "glass",
		icon: require("@/assets/art/mining/OreGlass.png"),
		xp: .5,
		requiredLevel: 1
	},
	mineIron: {
		time: 2.0,
		item: "iron",
		icon: require("@/assets/art/mining/OreIron.png"),
		xp: 1,
		requiredLevel: 5
	},
	mineSilver: {
		time: 2.5,
		item: "silver",
		icon: require("@/assets/art/mining/OreSilver.png"),
		xp: 3,
		requiredLevel: 10
	},
	mineGold: {
		time: 3,
		item: "gold",
		icon: require("@/assets/art/mining/OreGold.png"),
		xp: 5,
		requiredLevel: 15
	},
	mineTitanium: {
		time: 3.5,
		item: "titanium",
		icon: require("@/assets/art/mining/OreTitanium.png"),
		xp: 7,
		requiredLevel: 20
	},
	mineUranium: {
		time: 4,
		item: "uranium",
		icon: require("@/assets/art/mining/OreUranium.png"),
		xp: 10,
		requiredLevel: 25
	},
	minePlasma: {
		time: 4.5,
		item: "plasma",
		icon: require("@/assets/art/mining/OrePlasma.png"),
		xp: 14,
		requiredLevel: 30
	},
	mineDiamond: {
		time: 5,
		item: "diamond",
		icon: require("@/assets/art/mining/OreDiamond.png"),
		xp: 18,
		requiredLevel: 35
	},
	mineAlien: {
		time: 5.25,
		item: "alienalloy",
		icon: require("@/assets/art/mining/OreAlien.gif"),
		xp: 24, // gives a bit more XP than the following/preceding tasks to reward you for researching it early
		requiredLevel: 35,
		requiredUpgrade: "alienMining"
	},
	mineBluespace: {
		time: 5.5,
		item: "bluespace",
		icon: require("@/assets/art/mining/OreBluespace.png"),
		xp: 22,
		requiredLevel: 40
	},
	mineBananium: {
		time: 6,
		item: "bananium",
		icon: require("@/assets/art/mining/OreBanana.png"),
		xp: 30,
		requiredLevel: 50
	},
	mineTrendril: {
		time: 3,
		actionName: "Surveying",
		name: "Tendril",
		failure: {
			chance : 0.1,
			damage: 1,
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "cactus",
						weight: 100
					}
				]
			},
			{
				chance: 0.5,
				itemTable: [
					{
						id: "foodMeatA",
						weight: 15
					},
					{
						id: "oil",
						count: [1,50],
						weight: 5
					},
					{
						id: "companionMining",
						count: 1,
						weight: 15
					},
					{
						id: "exoticParts",
						count: 1,
						weight: 1
					},
				]
			},
		],
		icon: require("@/assets/art/mining/tendril.png"),
		xp: -45,
		requiredLevel: 50
	},
}

export const JOB = {
	id: "mining",
	name: "Mining",
	icon: require("@/assets/art/mining/icon.png"),
	color: "#95857a"
}
