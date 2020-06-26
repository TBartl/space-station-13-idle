export default {
	locker: {
		name: "Captains Locker",
		icon: require("@/assets/art/combat/enemies/locker.png"),
		stats: {
			maxHealth: 500,
			attackSpeed: 30,
			precision: 20,
			power: 500,
			evasion: -10,
			damageType: "brute",
			burnProtection: 20,
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'armB4',
						weight: 1
					},
					{
						id: 'faceSecglasses',
						weight: 1
					},
					{
						id: 'ammoE3',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "titanium"
			}
		]
	},
	axeassistant: {
		name: "Window Breaking Assistant",
		icon: require("@/assets/art/combat/enemies/badassistant.png"),
		stats: {
			maxHealth: 290,
			attackSpeed: 3.0,
			precision: 55,
			power: 59,
			evasion: 73,
			damageType: "brute",
			burnProtection: 5,
			bruteProtection: 5
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceGas',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'jumpsuitGraytide',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	captain: {
		name: "Captain",
		icon: require("@/assets/art/combat/enemies/captain.png"),
		stats: {
			maxHealth: 300,
			attackSpeed: 1.1,
			precision: 70,
			power: 78,
			evasion: 67,
			damageType: "burn",
			burnProtection: 10,
			bruteProtection: 15
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'wire',
						weight: 1
					},
					{
						id: 'ticket3',
						count: [0, 1],
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
}