export default {
	janitor: {
		name: "Janitor",
		icon: require("@/assets/art/combat/enemies/janitor.png"),
		stats: {
			maxHealth: 10,
			attackSpeed: 1.6,
			precision: 3,
			power: 12,
			evasion: 10,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 10
					},
					{
						id: 'spaceJunk',
						weight: 9
					},
					{
						id: 'armorJunk',
						weight: 3
					},
					{
						id: 'ticket1',
						count: [0, 1],
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
			maxHealth: 10,
			attackSpeed: 1.6,
			precision: 6,
			power: 9,
			evasion: 16,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 10
					},
					{
						id: 'spaceJunk',
						weight: 9
					},
					{
						id: 'meleeT1',
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
	miner: {
		name: "Prelaunch Miner",
		icon: require("@/assets/art/combat/enemies/miner.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 3,
			precision: 5,
			power: 6,
			evasion: 16,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gunE1',
						weight: 1
					},
					{
						id: 'iron',
						weight: 19
					},
					{
						id: "ammoE1",
						weight: 10
					}
				]
			}, {
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
}