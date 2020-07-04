const SLIMES = {
	slimeGray: {
		name: "Gray Slime",
		sellPrice: 3,
		icon: require("@/assets/art/xenobio/SlimeGrey.gif"),
		tier: 1,
		stats: {
			maxHealth: 50
		}
	},
	slimeOrange: {
		name: "Orange Slime",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimeOrange.gif"),
		tier: 2
	},
	slimePurple: {
		name: "Purple Slime",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimePurple.gif"),
		tier: 2
	},
	slimeBlue: {
		name: "Blue Slime",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimeBlue.gif"),
		tier: 2
	},
	slimeMetal: {
		name: "Metal Slime",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimeMetal.gif"),
		tier: 2
	},
	slimeYellow: {
		name: "Yellow Slime",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeYellow.gif"),
		tier: 3
	},
	slimeDarkPurple: {
		name: "Dark Purple Slime",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeDarkPurple.gif"),
		tier: 3
	},
	slimeDarkBlue: {
		name: "Dark Blue Slime",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeDarkBlue.gif"),
		tier: 3
	},
	slimeSilver: {
		name: "Silver Slime",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeSilver.gif"),
		tier: 3
	},
	slimeBluespace: {
		name: "Bluespace Slime",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimeBluespace.gif"),
		tier: 4
	},
	slimeSepia: {
		name: "Sepia Slime",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimeSepia.gif"),
		tier: 4
	},
	slimeCerulean: {
		name: "Cerulean Slime",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimeCerulean.gif"),
		tier: 4
	},
	slimePyrite: {
		name: "Pyrite Slime",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimePyrite.gif"),
		tier: 4
	},
	slimeRed: {
		name: "Red Slime",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimeRed.gif"),
		tier: 5
	},
	slimeGreen: {
		name: "Green Slime",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimeGreen.gif"),
		tier: 5
	},
	slimePink: {
		name: "Pink Slime",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimePink.gif"),
		tier: 5
	},
	slimeGold: {
		name: "Gold Slime",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimeGold.gif"),
		tier: 5
	},
	slimeOil: {
		name: "Oil Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeOil.gif"),
		tier: 6
	},
	slimeBlack: {
		name: "Black Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeBlack.gif"),
		tier: 6
	},
	slimeLightPink: {
		name: "Light Pink Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeLightPink.gif"),
		tier: 6
	},
	slimeAddy: {
		name: "Adamantite Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeAddy.gif"),
		tier: 6
	},
	slimeRainbow: {
		name: "Rainbow Slime",
		sellPrice: 500,
		icon: require("@/assets/art/xenobio/SlimeRainbow.gif"),
		tier: 7,
		stats: {
			precision: 10,
			power: 10,
			protection: 10,
			evasion: 10,
			maxHealth: 100
		}
	},
	companionMouse: {
		name: "Pet Mouse",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		tier: 0,
		stats: {
			evasion: 5,
			maxHealth: 50
		}
	},
	companionDog: {
		name: "Pet Corgi",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/Ian.png"),
		tier: 0,
		stats: {
			precision: 5,
			maxHealth: 50
		}
	},
	companionGoat: {
		name: "Pet Goat",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/pete.png"),
		tier: 0,
		stats: {
			power: 5,
			maxHealth: 50
		}
	},
	companionBee: {
		name: "Pet Bee",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/bee_anim.gif"),
		tier: 0,
		stats: {
			protection: 1,
			precision: 1,
			evasion: 1,
			power: 1,
			maxHealth: 50
		}
	},
	companionMining: {
		name: "Mine Bot",
		sellPrice: 300,
		icon: require("@/assets/art/xenobio/CompanionMining.png"),
		tier: 0,
		stats: {
			protection: 5,
			maxHealth: 100
		}
	},
	companionKillerTomato: {
		name: "Killer Tomato",
		sellPrice: 83,
		icon: require("@/assets/art/botany/PlantTomatokiller.png"),
		tier: 11,
		stats: {
			maxHealth: -90,
			evasion: 5,
			precision: 5,
			power: 5,
		},
	}
}
Object.values(SLIMES).forEach((slime, index) => {
	slime.equipmentSlot = "companion";
	slime.fleeChance = 10 + slime.tier * 10;

	// Some slimes have custom stats set
	if (slime.stats) return;

	let mod = (index - 1) % 8;

	if (mod == 0) {
		slime.stats = {
			maxHealth: (slime.tier) * 15,
			burnProtection: (slime.tier - 1) * 4
		}
	}
	else if (mod == 1) {
		slime.stats = {
			maxHealth: (slime.tier) * 5,
			moveTime: -1,
		}
	}
	else if (mod == 2) {
		slime.stats = {
			maxHealth: (slime.tier) * 15,
			moveTime: 1,
		}
	}
	else if (mod == 3) {
		slime.stats = {
			maxHealth: (slime.tier) * 15,
			bruteProtection: (slime.tier - 1) * 4
		}
	}
	else if (mod == 4) {
		slime.description = "Changes your weapon's damage type"
		slime.stats = {
			maxHealth: (slime.tier) * 10,
			damageType: "burn"
		}
	}
	else if (mod == 5) {
		slime.description = "Changes your weapon's attack speed"
		slime.stats = {
			maxHealth: (slime.tier) * 10,
			attackSpeed: 2 - (slime.tier / 10)
		}
	}
	else if (mod == 6) {
		slime.description = "Changes your weapon's attack speed"
		slime.stats = {
			maxHealth: (slime.tier) * 10,
			attackSpeed: 3 + (slime.tier / 10)
		}
	}
	else if (mod == 7) {
		slime.description = "Changes your weapon's damage type"
		slime.stats = {
			maxHealth: (slime.tier) * 10,
			damageType: "brute"
		}
	}

});
export default SLIMES;