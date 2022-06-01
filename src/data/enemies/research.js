export default {
	//slow hitter but hits BIG (but not lethal). like a mini-locker that can get a few hits off and can evade
	//high attack speed and evasion will work
	drunkScientist: {
		name: "Drunk Scientist",
		desc: "I'm researchiing the art uf droonken buxxxing. *BURP*",
		verb: "slurs",
		icon: require("@/assets/art/combat/enemies/drunkScientist.png"),
		stats: {
			maxHealth: 170,
			attackSpeed: 7.5,
			precision: 45,
			power: 45,
			evasion: 50,
			damageType: "brute",
			luck: 100,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'drinkVodka',
						count: [6,12],
						weight: 7
					},
					{
						id: 'potionResearch',
						count: [2,4],
						weight: 6
					},
					{
						id: 'pillSpacedrugs',
						count: [20,40],
						weight: 5
					},
					{
						id: 'armorBurn3',
						weight: 3
					},
				]
			},
			{
				chance: 0.02,
				item: "jumpsuitResearch"
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	//objective: survive
	//guaranteed to do 8 attacks of 36-47 damage with high precision over 16 seconds. cant be damaged but auto-dies after time is up
	toxinsScientist: {
		name: "Toxins Scientist",
		desc: "I'm the king of the rhumba beat...",
		verb: "sings",
		icon: require("@/assets/art/combat/enemies/toxinsScientist.png"),
		stats: {
			maxHealth: 16,
			attackSpeed: 1.9,
			precision: 75,
			power: 60,
			evasion: 0,
			damageType: "burn",
			burnProtection: 100,
			bruteProtection: 100,
			regen: -1,
			luck: 75
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'wire',
						count: [12,18],
						weight: 18
					},
					{
						id: 'toolBartending',
						count: [1,2],
						weight: 6
					},
					{
						id: 'toolGraytiding',
						count: [1,2],
						weight: 6
					},
					{
						id: 'toolBotany',
						count: [1,2],
						weight: 6
					},
					{
						id: 'toolEngineering',
						count: [1,2],
						weight: 6
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	//stanard mid-level fight but it uses regen instead of armor so your damage/attack speed need to be high
	bohBomber: {
		name: "Bag of Holding Bomber",
		desc: "ALL HAIL LORD SINGULOTH!!",
		verb: "yells",
		icon: require("@/assets/art/combat/enemies/bohBomber.png"),
		stats: {
			maxHealth: 300,
			attackSpeed: 1.1,
			precision: 66,
			power: 70,
			evasion: 20,
			damageType: "brute",
			regen: 2,
			luck: 10
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'power',
						count: [5,10],
						weight: 70
					},
					{
						id: 'drinkSingulo',
						count: [2,6],
						weight: 20
					},
					{
						id: 'toolXenobiology',
						weight: 10
					},
					{
						id: 'slimeBluespace',
						weight: 1
					}
				]
			},
			{
				chance: .02,
				item: "companionBoH"
			},
			{
				chance: 1,
				item: "foodMeatH"
			},
		]
	},
	//guaranteed to chip you down if you only rely on evasion. use armor and regen
	newMiner: {
		name: "Fully Equipped Miner",
		desc: "RIP AND TEAR!!",
		verb: "yells",
		icon: require("@/assets/art/combat/enemies/newMiner.png"),
		stats: {
			maxHealth: 350,
			attackSpeed: 1.5,
			precision: 200,
			power: 25,
			evasion: 30,
			damageType: "burn",
			regen: 1,
			luck: 25,
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'core_slimeGreen',
						count: [8,16],
						weight: 70
					},
					{
						id: 'toolMining',
						count: [1,2],
						weight: 20
					},
					{
						id: 'meleeBlunt7',
						weight: 7
					},
					{
						id: 'cultParts',
						weight: 3
					}
				]
			},
			{
				chance: .02,
				item: "mechMining"
			},
			{
				chance: 1,
				item: "foodMeatZ"
			},
		]
	},
}