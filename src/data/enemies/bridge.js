export default {
	locker: {
		name: "Captain's Locker",
		icon: require("@/assets/art/combat/enemies/locker.png"),
		stats: {
			maxHealth: 500,
			attackSpeed: 45,
			precision: 200,
			power: 80,
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
						id: 'ammoEnergy3',
						count: 4,
						weight: 21
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
			bruteProtection: 30
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
						id: 'pillSpacedrugs',
						weight: 4
					},
					{
						id: 'meleeSharp5',
						weight: 2
					},
					{
						id: 'faceGas',
						weight: 1
					},
				]
			},
			{
				chance: .02,
				item: "jumpsuitGraytide"
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
			burnProtection: 30,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'wire',
						count: [2, 5],
						weight: 9
					},
					{
						id: 'money',
						count: [220, 660],
						weight: 7
					},
					{
						id: 'titanium',
						weight: 2
					},
					{
						id: 'meleeBlunt8',
						weight: 1
					},
					{
						id: 'ticket3',
						count: [0, 1],
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
}