export default {
	mouse: {
		name: "Mouse",
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		stats: {
			maxHealth: 30,
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
						id: "foodMeatA",
						weight: 98
					},
					{
						id: "slimeMouse",
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
			maxHealth: 40,
			attackSpeed: 1.6,
			precision: 8,
			power: 17,
			evasion: 13,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'plasma',
						weight: 1
					},
					{
						id: 'power',
						weight: 1
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
			maxHealth: 50,
			attackSpeed: 1.1,
			precision: 6,
			power: 13,
			evasion: 10,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'glass',
						weight: 1
					},
					{
						id: 'silver',
						weight: 1
					},
					{
						id: 'jumpsuitTinkering',
						weight: 1
					},
					{
						id: 'ticket1',
						count: [0, 2],
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