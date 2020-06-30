export default {
	antag1: {
		name: "Cultist of Nar'sie",
		icon: require("@/assets/art/combat/enemies/boss/antag-cultist.png"),
		validhuntable: false,
		stats: {
			maxHealth: 310,
			attackSpeed: 3.0,
			precision: 86,
			power: 91,
			evasion: 95,
			damageType: "brute",
			burnProtection: 10,
			bruteProtection: 5
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
		name: "Syndicate Nuclear Operative",
		icon: require("@/assets/art/combat/enemies/boss/antag-op.png"),
		validhuntable: false,
		stats: {
			maxHealth: 320,
			attackSpeed: 1.9,
			precision: 75,
			power: 71,
			evasion: 73,
			damageType: "brute",
			burnProtection: 20,
			bruteProtection: 5
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
	antag3: {
		name: "Cultist of Ravtar",
		icon: require("@/assets/art/combat/enemies/boss/antag-clock.png"),
		validhuntable: false,
		stats: {
			maxHealth: 330,
			attackSpeed: 1.9,
			precision: 85,
			power: 94,
			evasion: 63,
			damageType: "brute",
			burnProtection: 20,
			bruteProtection: 5
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
	antag4: {
		name: "Wizard",
		icon: require("@/assets/art/combat/enemies/boss/antag-wizard.png"),
		validhuntable: false,
		stats: {
			maxHealth: 340,
			attackSpeed: 1.5,
			precision: 84,
			power: 87,
			evasion: 81,
			damageType: "brute",
			burnProtection: 5,
			bruteProtection: 20
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