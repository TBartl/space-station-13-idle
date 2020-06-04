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
	potionMine: {
		name: "Fauna Perfume",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/faunaPerfume.png"),
		description: "Mining has a chance to yield a special bonus item.",
		potionJob: "mining",
		potionCharges: 5
	},
	potionEngi: {
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
	potionTide: {
		name: "Thermite",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "Damage from failed greytiding actions is avoided.",
		potionJob: "greytiding",
		potionCharges: 5
	},
	potionTinker: {
		name: "Super Glue",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "Mining has a chance to yield a special bonus item.",
		potionJob: "tinkering",
		potionCharges: 5
	},
	potionBotany: {
		name: "Unstable Mutagen",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
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
	potionXeno: {
		name: "Regenerative Jelly", // TODO: Maybe get a better name- N: Is this better?
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "Xenobiology actions will give a slime of a lower tier.",
		potionJob: "xenobiology",
		potionCharges: 5
	},
	potionChem: {
		name: "Volatile Catalyst",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "Basic Chemicals have a chance to require no time to synthesis.",
		potionJob: "chemistry",
		potionCharges: 5
	},
	potionShit: {
		name: "Brain Juice",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/placeholderChem.png"),
		description: "You can now actually gain XP in this job.",
		potionJob: "shitposting",
		potionCharges: 5
	},
	unstableMutagen: {
		name: "Unstable Mutagen",
		sellPrice: 3,
		icon: require("@/assets/art/chemistry/unstableMutagen.png"),
		description: "Botany actions have a 30% chance to also grow a plant of a higher tier.",
		potionJob: "botany",
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