const ACTIONS_LINGBASE = {
	ling0: {
		time: 800,
		actionName: "INGEST",
		name: "ALIEN ORGAN",
		items: "lingPower0",
		icon: require("@/assets/art/ling/headcrab.png"),
		xp: 864,
		requiredItems: { startLing: 1 },
		requiredLevel: 1
	},
}
const ACTIONS_LINGAIM = {
	lingAim1: {
		time: 9,
		name: "Core Enhancements",
		icon: require("@/assets/art/combat/items/chest/arm_la1.png"),
		xp: 9,
		requiredLevel: 10,
		requiredItems: {
			foodMeatH: 1
		},
		healthCost: 3,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatH",
						weight: 75
					},
					{
						id: "foodMeatH",
						count: 2,
						weight: 20
					},
					{
						id: "lingAim1",
						weight: 5
					}
				]
			},
		]
	},
	lingAim2: {
		time: 9,
		name: "Leg Enhancements",
		icon: require("@/assets/art/combat/items/chest/arm_la2.png"),
		xp: 15,
		requiredLevel: 17,
		requiredItems: {
			foodMeatH: 2,
			lingAim1: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingAim1",
						weight: 75
					},
					{
						id: "lingAim1",
						count: 2,
						weight: 20
					},
					{
						id: "lingAim2",
						weight: 5
					}
				]
			},
		]
	},
	lingAim3: {
		time: 9,
		name: "Enhanced Nerves",
		icon: require("@/assets/art/combat/items/chest/arm_la3.png"),
		xp: 21,
		requiredLevel: 24,
		requiredItems: {
			foodMeatH: 3,
			lingAim2: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingAim2",
						weight: 75
					},
					{
						id: "lingAim2",
						count: 2,
						weight: 20
					},
					{
						id: "lingAim3",
						weight: 5
					}
				]
			},
		]
	},
	lingAim4: {
		time: 9,
		item: "lingAim4",
		icon: require("@/assets/art/combat/items/chest/arm_la4.png"),
		xp: 28,
		requiredLevel: 31,
		requiredItems: {
			foodMeatH: 4,
			lingAim3: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingAim3",
						weight: 75
					},
					{
						id: "lingAim3",
						count: 2,
						weight: 20
					},
					{
						id: "lingAim4",
						weight: 5
					}
				]
			},
		]
	},
	lingAim5: {
		time: 9,
		item: "lingAim5",
		icon: require("@/assets/art/combat/items/chest/arm_la5.png"),
		xp: 34,
		requiredLevel: 38,
		requiredItems: {
			foodMeatH: 5,
			lingAim4: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingAim4",
						weight: 75
					},
					{
						id: "lingAim4",
						count: 2,
						weight: 20
					},
					{
						id: "lingAim5",
						weight: 5
					}
				]
			},
		]
	},
	lingAim6: {
		time: 9,
		item: "lingAim6",
		icon: require("@/assets/art/combat/items/chest/arm_la6.png"),
		xp: 40,
		requiredLevel: 44,
		requiredItems: {
			foodMeatH: 6,
			lingAim5: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingAim5",
						weight: 75
					},
					{
						id: "lingAim5",
						count: 2,
						weight: 20
					},
					{
						id: "lingAim6",
						weight: 5
					}
				]
			},
		]
	},
}
const ACTIONS_LINGPOWER = {
	lingPower0: {
		time: 9,
		name: "Reinforced Ribs",
		icon: require("@/assets/art/combat/items/chest/arm_lp1.png"),
		xp: 10,
		requiredLevel: 12,
		requiredItems: {
			foodMeatA: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatA",
						weight: 75
					},
					{
						id: "foodMeatA",
						count: 2,
						weight: 20
					},
					{
						id: "lingPower1",
						weight: 5
					}
				]
			},
		]
	},
	lingPower1: {
		time: 9,
		name: "Reinforced Chest",
		icon: require("@/assets/art/combat/items/chest/arm_lp2.png"),
		xp: 17,
		requiredLevel: 19,
		requiredItems: {
			foodMeatA: 2,
			lingPower1: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingPower1",
						weight: 75
					},
					{
						id: "lingPower1",
						count: 2,
						weight: 20
					},
					{
						id: "lingPower2",
						weight: 5
					}
				]
			},
		]
	},
	lingPower2: {
		time: 9,
		name: "Reinforced Core",
		icon: require("@/assets/art/combat/items/chest/arm_lp3.png"),
		xp: 23,
		requiredLevel: 26,
		requiredItems: {
			foodMeatA: 3,
			lingPower2: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingPower2",
						weight: 75
					},
					{
						id: "lingPower2",
						count: 2,
						weight: 20
					},
					{
						id: "lingPower3",
						weight: 5
					}
				]
			},
		]
	},
	lingPower3: {
		time: 9,
		name: "Reinforced Torso",
		icon: require("@/assets/art/combat/items/chest/arm_lp4.png"),
		xp: 29,
		requiredLevel: 33,
		requiredItems: {
			foodMeatA: 4,
			lingPower3: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingPower3",
						weight: 75
					},
					{
						id: "lingPower3",
						count: 2,
						weight: 20
					},
					{
						id: "lingPower4",
						weight: 5
					}
				]
			},
		]
	},
	lingPower4: {
		time: 9,
		name: "Reinforced Legs",
		icon: require("@/assets/art/combat/items/chest/arm_lp5.png"),
		xp: 36,
		requiredLevel: 40,
		requiredItems: {
			foodMeatA: 5,
			lingPower4: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingPower4",
						weight: 75
					},
					{
						id: "lingPower4",
						count: 2,
						weight: 20
					},
					{
						id: "lingPower5",
						weight: 5
					}
				]
			},
		]
	},
	lingPower5: {
		time: 9,
		name: "Reinforced Body",
		icon: require("@/assets/art/combat/items/chest/arm_lp6.png"),
		xp: 41,
		requiredLevel: 46,
		requiredItems: {
			foodMeatA: 6,
			lingPower5: 1
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "lingPower5",
						weight: 75
					},
					{
						id: "lingPower5",
						count: 2,
						weight: 20
					},
					{
						id: "lingPower6",
						weight: 5
					}
				]
			},
		]
	},
}
const ACTIONS_LINGFACE = {
	lingFace0: {
		time: 9,
		item: "faceLing0",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 12,
		requiredLevel: 14,
		requiredItems: {
			foodMeatZ: 1
		}
	},	
	lingFace1: {
		time: 9,
		item: "faceLing1",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 18,
		requiredLevel: 21,
		requiredItems: {
			foodMeatZ: 2
		}
	},	
	lingFace2: {
		time: 9,
		item: "faceLing2",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 25,
		requiredLevel: 28,
		requiredItems: {
			foodMeatZ: 3
		}
	},	
	lingFace3: {
		time: 31,
		item: "faceLing3",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 31,
		requiredLevel: 35,
		requiredItems: {
			foodMeatZ: 4
		}
	},	
	lingFace4: {
		time: 37,
		item: "faceLing4",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 37,
		requiredLevel: 42,
		requiredItems: {
			foodMeatZ: 5
		}
	},	
	lingFace5: {
		time: 48,
		item: "faceLing5",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 48,
		requiredLevel: 48,
		requiredItems: {
			foodMeatZ: 6
		}
	},	
}

Object.values(ACTIONS_LINGBASE).forEach(action => action.type = "ACCLIMATION");
Object.values(ACTIONS_LINGAIM).forEach(action => action.type = "FLESH ARMOR");
Object.values(ACTIONS_LINGPOWER).forEach(action => action.type = "BONE ARMOR");
Object.values(ACTIONS_LINGFACE).forEach(action => action.type = "DISGUISES");

export const ACTIONS = {
	...ACTIONS_LINGBASE,
	...ACTIONS_LINGAIM,
	...ACTIONS_LINGPOWER,
	...ACTIONS_LINGFACE,
}

export const JOB = {
	id: "ling",
	name: "Changeling",
	icon: require("@/assets/art/ling/icon.png"),
	color: "#9266cc"
}