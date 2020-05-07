export const ITEMS = new Map([
	["crowbar", {
		name: "Crowbar",
		sellPrice: 1,
		icon: require("@/assets/art/fabrication/crowbar.png")
	}],
	["ripley", {
		name: "R.I.P.L.E.Y.",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/ripleymkii.png")
	}]
]);

export const ACTIONS = {
	fabricateCrowbar: {
		time: 2,
		item: "crowbar",
		icon: require("@/assets/art/fabrication/crowbar.png"),
		xp: 10,
		requiredLevel: 1,
		requiredItems: {
			iron: 1
		}
	},
	fabricateRipley: {
		time: 60,
		item: "ripley",
		icon: require("@/assets/art/fabrication/ripleymkii.png"),
		xp: 2000,
		requiredLevel: 2,
		requiredItems: {
			iron: 100,
			glass: 20,
			silver: 10
		}
	}
}

export const JOB = {
	id: "fabrication",
	name: "Fabrication",
	icon: require("@/assets/art/fabrication/icon.png"),
	color: "#89adac",
	items: ITEMS
}