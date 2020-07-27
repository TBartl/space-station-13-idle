export default {
	mouse: {
		name: "Mouse",
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		stats: {
			maxHealth: 10,
			attackSpeed: 2.5,
			precision: -1,
			power: -1,
			evasion: -1,
			damageType: "brute",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "mouseCarcass",
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "wire",
						weight: 74,
						count: [1, 3]
					},
					{
						id: "foodMeatA",
						weight: 24
					},
					{
						id: "companionMouse",
						weight: 2
					},
				]
			}
		]
	},
	lostscientist: {
		name: "Lost Scientist",
		icon: require("@/assets/art/combat/enemies/science.png"),
		stats: {
			maxHealth: 45,
			attackSpeed: 1.6,
			precision: 9,
			power: 16,
			evasion: 9,
			damageType: "burn",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'plasma',
						weight: 10,
						count: [1, 4]
					},
					{
						id: 'slimeOrange',
						weight: 8,
					},
					{
						id: 'slimeBlue',
						weight: 7,
					},
					{
						id: 'slimePurple',
						weight: 7,
					},
					{
						id: 'slimeYellow',
						weight: 7,
					},
					{
						id: 'power',
						weight: 6,
						count: [1, 5]
					},
					{
						id: 'potionFabrication',
						weight: 5,
						count: [1, 3]
					},
					{
						id: 'faceScience',
						weight: 3,
					},

				]
			},
			{
				chance: .02,
				item: "jumpsuitScience"
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	cargoTech: {
		name: "Cargo Technician",
		icon: require("@/assets/art/combat/enemies/cargo_tech.png"),
		stats: {
			maxHealth: 60,
			attackSpeed: 1.1,
			precision: 8,
			power: 15,
			evasion: 19,
			damageType: "brute",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'glass',
						weight: 65,
						count: [1, 8]
					},
					{
						id: 'silver',
						weight: 30,
						count: [1, 5]
					},
					{
						id: 'drinkWhiskeyCola',
						weight: 30,
						count: [1, 5]
					},
					{
						id: 'innocent',
						weight: 8,
					},
					{
						id: 'wire',
						weight: 5,
						count: [1, 20]
					},

				]
			},
			{
				chance: .02,
				item: "jumpsuitTinkering"
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	fugitive: {
		name: "Fugitive",
		icon: require("@/assets/art/combat/enemies/troublemaker.png"),
		stats: {
			maxHealth: 70,
			attackSpeed: 2.0,
			precision: 13,
			power: 14,
			evasion: 23,
			damageType: "burn",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'pillHappy',
						weight: 10,
						count: [1, 3]
					},
					{
						id: 'pillMeth',
						weight: 10,
						count: [1, 3]
					},
					{
						id: 'pillSpacedrugs',
						weight: 10,
						count: [1, 3]
					},
					{
						id: 'pillPumpup',
						weight: 10,
						count: [1, 3]
					},
					{
						id: 'pillKrokodil',
						weight: 10,
						count: [1, 3]
					},
					{
						id: 'pillSpacelube',
						weight: 10,
						count: [1, 3]
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