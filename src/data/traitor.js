const ONETC = {
	OneSword: {
		time: 180,
		xp: 5025,
		requiredLevel: 1,
		item: "jumpsuitClown",
		requiredItems: {
			spendTC: 1
		}
	},
	METH: {
		time: 180,
		xp: 5025,
		requiredLevel: 1,
		icon: require("@/assets/art/combat/items/pill1.png"),
		items:
		{
			id: "pillMeth",
			count: 888,
		},
		requiredItems: {
			spendTC: 1
		}
	},
	BULLET: {
		time: 180,
		xp: 5025,
		requiredLevel: 1,
		icon: require("@/assets/art/combat/items/ammo_b2.png"),
		items:
		{
			id: "ammoBallistic2",
			count: 888,
		},
		requiredItems: {
			spendTC: 1
		}
	},
	CELL: {
		time: 180,
		xp: 5025,
		requiredLevel: 1,
		icon: require("@/assets/art/combat/items/ammo_e2.png"),
		items:
		{
			id: "ammoEnergy2",
			count: 888,
		},
		requiredItems: {
			spendTC: 1
		}
	},
}

const TWOTC = {
	TwoJump: {
		time: 360,
		xp: 10050,
		requiredLevel: 1,
		item: "jumpsuitSecurity",
		requiredItems: {
			spendTC: 2
		}
	},
	TwoSword: {
		time: 360,
		xp: 10050,
		requiredLevel: 1,
		item: "meleeBurn3T",
		requiredItems: {
			spendTC: 2
		}
	},
	TwoSuit: {
		time: 360,
		xp: 10050,
		requiredLevel: 1,
		item: "totsuit1",
		requiredItems: {
			spendTC: 2
		}
	},
	TwoConsume: {
		time: 360,
		xp: 10050,
		requiredLevel: 1,
		icon: require("@/assets/art/cooking/pasta1.png"),
		items:
		{
			id: "foodPasta1",
			count: 888,
		},
		requiredItems: {
			spendTC: 2
		}
	},
}

const THREETC = {
	ThreeJump: {
		time: 540,
		xp: 15075,
		requiredLevel: 1,
		item: "jumpsuitChameleon",
		requiredItems: {
			spendTC: 3
		}
	},
	ThreeSword: {
		time: 540,
		xp: 15075,
		requiredLevel: 1,
		item: "meleeBurn4T",
		requiredItems: {
			spendTC: 3
		}
	},
	ThreeSuit: {
		time: 540,
		xp: 15075,
		requiredLevel: 1,
		item: "totsuit2",
		requiredItems: {
			spendTC: 3
		}
	},
	ThreeConsume: {
		time: 540,
		xp: 15075,
		requiredLevel: 1,
        icon: require("@/assets/art/bartending/syndicatebomb.png"),
		items:
		{
			id: "drinkSyndicateBomb",
			count: 888,
		},
		requiredItems: {
			spendTC: 3
		}
	},
}

const FOURTC = {
	FourJump: {
		time: 720,
		xp: 20100,
		requiredLevel: 1,
		item: "jumpsuitTactical",
		requiredItems: {
			spendTC: 4
		}
	},
	FourSword: {
		time: 720,
		xp: 20100,
		requiredLevel: 1,
		item: "meleeBurn5T",
		requiredItems: {
			spendTC: 4
		}
	},
	FourSuit: {
		time: 720,
		xp: 20100,
		requiredLevel: 1,
		item: "totsuit3",
		requiredItems: {
			spendTC: 4
		}
	},
	FourConsume: {
		time: 720,
		xp: 20100,
		requiredLevel: 1,
		icon: require("@/assets/art/xenobio/SlimeRainbow.gif"),
		items:
		{
			id: "slimeRainbow",
			count: 88,
		},
		requiredItems: {
			spendTC: 4
		}
	},
}

const TUPGRADE = {
	UpDagger: {
		time: 360,
		xp: 0,
		requiredLevel: 1,
		item: "meleeBurn3T",
		actionName: "UPGRADE",
		requiredItems: {
			meleeBurn3: 1
		},
		requiredUpgrade: "traitorUpgrades"
	},
	UpSword: {
		time: 540,
		xp: 0,
		requiredLevel: 1,
		item: "meleeBurn4T",
		actionName: "UPGRADE",
		requiredItems: {
			meleeBurn4: 1
		},
		requiredUpgrade: "traitorUpgrades"
	},
	UpDesword: {
		time: 720,
		xp: 0,
		requiredLevel: 1,
		item: "meleeBurn5T",
		actionName: "UPGRADE",
		requiredItems: {
			meleeBurn5: 1
		},
		requiredUpgrade: "traitorUpgrades"
	},
	UpSuit: {
		time: 540,
		xp: 0,
		requiredLevel: 1,
		item: "totsuit2",
		actionName: "UPGRADE",
		requiredItems: {
			armorBurn6: 1
		},
		requiredUpgrade: "traitorUpgrades"
	}
}

Object.values(ONETC).forEach(action => action.type = "1 TeleCrystal");
Object.values(TWOTC).forEach(action => action.type = "2 TeleCrystals");
Object.values(THREETC).forEach(action => action.type = "3 TeleCrystals");
Object.values(FOURTC).forEach(action => action.type = "4 TeleCrystals");
Object.values(TUPGRADE).forEach(action => action.type = "Adaptive Customization");

const ACTIONS = {
	...ONETC,
	...TWOTC,
	...THREETC,
	...FOURTC,
	...TUPGRADE
}

export { ACTIONS };

export const JOB = {
	id: "traitor",
	name: "Traitor",
	icon: require("@/assets/art/traitor/icon.png"),
	color: "#a90d0d",
	noJobBlitz: true
}