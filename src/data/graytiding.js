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

const TIDING = {
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
		xp: 30,
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

const CLEANING = {
	//at 25 xp per action gives approximately 4000 total junk to hit 50.
	clean1: {
		name: "Worker Strike",
		icon: require("@/assets/art/graytiding/Clean1.png"),
		time: 6,
		xp: 30,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 0.25,
				itemTable: [
					{
						id: "jumpsuitTinkering",
						count: 1,
						weight: 20
					},
					{
						id: "jumpsuitScience",
						count: 1,
						weight: 20
					},
					{
						id: "faceScience",
						count: 1,
						weight: 20
					},
					{
						id: "startCult",
						count: 1,
						weight: 24
					},
					{
						id: "meleeToolbox1",
						count: 1,
						weight: 36
					},
				]
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: "revParts",
						count: [1, 3],
						weight: 20
					},
				]
			},
		]
	},
	clean2: {
		name: "Brutal Security",
		icon: require("@/assets/art/graytiding/Clean2.png"),
		time: 6,
		xp: 30,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 0.25,
				itemTable: [
					{
						id: "jumpsuitFabrication",
						count: 1,
						weight: 20
					},
					{
						id: "jumpsuitGraytide",
						count: 1,
						weight: 20
					},
					{
						id: "faceMedHud",
						count: 1,
						weight: 20
					},
					{
						id: "neckFanny1",
						count: 1,
						weight: 24
					},
					{
						id: "meleeToolbox2",
						count: 1,
						weight: 36
					},
				]
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: "boss1Parts",
						count: [1, 3],
						weight: 20
					},
				]
			},
		]
	},
	cleanDorms: {
		name: "Dorm Room 3",
		icon: require("@/assets/art/graytiding/dorms.png"),
		time: 6,
		xp: 30,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 0.75,
				itemTable: [
					{
						id: "pillSpacelube",
						count: [4, 10],
						weight: 20
					},
					{
						id: "jumpsuitMedical",
						count: 1,
						weight: 20
					},
					{
						id: "foodMeatH",
						count: 1,
						weight: 20
					},
					{
						id: "drinkCream",
						count: 1,
						weight: 20
					},
					{
						id: "oil",
						count: [2, 6],
						weight: 20
					},
				]
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: "q_foodEvasion1",
						count: [100, 300],
						weight: 20
					},
				]
			},
		]
	},
	clean3: {
		name: "Syndicate Nuke Team",
		icon: require("@/assets/art/graytiding/Clean3.png"),
		time: 6,
		xp: 30,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 0.25,
				itemTable: [
					{
						id: "jumpsuitChemistry",
						count: 1,
						weight: 20
					},
					{
						id: "faceSyndicate",
						count: 1,
						weight: 20
					},
					{
						id: "faceSec",
						count: 1,
						weight: 20
					},
					{
						id: "companionMouse",
						count: 1,
						weight: 24
					},
					{
						id: "meleeToolbox3",
						count: 1,
						weight: 36
					},
				]
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: "telecrystal",
						count: [1, 3],
						weight: 20
					},
				]
			},
		]
	},
	clean4: {
		name: "Bloodsworn Cultists",
		icon: require("@/assets/art/graytiding/Clean4.png"),
		time: 6,
		xp: 30,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 0.25,
				itemTable: [
					{
						id: "jumpsuitEngineering",
						count: 1,
						weight: 20
					},
					{
						id: "faceTiki",
						count: 1,
						weight: 20
					},
					{
						id: "faceMeson",
						count: 1,
						weight: 20
					},
					{
						id: "companionBee",
						count: 1,
						weight: 24
					},
					{
						id: "meleeToolbox4",
						count: 1,
						weight: 36
					},
				]
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: "cultParts",
						count: [1, 3],
						weight: 20
					},
				]
			},
		]
	},
	cleanHall: {
		name: "Central Primary Hallway",
		icon: require("@/assets/art/graytiding/Hall.png"),
		time: 6,
		xp: 30,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 0.25,
				itemTable: [
					{
						id: "jumpsuitBartending",
						count: 1,
						weight: 20
					},
					{
						id: "jumpsuitCooking",
						count: 1,
						weight: 20
					},
					{
						id: "jumpsuitBotany",
						count: 1,
						weight: 20
					},
					{
						id: "companionGoat",
						count: 1,
						weight: 24
					},
					{
						id: "meleeToolbox5",
						count: 1,
						weight: 36
					},
				]
			},
			{
				chance: 0.05,
				itemTable: [
					{
						id: "bananium",
						count: [50, 100],
						weight: 20
					},
				]
			},
		]
	},
	clean5: {
		name: "Rogue Nanotrasen Team",
		icon: require("@/assets/art/graytiding/Clean5.png"),
		time: 6,
		xp: 30,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 0.25,
				itemTable: [
					{
						id: "faceMime",
						count: 1,
						weight: 20
					},
					{
						id: "faceClown",
						count: 1,
						weight: 20
					},
					{
						id: "faceSecGlassess",
						count: 1,
						weight: 20
					},
					{
						id: "neckFanny2",
						count: 1,
						weight: 24
					},
					{
						id: "meleeToolbox6",
						count: 1,
						weight: 36
					},
				]
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: "ertParts",
						count: [1, 3],
						weight: 20
					},
				]
			},
		]
	},
	clean6: {
		name: "Wizard Fed. \'Diplomats\'",
		icon: require("@/assets/art/graytiding/Clean6.png"),
		time: 6,
		xp: 30,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 0.25,
				itemTable: [
					{
						id: "faceFox",
						count: 1,
						weight: 20
					},
					{
						id: "faceWrestle",
						count: 1,
						weight: 20
					},
					{
						id: "companionFox",
						count: 1,
						weight: 20
					},
					{
						id: "companionCat",
						count: 1,
						weight: 24
					},
					{
						id: "companionDog",
						count: 1,
						weight: 36
					},
				]
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: "wizParts",
						count: [1, 3],
						weight: 20
					},
				]
			},
		]
	},
	clean7: {
		name: "Bluespace Time Paradox",
		icon: require("@/assets/art/graytiding/Clean7.png"),
		time: 6,
		xp: 30,
		requiredUpgradeTier: 2,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "tomatoBluespace",
						count: 10,
						weight: 20
					},
					{
						id: "bluespace",
						count: 10,
						weight: 20
					},
					{
						id: "slimeBluespace",
						count: 10,
						weight: 20
					},
				]
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: "susTile",
						count: 1,
						weight: 20
					},
				]
			},
		]
	},
}

Object.values(TIDING).forEach((action, index) => {
	action.actionName = "GRAYTIDE";
	action.requiredLevel = 1 + index * 2;
	action.failure = {
		message: "Apprehended!",
		chance: .75,
		damage: Math.floor(5 + index * 1.5)
	};
});

Object.values(CLEANING).forEach((action, index) => {
	action.requiredItems = { pillSpacelube: 4 + index * 2 };
	if(!action.requiredUpgrade) action.requiredUpgrade = "recipeCleaning";
	action.actionName = "CLEAN UP AFTER";
	action.requiredLevel = 26 + index * 3;
	action.failure = {
		message: "Slipped!",
		chance: 1 + index / 10,
		damage: Math.floor(15 + index * 10)
	};
});

Object.values(TIDING).forEach(action => { action.type = "GRAYTIDING" });
Object.values(CLEANING).forEach(action => { action.type = "\"CLEANING\"" });

export const ACTIONS = {
	...TIDING,
	...CLEANING
}
export const JOB = {
	id: "graytiding",
	name: "Graytiding",
	icon: require("@/assets/art/graytiding/icon.png"),
	color: "#B0B0B0"
}
