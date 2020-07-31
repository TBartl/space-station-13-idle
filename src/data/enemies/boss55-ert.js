const BOSSES = {
	ert1: {
		name: "Medical Officer Harrison",
		icon: require("@/assets/art/combat/enemies/boss/ertmed.png"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 2.6,
			precision: 98,
			power: 85,
			evasion: 107,
			damageType: "brute",
			bruteProtection: 90,
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 60000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'ertParts',
						count: [10, 16],
						weight: 12
					},
					{
						id: 'ertParts',
						count: [17, 18],
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
						count: 50
					},
				]
			}
		]
	},
	ert2: {
		name: "Engineer James",
		icon: require("@/assets/art/combat/enemies/boss/erteng.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 2.9,
			precision: 107,
			power: 85,
			evasion: 98,
			damageType: "burn",
			burnProtection: 90
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 60000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'ertParts',
						count: [10, 16],
						weight: 12
					},
					{
						id: 'ertParts',
						count: [17, 18],
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
						count: 50
					},
				]
			}
		]
	},
	ert3: {
		name: "Security Officer Lee",
		icon: require("@/assets/art/combat/enemies/boss/ertsec.png"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 8.5,
			precision: 73,
			power: 133,
			evasion: 65,
			luck: 10,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 60000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'ertParts',
						count: [9, 12],
						weight: 8
					},
					{
						id: 'ertParts',
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
						count: 50
					},
				]
			}
		]
	},
	ert4: {
		name: "Commander Woodworth",
		icon: require("@/assets/art/combat/enemies/boss/ertcom.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 1,
			precision: 101,
			power: 110,
			evasion: 109,
			regen: 1.1,
			damageType: "burn",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 60000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'ertParts',
						count: [16, 22],
						weight: 16
					},
					{
						id: 'ertParts',
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
						count: 60
					},
				]
			}
		]
	},
}

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 140;
})

export default BOSSES;