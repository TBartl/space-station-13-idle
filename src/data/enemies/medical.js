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
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceMedHud',
						weight: 1
					},
					{
						id: 'ammoBallistic3',
						count: 8,
						weight: 1
					},
					{
						id: 'potionChemistry',
						weight: 1
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
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foot',
						weight: 1
					},
					{
						id: 'junk',
						weight: 1
					},
					{
						id: 'potionTinkering',
						weight: 1
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
			precision: 250,
			power: 78,
			evasion: 68,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceScience',
						weight: 1
					},
					{
						id: 'meleeToolbox5',
						weight: 1
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