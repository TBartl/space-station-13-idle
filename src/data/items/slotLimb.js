export default {
	limbBoxing: {
		name: "Boxing Gloves",
		sellPrice: 800,
		icon: require("@/assets/art/combat/items/limb/glove_boxing.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/glove_boxing_overlay.png"),
		stats: {
			maxHealth: 30,
			precision: 5,
			power: 0,
			evasion: 0,
			protection: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	limbMagkrava: {
		name: "Mag Krava Gloves",
		sellPrice: 800,
		icon: require("@/assets/art/combat/items/limb/glove_fightgloves.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/glove_fightgloves_overlay.png"),
		stats: {
			maxHealth: 30,
			precision: 3,
			power: 2,
			evasion: 0,
			protection: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	limbNitrile: {
		name: "Nitrile Gloves",
		sellPrice: 800,
		icon: require("@/assets/art/combat/items/limb/glove_nitrile.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/glove_nitrile_overlay.png"),
		stats: {
			maxHealth: 50,
			precision: 3,
			power: 0,
			evasion: 0,
			protection: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	limbInsuls: {
		name: "Insulated Gloves",
		sellPrice: 800,
		icon: require("@/assets/art/combat/items/limb/glove_yellow.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/glove_yellow_overlay.png"),
		stats: {
			maxHealth: 30,
			precision: 3,
			power: 0,
			evasion: 0,
			protection: 2,
		},
		requires: {
			evasion: 10,
		}
	},

	limbCapt: {
		name: "Captain's Gloves",
		sellPrice: 800,
		icon: require("@/assets/art/combat/items/limb/glove_captain.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/glove_captain_overlay.png"),
		stats: {
			maxHealth: 30,
			precision: 3,
			power: 0,
			evasion: 0,
			protection: 1,
			command: 5
		},
		requires: {
			evasion: 10,
		}
	},
	limbNinja: {
		name: "Ninja Gloves",
		sellPrice: 800,
		icon: require("@/assets/art/combat/items/limb/glove_ninja.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/glove_ninja_overlay.png"),
		stats: {
			maxHealth: 30,
			precision: 3,
			power: 0,
			evasion: 3,
			command: -5,
		},
		requires: {
			evasion: 10,
		}
	},
	limbClownShoes: {
		name: "Clown Shoes",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/limb/shoe_clown.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/shoe_clown_overlay.png"),
		stats: {
			maxHealth: 200,
			precision: -14,
			power: 5,
			evasion: 5,
			protection: 0,
		},
		requires: {
			evasion: 40,
		}
	},
	limbBronze: {
		name: "Bronze Clockwork Treads",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/limb/shoe_clockwork.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/shoe_clockwork_overlay.png"),
		stats: {
			maxHealth: 60,
			precision: 0,
			power: 2,
			evasion: 2,
			protection: 6,
		},
		requires: {
			evasion: 40,
		}
	},
	limbMagBoots: {
		name: "Magnetic Boots",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/limb/shoe_magboots.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/shoe_magboots_overlay.png"),
		stats: {
			maxHealth: 60,
			precision: 0,
			power: 2,
			evasion: 2,
			protection: 0,
		},
		requires: {
			evasion: 40,
		}
	},
	limbBlack: {
		name: "Black Sneakers",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/limb/shoe_black.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/shoe_black_overlay.png"),
		stats: {
			maxHealth: 120,
			precision: 0,
			power: 2,
			evasion: 8,
			protection: 0,
		},
		requires: {
			evasion: 40,
		}
	},
	limbAdvancedMagboots: {
		name: "Advanced Magboots",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/limb/shoe_advmag.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/shoe_advmag_overlay.png"),
		stats: {
			maxHealth: 60,
			precision: 6,
			power: 2,
			evasion: 2,
			protection: 0,
		},
		requires: {
			evasion: 40,
		}
	},
	limbJackboots: {
		name: "Jackboots",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/limb/shoe_jackboots.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/limb/shoe_jackboots_overlay.png"),
		stats: {
			maxHealth: 60,
			precision: 0,
			power: 8,
			evasion: 2,
			protection: 0,
		},
		requires: {
			evasion: 40,
		}
	},
}