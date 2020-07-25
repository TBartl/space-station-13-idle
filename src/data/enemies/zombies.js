export default {
	zombie1: {
		name: "Shambling Assistant",
		icon: require("@/assets/art/combat/enemies/zombie1.png"),
		stats: {
			maxHealth: 400,
			attackSpeed: 4.2,
			precision: 86,
			power: 86,
			evasion: 86,
			regen: 1,
			damageType: "brute",
			burnProtection: 50
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'criminal',
						weight: 13
					},
					{
						id: 'titanium',
						weight: 4
					},
					{
						id: 'gunEnergy5',
						weight: 2
					},
					{
						id: 'slimeGold',
						weight: 1
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'spaceJunk',
						weight: 14
					},
					{
						id: 'armorJunk',
						weight: 5
					},
					{
						id: 'junk',
						weight: 1
					}
				]
			}
		]
	},
	zombie2: {
		name: "Braindead Security",
		icon: require("@/assets/art/combat/enemies/zombie2.png"),
		stats: {
			maxHealth: 410,
			attackSpeed: 4.5,
			precision: 87,
			power: 88,
			evasion: 88,
			regen: 1,
			damageType: "brute",
			burnProtection: 50
		},
		itemTables: [
			{
				chance: .99,
				itemTable: [
					{
						id: 'titanium',
						weight: 40
					},
					{
						id: 'meleeSharp1',
						weight: 37
					},
					{
						id: 'criminal',
						weight: 13
					},
					{
						id: 'criminal',
						count: [1, 2],
						weight: 12
					},
					{
						id: 'criminal',
						count: [1, 3],
						weight: 11
					},
					{
						id: 'criminal',
						count: [1, 4],
						weight: 10
					},

					{
						id: 'criminal',
						count: [1, 99],
						weight: 9
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'diamond',
						weight: 14
					},
					{
						id: 'armorJunk',
						weight: 5
					},
					{
						id: 'bluespace',
						weight: 1
					}
				]
			}
		]
	},
	zombie3: {
		name: "Unsuccessful Lone Survivor",
		icon: require("@/assets/art/combat/enemies/zombie3.png"),
		stats: {
			maxHealth: 420,
			attackSpeed: 5.6,
			precision: 89,
			power: 90,
			evasion: 90,
			regen: 1,
			damageType: "burn",
			burnProtection: 50
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'ammoEnergy4',
						count: [1, 3],
						weight: 9
					},
					{
						id: 'ammoEnergy3',
						count: [1, 3],
						weight: 8
					},
					{
						id: 'ammoEnergy2',
						count: [1, 3],
						weight: 7
					},
					{
						id: 'ammoEnergy1',
						count: [4, 8],
						weight: 6
					},
					{
						id: 'ammoEnergy4',
						count: [8, 12],
						weight: 2
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'plasma',
						weight: 14
					},
					{
						id: 'junk',
						weight: 5
					},
					{
						id: 'uranium',
						weight: 1
					}
				]
			}
		]
	},
	zombie4: {
		name: "Kharmaani Gyne",
		icon: require("@/assets/art/combat/enemies/zombie4.png"),
		stats: {
			maxHealth: 430,
			attackSpeed: 6,
			precision: 91,
			power: 91,
			evasion: 91,
			regen: 1,
			damageType: "burn",
			burnProtection: 50,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'glass',
						count: [1,7],
						weight: 80
					},
					{
						id: 'gold',
						count: [1,3],
						weight: 32
					},
					{
						id: 'power',
						count: [50,250],
						weight: 28
					},
					{
						id: 'potionShitposting',
						weight: 4
					},
					{
						id: 'boss1Parts',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'uranium',
						weight: 14
					},
					{
						id: 'spaceJunk',
						weight: 5
					},
					{
						id: 'bananium',
						weight: 1
					}
				]
			}
		]
	},
}