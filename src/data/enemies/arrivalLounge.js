export default {
	janitor: {
		name: "Janitor",
		desc: "Be careful not to slip.",
		icon: require("@/assets/art/combat/enemies/janitor.png"),
		stats: {
			maxHealth: 18,
			attackSpeed: 1.6,
			precision: 3,
			power: 4,
			evasion: 4,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 38
					},
					{
						id: 'spaceJunk',
						weight: 22
					},
					{
						id: 'armorJunk',
						weight: 14
					},
					{
						id: 'foodPower1',
						weight: 12
					},
					{
						id: 'pillMeth',
						count: [0, 20],
						weight: 9
					},
					{
						id: 'tomatoBluespace',
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
	chaplain: {
		name: "Chaplain",
		desc: "You dare blaspheme against Space Jesus?",
		verb: "asks",
		icon: require("@/assets/art/combat/enemies/chaplain.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 1.6,
			precision: 5,
			power: 7,
			evasion: 9,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 50
					},
					{
						id: 'spaceJunk',
						weight: 45
					},
					{
						id: 'meleeToolbox1',
						weight: 5
					},
					{
						id: 'startCult',
						weight: 4
					},
					{
						id: 'meleeBlunt3',
						weight: .5
					},
					{
						id: 'lavaCrate',
						weight: .02
					},
					{
						id: 'meleeBlunt8',
						weight: .01
					}

				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	miner: {
		name: "Prelaunch Miner",
		desc: "Pickaxe, check. Knife, check...",
		verb: "hisses",
		icon: require("@/assets/art/combat/enemies/miner.png"),
		stats: {
			maxHealth: 24,
			attackSpeed: 3,
			precision: 15,
			power: 6,
			evasion: 8,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'iron',
						count: [1, 5],
						weight: 12
					},
					{
						id: "ammoEnergy1",
						weight: 10,
						count: [1, 4]
					},
					{
						id: "drinkManlyDorf",
						weight: 7,
					},
					{
						id: "potionMining",
						weight: 5,
						count: [1, 3]
					},
					{
						id: 'gunEnergy1',
						weight: 1
					},
				]
			}, {
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	playershop: {
		name: "Black Market Shopkeeper",
		desc: "I've got wares, freshly graytided!",
		verb: "exclaims",
		icon: require("@/assets/art/combat/enemies/shop.png"),
		stats: {
			maxHealth: 36,
			attackSpeed: 3,
			precision: 10,
			power: 14,
			evasion: 9,
			protection: 10,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'pillKrokodil',
						weight: 23
					},
					{
						id: 'drinkOrangeJuice',
						weight: 14
					},
					{
						id: 'drinkTomatoJuice',
						weight: 14
					},
					{
						id: 'mushroom',
						weight: 14
					},
					{
						id: 'meleeSharp2',
						weight: 10
					},
					{
						id: "meleeBlunt2",
						weight: 10,
					},
					{
						id: "supplyCrate",
						weight: 2,
					},
					{
						id: 'knifeCrate',
						weight: 1
					},
				]
			}, {
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
}