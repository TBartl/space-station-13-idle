const BOSSES = {
	sec1: {
		name: "Corrupt Security Officer",
		icon: require("@/assets/art/combat/enemies/boss/sec-officer.png"),
		validhuntable: false,
		stats: {
			maxHealth: 700,
			attackSpeed: 2.0,
			precision: 36,
			power: 30,
			evasion: 33,
			damageType: "burn",
			burnProtection: 50
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 20000]
				}
			},
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
				itemTable: [
					{
						id: 'foodMeatH',
						weight: 1,
						count: 20
					},
				]
			}
		]
	},
	sec2: {
		name: "Meddling Detective",
		icon: require("@/assets/art/combat/enemies/boss/sec-detective.png"),
		validhuntable: false,
		stats: {
			maxHealth: 700,
			attackSpeed: 2.1,
			precision: 32,
			power: 34,
			evasion: 34,
			damageType: "brute",
			bruteProtection: 50
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 20000]
				}
			},
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
				itemTable: [
					{
						id: 'foodMeatH',
						weight: 1,
						count: 20
					},
				]
			}
		]
	},
	sec3: {
		name: "Gulag Warden",
		icon: require("@/assets/art/combat/enemies/boss/sec-warden.png"),
		validhuntable: false,
		stats: {
			maxHealth: 700,
			attackSpeed: 5,
			precision: 30,
			power: 41,
			evasion: 30,
			luck: 10,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 20000]
				}
			},
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
						weight: 1,
						count: 20
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
			maxHealth: 700,
			attackSpeed: 2.4,
			precision: 34,
			power: 40,
			evasion: 36,
//			regen: .4,
			damageType: "burn",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 30000]
				}
			},
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
				itemTable: [
					{
						id: 'foodMeatH',
						weight: 1,
						count: 30
					},
				]
			}
		]
	},
}

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 45;
})

export default BOSSES;