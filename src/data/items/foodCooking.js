import { cloneDeep } from 'lodash';

let FOOD = {
	foodMeatH: {
		name: "Human Meat",
		sellPrice: 10,
		icon: require("@/assets/art/cooking/meatHuman.png"),
		healAmount: 15,
		stats: {
			maxHealth: 0,
			evasion: -1,
			precision: 2,
			power: -1,
		},
	},
	foodMeatZ: {
		name: "Alien Meat",
		sellPrice: 10,
		icon: require("@/assets/art/cooking/meatAlien.png"),
		healAmount: 15,
		stats: {
			maxHealth: 0,
			evasion: 2,
			precision: -1,
			power: -1,
		},
	},
	foodMeatA: {
		name: "Animal Meat",
		sellPrice: 10,
		icon: require("@/assets/art/cooking/meatAnimal.png"),
		healAmount: 15,
		stats: {
			maxHealth: 0,
			evasion: -1,
			precision: -1,
			power: 2,
		},
	},
	foodPasta1: {
		name: "Pasta",
		sellPrice: 8,
		icon: require("@/assets/art/cooking/pasta1.png"),
		healAmount: 6,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 0,
			power: 0,
		},
	},
	foodPasta2: {
		name: "Double Pasta",
		sellPrice: 45,
		icon: require("@/assets/art/cooking/pasta2.png"),
		healAmount: 12,
		stats: {
			maxHealth: -30,
			evasion: 1,
			precision: 1,
			power: 1,
		},
	},
	foodPasta3: {
		name: "Triple Pasta",
		sellPrice: 113,
		icon: require("@/assets/art/cooking/pasta3.png"),
		healAmount: 18,
		stats: {
			maxHealth: -45,
			evasion: 2,
			precision: 2,
			power: 2,
		},
	},
	foodPasta4: {
		name: "Pasta Tower",
		sellPrice: 211,
		icon: require("@/assets/art/cooking/pasta4.png"),
		healAmount: 24,
		stats: {
			maxHealth: -60,
			evasion: 3,
			precision: 3,
			power: 3,
		},
	},
	foodPasta5: {
		name: "InSPIREd Pasta",
		sellPrice: 338,
		icon: require("@/assets/art/cooking/pasta5.png"),
		healAmount: 30,
		stats: {
			maxHealth: -75,
			evasion: 4,
			precision: 4,
			power: 4,
		},
	},
	foodPasta6: {
		name: "Babel Pasta",
		sellPrice: 496,
		icon: require("@/assets/art/cooking/pasta6.png"),
		healAmount: 36,
		stats: {
			maxHealth: -90,
			evasion: 5,
			precision: 5,
			power: 5,
		},
	},
	foodPrecision1: {
		name: "Hot Potato Stew",
		sellPrice: 20,
		icon: require("@/assets/art/cooking/stew1.png"),
		healAmount: 30,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 10,
			power: -5,
		},
	},
	foodPrecision2: {
		name: "Tingle Stew",
		sellPrice: 102,
		icon: require("@/assets/art/cooking/stew2.png"),
		healAmount: 40,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 10,
			power: -5,
		},
	},
	foodPrecision3: {
		name: "Dad's Soup",
		sellPrice: 171,
		icon: require("@/assets/art/cooking/stew3.png"),
		healAmount: 50,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 10,
			power: -5,
		},
	},
	foodPower1: {
		name: "Donkpocket",
		sellPrice: 26,
		icon: require("@/assets/art/cooking/donk1.png"),
		healAmount: 30,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: -5,
			power: 10,
		},
	},
	foodPower2: {
		name: "Berrypocket",
		sellPrice: 108,
		icon: require("@/assets/art/cooking/donk2.png"),
		healAmount: 40,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: -5,
			power: 10,
		},
	},
	foodPower3: {
		name: "Dankpocket",
		sellPrice: 177,
		icon: require("@/assets/art/cooking/donk3.png"),
		healAmount: 50,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: -5,
			power: 10,
		},
	},
	foodEvasion1: {
		name: "Creampie",
		sellPrice: 31,
		icon: require("@/assets/art/cooking/pie1.png"),
		healAmount: 30,
		stats: {
			maxHealth: 0,
			evasion: 10,
			precision: -5,
			power: -5,
		},
	},
	foodEvasion2: {
		name: "Moonpie",
		sellPrice: 115,
		icon: require("@/assets/art/cooking/pie2.png"),
		healAmount: 40,
		stats: {
			maxHealth: 0,
			evasion: 10,
			precision: -5,
			power: -5,
		},
	},
	foodEvasion3: {
		name: "Senpai",
		sellPrice: 183,
		icon: require("@/assets/art/cooking/pie3.png"),
		healAmount: 50,
		stats: {
			maxHealth: 0,
			evasion: 10,
			precision: -5,
			power: -5,
		},
	},
	foodHuman1: {
		name: "Spicy Burger",
		sellPrice: 48,
		icon: require("@/assets/art/cooking/burger1.png"),
		healAmount: 25,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 5,
			power: 0,
		},
	},
	foodHuman2: {
		name: "Slippery Burger",
		sellPrice: 122,
		icon: require("@/assets/art/cooking/burger2.png"),
		healAmount: 40,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 10,
			power: 0,
		},
	},
	foodHuman3: {
		name: "Blue Burger",
		sellPrice: 160,
		icon: require("@/assets/art/cooking/burger3.png"),
		healAmount: 50,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 10,
			power: 0,
		},
	},
	foodHuman4: {
		name: "Ghost Burger",
		sellPrice: 185,
		icon: require("@/assets/art/cooking/burger4_anim.gif"),
		healAmount: 55,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 8,
			power: 0,
		},
	},
	foodAnimal1: {
		name: "Pizza",
		sellPrice: 63,
		icon: require("@/assets/art/cooking/animal1.png"),
		healAmount: 25,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 0,
			power: 5,
		},
	},
	foodAnimal2: {
		name: "Moon Pizza",
		sellPrice: 111,
		icon: require("@/assets/art/cooking/animal2.png"),
		healAmount: 40,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 0,
			power: 10,
		},
	},
	foodAnimal3: {
		name: "Bluespace Pizza",
		sellPrice: 162,
		icon: require("@/assets/art/cooking/animal3.png"),
		healAmount: 50,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 0,
			power: 10,
		},
	},
	foodAnimal4: {
		name: "Nova Pizza",
		sellPrice: 187,
		icon: require("@/assets/art/cooking/animal4.png"),
		healAmount: 55,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 0,
			power: 8,
		},
	},
	foodAlien1: {
		name: "Fresh 'Shishi'",
		sellPrice: 69,
		icon: require("@/assets/art/cooking/Alien1.png"),
		healAmount: 25,
		stats: {
			maxHealth: 0,
			evasion: 5,
			precision: 0,
			power: 0,
		},
	},
	foodAlien2: {
		name: "Finger Food",
		sellPrice: 122,
		icon: require("@/assets/art/cooking/Alien2.png"),
		healAmount: 40,
		stats: {
			maxHealth: 0,
			evasion: 10,
			precision: 0,
			power: 0,
		},
	},
	foodAlien3: {
		name: "Fush n Chips",
		sellPrice: 168,
		icon: require("@/assets/art/cooking/Alien3.png"),
		healAmount: 50,
		stats: {
			maxHealth: 0,
			evasion: 10,
			precision: 0,
			power: 0,
		},
	},
	foodAlien4: {
		name: "Fried Friend",
		sellPrice: 197,
		icon: require("@/assets/art/cooking/Alien4.png"),
		healAmount: 55,
		stats: {
			maxHealth: 0,
			evasion: 8,
			precision: 0,
			power: 0,
		},
	},
}

let premiumFoodEntries = Object.entries(FOOD).map(entry => {
	let originalId = entry[0];
	let originalItem = entry[1];

	let newFood = cloneDeep(originalItem);
	newFood.name = "Quality " + newFood.name;
	newFood.healAmount = Math.round(newFood.healAmount * 1.3);
	newFood.sellPrice *= 2;
	for (let statId of Object.keys(newFood.stats)) {
		if (newFood.stats[statId] > 0)
			newFood.stats[statId] = Math.round(newFood.stats[statId] * 1.5);
	}
	return ["q_" + originalId, newFood];
});

FOOD = Object.assign(FOOD, Object.fromEntries(premiumFoodEntries));

export default FOOD;