const ONETC = {
	OneSword: {
		time: 30,
		xp: 5025,
		requiredLevel: 1,
		item: "jumpsuitSecurity",
		requiredItems: {
			spendTC: 1
		}
	},
	METH: {
		time: 30,
		xp: 5025,
		requiredLevel: 1,
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
		xp: 5025,
		requiredLevel: 1,
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
		xp: 5025,
		requiredLevel: 1,
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
		xp: 10050,
		requiredLevel: 1,
		item: "jumpsuitSecurity",
		requiredItems: {
			spendTC: 2
		}
	},
	TwoSword: {
		time: 30,
		xp: 10050,
		requiredLevel: 1,
		item: "meleeBurn3T",
		requiredItems: {
			spendTC: 2
		}
	},
	TwoSuit: {
		time: 30,
		xp: 10050,
		requiredLevel: 1,
		item: "totsuit1",
		requiredItems: {
			spendTC: 2
		}
	},
	TwoConsume: {
		time: 30,
		xp: 10050,
		requiredLevel: 1,
		icon: require("@/assets/art/cooking/pasta1.png"),
		items:
		{
			id: "foodPasta1",
			count: 8888,
		},
		requiredItems: {
			spendTC: 2
		}
	},
}

const THREETC = {
	ThreeJump: {
		time: 30,
		xp: 15075,
		requiredLevel: 10,
		item: "jumpsuitChameleon",
		requiredItems: {
			spendTC: 3
		}
	},
	ThreeSword: {
		time: 30,
		xp: 15075,
		requiredLevel: 1,
		item: "meleeBurn4T",
		requiredItems: {
			spendTC: 3
		}
	},
	ThreeSuit: {
		time: 30,
		xp: 15075,
		requiredLevel: 1,
		item: "totsuit2",
		requiredItems: {
			spendTC: 3
		}
	},
	ThreeConsume: {
		time: 30,
		xp: 15075,
		requiredLevel: 1,
        icon: require("@/assets/art/bartending/syndicatebomb.png"),
		items:
		{
			id: "drinkSyndicateBomb",
			count: 8888,
		},
		requiredItems: {
			spendTC: 3
		}
	},
}

const FOURTC = {
	FourJump: {
		time: 30,
		xp: 20100,
		requiredLevel: 1,
		item: "jumpsuitTactical",
		requiredItems: {
			spendTC: 4
		}
	},
	FourSword: {
		time: 30,
		xp: 20100,
		requiredLevel: 1,
		item: "meleeBurn5T",
		requiredItems: {
			spendTC: 4
		}
	},
	FourSuit: {
		time: 30,
		xp: 20100,
		requiredLevel: 1,
		item: "totsuit3",
		requiredItems: {
			spendTC: 4
		}
	},
	FourConsume: {
		time: 30,
		xp: 20100,
		requiredLevel: 1,
		icon: require("@/assets/art/xenobio/SlimeRainbow.gif"),
		items:
		{
			id: "slimeRainbow",
			count: 888,
		},
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
	color: "#a90d0d"
}