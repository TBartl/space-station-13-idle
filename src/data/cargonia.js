const MOVECRATES = {
	moveCrate1: {
		time: 4,
		name: "Move Crate",
		icon: require("@/assets/art/cargonia/mineral1.png"),
		xp: 5,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "glass",
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
			money: 1
		}
	},
	moveCrate2: {
		time: 4,
		name: "Move Crate",
		icon: require("@/assets/art/cargonia/mineral1.png"),
		xp: 5,
		requiredLevel: 10,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "silver",
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
			money: 1
		}
	},
	moveCrate3: {
		time: 4,
		name: "Move Crate",
		icon: require("@/assets/art/cargonia/mineral3.png"),
		xp: 5,
		requiredLevel: 20,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "titanium",
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
			money: 1
		}
	},
	moveCrate4: {
		time: 4,
		name: "Move Crate",
		icon: require("@/assets/art/cargonia/mineral4.png"),
		xp: 5,
		requiredLevel: 30,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "plasma",
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
			money: 1
		}
	},
	moveCrate5: {
		time: 4,
		name: "Move Crate",
		icon: require("@/assets/art/cargonia/mineral5.png"),
		xp: 5,
		requiredLevel: 40,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "bluespace",
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
			money: 1
		}
	},
	moveCrate6: {
		time: 4,
		name: "Move Crate",
		icon: require("@/assets/art/combat/items/ammo_e1.png"),
		xp: 5,
		requiredLevel: 40,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "ammoEnergy4",
						weight: 60
					},
					{
						id: "ammoBallistic4",
						weight: 40
					},
				]
			},
		],
		requiredItems: {
			money: 1
		}
	},
}

const SELLSTUFF = {
	fence1: {
		time: 4,
		name: "Sell Stuff",
		icon: require("@/assets/art/combat/items/ammo_e1.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "ammoEnergy1",
			count: 8,
		},
		requiredItems: {
			glass: 1
		}
	},
}

const RIFLE_AMMO = {
	buyRammo1: {
		time: 4,
		name: "Ammo",
		icon: require("@/assets/art/combat/items/pocket/ammo_r1.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "ammoRifle1",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	},
	buyRammo2: {
		time: 4,
		name: "Ammo",
		icon: require("@/assets/art/combat/items/pocket/ammo_r2.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "ammoRifle2",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	},
	buyRammo3: {
		time: 4,
		name: "Ammo",
		icon: require("@/assets/art/combat/items/pocket/ammo_r3.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "ammoRifle3",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	},
	buyRammo4: {
		time: 4,
		name: "Ammo",
		icon: require("@/assets/art/combat/items/pocket/ammo_r4.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "ammoRifle4",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	}
}

const RIFLE_GUNS = {
	buyRgun1: {
		time: 4,
		icon: require("@/assets/art/combat/items/hand/gunR_naggant.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "gunRifle1",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	},
	buyRgun2: {
		time: 4,
		icon: require("@/assets/art/combat/items/hand/gunR_wt5.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "gunRifle2",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	},
	buyRgun3: {
		time: 4,
		icon: require("@/assets/art/combat/items/hand/gunR_arg.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "gunRifle3",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	},
	buyRgun4: {
		time: 4,
		name: "C-20r SMG",
		icon: require("@/assets/art/combat/items/hand/gunR_c20r.png"),
		xp: 5,
		requiredLevel: 1,
		items:
		{
			id: "gunRifle4",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	},
	buyRgun5: {
		time: 4,
		icon: require("@/assets/art/combat/items/hand/gunR_m90.png"),
		xp: 5,
		requiredLevel: 26,
		items:
		{
			id: "gunRifle5",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	},
	buyRgun6: {
		time: 4,
		icon: require("@/assets/art/combat/items/hand/gunR_sniper.png"),
		xp: 5,
		requiredLevel: 34,
		items:
		{
			id: "gunRifle6",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	},
	buyRgun7: {
		time: 4,
		icon: require("@/assets/art/combat/items/hand/gunR_l6.png"),
		xp: 5,
		requiredLevel: 46,
		items:
		{
			id: "gunRifle7",
			count: 8,
		},
		requiredItems: {
			money: 1
		}
	}
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