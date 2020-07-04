export default {
	cluelessdoctor: {
		name: "Useless Doctor",
		icon: require("@/assets/art/combat/enemies/baddoctor.png"),
		stats: {
			maxHealth: 220,
			attackSpeed: 1.1,
			precision: 47,
			power: 66,
			evasion: 57,
			damageType: "brute",
			burnProtection: 30
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceMedHud',
						weight: 9
					},
					{
						id: 'ammoBallistic3',
						count: 8,
						weight: 6
					},
					{
						id: 'q_foodMeatZ',
						weight: 3
					},
					{
						id: 'potionChemistry',
						weight: 2
					}
				]
			},
			{
				chance: .02,
				item: "jumpsuitChemistry"
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	surgeon: {
		name: "Chirurgeon",
		icon: require("@/assets/art/combat/enemies/gooddoctor.png"),
		stats: {
			maxHealth: 230,
			attackSpeed: 2.0,
			precision: 50,
			power: 48,
			evasion: 30,
			damageType: "brute",
			burnProtection: 30
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
			burnProtection: 30
		},
		itemTables: [
			{
				chance: 0.25,
				itemTable: [
					{
						id: 'faceScience',
						weight: 4
					},
					{
						id: 'meleeToolbox5',
						weight: 3
					},
					{
						id: 'q_foodMeatH',
						weight: 2
					},
					{
						id: 'ticket2',
						count: [1, 3],
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