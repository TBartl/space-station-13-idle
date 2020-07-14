const BOSSES = {
	wizard1: {
		name: "Skeletal Thrall",
		icon: require("@/assets/art/combat/enemies/boss/wiz-skeleton.png"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 2.6,
			precision: 111,
			power: 116,
			evasion: 118,
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
						id: 'foodMeatH',
						weight: 1,
						count: 60
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
			attackSpeed: 0.9,
			precision: 133,
			power: 102,
			evasion: 110,
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
		name: "Wielder of True Light",
		icon: require("@/assets/art/combat/enemies/boss/wiz-moth_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 9,
			precision: 108,
			power: 122,
			evasion: 116,
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
						id: 'foodMeatZ',
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
			attackSpeed: 2.1,
			precision: 120,
			power: 126,
			evasion: 131,
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
						id: 'foodMeatH',
						weight: 1,
						count: 70
					},
				]
			}
		]
	},
}

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 175;
})

export default BOSSES;