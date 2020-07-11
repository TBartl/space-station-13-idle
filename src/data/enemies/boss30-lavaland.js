const BOSSES = {
	lava1: {
		name: "Ash Drake",
		icon: require("@/assets/art/combat/enemies/boss/ash-drake.png"),
		validhuntable: false,
		stats: {
			maxHealth: 1200,
			attackSpeed: 3.2,
			precision: 63,
			power: 51,
			evasion: 36,
			damageType: "burn",
			burnProtection: 70
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 30000]
				}
			},
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
						id: 'foodMeatA',
						weight: 1,
						count: 10
					},
				]
			}
		]
	},
	lava2: {
		name: "Bubblegum",
		icon: require("@/assets/art/combat/enemies/boss/bubblegum.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 1200,
			attackSpeed: 2.1,
			precision: 37,
			power: 70,
			evasion: 43,
			damageType: "brute",
			bruteProtection: 70
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 30000]
				}
			},
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
						id: 'foodMeatA',
						weight: 1,
						count: 10
					},
				]
			}
		]
	},
	lava3: {
		name: "Blood Drunk Miner",
		icon: require("@/assets/art/combat/enemies/boss/miner.png"),
		validhuntable: false,
		stats: {
			maxHealth: 1200,
			attackSpeed: 6,
			precision: 71,
			power: 33,
			evasion: 46,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 30000]
				}
			},
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
				itemTable: [
					{
						id: 'foodMeatH',
						weight: 1,
						count: 30
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
			maxHealth: 3000,
			attackSpeed: 3.4,
			precision: 56,
			power: 55,
			evasion: 51,
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
}

Object.values(BOSSES).forEach(boss => {
	boss.overrideRobustness = 65;
})

export default BOSSES;