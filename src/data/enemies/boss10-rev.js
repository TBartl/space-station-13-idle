const BOSSES = {
	rev1: {
		name: "'Head' Of Cargo",
		icon: require("@/assets/art/combat/enemies/boss/rev1.png"),
		validhuntable: false,
		stats: {
			maxHealth: 300,
			attackSpeed: 2.0,
			precision: 11,
			power: 16,
			evasion: 22,
			damageType: "burn",
			burnProtection: 50
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 10000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'revParts',
						count: [6, 10],
						weight: 8
					},
					{
						id: 'revParts',
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
						count: 10
					},
				]
			}
		]
	},
	rev2: {
		name: "New Chief Medical Officer",
		icon: require("@/assets/art/combat/enemies/boss/rev2.png"),
		validhuntable: false,
		stats: {
			maxHealth: 300,
			attackSpeed: 2.1,
			precision: 15,
			power: 20,
			evasion: 15,
			damageType: "brute",
			bruteProtection: 50
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 10000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'revParts',
						count: [9, 12],
						weight: 8
					},
					{
						id: 'revParts',
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
						count: 10
					},
				]
			}
		]
	},
	rev3: {
		name: "IPC Research Director",
		icon: require("@/assets/art/combat/enemies/boss/rev3_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 300,
			attackSpeed: 4,
			precision: 10,
			power: 29,
			evasion: 10,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 10000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'revParts',
						count: [10, 16],
						weight: 12
					},
					{
						id: 'revParts',
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
						count: 10
					},
				]
			}
		]
	},
	rev4: {
		name: "Agent Provocateur",
		icon: require("@/assets/art/combat/enemies/boss/rev4.png"),
		validhuntable: false,
		stats: {
			maxHealth: 700,
			attackSpeed: 2.4,
			precision: 22,
			power: 17,
			evasion: 20,
			damageType: "burn",
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
						id: 'revParts',
						count: [16, 22],
						weight: 16
					},
					{
						id: 'revParts',
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
						count: 20
					},
				]
			}
		]
	},
}

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 25;
})

export default BOSSES;