export default {
	lava1: {
		name: "Blood Drunk Miner",
		icon: require("@/assets/art/combat/enemies/boss/miner.png"),
		validhuntable: false,
		stats: {
			maxHealth: 250,
			attackSpeed: 1.4,
			precision: 71,
			power: 78,
			evasion: 75,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'exoticParts',
						count: [6, 10],
						weight: 8
					},
					{
						id: 'exoticParts',
						count: [11, 12],
						weight: 1
					},
				]
			},
			{
				chance: 1,
				item: "uranium"
			}
		]
	},
	lava2: {
		name: "Ash Drake",
		icon: require("@/assets/art/combat/enemies/boss/ash-drake.png"),
		validhuntable: false,
		stats: {
			maxHealth: 260,
			attackSpeed: 1.7,
			precision: 63,
			power: 60,
			evasion: 80,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'exoticParts',
						count: [9, 12],
						weight: 8
					},
					{
						id: 'exoticParts',
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
						weight: 1
					},
				]
			}
		]
	},
	lava3: {
		name: "Bubbglegum",
		icon: require("@/assets/art/combat/enemies/boss/bubblegum.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 270,
			attackSpeed: 2.1,
			precision: 26,
			power: 35,
			evasion: 20,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'exoticParts',
						count: [10, 16],
						weight: 12
					},
					{
						id: 'exoticParts',
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
						weight: 1
					},
				]
			}
		]
	},
	lava4: {
		name: "Legion",
		icon: require("@/assets/art/combat/enemies/boss/legion3_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 280,
			attackSpeed: 2.2,
			precision: 103,
			power: 54,
			evasion: 110,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'exoticParts',
						count: [16, 22],
						weight: 16
					},
					{
						id: 'exoticParts',
						count: [23, 24],
						weight: 1
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
}