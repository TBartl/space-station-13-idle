import { MAX_LEVEL } from "@/data/experience";

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
		requiredItems: {
			oxygen: 1,
			oil: 2,
			iron: 1
		}
	},
	synthPotionGraytiding: {
		item: "potionGraytiding",
		time: 2,
		requiredItems: {
			oxygen: 1,
			oil: 1,
			mercury: 1,
			junk: 1
		}
	},
	synthPotionChem: {
		item: "potionChemistry",
		time: 2,
		requiredItems: {
			oxygen: 2,
			oil: 2,
			water: 2,
			sacid: 2,
			mercury: 2,
			lithium: 2,
		}
	},
	synthPotionBotany: {
		item: "potionBotany",
		time: 2,
		requiredItems: {
			sacid: 1,
			mercury: 2,
			plantSeed: 1
		}
	},
	synthPotionEngineering: {
		item: "potionEngineering",
		time: 2,
		requiredItems: {
			water: 1,
			sacid: 1,
			lithium: 1,
			power: 1
		}
	},
	synthPotionTinkering: {
		item: "potionTinkering",
		time: 2,
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
	synthPotionXenobiology: {
		item: "potionXenobiology",
		time: 2,
		requiredItems: {
			oxygen: 1,
			oil: 1,
			mercury: 1,
			iron: 1
		}
	},
	synthPotionCooking: {
		item: "potionCooking",
		time: 2,
		requiredItems: {
			oxygen: 1,
			mercury: 2,
			foodPasta1: 1
		}
	},
	synthPotionFabrication: {
		item: "potionFabrication",
		time: 2,
		requiredItems: {
			oil: 1,
			lithium: 2,
			iron: 1
		}
	},
	synthPotionShitposting: {
		item: "potionShitposting",
		time: 2,
		requiredItems: {
			water: 2,
			lithium: 1,
			iron: 1,
			peanut: 1
		}
	},
}

const PILL_COUNT = 20;
const PILLS = {
	synthPillMeth: {
		items: {
			id: "pillMeth",
			count: PILL_COUNT
		},
		sellPrice: 50,
		icon: require("@/assets/art/combat/items/pill1.png"),
		time: 2,
		requiredItems: {
			oxygen: 1,
			water: 1,
			sacid: 1
		}
	},
	synthPillSpacedrugs: {
		items: {
			id: "pillSpacedrugs",
			count: PILL_COUNT
		},
		sellPrice: 40,
		icon: require("@/assets/art/combat/items/pill2.png"),
		time: 2,
		requiredItems: {
			water: 1,
			mercury: 1,
			lithium: 1,
		}
	},
	sythnPillPumpup: {
		items: {
			id: "pillPumpup",
			count: PILL_COUNT
		},
		sellPrice: 25,
		icon: require("@/assets/art/combat/items/pill3.png"),
		time: 2,
		requiredItems: {
			oxygen: 1,
			oil: 1,
			sacid: 1,
		}
	},
	sythnPillKrokodil: {
		items: {
			id: "pillKrokodil",
			count: PILL_COUNT
		},
		sellPrice: 10,
		icon: require("@/assets/art/combat/items/pill4.png"),
		time: 2,
		requiredItems: {
			sacid: 3

		}
	},
	sythnPillSpacelube: {
		items: {
			id: "pillSpacelube",
			count: PILL_COUNT
		},
		sellPrice: 20,
		icon: require("@/assets/art/chemistry/lube.png"),
		time: 2,
		requiredItems: {
			oil: 2,
			water: 1,
		}
	},
}

const MIN_LEVEL = 1;
Object.values(BASES).forEach(action => action.type = "bases");
Object.values(POTIONS).forEach((action, index) => {
	action.type = "chems";

	let level = Math.round(MIN_LEVEL + index / (Object.values(POTIONS).length - 1) * (MAX_LEVEL - MIN_LEVEL));

	action.requiredLevel = level;
	action.xp = Math.max(.35, level / 5);
});
Object.values(PILLS).forEach((action, index) => {
	action.type = "pills";

	let minLevel = 20;

	let level = Math.round(minLevel + index / (Object.values(PILLS).length - 1) * (MAX_LEVEL - minLevel));

	action.requiredLevel = level;
	action.xp = Math.max(.35, level / 5);
});

export const ACTIONS = {
	...BASES,
	...POTIONS,
	...PILLS
}

export const JOB = {
	id: "chemistry",
	name: "Chemistry",
	icon: require("@/assets/art/chemistry/icon.png"),
	color: "#FFAE19",
}
