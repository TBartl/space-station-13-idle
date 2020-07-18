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
			power: 99
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
			power: 99
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
			power: 99
		}
	},
}

export const JOB = {
	id: "shitposting",
	name: "Shitposting",
	icon: require("@/assets/art/shitposting/icon.png"),
	color: "#7A5901"
}
