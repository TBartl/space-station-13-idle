const MECHS = {
	fabricateRipley: {
		time: 60,
		item: "ripley",
		icon: require("@/assets/art/fabrication/mechripley.png"),
		xp: 420,
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
		xp: 660,
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
		xp: 900,
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
		xp: 1140,
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
		xp: 1320,
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
		xp: 1500,
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
		xp: 1680,
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
		xp: 1920,
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
		xp: 2100,
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
		xp: 2280,
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
		xp: 2460,
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
		xp: 2640,
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
		xp: 2820,
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
		xp: -3000,
		requiredLevel: 50,
		requiredItems: {
			plasma: 25,
			diamond: 50,
			bluespace: 50,
			bananium: 65
		}
	},
	fabricatephazon: {
		time: 3000,
		item: "phazon",
		icon: require("@/assets/art/fabrication/mechphazon.png"),
		xp: 3900,
		requiredLevel: 50,
		requiredItems: {
			iron: 1
		}
	},
}

const ENERGY_AMMO = {
	fabricateEammo1: {
		time: .1,
		item: "ammoE1",
		icon: require("@/assets/art/combat/items/ammo_e1.png"),
		xp: 1,
		requiredLevel: 1,
		requiredItems: {
			iron: 1
		}
	},
	fabricateEammo2: {
		time: .1,
		item: "ammoE2",
		icon: require("@/assets/art/combat/items/ammo_e2.png"),
		xp: 2,
		requiredLevel: 20,
		requiredItems: {
			gold: 1
		}
	},
	fabricateEammo3: {
		time: .1,
		item: "ammoE3",
		icon: require("@/assets/art/combat/items/ammo_e3.png"),
		xp: 3,
		requiredLevel: 30,
		requiredItems: {
			plasma: 1
		}
	},
}

const BALLISTIC_AMMO = {
	fabricateBammo1: {
		time: .1,
		item: "ammoB1",
		icon: require("@/assets/art/combat/items/ammo_b1.png"),
		xp: 1,
		requiredLevel: 5,
		requiredItems: {
			glass: 1
		}
	},
	fabricateBammo2: {
		time: .1,
		item: "ammoB2",
		icon: require("@/assets/art/combat/items/ammo_b2.png"),
		xp: 2,
		requiredLevel: 21,
		requiredItems: {
			titanium: 1
		}
	},
	fabricateBammo3: {
		time: .1,
		item: "ammoB3",
		icon: require("@/assets/art/combat/items/ammo_b3.png"),
		xp: 3,
		requiredLevel: 34,
		requiredItems: {
			diamond: 1
		}
	},
}

const ENERGY_GUNS = {
	fabricateEgun1: {
		time: 8,
		item: "gunE1",
		icon: require("@/assets/art/combat/items/gune_PKA.png"),
		xp: 8,
		requiredLevel: 10,
		requiredItems: {
			silver: 5
		}
	},
	fabricateEgun3: {
		time: 8,
		item: "gunE3",
		icon: require("@/assets/art/combat/items/gune_cutter.png"),
		xp: 16,
		requiredLevel: 20,
		requiredItems: {
			titanium: 5
		}
	},
	fabricateEgun4: {
		time: 8,
		item: "gunE4",
		icon: require("@/assets/art/combat/items/gune_laser.png"),
		xp: 24,
		requiredLevel: 30,
		requiredItems: {
			plasma: 5
		}
	},
	fabricateEgun6: {
		time: 8,
		item: "gunE6",
		icon: require("@/assets/art/combat/items/gune_energy.png"),
		xp: 32,
		requiredLevel: 40,
		requiredItems: {
			bluespace: 5
		}
	},
}
const BALLISTIC_GUNS = {
	fabricateBgun1: {
		time: 8,
		item: "gunB1",
		icon: require("@/assets/art/combat/items/gunb_shot1.png"),
		xp: 7,
		requiredLevel: 8,
		requiredItems: {
			glass: 5
		}
	},
	fabricateBgun3: {
		time: 8,
		item: "gunB3",
		icon: require("@/assets/art/combat/items/gunb_shot3.png"),
		xp: 14,
		requiredLevel: 16,
		requiredItems: {
			gold: 5
		}
	},
	fabricateBgun4: {
		time: 8,
		item: "gunB4",
		icon: require("@/assets/art/combat/items/gunb_shot4.png"),
		xp: 21,
		requiredLevel: 24,
		requiredItems: {
			uranium: 5
		}
	},
	fabricateBgun6: {
		time: 8,
		item: "gunB6",
		icon: require("@/assets/art/combat/items/gunb_shot6.png"),
		xp: 28,
		requiredLevel: 36,
		requiredItems: {
			diamond: 5
		}
	},
}

Object.values(BALLISTIC_AMMO).forEach(action => action.fabType = "ballistic ammo");
Object.values(ENERGY_AMMO).forEach(action => action.fabType = "energy ammo");
Object.values(BALLISTIC_GUNS).forEach(action => action.fabType = "ballistic guns");
Object.values(ENERGY_GUNS).forEach(action => action.fabType = "energy guns");
Object.values(MECHS).forEach(action => action.fabType = "mechs");

const ACTIONS = {
	...BALLISTIC_AMMO,
	...ENERGY_AMMO,
	...BALLISTIC_GUNS,
	...ENERGY_GUNS,
	...MECHS
}
for (let action of Object.values(ACTIONS)) {
	action.requiredItems['power'] = action.requiredLevel;
}
export { ACTIONS };

export const JOB = {
	id: "fabrication",
	name: "Fabrication",
	icon: require("@/assets/art/fabrication/icon.png"),
	color: "#89adac"
}