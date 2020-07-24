const randomJunkTable = [
	{
		id: 'junk',
		weight: 6
	},
	{
		id: 'armorJunk',
		weight: 3
	},
	{
		id: 'spaceJunk',
		weight: 3
	},
];

const ACTIONS = {
	//at 25 xp per action gives approximately 4000 total junk to hit 50.
	graytideMoney: {
		name: "Cargo Bay",
		icon: require("@/assets/art/graytiding/Cargo.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "money",
						count: [0, 100],
						weight: 99
					}
				]
			},
			{
				chance: .005,
				item: "limbBoxing",
				weight: 1
			}
		]
	},
	graytideSeeds: {
		name: "Botany",
		icon: require("@/assets/art/graytiding/Botany.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "plantSeed",
						count: [2, 5],
						weight: 99
					}, {
						id: "potionBotany",
						weight: 1
					}
				]
			},
			{
				chance: .005,
				item: "limbMagkrava",
				weight: 1
			}
		]
	},
	graytideMeat: {
		name: "Medical",
		icon: require("@/assets/art/graytiding/Medical.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatH",
						count: [0, 3],
						weight: 165
					}, {
						id: "foodMeatZ",
						count: [0, 3],
						weight: 165
					}, {
						id: "foodMeatA",
						count: [0, 3],
						weight: 165
					}
				]
			},
			{
				chance: .005,
				item: "limbNitrile",
				weight: 1
			}
		]
	},
	graytidePower: {
		name: "Engineering",
		icon: require("@/assets/art/graytiding/Engineering.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "power",
						count: [0, 15],
						weight: 300
					},
					{
						id: "wire",
						count: [1, 3],
						weight: 200
					},
				]
			},
			{
				chance: .005,
				item: "limbInsuls",
				weight: 1
			}
		]
	},
	graytideVault: {
		name: "Vault",
		icon: require("@/assets/art/graytiding/Vault.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: .03,
				itemTable: [
					{
						id: 'junk',
						count: [0, 100],
						weight: 10
					}, {
						id: 'armorJunk',
						count: [0, 100],
						weight: 10
					}, {
						id: 'spaceJunk',
						count: [0, 100],
						weight: 10
					},
				]
			},
			{
				chance: .005,
				item: "limbCapt",
				weight: 1
			}
		]
	},
	graytideSpace: {
		name: "Space",
		icon: require("@/assets/art/graytiding/space_anim.gif"),
		time: 6,
		xp: 26,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: .005,
				item: "limbNinja",
				weight: 1
			}
		]
	},
	graytideDouble: {
		name: "Rage Cage",
		icon: require("@/assets/art/graytiding/Rage.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: .003,
				item: "limbClownShoes",
				weight: 1
			}
		]
	},
	graytideChem: {
		name: "Chemistry",
		icon: require("@/assets/art/graytiding/Chem.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "oxygen",
						count: [0, 5],
						weight: 10
					},{
						id: "oil",
						count: [0, 5],
						weight: 10
					},{
						id: "water",
						count: [0, 5],
						weight: 10
					},{
						id: "sacid",
						count: [0, 5],
						weight: 10
					},{
						id: "mercury",
						count: [0, 5],
						weight: 10
					},{
						id: "lithium",
						count: [0, 5],
						weight: 10
					},
					{
						id: "potionChemistry",
						weight: 2
					},
				]
			},
			{
				chance: .003,
				item: "limbBronze",
				weight: 1
			}
		]
	},
	graytideScience: {
		name: "Research",
		icon: require("@/assets/art/graytiding/Science.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "slimeGray",
						weight: 255
					}, {
						id: "slimeOrange",
						weight: 50
					}, {
						id: "slimePurple",
						weight: 50
					}, {
						id: "slimeBlue",
						weight: 50
					}, {
						id: "slimeYellow",
						weight: 30
					}, {
						id: "slimeDarkPurple",
						weight: 30
					}, {
						id: "slimeDarkBlue",
						weight: 30
					}
				]
			},
			{
				chance: .003,
				item: "limbAdvancedMagboots",
				weight: 1
			}
		]
	},
	graytideBridge: {
		name: "Captain's Quarters",
		icon: require("@/assets/art/graytiding/Command.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "foodPasta1",
						weight: 200
					}, {
						id: "foodPasta2",
						weight: 100
					}, {
						id: "foodPasta3",
						weight: 75
					}, {
						id: "foodPasta4",
						weight: 55
					}, {
						id: "foodPasta5",
						weight: 40
					}, {
						id: "foodPasta6",
						weight: 25
					}
				]
			},
			{
				chance: .003,
				item: "limbBlack",
				weight: 1
			}
		]
	},
	graytideMining: {
		name: "Mining",
		icon: require("@/assets/art/graytiding/Mining.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "glass",
						count: [1, 3],
						weight: 325
					},{
						id: "iron",
						count: [1, 3],
						weight: 220
					},{
						id: "silver",
						count: [1, 3],
						weight: 175
					},{
						id: "gold",
						count: [1, 3],
						weight: 135
					},{
						id: "titanium",
						count: [1, 3],
						weight: 100
					},{
						id: "uranium",
						count: [1, 3],
						weight: 70
					},{
						id: "plasma",
						count: [1, 3],
						weight: 45
					},{
						id: "diamond",
						count: [1, 3],
						weight: 25
					},{
						id: "bluespace",
						count: [1, 3],
						weight: 10
					},{
						id: "bananium",
						count: [1, 3],
						weight: 2
					},
				]
			},
			{
				chance: .003,
				item: "limbMagBoots",
				weight: 1
			}
		]
	},
	graytideSecurity: {
		name: "Security",
		icon: require("@/assets/art/graytiding/Security.png"),
		time: 6,
		xp: 25,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "ammoEnergy1",
						count: [1, 5],
						weight: 119
					}, {
						id: "ammoEnergy2",
						count: [1, 4],
						weight: 40
					}, {
						id: "ammoEnergy3",
						count: [1, 3],
						weight: 20
					}, {
						id: "ammoEnergy4",
						count: [1, 3],
						weight: 10
					}, {
						id: "ammoBallistic1",
						count: [1, 5],
						weight: 120
					}, {
						id: "ammoBallistic2",
						count: [1, 4],
						weight: 40
					}, {
						id: "ammoBallistic3",
						count: [1, 3],
						weight: 20
					}, {
						id: "ammoBallistic4",
						count: [1, 3],
						weight: 10
					}
				]
			},
			{
				chance: .003,
				item: "limbJackboots",
				weight: 1
			}
		]
	},
	// graytideBULK: {
	// 	name: "Security",
	// 	icon: require("@/assets/art/graytiding/Security.png"),
	// 	time: 6,
	// 	xp: 25,
	// 	requiredLevel: 1,
	// 	itemTables: [
	// 		{
	// 			chance: 1,
	// 			itemTable: randomJunkTable
	// 		},
	// 		{
	// 			chance: 1,
	// 			itemTable: [
	// 				{
	// 					id: "limbInsuls",
	// 					count: [1, 3],
	// 					weight: 50
	// 				}, {
	// 					id: "limbBoxing",
	// 					count: 2,
	// 					weight: 50
	// 				}, {
	// 					id: "limbMagkrava",
	// 					weight: 50
	// 				}, {
	// 					id: "limbCapt",
	// 					weight: 50
	// 				}, {
	// 					id: "limbNinja",
	// 					count: [1, 3],
	// 					weight: 50
	// 				}, {
	// 					id: "limbBlack",
	// 					count: 2,
	// 					weight: 50
	// 				}, {
	// 					id: "limbMagBoots",
	// 					weight: 50
	// 				}, {
	// 					id: "limbClownShoes",
	// 					weight: 50
	// 				}, {
	// 					id: "limbJackBoots",
	// 					weight: 50
	// 				}, {
	// 					id: "limbAdvancedMagboots",
	// 					weight: 50
	// 				},
	// 			]
	// 		}
	// 	]
	// },
}

Object.values(ACTIONS).forEach((action, index) => {
	action.requiredLevel = 1 + index * 2
	action.failure = {
		message: "Apprehended!",
		chance: .75,
		damage: Math.floor(5 + index * 1.5)
	}
});

export { ACTIONS }

export const JOB = {
	id: "graytiding",
	name: "Graytiding",
	icon: require("@/assets/art/graytiding/icon.png"),
	color: "#B0B0B0"
}
