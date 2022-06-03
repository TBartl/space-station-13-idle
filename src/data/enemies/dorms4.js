export default {
	catgirl: {
		name: "Catboy",
		desc: "I hope that's not a gun in your pocket... OwO",//banned! banned!!!!!
		icon: require("@/assets/art/combat/enemies/catgirl.png"),
		stats: {
			maxHealth: 90,
			attackSpeed: 2.7,
			precision: 20,
			power: 35,
			evasion: 15,
			damageType: "brute",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foodEvasion1',
						weight: 12
					},
					{
						id: 'q_foodPower1',
						weight: 12
					},
					{
						id: 'drinkCream',
						weight: 9
					},
					{
						id: 'meleeToolbox3',
						weight: 8
					},
					{
						id: 'faceSec',
						weight: 2
					},
					{
						id: 'neckFanny1',
						weight: 2
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	traitor: {
		name: "Unprepared Traitor",
		desc: "Hypothetically, how would one unlock an uplink? Asking for a friend.",
		icon: require("@/assets/art/combat/enemies/tot.png"),
		stats: {
			maxHealth: 100,
			attackSpeed: 2.5,
			precision: 27,
			power: 22,
			evasion: 33,
			damageType: "burn",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.6,
				itemTable: [
					{
						id: 'lithium',
						count: [1, 5],
						weight: 15
					},
					{
						id: 'criminal',
						weight: 10
					},
					{
						id: 'faceSyndicate',
						weight: 1.1
					},
					{
						id: 'telecrystal',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	braindead: {
		name: "Braindead Assistant",
		icon: require("@/assets/art/combat/enemies/bdassist.png"),
		stats: {
			maxHealth: 110,
			attackSpeed: 2.2,
			precision: 37,
			power: 28,
			evasion: 22,
			damageType: "brute",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: .6,
				itemTable: [
					{
						id: 'ammoEnergy2',
						count: 2,
						weight: 78
					},
					{
						id: 'slimeGreen',
						weight: 25
					},
					{
						id: 'foodPasta3',
						weight: 10
					},
					{
						id: 'faceWrestle',
						weight: 2
					},
					{
						id: 'cactus',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
chemist: {
		name: "Wandering Chemist",
		desc: "Hey, you! Wanna try my unlabeled pills?",
		verb: "asks",
		icon: require("@/assets/art/combat/enemies/chemist.png"),
		stats: {
			maxHealth: 110,
			attackSpeed: 2.2,
			precision: 24,
			power: 30,
			evasion: 39,
			damageType: "burn",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: .5,
				itemTable: [
					{
						id: 'potionMining',
						weight: 50
					},
					{
						id: 'potionGraytiding',
						weight: 49
					},
					{
						id: 'potionChemistry',
						weight: 48
					},
					{
						id: 'potionBotany',
						weight: 47
					},
					{
						id: 'potionEngineering',
						weight: 46
					},
					{
						id: 'potionTinkering',
						weight: 45
					},
					{
						id: 'potionXenobiology',
						weight: 44
					},
					{
						id: 'potionCooking',
						weight: 43
					},
					{
						id: 'potionFabrication',
						weight: 42
					},
				]
			},
			{
				chance: .02,
				item: "jumpsuitChemistry"
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
}