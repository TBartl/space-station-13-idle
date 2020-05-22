export const ITEMS = {
	peanut: {
		name: "Internet Points",
		sellPrice: -10,
		icon: require("@/assets/art/shitposting/brain.png")
	}
}

export const ACTIONS = {
	postPeanuts: {
		time: 1,
		name: "Peanut Posting",
		item: "peanut",
		icon: require("@/assets/art/shitposting/brain.png"),
		xp: 0,
		requiredLevel: 1,
		requiredItems: {
			power: 100
		}
	},
}

export const JOB = {
	id: "shitposting",
	name: "Shitposting",
	icon: require("@/assets/art/shitposting/icon.png"),
	color: "#7A5901",
	items: ITEMS
}
