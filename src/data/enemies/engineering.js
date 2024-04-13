export default {
	redslime: {
		name: "Supermatter Anomaly",
		icon: require("@/assets/art/combat/enemies/redslime_anim.gif"),
		stats: {
			maxHealth: 150,
			attackSpeed: 2.7,
			precision: 10,
			power: 37,
			evasion: 28,
			damageType: "brute",
			bruteProtection: 90
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'slimeRed',
						weight: 7
					},
					{
						id: 'power',
						count: [5,25],
						weight: 5
					},
					{
						id: 'titanium',
						count: [1,4],
						weight: 4
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatA"
			}
		]
	},
	flamingatmostech: {
		name: "Wannabe Pyromancer Atmospheric Technician",
		desc: "I may have slightly miscalculated the potency of my burn mix.",
		icon: require("@/assets/art/combat/enemies/atmos.gif"),
		stats: {
			maxHealth: 120,
			attackSpeed: 1.5,
			precision: 36,
			power: 36,
			evasion: 32,
			damageType: "burn",
			burnProtection: 90
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'oil',
						count: [1,10],
						weight: 22
					},

					{
						id: 'burnJunk',
						weight: 20
					},
					{
						id: 'drinkB52',
						weight: 20
					},
					{
						id: 'armorBrute2',
						weight: 6
					},
					{
						id: 'faceTiki',
						weight: 2
					},
					{
						id: 'wire',
						count: [1,10],
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
	goodengineer: {
		name: "Responsible Engineer",
		desc: "Out of the way, I'm heading to solars.",
		icon: require("@/assets/art/combat/enemies/badengie.png"),
		stats: {
			maxHealth: 130,
			attackSpeed: 2.1,
			precision: 41,
			power: 44,
			evasion: 25,
			damageType: "brute",
			burnProtection: 20

		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'wire',
						count: [1,10],
						weight: 30
					},
					{
						id: 'innocent',
						weight: 24
					},
					{
						id: 'toolEngineering',
						weight: 23
					},
					{
						id: 'meleeToolbox4',
						weight: 22
					},
					{
						id: 'drinkSpaceCola',
						weight: 21
					},
					{
						id: 'titanium',
						count: [1, 10],
						weight: 20
					}
				]
			},
			{
				chance: .02,
				item: "jumpsuitEngineering"
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	badengineer: {
		name: "Fusion Engineer",
		desc: "I'VE GONE MAD WITH POWER!!",
		verb: "yells",
		icon: require("@/assets/art/combat/enemies/fusion.png"),
		stats: {
			maxHealth: 140,
			attackSpeed: 3.0,
			precision: 47,
			power: 42,
			evasion: 38,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'uranium',
						count: [1,5],
						weight: 10
					},
					{
						id: 'foodPasta1',
						count: [1,3],
						weight: 8
					},
					{
						id: 'toolEngineering',
						weight: 6
					},
					{
						id: 'q_foodPasta1',
						weight: 4
					},
					
					{
						id: 'faceMeson',
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