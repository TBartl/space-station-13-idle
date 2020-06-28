export default {
	flamingatmostech: {
		name: "Wannabe Pyromancer Atmospheric Technician",
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
						id: 'armorBrute2',
						weight: 1
					},
					{
						id: 'faceTiki',
						weight: 1
					},
					{
						id: 'wire',
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
						weight: 1
					},
					{
						id: 'meleeToolbox3',
						weight: 1
					},
					{
						id: 'jumpsuitEngineering',
						weight: 1
					},
					{
						id: 'ticket2',
						count: [0, 1],
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
	badengineer: {
		name: "Fusion Engineer",
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
						weight: 1
					},
					{
						id: 'foodPasta1',
						weight: 1
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
						weight: 1
					},
					{
						id: 'power',
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
				item: "foodMeatA"
			}
		]
	},
}