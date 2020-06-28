export default {
	afkviro: {
		name: "Harmless Virologist",
		icon: require("@/assets/art/combat/enemies/goodviro.png"),
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
				chance: 0.5,
				itemTable: [
					{
						id: 'ticket3',
						count: [0, 2],
						weight: 1
					},
					{
						id: 'gold',
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
	monkey: {
		name: "Infected Monkey",
		icon: require("@/assets/art/combat/enemies/monkey.png"),
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
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
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
				item: "foodMeatA"
			}
		]
	},
	movingviro: {
		name: "Moving Virologist",
		icon: require("@/assets/art/combat/enemies/badviro.png"),
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
				chance: 0.5,
				itemTable: [
					{
						id: 'ammoBallistic4',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: .2,
				item: "fireaxe"
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	gorilla: {
		name: "Gorilla",
		icon: require("@/assets/art/combat/enemies/gorilla.png"),
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
				chance: 0.5,
				itemTable: [
					{
						id: 'bananaBlue',
						weight: 1
					},
					{
						id: 'mushroomRed',
						weight: 1
					},
					{
						id: 'plantSeed',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatA"
			}
		]
	},
}