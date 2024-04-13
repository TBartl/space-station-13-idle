export default {
	axeassistant: {
		name: "Window Breaking Assistant",
		desc: "GRAYTIDE STATION WIDE!!",
		verb: "yells",
		icon: require("@/assets/art/combat/enemies/badassistant.png"),
		stats: {
			maxHealth: 290,
			attackSpeed: 3.0,
			precision: 55,
			power: 59,
			evasion: 73,
			damageType: "brute",
			burnProtection: 30,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'pillPumpup',
						count: [5,10],
						weight: 7
					},
					{
						id: 'drinkQuicky',
						count: [1,3],
						weight: 6
					},
					{
						id: 'pillSpacedrugs',
						weight: 5
					},
					{
						id: 'meleeSharp5',
						weight: 4
					},
					{
						id: 'faceGas',
						weight: 3
					},
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
		desc: "I am NOT a COMDOM!!",//[sic]
		verb: "yells",
		icon: require("@/assets/art/combat/enemies/captain.png"),
		stats: {
			maxHealth: 300,
			attackSpeed: 1.1,
			precision: 70,
			power: 78,
			evasion: 67,
			damageType: "burn",
			burnProtection: 30,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'wire',
						count: [2, 5],
						weight: 18
					},
					{
						id: 'toolBartending',
						count: [1, 2],
						weight: 14
					},
					{
						id: 'drinkGargleBlaster',
						count: [1, 3],
						weight: 6
					},
					{
						id: 'titanium',
						weight: 4
					},
					{
						id: 'meleeBlunt8',
						weight: 3
					},
					{
						id: 'slimeRainbow',
						weight: 2
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	renault: {
		name: "Renault",
		icon: require("@/assets/art/combat/enemies/renault.png"),
		stats: {
			maxHealth: 280,
			attackSpeed: 1.9,
			precision: 57,
			power: 47,
			evasion: 53,
			damageType: "brute",
			burnProtection: 30,
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
						id: "companionFox",
						weight: 2
					},
				]
			}
		]
	},
	locker: {
		name: "Captain's Locker",
		desc: "...Hello? Can someone let me out of this thing?",
		verb: "asks",
		icon: require("@/assets/art/combat/enemies/locker.png"),
		stats: {
			maxHealth: 500,
			attackSpeed: 45,
			precision: 200,
			power: 80,
			evasion: -10,
			damageType: "brute",
			burnProtection: 25,
			bruteProtection: 25
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'ammoEnergy3',
						count: 4,
						weight: 16
					},
					{
						id: 'drinkLizardWine',
						weight: 4
					},
					{
						id: 'armorBrute4',
						weight: 4
					},
					{
						id: 'faceSecGlassess',
						weight: 1
					},
				]
			},
			{
				chance: 1,
				item: "titanium"
			}
		]
	},
}