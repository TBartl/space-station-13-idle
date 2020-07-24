export default {
	plantSeed: { // Not food, but it makes sense to put this here
		name: "Plant Seeds",
		sellPrice: 25,
		icon: require("@/assets/art/botany/seed.png"),
	},
	potato: {
		name: "Potato",
		sellPrice: 5,
		icon: require("@/assets/art/botany/PlantPotato.png"),
		healAmount: 10,
		stats: {
			power: 2,
			bruteProtection: 5,
		},
	},
	tomato: {
		name: "Tomato",
		sellPrice: 5,
		icon: require("@/assets/art/botany/PlantTomato.png"),
		healAmount: 10,
		stats: {
			precision: 2,
			bruteProtection: 5,
		},
	},
	banana: {
		name: "Banana",
		sellPrice: 14,
		icon: require("@/assets/art/botany/PlantBanana.png"),
		healAmount: 10,
		stats: {

			evasion: 2,
			bruteProtection: 5,
		},
	},
	flowerSun: {
		name: "Sunflower",
		sellPrice: 14,
		icon: require("@/assets/art/botany/PlantFlowersun.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: 2,
			burnProtection: 5,
		},
	},
	mushroom: {
		name: "Glowshroom",
		sellPrice: 25,
		icon: require("@/assets/art/botany/PlantShroomglow.png"),
		healAmount: 10,
		stats: {
			precision: 2,
			burnProtection: 5,
		},
	},
	pepper: {
		name: "Hot Pepper",
		sellPrice: 25,
		icon: require("@/assets/art/botany/PlantPepperhot.png"),
		healAmount: 10,
		stats: {
			power: 2,
			burnProtection: 5,
		},
	},
	potatoBattery: {
		name: "Potato Battery",
		sellPrice: 35,
		icon: require("@/assets/art/botany/PlantPotatobattery.png"),
		healAmount: 20,
		stats: {
			power: 3,
			bruteProtection: 5,
		},
	},
	tomatoBlue: {
		name: "Blue Tomato",
		sellPrice: 35,
		icon: require("@/assets/art/botany/PlantTomatoblue.png"),
		healAmount: 20,
		stats: {
			precision: 3,
			bruteProtection: 5,
		},
	},
	bananaMime: {
		name: "...",
		sellPrice: 42,
		icon: require("@/assets/art/botany/PlantBananamime.png"),
		healAmount: 20,
		stats: {
			evasion: 3,
			bruteProtection: 5,
		},
	},
	flowerMoon: {
		name: "Moonflower",
		sellPrice: 42,
		icon: require("@/assets/art/botany/PlantFlowermoon.png"),
		healAmount: 20,
		stats: {
			evasion: 3,
			burnProtection: 5,
		},
	},
	mushroomRed: {
		name: "Glowcap",
		sellPrice: 48,
		icon: require("@/assets/art/botany/PlantShroomred.png"),
		healAmount: 20,
		stats: {
			precision: 3,
			burnProtection: 5,
		},
	},
	peppercold: {
		name: "Ice Pepper",
		sellPrice: 48,
		icon: require("@/assets/art/botany/PlantPeppercold.png"),
		healAmount: 20,
		stats: {
			power: 3,
			burnProtection: 5,
		},
	},
	orange: {
		name: "Orange",
		sellPrice: 49,
		icon: require("@/assets/art/botany/PlantOrange.png"),
		healAmount: 30,
		stats: {
			power: 4,
			bruteProtection: 5,
		},
	},
	tomatoBluespace: {
		name: "Bluespace Tomato",
		sellPrice: 49,
		icon: require("@/assets/art/botany/PlantTomatobluespace_anim.gif"),
		healAmount: 30,
		stats: {
			precision: 4,
			bruteProtection: 5
		},
	},
	bananaBlue: {
		name: "Blue Banana",
		sellPrice: 53,
		icon: require("@/assets/art/botany/PlantBananablue.png"),
		healAmount: 30,
		stats: {
			evasion: 4,
			bruteProtection: 5
		},
	},
	flowerNova: {
		name: "Novaflower",
		sellPrice: 53,
		icon: require("@/assets/art/botany/PlantFlowernova.png"),
		healAmount: 30,
		stats: {
			evasion: 4,
			burnProtection: 5
		},
	},
	mushroomShadow: {
		name: "Shadowshroom",
		sellPrice: 57,
		icon: require("@/assets/art/botany/PlantShroomshadow.png"),
		healAmount: 30,
		stats: {
			precision: 4,
			burnProtection: 5
		},
	},
	pepperGhost: {
		name: "Ghost Pepper",
		sellPrice: 57,
		icon: require("@/assets/art/botany/PlantPepperghost.png"),
		healAmount: 30,
		stats: {
			power: 4,
			burnProtection: 5
		},
	},
	orange3d: {
		name: "Multidimensional Orange",
		description: 'Looking at this makes your head hurt',
		sellPrice: 61,
		icon: require("@/assets/art/botany/PlantOrange3d_anim.gif"),
		healAmount: 40,
		stats: {
			regen: -.5,
			evasion: 5,
			precision: 5,
			power: 5,
			protection: 5
		},
	}
}