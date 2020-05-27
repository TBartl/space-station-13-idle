export const ACTIONS = {
	graytideMaint: {
		name: "DEBUG E",
		icon: require("@/assets/art/debug/E.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},
					{
						id: 'spacejunk',
						weight: 3
					},
					{
						id: 'armorjunk',
						weight: 3
					},
				]
			},
			{
				chance: 0.1,
				items: {
					id: 'silver',
					count: [0, 2]
				}
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: 'gold',
						weight: 3
					},
					{
						id: 'limbNinja',
						weight: 1
					}
				]
			}
		]
	},
	graytideMining: {
		name: "Mining",
		icon: require("@/assets/art/graytiding/Mining.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},
					{
						id: 'spacejunk',
						weight: 3
					},
					{
						id: 'armorjunk',
						weight: 3
					},
				]
			},
			{
				chance: 1,
				itemTable: [
				{
					id: "iron",
					count: [1, 3],
					weight: 60
				}, {
					id: "silver",
					count: 2,
					weight: 29
				}, {
					id: "gold",
					weight: 10
				}, {
					id: "limbMagBoots",
					weight: 1
				}
				]
			}
		]
	},
	graytideMeat: {
		name: "Medical",
		icon: require("@/assets/art/graytiding/Medical.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},{
						id: 'spacejunk',
						weight: 3
					},{
						id: 'armorjunk',
						weight: 3
					},
				]
			},
			{
				chance: 1,
				itemTable: [
				{
					id: "foodMeatH",
					count: [0, 2],
					weight: 33
					}, {
					id: "foodMeatZ",
					count: [0, 2],
					weight: 33
					}, {
					id: "foodMeatA",
					count: [0, 2],
					weight: 33
					}, {
					id: "limbClownShoes",
					weight: 1
				}
				]
			}
		]
	},
	graytideSecurity: {
		name: "Security",
		icon: require("@/assets/art/graytiding/Security.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
				{
					chance: 1,
					itemTable: [
						{
							id: 'junk',
							weight: 3
						},
						{
							id: 'spacejunk',
							weight: 3
						},
						{
							id: 'armorjunk',
							weight: 3
						},
					]
				},
				{
					chance: 1,
					itemTable: [
						{
							id: "ammoE1",
							count: [1, 3],
							weight: 60
						}, {
							id: "ammoE2",
							count: 2,
							weight: 20
						}, {
							id: "ammoE3",
							weight: 10
						}, {
							id: "ammoE4",
							weight: 5
						}, {
							id: "ammoB1",
							count: [1, 3],
							weight: 60
						}, {
							id: "ammoB2",
							count: 2,
							weight: 20
						}, {
							id: "ammoB3",
							weight: 10
						}, {
							id: "ammoB4",
							weight: 5
						}, {
							id: "limbJackboots",
							weight: 1
						},
					]
				}
		]
	},
	graytideScience: {
		name: "Research",
		icon: require("@/assets/art/graytiding/Science.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},{
						id: 'spacejunk',
						weight: 3
					},{
						id: 'armorjunk',
						weight: 3
					},
				]
			},
			{
				chance: 1,
				itemTable: [
				{
					id: "slimeGrey",
					weight: 51
					}, {
					id: "slimeOrange",
					weight: 10
					}, {
					id: "slimePurple",
					weight: 10
					}, {
					id: "slimeBlue",
					weight: 10
					}, {
					id: "slimeYellow",
					weight: 6
					}, {
					id: "slimeDarkPurple",
					weight: 6
					}, {
					id: "slimeDarkBlue",
					weight: 6
					}, {
					id: "limbAdvancedMagboots",
					weight: 1
				}
				]
			}
		]
	},
	graytideSeeds: {
		name: "Botany",
		icon: require("@/assets/art/graytiding/Botany.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},{
						id: 'spacejunk',
						weight: 3
					},{
						id: 'armorjunk',
						weight: 3
					},
				]
			},
			{
				chance: 1,
				itemTable: [
				{
					id: "plantSeed",
					count: [0, 2],
					weight: 99
					}, {
					id: "limbBlack",
					weight: 1
				}
				]
			}
		]
	},
	graytideBridge: {
		name: "Captains Quarters",
		icon: require("@/assets/art/graytiding/Command.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},
					{
						id: 'spacejunk',
						weight: 3
					},
					{
						id: 'armorjunk',
						weight: 3
					},
				]
			},
			{
				chance: 1,
				itemTable: [
				{
					id: "foodPasta1",
					weight: 40
				}, {
					id: "foodPasta2",
					weight: 20
				}, {
					id: "foodPasta3",
					weight: 15
				}, {
					id: "foodPasta4",
					weight: 11
				}, {
					id: "foodPasta5",
					weight: 8
				}, {
					id: "foodPasta6",
					weight: 5
				}, {
					id: "limbCapt",
					weight: 1
				}
				]
			}
		]
	},
	graytidePower: {
		name: "Engineering",
		icon: require("@/assets/art/graytiding/Engineering.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},{
						id: 'spacejunk',
						weight: 3
					},{
						id: 'armorjunk',
						weight: 3
					},
				]
			},
			{
				chance: 1,
				itemTable: [
				{
					id: "power",
					count: [0, 25],
					weight: 99
					}, {
					id: "limbInsuls",
					weight: 1
				}
				]
			}
		]
	},
	graytideSpace: {
		name: "Space",
		icon: require("@/assets/art/graytiding/space_anim.gif"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},{
						id: 'spacejunk',
						weight: 3
					},{
						id: 'armorjunk',
						weight: 3
					},
				]
			},
			{
				chance: .01,
					item: "limbNinja",
					weight: 1
			}
		]
	},
	graytideDouble: {
		name: "Rage Cage",
		icon: require("@/assets/art/graytiding/Rage.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 2,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},{
						id: 'spacejunk',
						weight: 3
					},{
						id: 'armorjunk',
						weight: 3
					},
				]
			},
			{
				chance: .01,
					item: "limbBoxing",
					weight: 1
			}
		]
	},
	graytideVault: {
		name: "Vault",
		icon: require("@/assets/art/graytiding/Vault.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: .02,
				itemTable: [
					{
						id: 'junk',
						count: [0, 100],
						weight: 10
					},{
						id: 'spacejunk',
						count: [0, 100],
						weight: 10
					},{
						id: 'armorjunk',
						count: [0, 100],
						weight: 10
					},
				]
			},
			{
				chance: .01,
					item: "limbMagkrava",
					weight: 1
			}
		]
	},
	graytideBULK: {
		name: "Security",
		icon: require("@/assets/art/graytiding/Security.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
				{
					chance: 1,
					itemTable: [
						{
							id: 'junk',
							weight: 3
						},
						{
							id: 'spacejunk',
							weight: 3
						},
						{
							id: 'armorjunk',
							weight: 3
						},
					]
				},
				{
					chance: 1,
					itemTable: [
						{
							id: "limbInsuls",
							count: [1, 3],
							weight: 50
						}, {
							id: "limbBoxing",
							count: 2,
							weight: 50
						}, {
							id: "limbMagkrava",
							weight: 50
						}, {
							id: "limbCapt",
							weight: 50
						}, {
							id: "limbNinja",
							count: [1, 3],
							weight: 50
						}, {
							id: "limbBlack",
							count: 2,
							weight: 50
						}, {
							id: "limbMagBoots",
							weight: 50
						}, {
							id: "limbClownShoes",
							weight: 50
						}, {
							id: "limbJackboots",
							weight: 50
						}, {
							id: "limbAdvancedMagboots",
							weight: 50
						},
					]
				}
		]
	},
	graytideDebugA: {
		name: "DEBUG A",
		icon: require("@/assets/art/debug/A.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		item: "iron"
	},
	graytideDebugB: {
		name: "DEBUG B",
		icon: require("@/assets/art/debug/B.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		items: {
			id: "iron",
			count: 2
		}
	},
	graytideDebugC: {
		name: "DEBUG C",
		icon: require("@/assets/art/debug/C.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		items: {
			id: "iron",
			count: [0, 3]
		}
	},
	graytideDebugD: {
		name: "DEBUG D",
		icon: require("@/assets/art/debug/D.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		itemTable: [
			{
				id: "iron",
				count: [1, 3],
				weight: 600
			}, {
				id: "silver",
				count: 2,
				weight: 200
			}, {
				id: "gold",
				weight: 100
			}, {
				id: "titanium",
				weight: 1
			},
			{
				id: null,
				weight: 99
			}
		]
	},
	graytideDebugE: {
		name: "DEBUG E",
		icon: require("@/assets/art/debug/E.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				item: 'iron'
			},
			{
				chance: 0.1,
				items: {
					id: 'silver',
					count: [0, 2]
				}
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: 'gold',
						weight: 3
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			}
		]
	}
}

export const JOB = {
	id: "graytiding",
	name: "Graytiding",
	icon: require("@/assets/art/graytiding/icon.png"),
	color: "#B0B0B0"
}