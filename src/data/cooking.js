const PASTA_ACTIONS = {
	cookPasta: {
		time: 3,
		name: "Pasta",
		item: "foodPasta1",
		icon: require("@/assets/art/cooking/pasta1.png"),
		xp: 5,
		requiredLevel: 1,
	},
	cookPasta2: {
		time: 3,
		name: "Copy Pasta",
		item: "foodPasta2",
		icon: require("@/assets/art/cooking/pasta2_anim.gif"),
		xp: 10,
		requiredLevel: 10,
		requiredItems: {
			foodPasta1: 2,
		}
	},
	cookPasta3: {
		time: 3,
		name: "Triple Pasta",
		item: "foodPasta3",
		icon: require("@/assets/art/cooking/pasta3.png"),
		xp: 15,
		requiredLevel: 20,
		requiredItems: {
			foodPasta1: 1,
			foodPasta2: 1
		}
	},
	cookPasta4: {
		time: 3,
		name: "Pasta Tower",
		item: "foodPasta4",
		icon: require("@/assets/art/cooking/pasta4.png"),
		xp: 20,
		requiredLevel: 30,
		requiredItems: {
			foodPasta1: 1,
			foodPasta3: 1
		}
	},
	cookPasta5: {
		time: 3,
		name: "InSPIRED Pasta",
		item: "foodPasta5",
		icon: require("@/assets/art/cooking/pasta5.png"),
		xp: 25,
		requiredLevel: 40,
		requiredItems: {
			foodPasta1: 1,
			foodPasta4: 1
		}
	},
	cookPasta6: {
		time: 3,
		name: "Babel Pasta",
		item: "foodPasta6",
		icon: require("@/assets/art/cooking/pasta6.png"),
		xp: 30,
		requiredLevel: 50,
		requiredItems: {
			foodPasta1: 1,
			foodPasta5: 1
		}
	},
}

const PRECISION_ACTIONS = {
	cookPer1: {
		time: 3,
		name: "Hot Potato Stew",
		item: "foodPrecision1",
		icon: require("@/assets/art/cooking/stew1.png"),
		xp: 1,
		requiredLevel: 1,
		requiredItems: {
			pepper: 1,
			potato: 1
		}
	},
	cookPer2: {
		time: 3,
		name: "Tingle Stew",
		item: "foodPrecision2",
		icon: require("@/assets/art/cooking/stew2.png"),
		xp: 6,
		requiredLevel: 15,
		requiredItems: {
			potatoBattery: 1,
			peppercold: 1
		}
	},

	cookPer3: {
		time: 3,
		name: "Dad's Stew",
		item: "foodPrecision3",
		icon: require("@/assets/art/cooking/stew3.png"),
		xp: 12,
		requiredLevel: 29,
		requiredItems: {
			pepperGhost: 1,
			orange: 1
		}
	},
}

const POWER_ACTIONS = {
	cookPow1: {
		time: 3,
		name: "Donkpocket",
		item: "foodPower1",
		icon: require("@/assets/art/cooking/donk1.png"),
		xp: 2,
		requiredLevel: 3,
		requiredItems: {
			tomato: 1,
			mushroom: 1
		}
	},
	cookPow2: {
		time: 3,
		name: "Berrypocket",
		item: "foodPower2",
		icon: require("@/assets/art/cooking/donk2.png"),
		xp: 7,
		requiredLevel: 17,
		requiredItems: {
			tomatoBlue: 1,
			mushroomRed: 1
		}
	},
	cookPow3: {
		time: 3,
		name: "Dankpocket",
		item: "foodPower3",
		icon: require("@/assets/art/cooking/donk3.png"),
		xp: 13,
		requiredLevel: 31,
		requiredItems: {
			tomatoBluespace: 1,
			mushroomShadow: 1
		}
	},
}
const EVASION_ACTIONS = {
	cookEva1: {
		time: 3,
		name: "Cream Pie",
		item: "foodEvasion1",
		icon: require("@/assets/art/cooking/pie1.png"),
		xp: 2,
		requiredLevel: 5,
		requiredItems: {
			banana: 1,
			flowerSun: 1
		}
	},
	cookEva2: {
		time: 3,
		name: "Moonpie",
		item: "foodEvasion2",
		icon: require("@/assets/art/cooking/pie2.png"),
		xp: 8,
		requiredLevel: 19,
		requiredItems: {
			bananaMime: 1,
			flowerMoon: 1
		}
	},
	cookEva3: {
		time: 3,
		name: "Senpai",
		item: "foodEvasion3",
		icon: require("@/assets/art/cooking/pie3.png"),
		xp: 14,
		requiredLevel: 33,
		requiredItems: {
			bananaBlue: 1,
			flowerNova: 1
		}
	},
}

