export const ACTIONS = {
	ling0: {
		time: 60,
		item: "foodMeatZ",
		icon: require("@/assets/art/ling/headcrab.png"),
		xp: 864,
		requiredLevel: 1
	},
	lingAim1: {
		time: 1,
		name: "Core Enhancements",
		icon: require("@/assets/art/combat/items/chest/arm_la1.png"),
		xp: 5,
		requiredLevel: 10,
		requiredItems: {
			foodMeatH: 1
		},
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
		time: 1,
		name: "Enhanced Nerves",
		icon: require("@/assets/art/combat/items/chest/arm_la2.png"),
		xp: 5,
		requiredLevel: 10,
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
		time: 1,
		item: "lingAim3",
		icon: require("@/assets/art/combat/items/chest/arm_la3.png"),
		xp: 5,
		requiredLevel: 20,
		requiredItems: {
			foodMeatH: 3
		}
	},
	lingAim4: {
		time: 9,
		item: "lingAim4",
		icon: require("@/assets/art/combat/items/chest/arm_la4.png"),
		xp: 5,
		requiredLevel: 30,
		requiredItems: {
			foodMeatH: 4
		}
	},
	lingAim5: {
		time: 9,
		item: "lingAim5",
		icon: require("@/assets/art/combat/items/chest/arm_la5.png"),
		xp: 5,
		requiredLevel: 40,
		requiredItems: {
			foodMeatH: 5
		}
	},
	lingAim6: {
		time: 9,
		item: "lingAim6",
		icon: require("@/assets/art/combat/items/chest/arm_la6.png"),
		xp: 50,
		requiredLevel: 50,
		requiredItems: {
			foodMeatH: 6
		}
	},
	lingPower0: {
		time: 9,
		item: "lingPower1",
		icon: require("@/assets/art/combat/items/chest/arm_lp1.png"),
		xp: 5,
		requiredLevel: 1,
		requiredItems: {
			foodMeatA: 1
		}
	},
	lingPower1: {
		time: 9,
		item: "lingPower2",
		icon: require("@/assets/art/combat/items/chest/arm_lp2.png"),
		xp: 5,
		requiredLevel: 10,
		requiredItems: {
			foodMeatA: 2
		}
	},
	lingPower2: {
		time: 9,
		item: "lingPower3",
		icon: require("@/assets/art/combat/items/chest/arm_lp3.png"),
		xp: 5,
		requiredLevel: 20,
		requiredItems: {
			foodMeatA: 3
		}
	},
	lingPower3: {
		time: 9,
		item: "lingPower4",
		icon: require("@/assets/art/combat/items/chest/arm_lp4.png"),
		xp: 5,
		requiredLevel: 30,
		requiredItems: {
			foodMeatA: 4
		}
	},
	lingPower4: {
		time: 9,
		item: "lingPower5",
		icon: require("@/assets/art/combat/items/chest/arm_lp5.png"),
		xp: 5,
		requiredLevel: 40,
		requiredItems: {
			foodMeatA: 5
		}
	},
	lingPower5: {
		time: 9,
		item: "lingPower6",
		icon: require("@/assets/art/combat/items/chest/arm_lp6.png"),
		xp: 5,
		requiredLevel: 50,
		requiredItems: {
			foodMeatA: 6
		}
	},
	lingFace0: {
		time: 9,
		item: "faceLing0",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 5,
		requiredLevel: 10,
		requiredItems: {
			foodMeatZ: 1
		}
	},	
	lingFace1: {
		time: 9,
		item: "faceLing1",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 5,
		requiredLevel: 10,
		requiredItems: {
			foodMeatZ: 2
		}
	},	
	lingFace2: {
		time: 9,
		item: "faceLing2",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 5,
		requiredLevel: 20,
		requiredItems: {
			foodMeatZ: 3
		}
	},	
	lingFace3: {
		time: 9,
		item: "faceLing3",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 5,
		requiredLevel: 30,
		requiredItems: {
			foodMeatZ: 4
		}
	},	
	lingFace4: {
		time: 9,
		item: "faceLing4",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 5,
		requiredLevel: 40,
		requiredItems: {
			foodMeatZ: 5
		}
	},	
	lingFace5: {
		time: 9,
		item: "faceLing5",
		icon: require("@/assets/art/ling/lingface.png"),
		xp: 5,
		requiredLevel: 50,
		requiredItems: {
			foodMeatZ: 6
		}
	},	
}

export const JOB = {
	id: "ling",
	name: "Changeling",
	icon: require("@/assets/art/debug/A.png"),
	color: "#9266cc"
}