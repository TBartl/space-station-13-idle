export default {
	surgeon: {
		name: "Chirurgeon",
		icon: require("@/assets/art/combat/enemies/gooddoctor.png"),
		stats: {
			maxHealth: 220,
			attackSpeed: 2.0,
			precision: 50,
			power: 48,
			evasion: 30,
			damageType: "brute",
			bruteProtection: 25
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foot',
						weight: 25
					},
					{
						id: 'innocent',
						weight: 14
					},
					{
						id: 'q_foodMeatA',
						weight: 11
					},
					{
						id: 'junk',
						weight: 9
					},
					{
						id: 'potionTinkering',
						weight: 8
					}
				]
			},
			{
				chance: .02,
				item: "jumpsuitMedical"
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	runtime: {
		name: "Runtime",
		icon: require("@/assets/art/combat/enemies/runtime.png"),
		stats: {
			maxHealth: 180,
			attackSpeed: 2.1,
			precision: 59,
			power: 53,
			evasion: 44,
			damageType: "burn",
			bruteProtection: 25
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatA",
						weight: 98
					},
					{
						id: "companionCat",
						weight: 2
					},
				]
			}
		]
	},
	cluelessdoctor: {
		name: "Useless Doctor",
		icon: require("@/assets/art/combat/enemies/baddoctor.png"),
		stats: {
			maxHealth: 230,
			attackSpeed: 1.1,
			precision: 47,
			power: 66,
			evasion: 57,
			damageType: "brute",
			bruteProtection: 25
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'q_foodMeatZ',
						weight: 9
					},
					{
						id: 'ammoBallistic3',
						count: 8,
						weight: 7
					},
					{
						id: 'pillHappy',
						count: 10,
						weight: 6
					},
					{
						id: 'pillTrifluoperazine',
						count: 10,
						weight: 5
					},
					{
						id: 'MouseCarcass',
						weight: 4
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	hulk: {
		name: "The Next Step In Human Evolution",
		icon: require("@/assets/art/combat/enemies/hulk.png"),
		stats: {
			maxHealth: 240,
			attackSpeed: 1.7,
			precision: 43,
			power: 102,
			evasion: 64,
			damageType: "brute",
			bruteProtection: 25
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'q_foodMeatH',
						weight: 35
					},
					{
						id: 'foodMeatH',
						weight: 25
					},
					{
						id: 'meleeToolbox5',
						weight: 15
					},
					{
						id: 'faceFox',
						weight: 9
					},
					{
						id: 'slimeGreen',
						weight: 5
					},
					{
						id: 'slimeAddy',
						weight: 5
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
}