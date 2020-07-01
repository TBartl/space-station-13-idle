export default {
	sec1: {
		name: "Corrupt Security Officer",
		icon: require("@/assets/art/combat/enemies/boss/sec-officer.png"),
		validhuntable: false,
		stats: {
			maxHealth: 160,
			attackSpeed: 2.0,
			precision: 34,
			power: 45,
			evasion: 25,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'boss1Parts',
						count: [6, 10],
						weight: 8
					},
					{
						id: 'boss1Parts',
						count: [11, 12],
						weight: 1
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	sec2: {
		name: "Meddling Detective",
		icon: require("@/assets/art/combat/enemies/boss/sec-detective.png"),
		validhuntable: false,
		stats: {
			maxHealth: 170,
			attackSpeed: 2.1,
			precision: 37,
			power: 44,
			evasion: 40,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'boss1Parts',
						count: [9, 12],
						weight: 8
					},
					{
						id: 'boss1Parts',
						count: [13, 14],
						weight: 1
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	sec3: {
		name: "Gulag Warden",
		icon: require("@/assets/art/combat/enemies/boss/sec-warden.png"),
		validhuntable: false,
		stats: {
			maxHealth: 50,
			attackSpeed: .5,
			precision: 25,
			power: 10,
			evasion: 76,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'boss1Parts',
						count: [10, 16],
						weight: 12
					},
					{
						id: 'boss1Parts',
						count: [17, 18],
						weight: 1
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatZ',
						weight: 1
					},
				]
			}
			]
	},
	sec4: {
		name: "Anime Inspired Head Of Security",
		icon: require("@/assets/art/combat/enemies/boss/sec-HOS.png"),
		validhuntable: false,
		stats: {
			maxHealth: 180,
			attackSpeed: 2.4,
			precision: 57,
			power: 40,
			evasion: 26,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'boss1Parts',
						count: [16, 22],
						weight: 16
					},
					{
						id: 'boss1Parts',
						count: [23, 24],
						weight: 1
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
}