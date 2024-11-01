export default {

	Ian: {
		name: "Ian",
		icon: require("@/assets/art/combat/enemies/Ian.png"),
		stats: {
			maxHealth: 60,
			attackSpeed: 2.1,
			precision: 15,
			power: 21,
			evasion: 18,
			damageType: "brute",
			burnProtection: 20
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
						id: "companionDog",
						weight: 2
					},
				]
			}
		]
	},
	paperworkhop: {
		name: "Head of Personnel",
		desc: "Papers, please.",
		icon: require("@/assets/art/combat/enemies/goodhop.png"),
		stats: {
			maxHealth: 70,
			attackSpeed: 1.9,
			precision: 20,
			power: 24,
			evasion: 22,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.15,
				itemTable: [
					{
						id: 'armorBrute1',
						weight: 37
					},
					{
						id: 'meleeToolbox2',
						weight: 32
					},
					{
						id: 'gold',
						count: [1, 10],
						weight: 25
					},
					{
						id: 'drinkAcidSpit',
						weight: 6
					},
					{
						id: 'diamond',
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
	hopcurity: {
		name: "Self Declared Head of GUNS",
		desc: "Cargonia was right about these things after all.",
		icon: require("@/assets/art/combat/enemies/hoGUN.png"),
		stats: {
			maxHealth: 80,
			attackSpeed: 1.7,
			precision: 36,
			power: 19,
			evasion: 26,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'ammoBallistic1',
						count: [1,15],
						weight: 50
					},
					{
						id: 'ammoBallistic2',
						count: [1,10],
						weight: 25
					},
					{
						id: 'toolFabrication',
						count: 1,
						weight: 15
					},
					{
						id: 'gunBallistic1',
						weight: 5
					},
					{
						id: 'faceMedHud',
						weight: 3
					},
					{
						id: 'gunBallistic2',
						weight: 1
					},
				]
			}, {
				chance: 1,
				item: "foodMeatH"
			},
			{
				chance: .02,
				item: "jumpsuitGraytide"
			},
		]
	},
	plasmarobo: {
		name: "Plasmaperson Roboticist",
		desc: "You've tipped over your last medibot.",
		verb: "rattles",
		icon: require("@/assets/art/combat/enemies/plasmarobo.png"),
		stats: {
			maxHealth: 100,
			attackSpeed: 3.2,
			precision: 26,
			power: 30,
			evasion: 27,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'plasma',
						weight: 16
					},
					{
						id: 'potatoBattery',
						count: [1,3],
						weight: 15
					},
					{
						id: 'meleeBlunt5',
						weight: 5
					},
					{
						id: 'drinkScrewdriver',
						weight: 3
					},
					{
						id: 'drinkTequila',
						weight: 3
					},
					{
						id: 'potionFabrication',
						weight: 3
					},
				]
			}, {
				chance: 1,
				item: "plasma"
			},
			{
				chance: .02,
				item: "jumpsuitFabrication"
			},
		]
	},
}