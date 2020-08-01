const BOSSES = {
	cult1: {
		name: "Proselytizing Cultist",
		icon: require("@/assets/art/combat/enemies/boss/cult1_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 2.6,
			precision: 86,
			power: 78,
			evasion: 80,
			damageType: "burn",
			burnProtection: 90,
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 50000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'cultParts',
						count: [6, 10],
						weight: 8
					},
					{
						id: 'cultParts',
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
						count: 50
					},
				]
			}
		]
	},
	cult2: {
		name: "Devout Neophyte",
		icon: require("@/assets/art/combat/enemies/boss/antag-cultist.png"),
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
					count: [0, 50000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'cultParts',
						count: [10, 16],
						weight: 12
					},
					{
						id: 'cultParts',
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
						count: 50
					},
				]
			}
		]
	},
	cult3: {
		name: "Wraith Construct",
		icon: require("@/assets/art/combat/enemies/boss/cultwraith_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 8,
			precision: 73,
			power: 71,
			evasion: 166,
			luck: 10,
			damageType: "brute",
			protection: -30
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 50000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'cultParts',
						count: [9, 12],
						weight: 8
					},
					{
						id: 'cultParts',
						count: [13, 14],
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
						count: 50
					},
				]
			}
		]
	},
	cult4: {
		name: "Curate Of Blood",
		icon: require("@/assets/art/combat/enemies/boss/cult4_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 1.5,
			precision: 90,
			power: 94,
			evasion: 88,
	//		regen: 1,
			damageType: "burn",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 50000]
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'cultParts',
						count: [16, 22],
						weight: 16
					},
					{
						id: 'cultParts',
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
	boss.overrideRobustness = 110;
})

export default BOSSES;