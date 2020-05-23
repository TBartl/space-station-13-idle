export default {
	armCardboard: {
		name: "Cardborg Disguise",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_cardborg.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_cardborg_overlay.png"),
		stats: {
			maxHealth: 10,
			evasion: 6,
			protection: 4,
			precision: 2,
			power: 2,
		},
		requires: {
			evasion: 1
		}
	}, armFiresuit: {
		name: "Firefighting Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_firesuit.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_firesuit_overlay.png"),
		stats: {
			maxHealth: 20,
			evasion: 12,
			protection: 8,
			precision: 4,
			power: 4,
		},
		requires: {
			evasion: 2
		}
	}, armVest: {
		name: "Personal Protection Vest PPV",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_vest.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_vest_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 18,
			protection: 12,
			precision: 6,
			power: 6,
		},
		requires: {
			evasion: 2
		}
	}, armRiotSuit: {
		name: "Riot Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_riot.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_riot_overlay.png"),
		stats: {
			maxHealth: 0,
			evasion: 24,
			protection: 16,
			precision: 8,
			power: 8,
		},
		requires: {
			evasion: 2
		}
	},
	armSyndiSuit: {
		name: "Syndicate Hardsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/arm_syndi.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_syndi_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires: {
			evasion: 3,
		}
	}, ripley: {
		name: "R.I.P.L.E.Y.",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechripley.png"),
		overlay: require("@/assets/art/fabrication/mechripley.png"),
		overlayHidePlayer: true,
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
		icon: require("@/assets/art/fabrication/mechripleymkii.png")
	},
	odysseus: {
		name: "Odysseus",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechodysseus.png")
	},
	firefighter: {
		name: "R.I.P.L.E.Y. MK3",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechfirefighter.png")
	},
	clarke: {
		name: "Clarke",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechclarke_anim.gif")
	},
	durand: {
		name: "Durand",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechdurand.png"),
		overlay: require("@/assets/art/fabrication/mechdurand.png"),
		overlayHidePlayer: true
	},
	marauder: {
		name: "Marauder",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechmarauder.png")
	},
	gygax: {
		name: "Gygax",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechgygax.png")
	},
	mauler: {
		name: "Mauler",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif")
	},
	deathripley: {
		name: "R.I.P.L.E.Y. MK13",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechdeathripley.png")
	},
	darkgygax: {
		name: "Assault Gygax",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechdarkgygax.png")
	},
	reticence: {
		name: ".........",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechreticence.png")
	},
	seraph: {
		name: "Seraph",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechseraph.png")
	},
	honk: {
		name: "H.O.N.K.",
		sellPrice: 1000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechhonk.png")
	},
	phazon: {
		name: "Phazon",
		sellPrice: 100000,
		equipmentSlot: "chest",
		icon: require("@/assets/art/fabrication/mechphazon.png")
	}
}