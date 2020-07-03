export default {
	janitor: {
		name: "Janitor",
		icon: require("@/assets/art/combat/enemies/janitor.png"),
		stats: {
			maxHealth: 18,
			attackSpeed: 1.6,
			precision: 3,
			power: 4,
			evasion: 4,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 38
					},
					{
						id: 'spaceJunk',
						weight: 22
					},
					{
						id: 'armorJunk',
						weight: 14
					},
					{
						id: 'foodPower1',
						weight: 12
					},
					{
						id: 'pillMeth',
						count: [0, 20],
						weight: 9
					},
					{
						id: 'ticket1',
						weight: 5
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
			precision: 5,
			power: 7,
			evasion: 9,
			damageType: "burn",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 50
					},
					{
						id: 'spaceJunk',
						weight: 45
					},
					{
						id: 'meleeToolbox1',
						weight: 5
					},
					{
						id: 'meleeBlunt3',
						weight: .5
					},
					{
						id: 'lavaCrate',
						weight: .02
					},
					{
						id: 'meleeBlunt8',
						weight: .01
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