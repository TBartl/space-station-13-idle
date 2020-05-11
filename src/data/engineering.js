export const ITEMS = new Map([
	["power", {
		name: "Power",
		sellPrice: 0,
		icon: require("@/assets/art/engineering/power.png")
	}],
]);	

export const ACTIONS = {
	engBike: {
		time: 1,
		name: "Stationary Bicycle",
		item: "power",
		icon: require("@/assets/art/engineering/bicycle.png"),
		xp: 5,
		requiredLevel: 1
	},
}

export const JOB = {
	id: "engineering",
	name: "Engineering",
	icon: require("@/assets/art/engineering/icon.png"),
	color: "#FFDB00",
	items: ITEMS
}
