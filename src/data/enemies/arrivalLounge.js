export default {
	janitor: {
		name: "Janitor",
		icon: require("@/assets/art/combat/enemies/janitor.png"),
		stats: {
			maxHealth: 18,
			attackSpeed: 1.6,
			precision: 8,
			power: 4,
			evasion: 7,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 20
					},
					{
						id: 'spaceJunk',
						weight: 18
					},
					{
						id: 'armorJunk',
						weight: 6
					},
					{
						id: 'foodPower1',
						weight: 3
					},
					{
						id: 'pillMeth',
						count: [0, 20],
						weight: 1
					},
					{
						id: 'ticket1',
						count: [0, 2],
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
	chaplain: {
		name: "Chaplain",
		icon: require("@/assets/art/combat/enemies/chaplain.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 1.6,
			precision: 6,
			power: 7,
			evasion: 13,
			damageType: "burn",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 100
					},
					{
						id: 'spaceJunk',
						weight: 90
					},
					{
						id: 'meleeToolbox1',
						weight: 10
					},
					{
						id: 'meleeBlunt3',
						weight: 1
					},
					{
						id: 'lavaCrate',
						weight: .5
					},
					{
						id: 'meleeBlunt8',
						weight: .03
					}

				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	miner: {
		name: "Prelaunch Miner",
		icon: require("@/assets/art/combat/enemies/miner.png"),
		stats: {
			maxHealth: 24,
			attackSpeed: 3,
			precision: 15,
			power: 6,
			evasion: 8,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'iron',
						count: [1, 5],
						weight: 19
					},
					{
						id: "ammoEnergy1",
						weight: 10,
						count: [1, 4]
					},
					{
						id: "potionMining",
						weight: 5,
						count: [1, 3]
					},
					{
						id: 'gunEnergy1',
						weight: 1
					},
				]
			}, {
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
}