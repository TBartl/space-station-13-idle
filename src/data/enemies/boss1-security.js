export default {
	sec1: {
		name: "Corrupt Security Officer",
		icon: require("@/assets/art/combat/enemies/boss/sec-officer.png"),
		stats: {
			maxHealth: 160,
			attackSpeed: 2.0,
			precision: 34,
			power: 45,
			evasion: 25,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'bananamime',
						weight: 1
					},
					{
						id: 'spaceJunk',
						weight: 1
					},
					{
						id: 'faceMime',
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
	sec2: {
		name: "Meddling Detective",
		icon: require("@/assets/art/combat/enemies/boss/sec-detective.png"),
		stats: {
			maxHealth: 170,
			attackSpeed: 2.1,
			precision: 37,
			power: 44,
			evasion: 40,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.05,
				itemTable: [
					{
						id: 'telecrystal',
						weight: 49
					},
					{
						id: 'honk',
						weight: 1
					},
					{
						id: 'meleeT4',
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
	sec3: {
		name: "Gulag Warden",
		icon: require("@/assets/art/combat/enemies/boss/sec-warden.png"),
		stats: {
			maxHealth: 50,
			attackSpeed: .5,
			precision: 25,
			power: 10,
			evasion: 76,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "oxygen",
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatA",
						weight: 3
					},
					{
						id: "slimeBee",
						weight: 1
					},
				]
			}
		]
	},
	sec4: {
		name: "Anime Inspired Head Of Security",
		icon: require("@/assets/art/combat/enemies/boss/sec-HOS.png"),
		stats: {
			maxHealth: 180,
			attackSpeed: 2.4,
			precision: 57,
			power: 40,
			evasion: 26,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'banana',
						weight: 10
					},
					{
						id: 'bananium',
						weight: 1
					},
					{
						id: 'faceClown',
						weight: 1
					},
					{
						id: 'ticket2',
						count: [0, 2],
						weight: 3
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