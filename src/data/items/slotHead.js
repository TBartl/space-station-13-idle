export default {
	headCommon1: {
		name: "Radio Headset",
		sellPrice: 500,
		icon: require("@/assets/art/combat/items/head/headset_1.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/headset_1_overlay.png"),
		stats: {
			maxHealth: 40,
			evasion: 3,
			protection: 0,
			precision: 1,
		},
		requires: {
			evasion: 15,
		}
	},
	headCommon2: {
		name: "Ear Protection Headset",
		sellPrice: 500,
		icon: require("@/assets/art/combat/items/head/headset_2.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/headset_2_overlay.png"),
		stats: {
			maxHealth: 40,
			evasion: 3,
			protection: 1,
			precision: 0,
		},
		requires: {
			evasion: 15,
		}
	},
	headCommon3: {
		name: "Health Sensor Headset",
		sellPrice: 500,
		icon: require("@/assets/art/combat/items/head/headset_3.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/headset_3_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 3,
			protection: 0,
			precision: 0,
		},
		requires: {
			evasion: 15,
		}
	},
	headCommon4: {
		name: "Long Ranged Headset",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head/headset_4.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/headset_4_overlay.png"),
		stats: {
			maxHealth: 40,
			evasion: 4,
			protection: 0,
			precision: 0,
		},
		requires: {
			evasion: 15,
		}
	},
	headCommon5: {
		name: "High Volume Headset",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head/headset_5.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/headset_5_overlay.png"),
		stats: {
			maxHealth: 40,
			evasion: 4,
			protection: 0,
			precision: 0,
			command: 2,
		},
		requires: {
			evasion: 15,
		}
	},
	headRare1: {
		name: "Hard Hat",
		isHat: true,
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head/head_h1.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_h1_overlay.png"),
		stats: {
			maxHealth: 60,
			evasion: 4,
			protection: 0,
			precision: 2,
		},
		requires: {
			evasion: 25,
		}
	},
	headRare2: {
		name: "Cake Hat",
		isHat: true,
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head/head_h2.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_h2_overlay.png"),
		stats: {
			maxHealth: 60,
			evasion: 4,
			protection: 2,
			precision: 0,
		},
		requires: {
			evasion: 25,
		}
	},
	headRare3: {
		name: "Ushanka",
		isHat: true,
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head/head_h3.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_h3_overlay.png"),
		stats: {
			maxHealth: 80,
			evasion: 4,
			protection: 0,
			precision: 0,
		},
		requires: {
			evasion: 25,
		}
	},
	headRare4: {
		name: "Security Beret",
		isHat: true,
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head/head_h4.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_h4_overlay.png"),
		stats: {
			maxHealth: 60,
			evasion: 6,
			protection: 0,
			precision: 0,
		},
		requires: {
			evasion: 25,
		}
	},
	headRare5: {
		name: "Captain's Hat",
		isHat: true,
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head/head_h5.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_h5_overlay.png"),
		stats: {
			maxHealth: 60,
			evasion: 4,
			protection: 0,
			precision: 0,
			command: 4
		},
		requires: {
			evasion: 25,
		}
	},
	headEpic1: {
		name: "Wizard Hat",
		isHat: true,
		sellPrice: 5000,
		icon: require("@/assets/art/combat/items/head/head_r1.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_r1_overlay.png"),
		stats: {
			maxHealth: 90,
			evasion: 6,
			protection: 0,
			precision: 2,
		},
		requires: {
			evasion: 35,
		}
	},
	headEpic2: {
		name: "Abductor Interface",
		isHat: true,
		sellPrice: 5000,
		icon: require("@/assets/art/combat/items/head/head_r2.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_r2_overlay.png"),
		stats: {
			maxHealth: 90,
			evasion: 6,
			protection: 2,
			precision: 0,
		},
		requires: {
			evasion: 35,
		}
	},
	headEpic3: {
		name: "Plasma Environmental Helm",
		isHat: true,
		sellPrice: 5000,
		icon: require("@/assets/art/combat/items/head/head_r3.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_r3_overlay.png"),
		stats: {
			maxHealth: 110,
			evasion: 6,
			protection: 0,
			precision: 0,
		},
		requires: {
			evasion: 35,
		}
	},
	headEpic4: {
		name: "Carp Helmet",
		isHat: true,
		sellPrice: 5000,
		icon: require("@/assets/art/combat/items/head/head_r4.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_r4_overlay.png"),
		stats: {
			maxHealth: 90,
			evasion: 8,
			protection: 0,
			precision: 0,
		},
		requires: {
			evasion: 35,
		}
	},
	headEpic5: {
		name: "The Liberator",
		isHat: true,
		sellPrice: 5000,
		icon: require("@/assets/art/combat/items/head/head_r5.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head/head_r5_overlay.png"),
		stats: {
			maxHealth: 90,
			evasion: 6,
			protection: 0,
			precision: 0,
			command: 4
		},
		requires: {
			evasion: 35,
		}
	}
}