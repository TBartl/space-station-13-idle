export const ACTIONS = {
	fabricateRipley: {
		time: 60,
		item: "ripley",
		icon: require("@/assets/art/fabrication/mechripley.png"),
		xp: 2600,
		requiredLevel: 7,
		requiredItems: {
			iron: 100,
			glass: 20,
			silver: 10
		}
	},
	fabricateRipleymk2: {
		time: 60,
		item: "ripleymk2",
		icon: require("@/assets/art/fabrication/mechripleymkii.png"),
		xp: 2600,
		requiredLevel: 11,
		requiredItems: {
			iron: 90,
			glass: 20,
			silver: 20
		}
	},
	fabricateOdysseus: {
		time: 60,
		item: "odysseus",
		icon: require("@/assets/art/fabrication/mechodysseus.png"),
		xp: 2600,
		requiredLevel: 15,
		requiredItems: {
			iron: 5,
			glass: 25,
			silver: 50,
			gold: 50
		}
	}, fabricateFirefighter: {
		time: 60,
		item: "firefighter",
		icon: require("@/assets/art/fabrication/mechfirefighter.png"),
		xp: 2600,
		requiredLevel: 19,
		requiredItems: {
			silver: 25,
			gold: 50,
			titanium: 50,
			uranium: 5
		}
	},
	fabricateClarke: {
		time: 60,
		item: "clarke",
		icon: require("@/assets/art/fabrication/mechclarke_anim.gif"),
		xp: 2600,
		requiredLevel: 22,
		requiredItems: {
			silver: 10,
			gold: 10,
			titanium: 10,
			uranium: 10
		}
	},
	fabricateDurand: {
		time: 60,
		item: "durand",
		icon: require("@/assets/art/fabrication/mechdurand.png"),
		xp: 2000,
		requiredLevel: 25,
		requiredItems: {
			silver: 5,
			gold: 50,
			titanium: 50,
			uranium: 25
		}
	},
	fabricateMarauder: {
		time: 60,
		item: "marauder",
		icon: require("@/assets/art/fabrication/mechmarauder.png"),
		xp: 2900,
		requiredLevel: 28,
		requiredItems: {
			gold: 65,
			titanium: 50,
			uranium: 50,
			plasma: 25
		}
	},
	fabricateGygax: {
		time: 60,
		item: "gygax",
		icon: require("@/assets/art/fabrication/mechgygax.png"),
		xp: 3000,
		requiredLevel: 32,
		requiredItems: {
			gold: 25,
			titanium: 50,
			uranium: 50,
			plasma: 25
		}
	},
	fabricateMauler: {
		time: 60,
		item: "mauler",
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif"),
		xp: 3100,
		requiredLevel: 35,
		requiredItems: {
			titanium: 25,
			uranium: 55,
			plasma: 50,
			diamond: 25
		}
	},
	fabricateDeathripley: {
		time: 60,
		item: "deathripley",
		icon: require("@/assets/art/fabrication/mechdeathripley.png"),
		xp: 3200,
		requiredLevel: 38,
		requiredItems: {
			uranium: 90,
			plasma: 55,
			diamond: 25,
			bluespace: 5
		}
	},
	fabricateDarkgygax: {
		time: 60,
		item: "darkgygax",
		icon: require("@/assets/art/fabrication/mechdarkgygax.png"),
		xp: 3500,
		requiredLevel: 41,
		requiredItems: {
			uranium: 90,
			plasma: 55,
			diamond: 25,
			bluespace: 5
		}
	},
	fabricateReticence: {
		time: 60,
		item: "reticence",
		icon: require("@/assets/art/fabrication/mechreticence.png"),
		xp: 2600,
		requiredLevel: 44,
		requiredItems: {
			plasma: 50,
			diamond: 50,
			bluespace: 25,
			bananium: 5
		}
	},
	fabricateseraph: {
		time: 60,
		item: "seraph",
		icon: require("@/assets/art/fabrication/mechseraph.png"),
		xp: 3700,
		requiredLevel: 47,
		requiredItems: {
			plasma: 80,
			diamond: 65,
			bluespace: 40
		}
	},
	fabricateHONK: {
		time: 60,
		item: "honk",
		icon: require("@/assets/art/fabrication/mechhonk.png"),
		xp: 3800,
		requiredLevel: 50,
		requiredItems: {
			plasma: 25,
			diamond: 50,
			bluespace: 50,
			bananium: 65
		}
	},
	fabricatephazon: {
		time: 60,
		item: "phazon",
		icon: require("@/assets/art/fabrication/mechphazon.png"),
		xp: 3900,
		requiredLevel: 50,
		requiredItems: {
			iron: 1
		}
	},
	fabricateEammo1: {
		time: .1,
		item: "ammoE1",
		icon: require("@/assets/art/combat/items/ammo_e1.png"),
		xp: 10,
		requiredLevel: 1,
		requiredItems: {
			iron: 1
		}
	},
	fabricateEammo2: {
		time: .1,
		item: "ammoE2",
		icon: require("@/assets/art/combat/items/ammo_e2.png"),
		xp: 20,
		requiredLevel: 20,
		requiredItems: {
			gold: 1
		}
	},
	fabricateEammo3: {
		time: .1,
		item: "ammoE3",
		icon: require("@/assets/art/combat/items/ammo_e3.png"),
		xp: 30,
		requiredLevel: 30,
		requiredItems: {
			plasma: 1
		}
	},
	fabricateBammo1: {
		time: .1,
		item: "ammoB1",
		icon: require("@/assets/art/combat/items/ammo_b1.png"),
		xp: 10,
		requiredLevel: 5,
		requiredItems: {
			glass: 1
		}
	},
	fabricateBammo2: {
		time: .1,
		item: "ammoB2",
		icon: require("@/assets/art/combat/items/ammo_b2.png"),
		xp: 20,
		requiredLevel: 21,
		requiredItems: {
			titanium: 1
		}
	},
	fabricateBammo3: {
		time: .1,
		item: "ammoB3",
		icon: require("@/assets/art/combat/items/ammo_b3.png"),
		xp: 30,
		requiredLevel: 34,
		requiredItems: {
			diamond: 1
		}
	},
	fabricateEgun1: {
		time: 8,
		item: "gunE1",
		icon: require("@/assets/art/combat/items/gune_PKA.png"),
		xp: 100,
		requiredLevel: 10,
		requiredItems: {
			silver: 5
		}
	},
	fabricateEgun3: {
		time: 8,
		item: "gunE3",
		icon: require("@/assets/art/combat/items/gune_cutter.png"),
		xp: 60,
		requiredLevel: 20,
		requiredItems: {
			titanium: 5
		}
	},
	fabricateEgun4: {
		time: 8,
		item: "gunE4",
		icon: require("@/assets/art/combat/items/gune_laser.png"),
		xp: 60,
		requiredLevel: 30,
		requiredItems: {
			plasma: 5
		}
	},
	fabricateEgun6: {
		time: 8,
		item: "gunE6",
		icon: require("@/assets/art/combat/items/gune_energy.png"),
		xp: 60,
		requiredLevel: 40,
		requiredItems: {
			bluespace: 5
		}
	},
	fabricateBgun1: {
		time: 8,
		item: "gunB1",
		icon: require("@/assets/art/combat/items/gunb_shot1.png"),
		xp: 60,
		requiredLevel: 8,
		requiredItems: {
			glass: 5
		}
	},
	fabricateBgun3: {
		time: 8,
		item: "gunB3",
		icon: require("@/assets/art/combat/items/gunb_shot3.png"),
		xp: 60,
		requiredLevel: 16,
		requiredItems: {
			gold: 5
		}
	},
	fabricateBgun4: {
		time: 8,
		item: "gunB4",
		icon: require("@/assets/art/combat/items/gunb_shot4.png"),
		xp: 60,
		requiredLevel: 24,
		requiredItems: {
			uranium: 5
		}
	},
	fabricateBgun6: {
		time: 8,
		item: "gunB6",
		icon: require("@/assets/art/combat/items/gunb_shot6.png"),
		xp: 60,
		requiredLevel: 36,
		requiredItems: {
			diamond: 5
		}
	},

}

export const JOB = {
	id: "fabrication",
	name: "Fabrication",
	icon: require("@/assets/art/fabrication/icon.png"),
	color: "#89adac"
}