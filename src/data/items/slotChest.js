export default {
	armB1: {
		name: "Cardborg Disguise",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_b1.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_b1_overlay.png"),
		stats: {
			maxHealth: 2,
			precision: 0,
			power: 1,
			evasion: 2,
			bruteProtection: 2,
		},
		requires: {
			evasion: 1
		}
	},
	armB2: {
		name: "Firefighting Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_b2.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_b2_overlay.png"),
		stats: {
			maxHealth: 6,
			precision: 1,
			power: 2,
			evasion: 4,
			bruteProtection: 2,
			burnProtection: 2
		},
		requires: {
			evasion: 10
		}
	},
	armB3: {
		name: "Personal Protection Vest PPV",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_b3.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_b3_overlay.png"),
		stats: {
			maxHealth: 12,
			precision: 2,
			power: 4,
			evasion: 8,
			bruteProtection: 6,
		},
		requires: {
			evasion: 20
		}
	},
	armB4: {
		name: "Reflective Protection Vest RPV",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_b4.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_b4_overlay.png"),
		stats: {
			maxHealth: 18,
			precision: 3,
			power: 6,
			evasion: 12,
			bruteProtection: 8,
		},
		requires: {
			evasion: 30
		}
	},
	armB5: {
		name: "Armored Biohazard Protection Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_b5.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_b5_overlay.png"),
		stats: {
			maxHealth: 24,
			precision: 4,
			power: 8,
			evasion: 16,
			bruteProtection: 10,
		},
		requires: {
			evasion: 40
		}
	},
	armB6: {
		name: "Riot Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_b6.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_b6_overlay.png"),
		stats: {
			maxHealth: 30,
			precision: 5,
			power: 10,
			evasion: 20,
			bruteProtection: 12,
		},
		requires: {
			evasion: 50
		}
	},
	armS1: {
		name: "EVA Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_s1.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_s1_overlay.png"),
		stats: {
			maxHealth: 1,
			precision: 1,
			power: 1,
			evasion: 0,
			burnProtection: 4
		},
		requires: {
			evasion: 1
		}
	},
	armS2: {
		name: "Medical Rated Spacesuit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_s2.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_s2_overlay.png"),
		stats: {
			maxHealth: 4,
			precision: 2,
			power: 2,
			evasion: 1,
			burnProtection: 7
		},
		requires: {
			evasion: 10
		}
	},
	armS3: {
		name: "Scientific Hardsuit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_s3.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_s3_overlay.png"),
		stats: {
			maxHealth: 8,
			precision: 4,
			power: 4,
			evasion: 2,
			burnProtection: 10
		},
		requires: {
			evasion: 20
		}
	},
	armS4: {
		name: "Advanced Hardsuit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_s4.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_s4_overlay.png"),
		stats: {
			maxHealth: 12,
			precision: 6,
			power: 6,
			evasion: 3,
			burnProtection: 13
		},
		requires: {
			evasion: 30
		}
	},
	armS5: {
		name: "Captains Hardsuit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_s5.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_s5_overlay.png"),
		stats: {
			maxHealth: 16,
			precision: 8,
			power: 8,
			evasion: 4,
			burnProtection: 16
		},
		requires: {
			evasion: 40
		}
	},
	armSyndiSuit: {
		name: "Syndicate Hardsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/arm_syndi.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_syndi_overlay.png"),
		stats: {
			maxHealth: 20,
			precision: 10,
			power: 10,
			evasion: 5,
			burnProtection: 19
		},
		requires: {
			evasion: 50,
		}
	}, ripley: {
		name: "R.I.P.L.E.Y.",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechripley.png"),
		overlay: require("@/assets/art/fabrication/mechripley.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	ripleymk2: {
		name: "R.I.P.L.E.Y. MK2",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechripleymkii.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	odysseus: {
		name: "Odysseus",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechodysseus.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	firefighter: {
		name: "R.I.P.L.E.Y. MK3",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechfirefighter.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	clarke: {
		name: "Clarke",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechclarke_anim.gif"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	durand: {
		name: "Durand",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechdurand.png"),
		overlay: require("@/assets/art/fabrication/mechdurand.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	marauder: {
		name: "Marauder",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechmarauder.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	gygax: {
		name: "Gygax",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechgygax.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	mauler: {
		name: "Mauler",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	deathripley: {
		name: "R.I.P.L.E.Y. MK13",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechdeathripley.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	darkgygax: {
		name: "Assault Gygax",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechdarkgygax.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	reticence: {
		name: ".........",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechreticence.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	seraph: {
		name: "Seraph",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechseraph.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	honk: {
		name: "H.O.N.K.",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechhonk.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	},
	phazon: {
		name: "Phazon",
		sellPrice: 100000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechphazon.png"),
		overlayAppearInBack: true,
		stats: {
			maxHealth: 150,
			evasion: -15,
			defense: 30,
			power: 10
		},
		liftsRestrictions: ["mech"]
	}
}