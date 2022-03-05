export default {
	holiday1: {
//	Halloween		
//		name: "Floating Skullbot",
//		icon: require("@/assets/art/combat/enemies/holiday/curseskull.gif"),

		name: "Egg",
		icon: require("@/assets/art/combat/enemies/holiday/egg.png"),
		stats: {
			maxHealth: 40,
			attackSpeed: 2.1,
			precision: 8,
			power: 8,
			evasion: 7,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: .5,
				itemTable: [
					{
						id: 'drinkCream',
						weight: 40
					},
					{
						id: 'meleeSharp3',
						weight: 37
					},
					{
						id: 'mechPlating1',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatZ',
						weight: 14
					},
					{
						id: 'holidayhat',
						weight: 1
					},

				]
			}
		]
	},
	holiday2: {
//	Halloween
//		name: "Dancing Skeleton",
//		icon: require("@/assets/art/combat/enemies/holiday/skeleton.gif"),

	name: "Chick",
	icon: require("@/assets/art/combat/enemies/holiday/chick.png"),
		stats: {
			maxHealth: 100,
			attackSpeed: 2.1,
			precision: 35,
			power: 37,
			evasion: 20,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'drinkAtomicBomb',
						weight: 6
					},
					{
						id: 'meleeSharp5',
						weight: 4
					},
					{
						id: 'supplyCrate',
						weight: 2
					},
					{
						id: 'mechPlating2',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatZ',
						weight: 14
					},
					{
						id: 'holidayhat',
						weight: 2
					},
				]
			}
		]
	},
	holiday3: {
		//	Halloween	
//		name: "Bandage Mummy",
//		icon: require("@/assets/art/combat/enemies/holiday/mummy.png"),

	name: "Chicken",
	icon: require("@/assets/art/combat/enemies/holiday/chicken.gif"),

		stats: {
			maxHealth: 200,
			attackSpeed: 1,
			precision: 25,
			power: 87,
			evasion: 52,
			regen: 5,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'knifeCrate',
						weight: 9
					},
					{
						id: 'foot',
						count: [1, 3],
						weight: 8
					},
					{
						id: 'mechPlating3',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatZ',
						weight: 14
					},
					{
						id: 'holidayhat',
						weight: 3
					},
				]
			}
		]
	},
	holiday4: {
		//	Halloween	
//		name: "Clown Job",
//		icon: require("@/assets/art/combat/enemies/holiday/clown.png"), 
	name: "ChickenMan",
	icon: require("@/assets/art/combat/enemies/holiday/chickenman.png"),
		stats: {
			maxHealth: 300,
			attackSpeed: 1.9,
			precision: 10,
			power: 420,
			evasion: 70,
			luck: 50,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceClown',
						weight: 80
					},
					{
						id: 'jumpsuitClown',
						weight: 57
					},
					{
						id: 'limbClownShoes',
						weight: 32
					},
					{
						id: 'honk',
						weight: 1
					},
					{
						id: 'mechPlating4',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatZ',
						weight: 10
					},
					{
						id: 'holidayhat',
						weight: 5
					},
				]
			}
		]
	},
}