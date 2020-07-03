const BOSSES = {
	sec1: {
		name: "Corrupt Security Officer",
		icon: require("@/assets/art/combat/enemies/boss/sec-officer.png"),
		validhuntable: false,
		stats: {
			maxHealth: 500,
			attackSpeed: 2.0,
			precision: 31,
			power: 37,
			evasion: 32,
			damageType: "burn",
			burnProtection: 50
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
			maxHealth: 500,
			attackSpeed: 2.1,
			precision: 31,
			power: 35,
			evasion: 29,
			damageType: "brute",
			bruteProtection: 50
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
				item: "foodMeatH"
			}
		]
	},
	sec3: {
		name: "Gulag Warden",
		icon: require("@/assets/art/combat/enemies/boss/sec-warden.png"),
		validhuntable: false,
		stats: {
			maxHealth: 500,
			attackSpeed: 5,
			precision: 23,
			power: 76,
			evasion: 33,
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
			maxHealth: 1200,
			attackSpeed: 2.4,
			precision: 34,
			power: 40,
			evasion: 36,
			damageType: "burn",
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

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 60;
})

export default BOSSES;