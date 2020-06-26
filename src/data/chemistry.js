const BASES = {
	synthOxygen: {
		item: "oxygen",
		time: 1,
		xp: .1,
		requiredLevel: 1,
		requiredItems: {
			power: 1
		}
	},
	synthOil: {
		item: "oil",
		time: 1,
		xp: .1,
		requiredLevel: 1,
		requiredItems: {
			power: 1
		}
	},
	synthWater: {
		item: "water",
		time: 1,
		xp: .1,
		requiredLevel: 1,
		requiredItems: {
			power: 1
		}
	},
	synthSacid: {
		item: "sacid",
		time: 1,
		xp: .1,
		requiredLevel: 1,
		requiredItems: {
			power: 1
		}
	},
	synthMercury: {
		item: "mercury",
		time: 1,
		xp: .1,
		requiredLevel: 1,
		requiredItems: {
			power: 1
		}
	},
	synthLithium: {
		item: "lithium",
		time: 1,
		xp: .1,
		requiredLevel: 1,
		requiredItems: {
			power: 1
		}
	},
}

const POTIONS = {
	synthPotionMining: {
		item: "potionMining",
		time: 2,
		xp: 1,
		requiredLevel: 5,
		requiredItems: {
			oxygen: 1,
			oil: 2,
			iron: 1
		}
	},
	synthPotionEngineering: {
		item: "potionEngineering",
		time: 2,
		xp: 2,
		requiredLevel: 10,
		requiredItems: {
			water: 1,
			sacid: 1,
			lithium: 1,
			power: 1
		}
	},
	synthPotionChem: {
		item: "potionChemistry",
		time: 2,
		xp: 3,
		requiredLevel: 15,
		requiredItems: {
			oxygen: 2,
			oil: 2,
			water: 2,
			sacid: 2,
			mercury: 2,
			lithium: 2,
		}
	},
	synthPotionFabrication: {
		item: "potionFabrication",
		time: 2,
		xp: 4,
		requiredLevel: 20,
		requiredItems: {
			oil: 1,
			lithium: 2,
			iron: 1
		}
	},
	synthPotionTinkering: {
		item: "potionTinkering",
		time: 2,
		xp: 5,
		requiredLevel: 25,
		requiredItems: {
			oxygen: 1,
			oil: 2,
			water: 1,
			sacid: 1,
			mercury: 1,
			lithium: 1,
			iron: 1
		}
	},
	synthPotionBotany: {
		item: "potionBotany",
		time: 2,
		xp: 6,
		requiredLevel: 30,
		requiredItems: {
			sacid: 1,
			mercury: 2,
			plantSeed: 1
		}
	},
	synthPotionCooking: {
		item: "potionCooking",
		time: 2,
		xp: 7,
		requiredLevel: 35,
		requiredItems: {
			oxygen: 1,
			mercury: 2,
			foodPasta1: 1
		}
	},
	synthPotionXenobiology: {
		item: "potionXenobiology",
		time: 2,
		xp: 8,
		requiredLevel: 40,
		requiredItems: {
			oxygen: 1,
			oil: 1,
			mercury: 1,
			iron: 1
		}
	},
	synthPotionGraytiding: {
		item: "potionGraytiding",
		time: 2,
		xp: 9,
		requiredLevel: 45,
		requiredItems: {
			oxygen: 1,
			oil: 1,
			mercury: 1,
			junk: 1
		}
	},
	synthPotionShitposting: {
		item: "potionShitposting",
		time: 2,
		xp: 10,
		requiredLevel: 50,
		requiredItems: {
			water: 2,
			lithium: 1,
			iron: 1,
			peanut: 1
		}
	},
}

Object.values(BASES).forEach(action => action.type = "bases");
Object.values(POTIONS).forEach(action => action.type = "chems");

export const ACTIONS = {
	...BASES,
	...POTIONS
}

export const JOB = {
	id: "chemistry",
	name: "Chemistry",
	icon: require("@/assets/art/chemistry/icon.png"),
	color: "#FFAE19",
}
