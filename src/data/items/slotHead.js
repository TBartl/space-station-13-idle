export default {
	headCake: {
		name: "Cakehat",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head_cakehat.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head_cakehat_overlay.png"),
		stats: {
			maxHealth: 10,
			evasion: 6,
			protection: -20,
			precision: 2,
			power: 2,
		},
		requires: {
			evasion: 1,
		}
	},
	headH1: {
		name: "Hardhat",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head_h1.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head_h1_overlay.png"),
		stats: {
			maxHealth: 10,
			evasion: 2,
			protection: 0,
			precision: 2,
			power: 6,
		},
		requires: {
			evasion: 1,
		}
	},
	headH2: {
		name: "Welding Helmet",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head_h2.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head_h2_overlay.png"),
		stats: {
			maxHealth: 10,
			evasion: 2,
			protection: 0,
			precision: 6,
			power: 2,
		},
		requires: {
			evasion: 1,
		}
	},
	headRadio1: {
		name: "Radio Headset",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/headset_1.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/headset_1_overlay.png"),
		stats: {
			maxHealth: 0,
			evasion: 0,
			protection: 0,
			precision: 10,
			power: 0,
		},
		requires: {
			evasion: 10,
		}
	},	
	headRadio2: {
		name: "Ear Protection Headset",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/headset_2.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/headset_2_overlay.png"),
		stats: {
			maxHealth: 0,
			evasion: 0,
			protection: 5,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	headRadio3: {
		name: "Health Sensor Headset",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/headset_3.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/headset_3_overlay.png"),
		stats: {
			maxHealth: 20,
			evasion: 0,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	headRadio4: {
		name: "Long Ranged Headset",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/headset_4.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/headset_4_overlay.png"),
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 10,
		}
	},
}