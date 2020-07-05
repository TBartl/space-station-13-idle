const MECHS = {
	fabricateRipley: {
		time: 780,
		item: "ripley",
		icon: require("@/assets/art/fabrication/mechripley.png"),
		xp: 546,
		requiredLevel: 7,
		requiredItems: {
			iron: 100,
			glass: 20,
			silver: 10
		}
	},
	fabricateRipleymk2: {
		time: 780,
		item: "ripleymk2",
		icon: require("@/assets/art/fabrication/mechripleymkii.png"),
		xp: 858,
		requiredLevel: 11,
		requiredItems: {
			iron: 90,
			glass: 20,
			silver: 20
		}
	},
	fabricateOdysseus: {
		time: 780,
		item: "odysseus",
		icon: require("@/assets/art/fabrication/mechodysseus.png"),
		xp: 1170,
		requiredLevel: 15,
		requiredItems: {
			iron: 5,
			glass: 25,
			silver: 50,
			gold: 50
		}
	}, fabricateFirefighter: {
		time: 780,
		item: "firefighter",
		icon: require("@/assets/art/fabrication/mechfirefighter.png"),
		xp: 1482,
		requiredLevel: 19,
		requiredItems: {
			silver: 25,
			gold: 50,
			titanium: 50,
			uranium: 5
		}
	},
	fabricateClarke: {
		time: 780,
		item: "clarke",
		icon: require("@/assets/art/fabrication/mechclarke_anim.gif"),
		xp: 1716,
		requiredLevel: 22,
		requiredItems: {
			silver: 25,
			gold: 50,
			titanium: 50,
			uranium: 5
		}
	},
	fabricateDurand: {
		time: 780,
		item: "durand",
		icon: require("@/assets/art/fabrication/mechdurand.png"),
		xp: 1950,
		requiredLevel: 25,
		requiredItems: {
			silver: 5,
			gold: 50,
			titanium: 50,
			uranium: 25
		}
	},
	fabricateMarauder: {
		time: 780,
		item: "marauder",
		icon: require("@/assets/art/fabrication/mechmarauder.png"),
		xp: 2184,
		requiredLevel: 28,
		requiredItems: {
			gold: 65,
			titanium: 50,
			uranium: 50,
			plasma: 25
		}
	},
	fabricateGygax: {
		time: 780,
		item: "gygax",
		icon: require("@/assets/art/fabrication/mechgygax.png"),
		xp: 2496,
		requiredLevel: 32,
		requiredItems: {
			gold: 25,
			titanium: 50,
			uranium: 50,
			plasma: 25
		}
	},
	fabricateMauler: {
		time: 780,
		item: "mauler",
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif"),
		xp: 2730,
		requiredLevel: 35,
		requiredItems: {
			titanium: 25,
			uranium: 55,
			plasma: 50,
			diamond: 25
		}
	},
	fabricateDeathripley: {
		time: 780,
		item: "deathRipley",
		icon: require("@/assets/art/fabrication/mechdeathripley.png"),
		xp: 2964,
		requiredLevel: 38,
		requiredItems: {
			uranium: 90,
			plasma: 55,
			diamond: 25,
			bluespace: 5
		}
	},
	fabricateDarkgygax: {
		time: 780,
		item: "darkGygax",
		icon: require("@/assets/art/fabrication/mechdarkgygax.png"),
		xp: 3196,
		requiredLevel: 41,
		requiredItems: {
			uranium: 90,
			plasma: 55,
			diamond: 25,
			bluespace: 5
		}
	},
	fabricateReticence: {
		time: 780,
		item: "reticence",
		icon: require("@/assets/art/fabrication/mechreticence.png"),
		xp: 3432,
		requiredLevel: 44,
		requiredItems: {
			plasma: 50,
			diamond: 50,
			bluespace: 25,
			bananium: 5
		}
	},
	fabricateseraph: {
		time: 780,
		item: "seraph",
		icon: require("@/assets/art/fabrication/mechseraph.png"),
		xp: 3666,
		requiredLevel: 47,
		requiredItems: {
			plasma: 80,
			diamond: 65,
			bluespace: 40
		}
	},
	fabricateHONK: {
		time: 780,
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
			uranium: 10,
			plasma: 60,
			diamond: 50,
			bluespace: 75
		}
	},
}

const ENERGY_AMMO = {
	fabricateEammo1: {
		time: 4,
		name: "Disabling Cell",
		icon: require("@/assets/art/combat/items/ammo_e1.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "ammoEnergy1",
			count: 8,
		},
		requiredItems: {
			iron: 1
		}
	},
	fabricateEammo2: {
		time: 4,
		name: "Stunning Cell",
		icon: require("@/assets/art/combat/items/ammo_e2.png"),
		xp: 10,
		requiredLevel: 20,
		items:
		{
			id: "ammoEnergy2",
			count: 8,
		},
		requiredItems: {
			gold: 1
		}
	},
	fabricateEammo3: {
		time: 4,
		name: "Lethal Cell",
		icon: require("@/assets/art/combat/items/ammo_e3.png"),
		xp: 15,
		requiredLevel: 30,
		items:
		{
			id: "ammoEnergy3",
			count: 8,
		},
		requiredItems: {
			plasma: 1
		}
	},
}

