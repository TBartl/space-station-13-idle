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

const TWOTC = {
	TwoSword: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_naggant.png"),
		xp: 6,
		requiredLevel: 10,
		items: "gunRifle1",
		requiredItems: {
			money: 210
		}
	},
	TwoFace: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_wt5.png"),
		xp: 18,
		requiredLevel: 11,
		items: "gunRifle2",
		requiredItems: {
			money: 420
		}
	},
}

const THREETC = {
	ThreeSword: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_naggant.png"),
		xp: 6,
		requiredLevel: 10,
		items: "gunRifle1",
		requiredItems: {
			money: 210
		}
	},
	ThreeSuit: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_wt5.png"),
		xp: 18,
		requiredLevel: 11,
		items: "gunRifle2",
		requiredItems: {
			money: 420
		}
	},
}

const FOURTC = {
	FourSword: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_naggant.png"),
		xp: 6,
		requiredLevel: 10,
		items: "gunRifle1",
		requiredItems: {
			money: 210
		}
	},
	FourSuit: {
		time: 6,
		icon: require("@/assets/art/combat/items/hand/gunR_wt5.png"),
		xp: 18,
		requiredLevel: 11,
		items: "gunRifle2",
		requiredItems: {
			money: 420
		}
	},
}

Object.values(MOVECRATES).forEach(action => action.type = "Move Freight");
Object.values(TWOTC).forEach(action => action.type = "2 TeleCrystals");
Object.values(THREETC).forEach(action => action.type = "3 TeleCrystals");
Object.values(FOURTC).forEach(action => action.type = "4 TeleCrystals");

const ACTIONS = {
	...MOVECRATES,
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