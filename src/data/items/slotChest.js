const ARMOR = {
	armB1: {
		name: "Cardborg Disguise",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_b1.png"), overlay: require("@/assets/art/combat/items/arm_b1_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_b2.png"), overlay: require("@/assets/art/combat/items/arm_b2_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_b3.png"), overlay: require("@/assets/art/combat/items/arm_b3_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_b4.png"), overlay: require("@/assets/art/combat/items/arm_b4_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_b5.png"), overlay: require("@/assets/art/combat/items/arm_b5_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_b6.png"), overlay: require("@/assets/art/combat/items/arm_b6_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_s1.png"), overlay: require("@/assets/art/combat/items/arm_s1_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_s2.png"), overlay: require("@/assets/art/combat/items/arm_s2_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_s3.png"), overlay: require("@/assets/art/combat/items/arm_s3_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_s4.png"), overlay: require("@/assets/art/combat/items/arm_s4_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_s5.png"), overlay: require("@/assets/art/combat/items/arm_s5_overlay.png"),
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
		icon: require("@/assets/art/combat/items/arm_syndi.png"), overlay: require("@/assets/art/combat/items/arm_syndi_overlay.png"),
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
	}
}

const MECHS = {
	ripley: {
		name: "R.I.P.L.E.Y.",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechripley.png"),
		overlay: require("@/assets/art/fabrication/mechripley.png"),
	},
	ripleymk2: {
		name: "R.I.P.L.E.Y. MK2",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechripleymkii.png"),
	},
	odysseus: {
		name: "Odysseus",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechodysseus.png"),
	},
	firefighter: {
		name: "R.I.P.L.E.Y. MK3",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechfirefighter.png"),
	},
	clarke: {
		name: "Clarke",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechclarke_anim.gif"),
	},
	durand: {
		name: "Durand",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechdurand.png"),
	},
	marauder: {
		name: "Marauder",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechmarauder.png"),
	},
	gygax: {
		name: "Gygax",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechgygax.png"),
	},
	mauler: {
		name: "Mauler",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif"),
	},
	deathripley: {
		name: "R.I.P.L.E.Y. MK13",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechdeathripley.png"),
	},
	darkgygax: {
		name: "Assault Gygax",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechdarkgygax.png"),
	},
	reticence: {
		name: ".........",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechreticence.png"),
	},
	seraph: {
		name: "Seraph",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechseraph.png"),
	},
	honk: {
		name: "H.O.N.K.",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechhonk.png"),
	},
	phazon: {
		name: "Phazon",
		sellPrice: 100000,
		icon: require("@/assets/art/fabrication/mechphazon.png"),

	}
}

Object.values(ARMOR).forEach(armor => {
	armor.equipmentSlot = "chest";

});

Object.values(MECHS).forEach(mech => {
	mech.equipmentSlot = "chest";
	// mech.liftsRestrictions= ["mech"];
	mech.overlayAppearInBack = true;
	mech.overlay = mech.icon;
	mech.stats.moveTime = 3;
	mech.sellPrice = Math.ceil((mtoolbox.requires.meleePower + 10) * 12.25 - 75 );
	mech.stats.maxHealth = mtoolbox.requires.meleePower * 1;
	mech.stats.precision = Math.ceil(mtoolbox.requires.meleePower * .35);
	mech.stats.power = Math.round(mtoolbox.requires.meleePower * .5);
	mech.stats.evasion = Math.trunc(mtoolbox.requires.meleePower * -.1);
	mech.stats.command = Math.ceil(mtoolbox.requires.meleePower * -.1);
});

export default {
	...ARMOR,
	...MECHS
}