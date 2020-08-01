const BOSSES = {
	nuke1: {
		name: "Hasty Recruit",
		icon: require("@/assets/art/combat/enemies/boss/nukeop1.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 1800,
			attackSpeed: 1.7,
			precision: 50,
			power: 63,
			evasion: 60,
			damageType: "burn",
			burnProtection: 70
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
						count: 40
					},
				]
			}
		]
	},
	nuke2: {
		name: "Syndicate Assault Cyborg",
		icon: require("@/assets/art/combat/enemies/boss/nukeborg_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 1800,
			attackSpeed: 2.1,
			precision: 60,
			power: 50,
			evasion: 57,
			damageType: "brute",
			bruteProtection: 70
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
						count: 40
					},
				]
			}
		]
	},
	nuke3: {
		name: "'Larry' Incendiary",
		icon: require("@/assets/art/combat/enemies/boss/OPl6.png"),
		validhuntable: false,
		stats: {
			maxHealth: 1800,
			attackSpeed: .3,
			precision: 53,
			power: 121,
			evasion: 62,
			luck: 10,
			damageType: "burn",
			burnProtection: 20
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
						id: 'foodMeatH',
						weight: 1,
						count: 40
					},
				]
			}
		]
	},
	nuke4: {
		name: "Mechanized Assault Suit",
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 3000,
			attackSpeed: 3.4,
			precision: 59,
			power: 71,
			evasion: 62,
	//		regen: .8,
			damageType: "burn",
			bruteProtection: 20
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
						count: 50
					},
				]
			}
		]
	},
}

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 85;
})

export default BOSSES;