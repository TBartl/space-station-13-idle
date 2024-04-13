export default {
	spendTC: {
		name: "Imprinted Telecrystal",
		sellPrice: 100000,
		icon: require("@/assets/art/traitor/telecrystal.png")
	},
	meleeBurn3T: {
		name: "Energy Dagger",
		description: "This one has an adaptive grip, making it easier to wield.",
		sellPrice: 380,
		icon: require("@/assets/art/combat/items/melee_e3_animt.gif"),
		overlay: require("@/assets/art/combat/items/melee_e3_anim_overlayt.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 30,
			evasion: -4,
			command: -2,
			precision: 12,
			attackSpeed: 2,
			power: 14,
			damageType: "burn"
		},
		requires: {
			precision: 8
		}
	},
	meleeBurn4T: {
		name: "Energy Sword",
		description: "This one has an adaptive grip, making it easier to wield.",
		sellPrice: 580,
		icon: require("@/assets/art/combat/items/melee_e4_animt.gif"),
		overlay: require("@/assets/art/combat/items/melee_e4_overlay_animt.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 40,
			evasion: -6,
			command: -3,
			precision: 16,
			attackSpeed: 2,
			power: 18,
			damageType: "burn"
		},
		requires: {
			precision: 18
		}
	},
	meleeBurn5T: {
		name: "Dual Energy Sword",
		description: "This one has an adaptive grip, making it easier to wield.",
		sellPrice: 780,
		icon: require("@/assets/art/combat/items/melee_e5t_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e5t_overlay.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 50,
			evasion: -7,
			command: -4,
			precision: 20,
			attackSpeed: 2.3,
			power: 23,
			damageType: "burn"
		},
		requires: {
			precision: 28
		}
	},
	totsuit1: {
		name: "Custom Mauler",
		equipmentSlot: "chest",
		overlayAppearInBack: true,
		overlayBlurry: true,
		liftsRestrictions: ["mech"],
		sellPrice: 47465,
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif"),
		overlay: require("@/assets/art/fabrication/mechmauler_anim.gif"),
		stats: {
			moveTime: 6.5,
			maxHealth: 195,
			evasion: 3,
			bruteProtection: 12,
			burnProtection: 5,
			precision: 8,
			power: 6
		},
		requires: {
			fabrication: 10
		}
	},
	totsuit2: {
		name: "Custom Syndicate Hardsuit",
		equipmentSlot: "chest",
		sellPrice: 1240,
		icon: require("@/assets/art/combat/items/arm_syndi.png"),
		overlay: require("@/assets/art/combat/items/arm_syndi_overlay.png"),
		stats: {
			regen: 2,
			maxHealth: 210,
			evasion: 20,
			burnProtection: 18,
			precision: 3,
		},
		requires: {
			evasion: 30,
		}
	},
	totsuit3: {
		name: "Elite Syndicate Hardsuit",
		sellPrice: 1240,
		icon: require("@/assets/art/combat/items/arm_syndiTOT.png"), overlay: require("@/assets/art/combat/items/arm_syndiTOT_overlay.png"),
		equipmentSlot: "chest",
		stats: {
			regen: 2,
			maxHealth: 270,
			evasion: 20,
			protection: 17,
			burnProtection: 1,
			precision: 12,
			power: 16,
		},
		requires: {
			evasion: 50,
		}
	},
	syndicakes: {
		name: "Syndi-Cakes",
		description: 'Tastes just as good after being nuked.',
		sellPrice: 61,
		icon: require("@/assets/art/traitor/syndicakes.png"),
		healAmount: 30,
		stats: {
			regen: 0.3,
			evasion: 3,
			precision: 3,
			power: 3
		},
	},
	syndibloon: {
		name: "Syndicate Balloon",
		description: 'A tag on it reads, \"FUK NT!11!\"',
		sellPrice: 1,
		icon: require("@/assets/art/traitor/syndibloon.png"),
		equipmentSlot: "companion",
		fleeChance: 0,
		stats: {
			luck: 33
		},
	},
	syndisoap: {
		name: "Syndicate Soap",
		sellPrice: 1,
		icon: require("@/assets/art/traitor/syndisoap.png"),
		equipmentSlot: "pocket",
		fleeChance: 0,
		stats: {
			precision: 7,
			luck: 10
		},
	},
	gunTraitor: {
		name: ".357 Revolver",
		sellPrice: 5000,
		equipmentSlot: "hand",
		icon: require("@/assets/art/traitor/357.png"),
		overlay: require("@/assets/art/traitor/357inhand.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 7,
			evasion: 2,
			power: 4,
			precision: 7
		},
		requires: {
			rangedPower: 8
		}
	},
}
