const BASES = {
	oxygen: {
		name: "Oxygen",
		sellPrice: 1,
		icon: require("@/assets/art/chemistry/chemOxygen.png")
	},
	oil: {
		name: "Oil",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/chemOil.png")
	},
	water: {
		name: "Water",
		sellPrice: 2,
		icon: require("@/assets/art/chemistry/chemWater.png")
	},
	sacid: {
		name: "Sulpheric Acid",
		sellPrice: -2,
		icon: require("@/assets/art/chemistry/chemAcid.png")
	},
	mercury: {
		name: "Mercury",
		sellPrice: -1,
		icon: require("@/assets/art/chemistry/chemMercury.png")
	},
	lithium: {
		name: "Lithium",
		sellPrice: 2,
		icon: require("@/assets/art/chemistry/chemLithium.png")
	}
}

const POTIONS = {
	potionMining: {
		name: "Fauna Perfume",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/faunaPerfume.png"),
		description: "Mining has a chance to yield a special bonus item.",
		potionJob: "mining",
		potionCharges: 5
	},
	potionEngineering: {
		name: "Energy Drink",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/energy_drink.png"),
		description: "Whenever you get energy from engineering, also get money of the same amount.",
		potionJob: "engineering",
		potionCharges: 5
	},
	potionFabrication: {
		name: "Bluespace Acid",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/beakerbluespace.gif"),
		description: "Fabrication actions cost 30% reduced power.",
		potionJob: "fabrication",
		potionCharges: 5
	},
	potionGraytiding: {
		name: "Thermite",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/thermite.png"),
		description: "Reduces graytiding failure chance by 15%.",
		potionJob: "graytiding",
		potionCharges: 5
	},
	potionTinkering: {
		name: "Super Glue",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/superglue.png"),
		description: "25% chance to obtain one of the kinds of junk not used in a tinkering action.",
		potionJob: "tinkering",
		potionCharges: 5
	},
	potionBotany: {
		name: "Unstable Mutagen",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/plantbgone.png"),
		description: "Plants have a chance to grow an additional plant of that family.",
		potionJob: "botany",
		potionCharges: 5
	},
	potionCooking: {
		name: "Monosodium Glutamate",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "Cooking has a chance to yield a an extra serving.",
		potionJob: "cooking",
		potionCharges: 5
	},
	potionXenobiology: {
		name: "Regenerative Jelly", // TODO: Maybe get a better name- N: Is this better?
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "Xenobiology actions will give a slime of a lower tier.",
		potionJob: "xenobiology",
		potionCharges: 5
	},
	potionChemistry: {
		name: "Volatile Catalyst",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "Basic Chemicals have a chance to require no time to synthesis.",
		potionJob: "chemistry",
		potionCharges: 5
	},
	potionShitposting: {
		name: "Brain Juice",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "You can now actually gain XP in this job.",
		potionJob: "shitposting",
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