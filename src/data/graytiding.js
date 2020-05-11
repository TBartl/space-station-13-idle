export const ITEMS = new Map([
]);

export const ACTIONS = {
	graytideIron: {
		time: 1.5,
		item: "iron",
		icon: require("@/assets/art/mining/OreIron.png"),
		xp: 5,
		requiredLevel: 1
	}
}

export const JOB = {
	id: "graytiding",
	name: "Graytiding",
	icon: require("@/assets/art/graytiding/icon.png"),
	color: "#B0B0B0",
	items: ITEMS
}