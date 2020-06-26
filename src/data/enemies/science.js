export default {
	minibot: {
		name: "Minibot",
		icon: require("@/assets/art/combat/enemies/minibots.png"),
		stats: {
			maxHealth: 250,
			attackSpeed: 1.4,
			precision: 71,
			power: 78,
			evasion: 75,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'wire',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "uranium"
			}
		]
	},
	techpriest: {
		name: "Techpriest Roboticist",
		icon: require("@/assets/art/combat/enemies/techpriest.png"),
		stats: {
			maxHealth: 260,
			attackSpeed: 1.7,
			precision: 63,
			power: 60,
			evasion: 80,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'jumpsuitFabrication',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatH',
						weight: 1
					},
					{
						id: 'iron',
						weight: 1
					},
					{
						id: 'bluespace',
						weight: 1
					}
				]
			}
		]
	},
	mech: {
		name: "Mech Building Roboticist",
		icon: require("@/assets/art/combat/enemies/mechbuild.png"),
		stats: {
			maxHealth: 270,
			attackSpeed: 2.1,
			precision: 26,
			power: 35,
			evasion: 20,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'ripley',
						weight: 1
					},
					{
						id: 'wire',
						weight: 1
					},
					{
						id: 'meleeT6',
						weight: 1
					}
				]
			},
			{
				chance: .2,
				item: "armB6"
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatZ',
						weight: 1
					},
					{
						id: 'Plasma',
						weight: 1
					}
				]
			}
		]
	},
	ayyyyy: {
		name: "Bald Tourist",
		icon: require("@/assets/art/combat/enemies/bald_visitor.png"),
		stats: {
			maxHealth: 280,
			attackSpeed: 2.2,
			precision: 103,
			power: 54,
			evasion: 110,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'bluespace',
						weight: 1
					},
					{
						id: 'ticket3',
						count: [1, 2],
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
}