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
	synthFaunaPerfume: {
		item: "potionMine",
		time: 2,
		xp: 1,
		requiredLevel: 5,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthPotionEngi: {
		item: "potionEngi",
		time: 2,
		xp: 2,
		requiredLevel: 10,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthPotionFabrication: {
		item: "potionEngi",
		time: 2,
		xp: 3,
		requiredLevel: 15,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthPotionTide: {
		item: "potionEngi",
		time: 2,
		xp: 4,
		requiredLevel: 20,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthPotionTinker: {
		item: "potionTinker",
		time: 2,
		xp: 5,
		requiredLevel: 25,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthPotionBotany: {
		item: "potionBotany",
		time: 2,
		xp: 6,
		requiredLevel: 30,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthPotionCook: {
		item: "potionCooking",
		time: 2,
		xp: 7,
		requiredLevel: 35,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthPotionXeno: {
		item: "potionXeno",
		time: 2,
		xp: 8,
		requiredLevel: 40,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthPotionChem: {
		item: "potionChem",
		time: 2,
		xp: 9,
		requiredLevel: 45,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthPotionShit: {
		item: "potionShit",
		time: 2,
		xp: 10,
		requiredLevel: 50,
		requiredItems: {
			lube: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthLube: {
		time: 3,
		item: "lube",
		xp: 5,
		requiredLevel: 1,
		requiredItems: {
			power: 10
		}
	}
}

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
