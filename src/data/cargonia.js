const MOVECRATES = {
	hailCargonia1: {
		time: 1,
		actionName: "HAIL",
		name: "Cargonia",
		item: "supplyCrate",
		icon: require("@/assets/art/jobinfo/cargo_banner.png"),
		xp: 864,
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
	moveCrate1: {
		time: 6,
		name: "Basic Ore",
		icon: require("@/assets/art/cargonia/mineral1.png"),
		xp: 6,
		requiredLevel: 12,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "glass",
						count: 3,
						weight: 30
					},
					{
						id: "iron",
						count: 2,
						weight: 20
					},
				]
			},
		],
		requiredItems: {
			money: 10
		}
	},
	moveCrate2: {
		time: 6,
		name: "Precious Metal",
		icon: require("@/assets/art/cargonia/mineral2.png"),
		xp: 12,
		requiredLevel: 20,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "silver",
						count: 3,
						weight: 60
					},
					{
						id: "gold",
						count: 2,
						weight: 40
					},
				]
			},
		],
		requiredItems: {
			money: 45
		}
	},
	moveCrate3: {
		time: 6,
		name: "Industrial Materials",
		icon: require("@/assets/art/cargonia/mineral3.png"),
		xp: 17,
		requiredLevel: 28,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "titanium",
						count: 3,
						weight: 60
					},
					{
						id: "uranium",
						count: 2,
						weight: 40
					},
				]
			},
		],
		requiredItems: {
			money: 100
		}
	},
	moveCrate4: {
		time: 6,
		name: "Confounding Crystals",
		icon: require("@/assets/art/cargonia/mineral4.png"),
		xp: 22,
		requiredLevel: 36,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "plasma",
						count: 3,
						weight: 60
					},
					{
						id: "diamond",
						count: 2,
						weight: 40
					},
				]
			},
		],
		requiredItems: {
			money: 175
		}
	},
	moveCrate5: {
		time: 6,
		name: "Biochemical Beryls",
		icon: require("@/assets/art/cargonia/mineral5.png"),
		xp: 26,
		requiredLevel: 44,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "bluespace",
						count: 3,
						weight: 60
					},
					{
						id: "bananium",
						count: 2,
						weight: 40
					},
				]
			},
		],
		requiredItems: {
			money: 600
		}
	},
	moveCrate6: {
		time: 6,
		name: "Contraband Ammo",
		icon: require("@/assets/art/cargonia/ammo1.png"),
		xp: 29,
		requiredLevel: 48,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "ammoEnergy4",
						count: 6,
						weight: 50
					},
					{
						id: "ammoBallistic4",
						count:6,
						weight: 50
					},
				]
			},
		],
		requiredItems: {
			money: 390
		}
	},
}

const SELLSTUFF = {
	fence1: {
		time: 6,
		name: "Collector's Item",
		icon: require("@/assets/art/cargonia/smuggle1.png"),
		xp: 9,
		requiredLevel: 16,
		items:
		{
			id: "money",
			count: 606,
		},
		requiredItems: {
			innocent: 1
		}
	},
	fence2: {
		time: 6,
		name: "Stolen Valor",
		icon: require("@/assets/art/cargonia/smuggle2.png"),
		xp: 14,
		requiredLevel: 24,
		items:
		{
			id: "money",
			count: 707,
		},
		requiredItems: {
			criminal: 1
		}
	},
	fence3: {
		time: 6,
		name: "Contraband",
		icon: require("@/assets/art/cargonia/smuggle3.png"),
		xp: 19,
		requiredLevel: 32,
		items:
		{
			id: "money",
			count: 1010,
		},
		requiredItems: {
			burnJunk: 2001
		}
	},
	fence4: {
		time: 6,
		name: "Obscure Recipe",
		icon: require("@/assets/art/cargonia/smuggle4.png"),
		xp: 24,
		requiredLevel: 40,
		items:
		{
			id: "money",
			count: 1989,
		},
		requiredItems: {
			q_foodPasta6: 1
		}
	},
}

const RIFLE_AMMO = {
	buyRammo1: {
		time: 6,
		icon: require("@/assets/art/combat/items/pocket/ammo_r1.png"),
		xp: 8,
		requiredLevel: 14,
		items:
		{
			id: "ammoRifle1",
			count: 8,
		},
		requiredItems: {
			money: 32
		}
	},
	buyRammo2: {
		time: 6,
		icon: require("@/assets/art/combat/items/pocket/ammo_r2.png"),
		xp: 13,
		requiredLevel: 22,
		items:
		{
			id: "ammoRifle2",
			count: 8,
		},
		requiredItems: {
			money: 168
		}
	},
	buyRammo3: {
		time: 6,
		icon: require("@/assets/art/combat/items/pocket/ammo_r3.png"),
		xp: 18,
		requiredLevel: 30,
		items:
		{
			id: "ammoRifle3",
			count: 8,
		},
		requiredItems: {
			money: 344
		}
	},
	buyRammo4: {
		time: 6,
		icon: require("@/assets/art/combat/items/pocket/ammo_r4.png"),
		xp: 23,
		requiredLevel: 38,
		items:
		{
			id: "ammoRifle4",
			count: 8,
		},
		requiredItems: {
			money: 520
		}
	}
}

const RIFLE_GUNS = {
	buyRgun1: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_naggant.png"),
		xp: 6,
		requiredLevel: 10,
		item: "gunRifle1",
		requiredItems: {
			money: 210
		}
	},
	buyRgun2: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_wt5.png"),
		xp: 18,
		requiredLevel: 11,
		item: "gunRifle2",
		requiredItems: {
			money: 420
		}
	},
	buyRgun3: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_arg.png"),
		xp: 16,
		requiredLevel: 26,
		item: "gunRifle3",
		requiredItems: {
			money: 630
		}
	},
	buyRgun4: {
		time: 6,
		name: "C-20r SMG",
		icon: require("@/assets/art/combat/items/hand/gunR_c20r.png"),
		xp: 20,
		requiredLevel: 34,
		item:"gunRifle4",
		requiredItems: {
			money: 840
		}
	},
	buyRgun5: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_m90.png"),
		xp: 25,
		requiredLevel: 42,
		item:"gunRifle5",
		requiredItems: {
			money: 1050
		}
	},
	buyRgun6: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_sniper.png"),
		xp: 28,
		requiredLevel: 46,
		item:"gunRifle6",
		requiredItems: {
			money: 1260
		}
	},
	buyRgun7: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_l6.png"),
		xp: 30,
		requiredLevel: 50,
		item:"gunRifle7",
		requiredItems: {
			money: 1470
		}
	},
}

Object.values(MOVECRATES).forEach(action => action.type = "Move Freight");
Object.values(SELLSTUFF).forEach(action => action.type = "Find Buyers");
Object.values(RIFLE_AMMO).forEach(action => action.type = "Smuggle Ammo");
Object.values(RIFLE_GUNS).forEach(action => action.type = "Smuggle Arms");

const ACTIONS = {
	...MOVECRATES,
	...SELLSTUFF,
	...RIFLE_AMMO,
	...RIFLE_GUNS,
}

export { ACTIONS };

export const JOB = {
	id: "cargonia",
	name: "Cargonia",
	icon: require("@/assets/art/jobinfo/cargo_banner.png"),
	color: "#704610"
}