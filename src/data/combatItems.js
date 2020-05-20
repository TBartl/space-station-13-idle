export default {
	mouseCarcass: {
		name: "Mouse Carcass",
		sellPrice: 3,
		icon: require("@/assets/art/combat/items/dead_mouse.png"),
		healAmount: 15
	},
	sord: {
		name: "SORD",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/sord.png"),
		overlay: require("@/assets/art/combat/items/sord_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: -20,
			evasion: -30,
			precision: -40,
			attackSpeed: .5,
			power: 80,
		}
	},
	toolbox: {
		name: "Toolbox",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/toolbox.png"),
		overlay: require("@/assets/art/combat/items/toolbox_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -10,
			precision: 10,
			attackSpeed: 2,
			power: 20,
		}
	},
	baseball: {
		name: "Baseball Bat",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/baseball.png"),
		overlay: require("@/assets/art/combat/items/baseball_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 10,
			evasion: -20,
			precision: 20,
			attackSpeed: 2,
			power: 40,
		}
	},
	spear: {
		name: "Spear",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/spear.png"),
		overlay: require("@/assets/art/combat/items/spear_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 15,
			evasion: -30,
			precision: 30,
			attackSpeed: 2,
			power: 60,
		}
	},
	fireaxe: {
		name: "Fireaxe",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/fireaxe.png"),
		overlay: require("@/assets/art/combat/items/fireaxe_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 20,
			evasion: -40,
			precision: 40,
			attackSpeed: 2,
			power: 80,
		}
	},
	sabre: {
		name: "Captain's Sabre",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/sabre.png"),
		overlay: require("@/assets/art/combat/items/sabre_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 25,
			evasion: -50,
			precision: 50,
			attackSpeed: 2,
			power: 100,
		}
	},
	riotSuit: {
		name: "Riot Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/riot_suit.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/riot_suit_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 15,
			protection: 3,
			precision: 2,
			power: 1,
		}
	},
	syndiHardsuit: {
		name: "Syndicate Hardsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/syndi_hardsuit_overlay.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/syndi_hardsuit_overlay.png"),
		stats: {
			maxHealth: 60,
			evasion: 30,
			protection: 6,
			precision: 4,
			power: 2,
		}
	},
	pill10: {
		name: "Level 10 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill1.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		}
	},
	pill20: {
		name: "Level 20 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill2.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 20,
			protection: 0,
			precision: 20,
			power: 20,
		}
	},
	pill30: {
		name: "Level 30 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill3.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 30,
			protection: 0,
			precision: 30,
			power: 30,
		}
	},
	pill40: {
		name: "Level 40 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill4.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 40,
			protection: 0,
			precision: 40,
			power: 40,
		}
	},
	pill50: {
		name: "Level 50 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill5.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 50,
			protection: 0,
			precision: 50,
			power: 50,
		}
	}
};