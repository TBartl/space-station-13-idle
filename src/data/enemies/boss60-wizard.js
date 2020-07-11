const BOSSES = {
	wizard1: {
		name: "Skeletal Thrall",
		//give reed/jegub credit for the skeleton sprite
		icon: require("@/assets/art/combat/enemies/boss/wiz-skeleton.png"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 2.6,
			precision: 86,
			power: 78,
			evasion: 80,
			damageType: "brute",
			burnProtection: 90,
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 40000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'telecrystal',
						count: [6, 10],
						weight: 8
					},
					{
						id: 'telecrystal',
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
			precision: 82,
			power: 86,
			evasion: 84,
			damageType: "brute",
			bruteProtection: 90
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 40000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'telecrystal',
						count: [10, 16],
						weight: 12
					},
					{
						id: 'telecrystal',
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
						count: 25
					},
				]
			}
		]
	},
	wizard3: {
		name: "Syndicate Nuclear Operative",
		icon: require("@/assets/art/combat/enemies/boss/wiz-moth_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 9,
			precision: 73,
			power: 166,
			evasion: 71,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 40000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'telecrystal',
						count: [9, 12],
						weight: 8
					},
					{
						id: 'telecrystal',
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
						count: 25
					},
				]
			}
		]
	},
	wizard4: {
		name: "Wizard",
		icon: require("@/assets/art/combat/enemies/boss/antag-wizard.png"),
		validhuntable: false,
		stats: {
			maxHealth: 3600,
			attackSpeed: 1.5,
			precision: 90,
			power: 94,
			evasion: 88,
			damageType: "burn",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 40000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'telecrystal',
						count: [16, 22],
						weight: 16
					},
					{
						id: 'telecrystal',
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
						count: 25
					},
				]
			}
		]
	},
}

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 180;
})

export default BOSSES;