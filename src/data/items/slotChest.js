const BRUTEARMOR = {
	armB1: {
		name: "Cardborg Disguise",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_b1.png"), overlay: require("@/assets/art/combat/items/arm_b1_overlay.png"),
		stats: {
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
		},
		requires: {
			evasion: 50
		}
	}
}
const BURNARMOR = {
	armS1: {
		name: "EVA Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_s1.png"), overlay: require("@/assets/art/combat/items/arm_s1_overlay.png"),
		stats: {
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
		stats: {
		},
		requires: {
			fabrication: 7
		}
	},
	ripleymk2: {
		name: "R.I.P.L.E.Y. MK2",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechripleymkii.png"),
		stats: {
		},
		requires: {
			fabrication: 11
		}
	},
	odysseus: {
		name: "Odysseus",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechodysseus.png"),
		stats: {
		},
		requires: {
			fabrication: 15
		}
	},
	firefighter: {
		name: "R.I.P.L.E.Y. MK3",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechfirefighter.png"),
		stats: {
		},
		requires: {
			fabrication: 19
		}
	},
	clarke: {
		name: "Clarke",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechclarke_anim.gif"),
		stats: {
		},
		requires: {
			fabrication: 22
		}
	},
	durand: {
		name: "Durand",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechdurand.png"),
		stats: {
		},
		requires: {
			fabrication: 25
		}
	},
	marauder: {
		name: "Marauder",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechmarauder.png"),
		stats: {
		},
		requires: {
			fabrication: 28
		}
	},
	gygax: {
		name: "Gygax",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechgygax.png"),
		stats: {
		},
		requires: {
			fabrication: 32
		}
	},
	mauler: {
		name: "Mauler",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif"),
		stats: {
		},
		requires: {
			fabrication: 35
		}
	},
	deathripley: {
		name: "R.I.P.L.E.Y. MK13",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechdeathripley.png"),
		stats: {
		},
		requires: {
			fabrication: 38
		}
	},
	darkgygax: {
		name: "Assault Gygax",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechdarkgygax.png"),
		stats: {
		},
		requires: {
			fabrication: 41
		}
	},
	reticence: {
		name: ".........",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechreticence.png"),
		stats: {
		},
		requires: {
			fabrication: 44
		}
	},
	seraph: {
		name: "Seraph",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechseraph.png"),
		stats: {
		},
		requires: {
			fabrication: 47
		}
	},
	honk: {
		name: "H.O.N.K.",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechhonk.png"),
		stats: {
		},
		requires: {
			fabrication: 50
		}
	},
	phazon: {
		name: "Phazon",
		sellPrice: 100000,
		icon: require("@/assets/art/fabrication/mechphazon.png"),
		stats: {
		},
		requires: {
			fabrication: 50
		}
	}
}

Object.values(BRUTEARMOR).forEach(brutearmor => {
	brutearmor.equipmentSlot = "chest";
	let bruteConstant = Math.max(10, brutearmor.requires.evasion);

	brutearmor.stats.maxHealth = Math.trunc(bruteConstant * 1.5);
	brutearmor.stats.power = Math.ceil(bruteConstant * .05);
	brutearmor.stats.evasion = Math.ceil(bruteConstant * 0.45);
	brutearmor.stats.bruteProtection = Math.round(bruteConstant * .2) + 2;
});

Object.values(BURNARMOR).forEach(burnarmor => {
	burnarmor.equipmentSlot = "chest";
	let burnConstant = Math.max(5, burnarmor.requires.evasion);

	burnarmor.stats.maxHealth = Math.trunc(burnConstant * 1.5);
	burnarmor.stats.precision = Math.ceil(burnConstant * .05);
	burnarmor.stats.evasion = Math.ceil(burnConstant * 0.4);
	burnarmor.stats.burnProtection = Math.round(burnConstant * .3) + 3;
});

Object.values(MECHS).forEach(mech => {
	mech.equipmentSlot = "chest";
	// mech.liftsRestrictions= ["mech"];
	mech.overlayAppearInBack = true;
	mech.overlay = mech.icon;
	mech.requires.evasion = Math.trunc(mech.requires.fabrication / 2);
	mech.stats.moveTime = 3;
	// mech.sellPrice = Math.ceil((mech.requires.fabrication + 10) * 12.25 - 75 );
	mech.stats.maxHealth = mech.requires.fabrication * 3;
	mech.stats.precision = Math.ceil(mech.requires.fabrication * .2);
	mech.stats.power = Math.ceil(mech.requires.fabrication * .2);
	mech.stats.evasion = Math.trunc(mech.requires.fabrication * .1);
	mech.stats.protection = Math.trunc(mech.requires.fabrication * .15);
	mech.stats.bruteProtection = Math.trunc(mech.requires.fabrication * .2);
});

export default {
	...BRUTEARMOR,
	...BURNARMOR,
	...MECHS
}