const BALLISTIC_AMMO = {
	fabricateBammo1: {
		time: 4,
		name: "Beanbag Shell",
		icon: require("@/assets/art/combat/items/ammo_b1.png"),
		xp: 6,
		requiredLevel: 5,
		items:
		{
			id: "ammoBallistic1",
			count: 8,
		},
		requiredItems: {
			glass: 1
		}
	},
	fabricateBammo2: {
		time: 4,
		name: "Birdshot Shell",
		icon: require("@/assets/art/combat/items/ammo_b2.png"),
		xp: 11,
		requiredLevel: 21,
		items:
		{
			id: "ammoBallistic2",
			count: 8,
		},
		requiredItems: {
			titanium: 1
		}
	},
	fabricateBammo3: {
		time: 4,
		name: "Buckshot Shell",
		icon: require("@/assets/art/combat/items/ammo_b3.png"),
		xp: 17,
		requiredLevel: 34,
		items:
		{
			id: "ammoBallistic3",
			count: 8,
		},
		requiredItems: {
			diamond: 1
		}
	},
}

const ENERGY_GUNS = {
	fabricateEgun1: {
		time: 20,
		item: "gunEnergy1",
		icon: require("@/assets/art/combat/items/gune_PKA.png"),
		xp: 25,
		requiredLevel: 10,
		requiredItems: {
			silver: 5
		}
	},
	fabricateEgun3: {
		time: 20,
		item: "gunEnergy3",
		icon: require("@/assets/art/combat/items/gune_cutter.png"),
		xp: 50,
		requiredLevel: 20,
		requiredItems: {
			titanium: 5
		}
	},
	fabricateEgun4: {
		time: 20,
		item: "gunEnergy4",
		icon: require("@/assets/art/combat/items/gune_laser.png"),
		xp: 75,
		requiredLevel: 30,
		requiredItems: {
			plasma: 5
		}
	},
	fabricateEgun6: {
		time: 20,
		item: "gunEnergy6",
		icon: require("@/assets/art/combat/items/gune_energy.png"),
		xp: 100,
		requiredLevel: 40,
		requiredItems: {
			bluespace: 5
		}
	},
}
const BALLISTIC_GUNS = {
	fabricateBgun1: {
		time: 20,
		item: "gunBallistic1",
		icon: require("@/assets/art/combat/items/gunb_shot1.png"),
		xp: 20,
		requiredLevel: 8,
		requiredItems: {
			glass: 5
		}
	},
	fabricateBgun3: {
		time: 20,
		item: "gunBallistic3",
		icon: require("@/assets/art/combat/items/gunb_shot3.png"),
		xp: 40,
		requiredLevel: 16,
		requiredItems: {
			gold: 5
		}
	},
	fabricateBgun4: {
		time: 20,
		item: "gunBallistic4",
		icon: require("@/assets/art/combat/items/gunb_shot4.png"),
		xp: 60,
		requiredLevel: 24,
		requiredItems: {
			uranium: 5
		}
	},
	fabricateBgun6: {
		time: 20,
		item: "gunBallistic6",
		icon: require("@/assets/art/combat/items/gunb_shot6.png"),
		xp: 90,
		requiredLevel: 36,
		requiredItems: {
			diamond: 5
		}
	},
}

Object.values(BALLISTIC_AMMO).forEach(action => action.type = "ballistic ammo");
Object.values(ENERGY_AMMO).forEach(action => action.type = "energy ammo");
Object.values(BALLISTIC_GUNS).forEach(action => action.type = "ballistic guns");
Object.values(ENERGY_GUNS).forEach(action => action.type = "energy guns");
Object.values(MECHS).forEach(action => action.type = "mechs");

const ACTIONS = {
	...BALLISTIC_AMMO,
	...ENERGY_AMMO,
	...BALLISTIC_GUNS,
	...ENERGY_GUNS,
	...MECHS
}
for (let action of Object.values(ACTIONS)) {
	let multiplyer = 1;
	if (action.type == "ballistic ammo" || action.type == "energy ammo") multiplyer = .5;
	if (action.type == "mechs") multiplyer = 10;
	action.requiredItems['power'] = Math.max(1, Math.round(action.requiredLevel * multiplyer));
}
export { ACTIONS };

export const JOB = {
	id: "fabrication",
	name: "Fabrication",
	icon: require("@/assets/art/fabrication/icon.png"),
	color: "#89adac"
}