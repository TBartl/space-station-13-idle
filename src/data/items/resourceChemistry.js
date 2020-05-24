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
	faunaPerfume: {
		name: "Fauna Perfume",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/faunaPerfume.png"),
		description: "Mining has a chance to yield a special bonus item.",
		potionJob: "mining",
		potionCharges: 5
	},
	energyDrink: {
		name: "Energy Drink",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/energy_drink.png"),
		description: "Whenever you get energy from engineering, also get money of the same amount.",
		potionJob: "engineering",
		potionCharges: 5
	},
	splittingAgent: {
		name: "Splitting Agent", // TODO: Maybe get a better name
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "Xenobiology actions will give a slime of a lower tier.",
		potionJob: "xenobiology",
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