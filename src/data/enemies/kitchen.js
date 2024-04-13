export default {
	pete: {
		name: "Pete",
		icon: require("@/assets/art/combat/enemies/pete.png"),
		stats: {
			maxHealth: 190,
			attackSpeed: 1.7,
			precision: 49,
			power: 49,
			evasion: 44,
			damageType: "brute",
			burnProtection: 25
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foodMeatA',
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
	bartender: {
		name: "Skrell Bartender",
		desc: "Into the rage cage, pal.",
		icon: require("@/assets/art/combat/enemies/shrellbartender.png"),
		stats: {
			maxHealth: 210,
			attackSpeed: 3.5,
			precision: 74,
			power: 51,
			evasion: 26,
			damageType: "brute",
			burnProtection: 25
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'water',
						count: [1, 5],
						weight: 19
					},
					{
						id: "ammoBallistic2",
						weight: 10,
						count: [1, 5]
					},
					{
						id: "gunBallistic4",
						weight: 9,
					},
					{
						id: "drinkWhiskey",
						weight: 2,
					},
					{
						id: "drinkVodka",
						weight: 2,
					},
					{
						id: "drinkGin",
						weight: 2,
					},
					{
						id: "drinkRum",
						weight: 2,
					},
					{
						id: "drinkLemonJuice",
						weight: 2,
					},
				]
			},
			{
				chance: .02,
				item: "jumpsuitBartending"
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	cannibal: {
		name: "Soylent Green Chef",
		desc: "You will make-a for molto bene prosciutto!",
		verb: "exclaims",
		icon: require("@/assets/art/combat/enemies/badchef.png"),
		stats: {
			maxHealth: 200,
			attackSpeed: 2.4,
			precision: 41,
			power: 63,
			evasion: 42,
			damageType: "brute",
			burnProtection: 25
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foot',
						weight: 4
					}, {
						id: 'foodMeatH',
						weight: 4
					}, {
						id: 'foodMeatA',
						weight: 4
					}, {
						id: 'foodMeatZ',
						weight: 4
					},
					{
						id: 'toolCooking',
						count: [1, 2],
						weight: 2
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
	botanist: {
		name: "Botanist",
		desc: "Space weed is fine, but I'm really into botany for the death nettle.",
		verb: "flutters",
		icon: require("@/assets/art/combat/enemies/botanist.png"),
		stats: {
			maxHealth: 210,
			attackSpeed: 1.6,
			precision: 41,
			power: 61,
			evasion: 67,
			damageType: "burn",
			burnProtection: 25
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'potato',
						count:2,
						weight: 1
					}, {
						id: 'tomato',
						count:2,
						weight: 1
					}, {
						id: 'flowerSun',
						count:2,
						weight: 1
					}, {
						id: 'mushroom',
						count:2,
						weight: 1
					}, {
						id: 'pepper',
						count:2,
						weight: 1
					}, {
						id: 'potatoBattery',
						weight: 1
					}, {
						id: 'tomatoBlue',
						weight: 1
					}, {
						id: 'flowerMoon',
						weight: 1
					}, {
						id: 'mushroomRed',
						weight: 1
					}, {
						id: 'peppercold',
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
}