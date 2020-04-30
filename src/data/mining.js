export const ITEMS = {
	copperOre: {
		name: "Copper Ore",
		sellPrice: 1
	}
}

export const ACTIONS = {
	mineCopper: {
		time: 1.5,
		item: "copperOre"
	},
	mineCopper1: {
		time: 1.5,
		item: "copperOre"
	},
	mineCopper2: {
		time: 1.5,
		item: "copperOre"
	}
}

export const JOB = {
	id: "mining",
	name: "Mining",
	icon: require("@/assets/art/mining/icon.png"),
	color: "#95857a",
	items: ITEMS
}