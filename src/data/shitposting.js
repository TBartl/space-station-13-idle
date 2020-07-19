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
			power: 98
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
			power: 98
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
			power: 98
		}
	},
	Uristqwerty: {
		time: 1,
		name: "Uristqwerty's Choice",
		item: "iron",
		icon: require("@/assets/art/shitposting/dwarf.png"),
		xp: 0,
		xpActivated: 5,
		requiredLevel: 48,
		requiredItems: {
			power: 98
		},
	},
	wut: {
		time: 1,
		name: "wut",
		item: "money",
		icon: require("@/assets/art/shitposting/icon.png"),
		xp: 10,
		xpActivated: -500,
		requiredLevel: 47,
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
	color: "#7A5901"
}
