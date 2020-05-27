export default {
	limbInsuls: {
		name: "Insulated Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_yellow.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_yellow_overlay.png"),
		stats: {
			maxHealth: 0,
			precision: -4,
			power: 7,
			evasion: 7,
			protection: 0,
		},
		requires: {
			evasion: 15,
		}
	},
	limbBoxing: {
		name: "Boxing Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_boxing.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_boxing_overlay.png"),
		stats: {
			maxHealth: 0,
			precision: 7,
			power: -4,
			evasion: 7,
			protection: 0,
		},
		requires: {
			evasion: 15,
		}
	},
	limbMagkrava: {
		name: "Mag Krava Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_fightgloves.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_fightgloves_overlay.png"),
		stats: {
			maxHealth: 0,
			precision: 7,
			power: 7,
			evasion: -4,
			protection: 0,
		},
		requires: {
			evasion: 15,
		}
	},
	limbCapt: {
		name: "Captain's Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_captain.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_captain_overlay.png"),
		stats: {
			maxHealth: 14,
			precision: 0,
			power: 0,
			evasion: 0,
			protection: -2,
		},
		requires: {
			evasion: 15,
		}
	},
	limbNinja: {
		name: "Ninja Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_ninja.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_ninja_overlay.png"),
		stats: {
			maxHealth: 14,
			precision: 0,
			power: 0,
			evasion: 0,
			protection: -2,
		},
		requires: {
			evasion: 15,
		}
	},
	limbBlack: {
		name: "Black Sneakers",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_black.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/shoe_black_overlay.png"),
		stats: {
			maxHealth: 0,
			precision: 5,
			power: 0,
			evasion: 5,
			protection: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	limbMagBoots: {
		name: "Magnetic Boots",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_magboots.png"),
		equipmentSlot: "climb",
		overlay: require("@/assets/art/combat/items/shoe_magboots_overlay.png"),
		stats: {
			maxHealth: 0,
			precision: 5,
			power: 5,
			evasion: 0,
			protection: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	limbClownShoes: {
		name: "Clown Shoes",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_clown.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/shoe_clown_overlay.png"),
		stats: {
			maxHealth: 0,
			precision: 0,
			power: 5,
			evasion: 5,
			protection: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	limbJackboots: {
		name: "Jackboots",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_jackboots.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/shoe_jackboots_overlay.png"),
		stats: {
			maxHealth: 0,
			precision: 0,
			power: 0,
			evasion: 0,
			protection: 4,
		},
		requires: {
			evasion: 10,
		}
	},
	limbAdvancedMagboots: {
		name: "Advanced Magboots",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_advmag.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/shoe_advmag_overlay.png"),
		stats: {
			maxHealth: 3,
			precision: 3,
			power: 3,
			evasion: 3,
			protection: 1,
		},
		requires: {
			evasion: 10,
		}
	},
}