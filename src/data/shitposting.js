export const ACTIONS = {
	postPeanuts: {
		time: 1,
		name: "Peanut Posting",
		item: "peanut",
		icon: require("@/assets/art/shitposting/brain.png"),
		xp: 0,
		xpActivated: 2,
		requiredLevel: 1,
		requiredItems: {
			power: 90
		}
	},
	postDeadchat: {
		time: 1,
		name: "Deadchat Rant",
		item: "salt",
		icon: require("@/assets/art/shitposting/ghost.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 10,
		requiredItems: {
			power: 90
		}
	},
	Cocacolagua: {
		time: 1,
		name: "	Cocacolagua's Choice",
		item: "pillHappy",
		icon: require("@/assets/art/shitposting/skub.png"),
		xp: 1,
		xpActivated: 5,
		requiredLevel: 49,
		requiredItems: {
			power: 90
		}
	},
	Uristqwerty: {
		time: 1,
		name: "Uristqwerty's Greed",
		item: "iron",
		icon: require("@/assets/art/shitposting/dwarf.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 48,
		requiredItems: {
			power: 90
		},
	},
	SkyCinnamon: {
		time: 1,
		name: "SkyCinnamon's Snack",
		item: "foodEvasion3",
		icon: require("@/assets/art/shitposting/spacecat.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 47,
		requiredItems: {
			power: 90
		},
	},
	Kolbaska: {
		time: 1,
		name: "Kolbaska's Speed",
		item: "q_foodMeatA",
		icon: require("@/assets/art/shitposting/sausage.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 46,
		requiredItems: {
			power: 90
		},
	},
	Kaostico: {
		time: 1,
		name: "Kaostico's Bot",
		item: "titanium",
		icon: require("@/assets/art/shitposting/brobot.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 45,
		requiredItems: {
			power: 90
		},
	},
	Dopamine: {
		time: 1,
		name: "Dopamine's Growth",
		item: "plantSeed",
		icon: require("@/assets/art/shitposting/dopamine.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 44,
		requiredItems: {
			power: 90
		},
	},
	Boris: {
		time: 1,
		name: "Boris's Pain",
		item: "drinkVodka",
		icon: require("@/assets/art/shitposting/boris.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 43,
		requiredItems: {
			power: 90
		},
	},
	NotPickles: {
		time: 1,
		name: "NotPickles's Freedom",
		item: "drinkNukaCola",
		icon: require("@/assets/art/shitposting/pickles.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 42,
		requiredItems: {
			power: 90
		},
	},
	Fursoner: {
		time: 1,
		name: "Fursoners's Sin",
		item: "meleeSharp3",
		icon: require("@/assets/art/combat/items/head/s2/head_c1.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 41,
		requiredItems: {
			power: 90
		},
	},
	MrJWhit: {
		time: 1,
		name: "MrJWhit's Gas",
		item: "meleeBlunt5",
		icon: require("@/assets/art/shitposting/MrJWhit.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 40,
		requiredItems: {
			power: 90
		},
	},

	wut: {
		time: 1,
		name: "Excuse me, what do you think you are doing you brat.",
		item: "money",
		icon: require("@/assets/art/shitposting/icon.png"),
		xp: 10,
		xpActivated: -500,
		requiredLevel: 51,
		requiredItems: {
			power: 404,
			revParts: 1,
			power: 1,
			wizCrate: 1,
			ticket10: 1,
			mouseCarcass: 1,
			cactus: 1,
			unholywater:1,
			potato: 1,
			mushroomRed: 1,
			orange: 1,
			foodPower1: 1,
			glass: 1,
			uranium: 1,
			burnJunk: 1,
			oil: 1,
			headEpic1: 1,
			capeChemistry: 1,
			neckFanny: 1,
			jumpsuitMedical: 1
		}
	}
}

export const JOB = {
	id: "shitposting",
	name: "Shitposting",
	icon: require("@/assets/art/shitposting/icon.png"),
	color: "#7A5901",
	noJobBlitz: true
}
