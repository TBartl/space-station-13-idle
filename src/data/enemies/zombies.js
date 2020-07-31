export default {
	zombie1: {
		name: "Shambling Assistant",
		icon: require("@/assets/art/combat/enemies/zombie1.png"),
		stats: {
			maxHealth: 400,
			attackSpeed: 4.2,
			precision: 86,
			power: 103,
			evasion: 69,
			regen: 2,
			damageType: "brute",
			burnProtection: 50
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gunBallistic3',
						weight: 12
					},
					{
						id: 'armorBrute5',
						weight: 4
					},
					{
						id: 'neckFanny2',
						weight: 2
					},
					{
						id: 'foot',
						weight: 1
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatZ",
			}
		]
	},
	zombie2: {
		name: "Braindead Security",
		icon: require("@/assets/art/combat/enemies/zombie2.png"),
		stats: {
			maxHealth: 410,
			attackSpeed: 4.5,
			precision: 94,
			power: 96,
			evasion: 73,
			regen: 2,
			damageType: "brute",
			burnProtection: 50
		},
		itemTables: [
			{
				chance: .5,
				itemTable: [
					{
						id: 'meleeBlunt9',
						weight: 40
					},
					{
						id: 'drinkBeepskySmash',
						weight: 37
					},
					{
						id: 'drinkTripleSec',
						weight: 14
					},
					{
						id: 'faceSecGlassess',
						weight: 13
					},
					{
						id: 'armorBrute3',
						weight: 12
					},
					{
						id: 'drinkIrishCB',
						weight: 11
					},
					{
						id: 'criminal',
						weight: 10
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatZ",
			}
		]
	},
	zombie3: {
		name: "Unsuccessful Lone Survivor",
		icon: require("@/assets/art/combat/enemies/zombie3.png"),
		stats: {
			maxHealth: 420,
			attackSpeed: 5.6,
			precision: 104,
			power: 90,
			evasion: 75,
			regen: 2,
			damageType: "burn",
			burnProtection: 50
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gunBallistic6',
						weight: 9
					},
					{
						id: 'armorBurn4',
						weight: 8
					},
					{
						id: 'ammoEnergy4',
						count: [4, 8],
						weight: 7
					},
					{
						id: 'drinkAntiFreeze',
						count: [1, 3],
						weight: 6
					},
					{
						id: 'armorBurn5',
						weight: 2
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatZ",
			}
		]
	},
	zombie4: {
		name: "Kharmaani Gyne",
		icon: require("@/assets/art/combat/enemies/zombie4.png"),
		stats: {
			maxHealth: 430,
			attackSpeed: 6,
			precision: 87,
			power: 89,
			evasion: 97,
			regen: 2,
			damageType: "burn",
			burnProtection: 50,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'slimeRed',
						weight: 20
					},
					{
						id: 'slimeGreen',
						weight: 20
					},
					{
						id: 'slimePink',
						weight: 20
					},
					{
						id: 'slimeGold',
						weight: 20
					},
					{
						id: 'pillSpacelube',
						count: [50,75],
						weight: 10
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatA",
			}
		]
	},
}