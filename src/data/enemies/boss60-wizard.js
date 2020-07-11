const BOSSES = {
	wizard1: {
		name: "Skeletal Thrall",
		icon: require("@/assets/art/combat/enemies/boss/wiz-skeleton.png"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 2.6,
			precision: 100,
			power: 100,
			evasion: 100,
			damageType: "brute",
			burnProtection: 90,
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
						id: 'wizParts',
						count: [6, 10],
						weight: 8
					},
					{
						id: 'wizParts',
						count: [11, 12],
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
						count: 25
					},
				]
			}
		]
	},
	wizard2: {
		name: "Magical Holoparasite",
		icon: require("@/assets/art/combat/enemies/boss/wiz-stand_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 2.9,
			precision: 100,
			power: 100,
			evasion: 100,
			damageType: "brute",
			bruteProtection: 90
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
						id: 'wizParts',
						count: [10, 16],
						weight: 12
					},
					{
						id: 'wizParts',
						count: [17, 18],
						weight: 1
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatA',
						weight: 1,
						count: 60
					},
				]
			}
		]
	},
	wizard3: {
		name: "Weilder of True Light",
		icon: require("@/assets/art/combat/enemies/boss/wiz-moth_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 9,
			precision: 100,
			power: 100,
			evasion: 100,
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
						id: 'wizParts',
						count: [9, 12],
						weight: 8
					},
					{
						id: 'wizParts',
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
						count: 60
					},
				]
			}
		]
	},
	wizard4: {
		name: "THE Wizard",
		icon: require("@/assets/art/combat/enemies/boss/antag-wizard.png"),
		validhuntable: false,
		stats: {
			maxHealth: 3600,
			attackSpeed: 1.5,
			precision: 110,
			power: 110,
			evasion: 110,
			damageType: "burn",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 70000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'wizParts',
						count: [16, 22],
						weight: 16
					},
					{
						id: 'wizParts',
						count: [23, 24],
						weight: 1
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatA',
						weight: 1,
						count: 70
					},
				]
			}
		]
	},
}

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 130;
})

export default BOSSES;