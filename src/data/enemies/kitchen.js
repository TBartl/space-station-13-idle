export default {
	goodchef: {
		name: "Botanist",
		icon: require("@/assets/art/combat/enemies/botanist.png"),
		stats: {
			maxHealth: 190,
			attackSpeed: 1.6,
			precision: 41,
			power: 61,
			evasion: 67,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'potato',
						weight: 1
					}, {
						id: 'tomato',
						weight: 1
					}, {
						id: 'flowerSun',
						weight: 1
					}, {
						id: 'mushroom',
						weight: 1
					}, {
						id: 'pepper',
						weight: 1
					}, {
						id: 'potatoBattery',
						weight: 1
					}, {
						id: 'tomatoBlue',
						weight: 1
					}, {
						id: 'flowermoon',
						weight: 1
					}, {
						id: 'mushroomred',
						weight: 1
					}, {
						id: 'pepperred',
						weight: 1
					}
				]
			},
			{
				chance: .02,
				item: "jumpsuitBotany"
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	pete: {
		name: "Pete",
		icon: require("@/assets/art/combat/enemies/pete.png"),
		stats: {
			maxHealth: 200,
			attackSpeed: 1.7,
			precision: 49,
			power: 49,
			evasion: 44,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foodPasta2',
						weight: 1
					},
					{
						id: 'faceFox',
						weight: 1
					},
					{
						id: 'slimeSilver',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatA",
						weight: 98
					},
					{
						id: "companionGoat",
						weight: 2
					},
				]
			}
		]
	},
	cannibal: {
		name: "Soylent Green Chef",
		icon: require("@/assets/art/combat/enemies/badchef.png"),
		stats: {
			maxHealth: 210,
			attackSpeed: 2.4,
			precision: 41,
			power: 59,
			evasion: 42,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foot',
						weight: 2
					}, {
						id: 'foodMeatH',
						weight: 2
					}, {
						id: 'foodMeatA',
						weight: 2
					}, {
						id: 'foodMeatZ',
						weight: 2
					},
					{
						id: 'ticket2',
						count: [1, 2],
						weight: 1
					}
				]
			},
			{
				chance: .02,
				item: "jumpsuitCooking"
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
}