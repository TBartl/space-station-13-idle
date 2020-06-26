export default {
	catgirl: {
		name: "Catboy",
		icon: require("@/assets/art/combat/enemies/catgirl.png"),
		stats: {
			maxHealth: 90,
			attackSpeed: 2.7,
			precision: 20,
			power: 35,
			evasion: 15,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceSec',
						weight: 1
					},
					{
						id: 'foodEva1',
						weight: 1
					},
					{
						id: 'meleeC3',
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
	braindead: {
		name: "Braindead Assistant",
		icon: require("@/assets/art/combat/enemies/bdassist.png"),
		stats: {
			maxHealth: 100,
			attackSpeed: 2.2,
			precision: 37,
			power: 28,
			evasion: 22,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceWrestle',
						weight: 1
					},
					{
						id: 'ammoE2',
						weight: 1
					},
					{
						id: 'jumpsuitSecurity',
						weight: 1
					},
					{
						id: 'ticket1',
						count: [1, 3],
						weight: 1
					}
				]
			}, {
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	traitor: {
		name: "Unprepared Traitor",
		icon: require("@/assets/art/combat/enemies/tot.png"),
		stats: {
			maxHealth: 110,
			attackSpeed: 2.5,
			precision: 27,
			power: 22,
			evasion: 33,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.75,
				itemTable: [
					{
						id: 'lithium',
						weight: 15
					},
					{
						id: 'faceSyndicate',
						weight: 4
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
}