const BOSSES = {
	antag1: {
		name: "Cultist of Nar'sie",
		icon: require("@/assets/art/combat/enemies/boss/antag-cultist.png"),
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
				item: "foodMeatH"
			}
		]
	},
	antag2: {
		name: "Cultist of Ravtar",
		icon: require("@/assets/art/combat/enemies/boss/antag-clock.png"),
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
				item: "foodMeatH"
			}
		]
	},
	antag3: {
		name: "Syndicate Nuclear Operative",
		icon: require("@/assets/art/combat/enemies/boss/antag-op.png"),
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
				item: "foodMeatA"
			}
		]
	},
	antag4: {
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
				item: "foodMeatA"
			}
		]
	},
}

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 180;
})

export default BOSSES;