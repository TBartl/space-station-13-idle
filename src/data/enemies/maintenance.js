export default {
	mouse: {
		name: "Mouse",
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 2.5,
			precision: -1,
			power: -1,
			evasion: -1,
			damageType: "brute",
			burnProtection: 20
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
						weight: 150,
						count: [1, 20]
					},
					{
						id: "foodMeatA",
						weight: 48
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
			burnProtection: 20
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
						id: 'power',
						weight: 10,
						count: [1, 5]
					},
					{
						id: 'potionFabrication',
						weight: 5,
						count: [1, 3]
					},
					{
						id: 'jumpsuitScience',
						weight: 1
					}
				]
			}, {
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
						weight: 1,
						count: [1, 8]
					},
					{
						id: 'silver',
						weight: 1,
						count: [1, 5]
					},
					{
						id: 'ticket1',
						count: [0, 2],
						weight: 1
					},
					{
						id: 'jumpsuitTinkering',
						weight: .5
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