const ONETC = {
	hailCargonia1: {
		time: 1,
		actionName: "HAIL",
		name: "Cargonia",
		item: "supplyCrate",
		icon: require("@/assets/art/jobinfo/cargo_banner.png"),
		xp: 1043,
		requiredLevel: 1,
		requiredItems: { startCargonia: 1 }
	},
	renounceCargonia: {
		time: 1,
		item: "antag",
		icon: require("@/assets/art/cargonia/renounce_anim.gif"),
		xp: -200000,
		requiredLevel: 1,
	},
	OneSword: {
		time: 30,
		xp: 5000,
		requiredLevel: 10,
		item: "jumpsuitSecurity",
		requiredItems: {
			spendTC: 1
		}
	},
	METH: {
		time: 30,
		xp: 5000,
		requiredLevel: 10,
		icon: require("@/assets/art/combat/items/pill1.png"),
		items:
		{
			id: "pillMeth",
			count: 8888,
		},
		requiredItems: {
			spendTC: 1
		}
	},
	BULLET: {
		time: 30,
		xp: 5000,
		requiredLevel: 10,
		icon: require("@/assets/art/combat/items/ammo_b2.png"),
		items:
		{
			id: "ammoBallistic2",
			count: 8888,
		},
		requiredItems: {
			spendTC: 1
		}
	},
	CELL: {
		time: 30,
		xp: 18,
		requiredLevel: 10,
		icon: require("@/assets/art/combat/items/ammo_e2.png"),
		items:
		{
			id: "ammoEnergy2",
			count: 8888,
		},
		requiredItems: {
			spendTC: 1
		}
	},
}

const TWOTC = {
	TwoJump: {
		time: 30,
		xp: 10000,
		requiredLevel: 10,
		item: "jumpsuitSecurity",
		requiredItems: {
			spendTC: 2
		}
	},
	TwoSword: {
		time: 30,
		xp: 10000,
		requiredLevel: 10,
		item: "meleeBurn3T",
		requiredItems: {
			spendTC: 2
		}
	},
	TwoSuit: {
		time: 30,
		xp: 10000,
		requiredLevel: 10,
		item: "deathRipley",
		requiredItems: {
			spendTC: 2
		}
	},
}

const THREETC = {
	ThreeJump: {
		time: 30,
		xp: 15000,
		requiredLevel: 10,
		item: "jumpsuitChameleon",
		requiredItems: {
			spendTC: 3
		}
	},
	ThreeSword: {
		time: 30,
		xp: 15000,
		requiredLevel: 10,
		item: "meleeBurn4T",
		requiredItems: {
			spendTC: 3
		}
	},
	ThreeSuit: {
		time: 30,
		xp: 15000,
		requiredLevel: 10,
		item: "deathRipley",
		requiredItems: {
			spendTC: 3
		}
	},
}

const FOURTC = {
	FourJump: {
		time: 30,
		xp: 20000,
		requiredLevel: 10,
		item: "jumpsuitTactical",
		requiredItems: {
			spendTC: 4
		}
	},
	FourSword: {
		time: 30,
		xp: 20000,
		requiredLevel: 10,
		item: "meleeBurn5T",
		requiredItems: {
			spendTC: 4
		}
	},
	FourSuit: {
		time: 30,
		xp: 20000,
		requiredLevel: 10,
		item: "deathRipley",
		requiredItems: {
			spendTC: 4
		}
	},
}

Object.values(ONETC).forEach(action => action.type = "1 TeleCrystal");
Object.values(TWOTC).forEach(action => action.type = "2 TeleCrystals");
Object.values(THREETC).forEach(action => action.type = "3 TeleCrystals");
Object.values(FOURTC).forEach(action => action.type = "4 TeleCrystals");

const ACTIONS = {
	...ONETC,
	...TWOTC,
	...THREETC,
	...FOURTC,
}

export { ACTIONS };

export const JOB = {
	id: "traitor",
	name: "Traitor",
	icon: require("@/assets/art/traitor/icon.png"),
	color: "#704610"
}