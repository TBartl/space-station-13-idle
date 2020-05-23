const BASES = {
	oxygen: {
		name: "Oxygen",
		sellPrice: 1,
		icon: require("@/assets/art/chemistry/oxygen.png")
	},
	oil: {
		name: "Oil",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/oil.png")
	}
}

const POTIONS = {
	faunaPerfume: {
		name: "Fauna Perfume",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/faunaPerfume.png"),
		description: "Mining has a chance to yield a special bonus item.",
		potionJob: "mining",
		potionCharges: 5
	},
	lube: {
		name: "SpaceLube",
		sellPrice: 5,
		icon: require("@/assets/art/chemistry/lube.png")
	}
}

export default {
	...BASES,
	...POTIONS
}