const BOSSES = {
	nuke1: {
		name: "Ash Drake",
		icon: require("@/assets/art/combat/enemies/boss/ash-drake.png"),
		validhuntable: false,
		stats: {
			maxHealth: 1000,
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
					count: [0, 10000]
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
	nuke2: {
		name: "Bubblegum",
		icon: require("@/assets/art/combat/enemies/boss/bubblegum.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 1000,
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
					count: [0, 10000]
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
	nuke3: {
		name: "Blood Drunk Miner",
		icon: require("@/assets/art/combat/enemies/boss/miner.png"),
		validhuntable: false,
		stats: {
			maxHealth: 1000,
			attackSpeed: 7,
			precision: 53,
			power: 121,
			evasion: 62,
			damageType: "burn",
			burnProtection: 20
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
						count: 10
					},
				]
			}
		]
	},
	nuke4: {
		name: "Legion",
		icon: require("@/assets/art/combat/enemies/boss/legion3_anim.gif"),
		validhuntable: false,
		stats: {
			maxHealth: 2400,
			attackSpeed: 3.4,
			precision: 59,
			power: 71,
			evasion: 62,
			damageType: "burn",
			burnProtection: 20
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
						count: 10
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