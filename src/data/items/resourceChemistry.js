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
		name: "Sulphuric Acid",
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

export const FABRICATION_POTION_PERCENT = .3;
export const GRAYTIDING_POTION_PERCENT = .15;
export const TINKERING_POTION_PERCENT = .15;
export const BOTANY_POTION_PERCENT = .3;
export const COOKING_POTION_PERCENT = .25;

const POTIONS = {
	potionMining: {
		name: "Fauna Perfume",
		sellPrice: 9,
		icon: require("@/assets/art/chemistry/faunaPerfume.png"),
		description: "Mining has a chance to yield a special bonus item.",
		potionJob: "mining",
		potionCharges: 5
	},
	potionGraytiding: {
		name: "Thermite",
		sellPrice: 31,
		icon: require("@/assets/art/chemistry/thermite.png"),
		description: `Reduces graytiding failure chance by ${GRAYTIDING_POTION_PERCENT * 100}%.`,
		potionJob: "graytiding",
		potionCharges: 25
	},
	potionChemistry: {
		name: "Volatile Catalyst",
		sellPrice: 55,
		icon: require("@/assets/art/chemistry/volatile.png"),
		description: "Removes the level requirement from chemistry actions.",
		potionJob: "chemistry",
		potionCharges: 5
	},
	potionBotany: {
		name: "Unstable Mutagen",
		sellPrice: 67,
		icon: require("@/assets/art/chemistry/plantbgone.png"),
		description: `Plants have a ${BOTANY_POTION_PERCENT * 100} chance to grow an additional plant of that family.`,
		potionJob: "botany",
		potionCharges: 5
	},
	potionEngineering: {
		name: "Energy Drink",
		sellPrice: 79,
		icon: require("@/assets/art/chemistry/energy_drink.png"),
		description: "Whenever you get energy from engineering, also get money of the same amount.",
		potionJob: "engineering",
		potionCharges: 5
	},
	potionTinkering: {
		name: "Super Glue",
		sellPrice: 99,
		icon: require("@/assets/art/chemistry/superglue.png"),
		description: `${TINKERING_POTION_PERCENT * 100}% chance to obtain one of the kinds of junk not used in a tinkering action.`,
		potionJob: "tinkering",
		potionCharges: 5
	},
	potionXenobiology: {
		name: "Splitting Agent",
		sellPrice: 114,
		icon: require("@/assets/art/chemistry/splittingagent.gif"),
		description: "Xenobiology actions will also give a slime of a lower tier.",
		potionJob: "xenobiology",
		potionCharges: 5
	},
	potionCooking: {
		name: "Monosodium Glutamate",
		sellPrice: 168,
		icon: require("@/assets/art/chemistry/ketchup.png"),
		description: `Cooking has an additional ${COOKING_POTION_PERCENT * 100}% chance to yield a quality item.`,
		potionJob: "cooking",
		potionCharges: 5
	},
	potionFabrication: {
		name: "Bluespace Acid",
		sellPrice: 208,
		icon: require("@/assets/art/chemistry/beakerbluespace.gif"),
		description: `Fabrication actions cost ${FABRICATION_POTION_PERCENT * 100}% reduced power.`,
		potionJob: "fabrication",
		potionCharges: 15
	},
	potionShitposting: {
		name: "Brain Juice",
		sellPrice: -37,
		icon: require("@/assets/art/chemistry/brainjuice.png"),
		description: "Allows you to gain additional XP when completing ??? actions",
		potionJob: "shitposting",
		potionCharges: 5
	}
}

const PILLS = {
	pillMeth: {
		name: "Methamphetamine",
		sellPrice: 4,
		icon: require("@/assets/art/combat/items/pill1.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: -10,
			evasion: 0,
			precision: 5,
			power: 0,
		}
	},
	pillSpacedrugs: {
		name: "Crank",
		sellPrice: 6,
		icon: require("@/assets/art/combat/items/pill2.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: -10,
			evasion: 0,
			precision: 0,
			power: 5,
		}
	},
	pillPumpup: {
		name: "Pump-Up",
		sellPrice: 7,
		icon: require("@/assets/art/combat/items/pill3.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: -25,
			evasion: 5,
			precision: -5,
			power: 5,
		}
	},
	pillKrokodil: {
		name: "Krokodil",
		sellPrice: 9,
		icon: require("@/assets/art/combat/items/pill4.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: -50,
			evasion: -5,
			precision: 5,
			power: 5,
		}
	},
	pillSpacelube: {
		name: "Space Lube",
		sellPrice: 10,
		icon: require("@/assets/art/combat/items/pill5.png"),
		description: "It may taste like cherry, but you don't eat this one.",
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 5,
			precision: 0,
			power: 0,
		}
	}
}

export const RESOURCE_CHEMISTRY = {
	...BASES,
	...POTIONS,
	...PILLS
}