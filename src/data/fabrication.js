export const ITEMS = {
	crowbar: {
		name: "Crowbar",
		sellPrice: 1,
		icon: require("@/assets/art/fabrication/crowbar.png")
	},
	ripley: {
		name: "R.I.P.L.E.Y.",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechripley.png")
	},
	ripleymk2: {
		name: "R.I.P.L.E.Y. MK2",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechripleymkii.png")
	},
	odysseus: {
		name: "Odysseus",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechodysseus.png")
	},
	firefighter: {
		name: "R.I.P.L.E.Y. MK3",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechfirefighter.png")
	},
	clarke: {
		name: "Clarke",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechclarke_anim.gif")
	},
	durand: {
		name: "Durand",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechdurand.png")
	},
	marauder: {
		name: "Marauder",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechmarauder.png")
	},
	gygax: {
		name: "Gygax",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechgygax.png")
	},
	mauler: {
		name: "Mauler",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif")
	},
	deathripley: {
		name: "R.I.P.L.E.Y. MK13",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechdeathripley.png")
	},
	darkgygax: {
		name: "Assault Gygax",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechdarkgygax.png")
	},
	reticence: {
		name: ".........",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechreticence.png")
	},
	seraph: {
		name: "Seraph",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechseraph.png")
	},
	honk: {
		name: "H.O.N.K.",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechhonk.png")
	},
	phazon: {
		name: "Phazon",
		sellPrice: 1000,
		icon: require("@/assets/art/fabrication/mechphazon.png")
	}
}

export const ACTIONS = {
	fabricateCrowbar: {
		time: 2,
		item: "crowbar",
		icon: require("@/assets/art/fabrication/crowbar.png"),
		xp: 10,
		requiredLevel: 1,
		requiredItems: {
			iron: 1
		}
	},
	fabricateRipley: {
		time: 60,
		item: "ripley",
		icon: require("@/assets/art/fabrication/mechripley.png"),
		xp: 2600,
		requiredLevel: 2,
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
			uranium: 10,
			plasma: 60,
			diamond: 50,
			bluespace: 75
		}
	}
}

export const JOB = {
	id: "fabrication",
	name: "Fabrication",
	icon: require("@/assets/art/fabrication/icon.png"),
	color: "#89adac",
	items: ITEMS
}