const HUMAN_ACTIONS = {
	cookHuman1: {
		time: 3,
		name: "Spicy Burger",
		item: "foodHuman1",
		icon: require("@/assets/art/cooking/burger1.png"),
		xp: 3,
		requiredLevel: 8,
		requiredItems: {
			foodMeatH: 1,
			pepper: 1
		}
	},
	cookHuman2: {
		time: 3,
		name: "Slippery Burger",
		item: "foodHuman2",
		icon: require("@/assets/art/cooking/burger2.png"),
		xp: 9,
		requiredLevel: 22,
		requiredItems: {
			foodMeatH: 1,
			bananaMime: 1
		}
	},
	cookHuman3: {
		time: 3,
		name: "Blue Burger",
		item: "foodHuman3",
		icon: require("@/assets/art/cooking/burger3.png"),
		xp: 15,
		requiredLevel: 36,
		requiredItems: {
			foodMeatH: 1,
			bananaBlue: 1
		}
	},
	cookHuman4: {
		time: 3,
		name: "Ghost Burger",
		item: "foodHuman4",
		icon: require("@/assets/art/cooking/burger4_anim.gif"),
		xp: 18,
		requiredLevel: 43,
		requiredItems: {
			foodMeatH: 1,
			pepperGhost: 1
		}
	},
}

const ANIMAL_ACTIONS = {
	cookAnimal1: {
		time: 3,
		name: "Pizza",
		item: "foodAnimal1",
		icon: require("@/assets/art/cooking/animal1.png"),
		xp: 4,
		requiredLevel: 10,
		requiredItems: {
			foodMeatA: 1,
			tomato: 1
		}
	},
	cookAnimal2: {
		time: 3,
		name: "Moon Pizza",
		item: "foodAnimal2",
		icon: require("@/assets/art/cooking/animal2.png"),
		xp: 10,
		requiredLevel: 24,
		requiredItems: {
			foodMeatA: 1,
			flowerMoon: 1
		}
	},
	cookAnimal3: {
		time: 3,
		name: "Bluespace Pizza",
		item: "foodAnimal3",
		icon: require("@/assets/art/cooking/animal3.png"),
		xp: 16,
		requiredLevel: 38,
		requiredItems: {
			foodMeatA: 1,
			tomatoBluespace: 1
		}
	},
	cookAnimal4: {
		time: 3,
		name: "Nova Pizza",
		item: "foodAnimal4",
		icon: require("@/assets/art/cooking/animal4.png"),
		xp: 19,
		requiredLevel: 45,
		requiredItems: {
			foodMeatA: 1,
			flowerNova: 1
		}
	},
}

const ALIEN_ACTIONS = {
	cookAlien1: {
		time: 3,
		name: "Fresh 'Shishi'",
		item: "foodAlien1",
		icon: require("@/assets/art/cooking/Alien1.png"),
		xp: 5,
		requiredLevel: 12,
		requiredItems: {
			foodMeatZ: 1,
			potato: 1
		}
	},
	cookAlien2: {
		time: 3,
		name: "Finger Food",
		item: "foodAlien2",
		icon: require("@/assets/art/cooking/Alien2.png"),
		xp: 11,
		requiredLevel: 26,
		requiredItems: {
			foodMeatZ: 1,
			mushroomRed: 1
		}
	},
	cookAlien3: {
		time: 3,
		name: "Fush n Chips",
		item: "foodAlien3",
		icon: require("@/assets/art/cooking/Alien3.png"),
		xp: 17,
		requiredLevel: 40,
		requiredItems: {
			foodMeatZ: 1,
			orange: 1
		}
	},
	cookAlien4: {
		time: 3,
		name: "Fried Friend",
		item: "foodAlien4",
		icon: require("@/assets/art/cooking/Alien4.png"),
		xp: 20,
		requiredLevel: 47,
		requiredItems: {
			foodMeatZ: 1,
			mushroomShadow: 1
		}
	},
}
Object.values(PASTA_ACTIONS).forEach(action => action.type = "PASTA");
Object.values(PRECISION_ACTIONS).forEach(action => action.type = "STEWS");
Object.values(POWER_ACTIONS).forEach(action => action.type = "POCKETS");
Object.values(EVASION_ACTIONS).forEach(action => action.type = "PIES");
Object.values(ANIMAL_ACTIONS).forEach(action => action.type = "PIZZA");
Object.values(HUMAN_ACTIONS).forEach(action => action.type = "BURGERS");
Object.values(ALIEN_ACTIONS).forEach(action => action.type = `EXOTIC`);

export const ACTIONS = {
	...PASTA_ACTIONS,
	...PRECISION_ACTIONS,
	...POWER_ACTIONS,
	...EVASION_ACTIONS,
	...ANIMAL_ACTIONS,
	...HUMAN_ACTIONS,
	...ALIEN_ACTIONS,
}

export const JOB = {
	id: "cooking",
	name: "Cooking",
	icon: require("@/assets/art/cooking/icon.png"),
	color: "#FFFFE0"
}