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
			glass: 1
		}
	},
	synthPotionGraytiding: {
		item: "potionGraytiding",
		time: 2,
		requiredItems: {
			oxygen: 1,
			oil: 1,
			mercury: 1,
			burnJunk: 1
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
			glass: 1
		}
	},
	synthPotionXenobiology: {
		item: "potionXenobiology",
		time: 2,
		requiredItems: {
			oxygen: 2,
			oil: 2,
			mercury: 4,
			slimeGray: 1
		}
	},
	synthPotionCooking: {
		item: "potionCooking",
		time: 2,
		requiredItems: {
			oxygen: 3,
			sacid: 8,
			foodPasta1: 1
		}
	},
	synthPotionFabrication: {
		item: "potionFabrication",
		time: 2,
		requiredItems: {
			oil: 3,
			lithium: 4,
			pillSpacelube: 1
		}
	},
	synthPotionShitposting: {
		item: "potionShitposting",
		time: 2,
		requiredItems: {
			sacid: 7,
			mercury: 3,
			peanut: 1
		}
	},
}

const PILL_COUNT = 20;
const PILLS = {
	synthPillCommand: {
		items: {
			id: "pillHappy",
			count: PILL_COUNT*1.25
		},
		sellPrice: 50,
		icon: require("@/assets/art/combat/items/pill5.png"),
		time: 2,
		requiredItems: {
			lithium: 2,
			power: 1
		}
	},
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
			sacid: 2,
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
			sacid: 4

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
			oil: 3,
			water: 2,
		}
	},
}

const MIN_LEVEL = 1;
Object.values(BASES).forEach(action => action.type = "bases");
Object.values(POTIONS).forEach((action, index) => {
	action.type = "chems";

	let level = Math.round(MIN_LEVEL + index / (Object.values(POTIONS).length - 1) * (MAX_LEVEL - MIN_LEVEL));

	action.requiredLevel = level;
	action.xp = Math.max(2, 5 * level / 10);
});
Object.values(PILLS).forEach((action, index) => {
	action.type = "pills";

	let minLevel = 8;

	let level = Math.round(minLevel + index / (Object.values(PILLS).length - 1) * (MAX_LEVEL - minLevel - 1));

	action.requiredLevel = level;
	action.xp = 5 * level / 10;
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
