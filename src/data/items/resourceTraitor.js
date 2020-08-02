export default {
	spendTC: {
		name: "Imprinted Telecrystal",
		sellPrice: 100000,
		icon: require("@/assets/art/traitor/telecrystal.png")
	},
	meleeBurn3T: {
		name: "Energy Dagger",
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
			power: 14,
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
		icon: require("@/assets/art/combat/items/arm_syndi.png"), overlay: require("@/assets/art/combat/items/arm_syndi_overlay.png"),
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
}