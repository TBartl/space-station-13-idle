export default {
	monkey: {
		name: "Infected Monkey",
		icon: require("@/assets/art/combat/enemies/monkey.png"),
		stats: {
			maxHealth: 310,
			attackSpeed: 1.9,
			precision: 75,
			power: 71,
			evasion: 73,
			damageType: "brute",
			burnProtection: 40,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foot',
						weight: 8
					},
					{
						id: 'gunBallistic4',
						weight: 3
					},
					{
						id: 'potionShitposting',
						weight: 2
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatA"
			}
		]
	},
	afkviro: {
		name: "Harmless Virologist",
		icon: require("@/assets/art/combat/enemies/goodviro.png"),
		stats: {
			maxHealth: 320,
			attackSpeed: 3.0,
			precision: 85,
			power: 94,
			evasion: 63,
			damageType: "brute",
			bruteProtection: 40,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'potionXenobiology',
						weight: 10
					},
					{
						id: 'foodAnimal2',
						weight: 9
					},
					{
						id: 'slimeLightPink',
						weight: 4
					},
					{
						id: 'pillHappy',
						count: [1, 10],
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

	movingviro: {
		name: "Moving Virologist",
		icon: require("@/assets/art/combat/enemies/badviro.png"),
		stats: {
			maxHealth: 340,
			attackSpeed: 1.9,
			precision: 86,
			power: 91,
			evasion: 95,
			damageType: "brute",
			burnProtection: 40,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'ammoBallistic4',
						count:8,
						weight: 10
					},
					{
						id: 'q_foodAnimal1',
						weight: 9
					},
					{
						id: 'pillSpacelube',
						weight: 1
					}
					,
					{
						id: 'slimeBlack',
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
	gorilla: {
		name: "Gorilla",
		icon: require("@/assets/art/combat/enemies/gorilla.png"),
		stats: {
			maxHealth: 330,
			attackSpeed: 1.5,
			precision: 84,
			power: 87,
			evasion: 81,
			damageType: "brute",
			burnProtection: 5,
			bruteProtection: 40
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'bananaBlue',
						count: [1,5],
						weight: 3
					},
					{
						id: 'mushroomRed',
						count: [1,5],
						weight: 2
					},
					{
						id: 'plantSeed',
						count:5,
						weight: 2
					},
					{
						id: 'burnJunk',
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