export default {
	antag: {
		name: "Black Operations Communicator",
		description: "Can be exchanged to unlock a black market job, maybe you will pick the right one this timeline.",
		icon: require("@/assets/art/shop/items/antag_anim.gif")
	},
	startCargonia: {
		name: "Handheld Flash",
		sellPrice: 33,
		icon: require("@/assets/art/shop/items/startcargonia.png"),
		description: "If you've used a black ops communicator, you can use this to join cargonia",
		equipmentSlot: "pocket",
		stats: {
			luck: 50,
		}
	},
	startCult: {
		name: "Cursed Touch",
		icon: require("@/assets/art/shop/items/startcult.png"),
		overlay: require("@/assets/art/shop/items/startcult_overlay.png"),
		description: "If you've used a black ops communicator, you can use this to join the cult",
		sellPrice: 30,
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 10,
			regen: -.2,
			protection: 1,
			evasion: 1,
			precision: 1,
			power: 1,
			luck: 1,
			command: 1
		},
		requires: {
			evasion: 1
		},
	},
	startLing: {
		name: "Harmless Red Slug",
		description: "If you've used a black ops communicator, you can use this to become a changeling",
		sellPrice: 50000,
		heal: -200,
		icon: require("@/assets/art/shop/items/startling.png")
	},
	money: {
		name: "Space Coins",
		icon: require("@/assets/art/misc/coin-padded.png")
	},
	revParts: {
		name: "Employment Law",
		sellPrice: 100,
		icon: require("@/assets/art/shop/items/revpart.png")
	},
	boss1Parts: {
		name: "Shipment Logs",
		sellPrice: 100,
		icon: require("@/assets/art/shop/items/book.png")
	},
	exoticParts: {
		name: "Exotic Remains",
		sellPrice: 250,
		icon: require("@/assets/art/shop/items/exotic.png")
	},
	telecrystal: {
		name: "Telecrystal",
		sellPrice: 500,
		icon: require("@/assets/art/shop/items/telecrystal.png")
	},
	cultParts: {
		name: "Occult Tome",
		sellPrice: 500,
		icon: require("@/assets/art/shop/items/cultpart_anim.gif")
	},
	ertParts: {
		name: "Nanotrasen Chip",
		sellPrice: 500,
		icon: require("@/assets/art/shop/items/ertpart.png")
	},
	wizParts: {
		name: "Magical Scroll",
		sellPrice: 500,
		icon: require("@/assets/art/shop/items/wizpart.png")
	},
	//Crates
	hatCrate: {
		name: "Hat Crate",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/hatcrate.png"),
		itemTable: [
			{
				id: 'headCommon1',
				weight: 14
			},
			{
				id: 'headCommon2',
				weight: 14
			},
			{
				id: 'headCommon3',
				weight: 14
			},
			{
				id: 'headCommon4',
				weight: 14
			},
			{
				id: 'headCommon5',
				weight: 14
			},
			{
				id: 'headRare1',
				weight: 5
			},
			{
				id: 'headRare2',
				weight: 5
			},
			{
				id: 'headRare3',
				weight: 5
			},
			{
				id: 'headRare4',
				weight: 5
			},
			{
				id: 'headRare5',
				weight: 5
			},
			{
				id: 'headEpic1',
				weight: 1
			},
			{
				id: 'headEpic2',
				weight: 1
			},
			{
				id: 'headEpic3',
				weight: 1
			},
			{
				id: 'headEpic4',
				weight: 1
			},
			{
				id: 'headEpic5',
				weight: 1
			},
		]
	},
	hatCrate2: {
		name: "Hat Crate, Winter Edition",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/hatcrateS2.png"),
		itemTable: [
			{
				id: 'S2headCommon1',
				weight: 14
			},
			{
				id: 'S2headCommon2',
				weight: 14
			},
			{
				id: 'S2headCommon3',
				weight: 14
			},
			{
				id: 'S2headCommon4',
				weight: 14
			},
			{
				id: 'S2headRare1',
				weight: 5
			},
			{
				id: 'S2headRare2',
				weight: 5
			},
			{
				id: 'S2headRare3',
				weight: 5
			},
			{
				id: 'S2headRare4',
				weight: 5
			},
			{
				id: 'S2headEpic1',
				weight: 1
			},
			{
				id: 'S2headEpic2',
				weight: 1
			},
			{
				id: 'S2headEpic3',
				weight: 1
			},
			{
				id: 'S2headEpic4',
				weight: 1
			},
		]
	},
	knifeCrate: {
		name: "Weapon Crate",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/weaponcrate.png"),
		itemTable: [
			{
				id: 'meleeSharp1',
				weight: 11
			},
			{
				id: 'meleeSharp2',
				weight: 10
			},
			{
				id: 'meleeSharp3',
				weight: 9
			},
			{
				id: 'meleeSharp4',
				weight: 8
			},
			{
				id: 'meleeSharp5',
				weight: 5
			},
			{
				id: 'meleeSharp6',
				weight: 3
			},
			{
				id: 'meleeBurn3',
				weight: 3
			},
			{
				id: 'meleeSharp7',
				weight: 1
			}
		]
	},
	supplyCrate: {
		name: "Supply Droppod",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/droppod.png"),
		itemTable: [
			{
				id: 'plantSeed',
				count: 10,
				weight: 25
			},
			{
				id: 'iron',
				count: 10,
				weight: 24
			},
			{
				id: 'foodPrecision1',
				count: 3,
				weight: 23
			},
			{
				id: 'foodEvasion1',
				count: 3,
				weight: 22
			},
			{
				id: 'foodPower1',
				count: 3,
				weight: 21
			},
			{
				id: 'foodMeatA',
				count: 3,
				weight: 20
			},
			{
				id: 'foodPasta1',
				count: 3,
				weight: 19
			},
			{
				id: 'wire',
				count: 5,
				weight: 18
			},
			{
				id: 'power',
				count: 50,
				weight: 17
			},
			{
				id: 'meleeBurn1',
				weight: 6
			},
			{
				id: 'companionBee',
				weight: 1
			},
		]
	},
	revCrate:{
		name: "Revolution Supply Cache",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/revcrate.png"),
		itemTables: [
			{
				chance: 0.25,
				items: {
					id: 'startCargonia',
					count: [1,5],
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						count: [1,25],
						weight: 25
					},
					{
						id: 'slimeBluespace',
						weight: 15
					},
					{
						id: 'meleeSharp3',
						count: [1,20],
						weight: 9
					},
					{
						id: 'companionSkub',
						weight: 1
					},
					{
						id: 'gunEnergy2',
						weight: 13
					},
					{
						id: 'meleeBurn1',
						weight: 12
					},
					{
						id: 'companionPai',
						weight: 10
					},
				]
			}
		]
		},
	secCrate:{
	name: "Security Crate",
	description: "Can be opened",
	icon: require("@/assets/art/shop/items/seccrate.png"),
	itemTables: [
		{
			chance: 0.25,
			items: {
				id: 'startLing',
			}
		},
		{
			chance: 1,
			itemTable: [
				{
					id: 'faceSecGlassess',
					weight: 21
				},
				{
					id: 'faceSec',
					weight: 17
				},
				{
					id: 'gunEnergy6',
					weight: 11
				},
				{
					id: 'meleeBlunt9',
					weight: 1
				},
				{
					id: 'jumpsuitSecurity',
					weight: 13
				},
				{
					id: 'meleeBurn2',
					weight: 10
				},
				{
					id: 'armorSpecial1',
					weight: 8
				},
			]
		}
	]
	},
	lavaCrate: {
		name: "Local Heritage Crate",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/necrocrate.png"),
		itemTable: [
			{
				id: 'burnJunk',
				count: [0,100],
				weight: 6
			},
			{
				id: 'ammoBallistic2',
				count: [0,300],
				weight: 6
			},
			{
				id: 'oxygen',
				count: [0,1000],
				weight: 5
			},
			{
				id: 'mercury',
				count: [0,1000],
				weight: 5
			},
			{
				id: 'slimeOil',
				count: [0,50],
				weight: 3
			},
			{
				id: 'jumpsuitClown',
				weight: 11
			},
			{
				id: 'companionLava',
				weight: 6
			},
			{
				id: 'lingBrute1',
				weight: 4
			},
			{
				id: 'meleeShield1',
				weight: 3
			},
			{
				id: 'foot',
				weight: 1
			},
		]
	},
	syndieCrate: {
		name: "Syndicate Droppod",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/syndiedroppod.png"),
		itemTable: [
			{
				id: 'ammoBallistic4',
				count: [0,100],
				weight: 18
			},
			{
				id: 'ammoEnergy4',
				count: [0,100],
				weight: 18
			},
			{
				id: 'faceSyndicate',
				weight: 8
			},
			{
				id: 'darkGygax',
				weight: 6
			},
			{
				id: 'meleeBurn4',
				weight: 21
			},
			{
				id: 'meleeBurn5',
				weight: 16
			},
			{
				id: 'armorBurn6',
				weight: 13
			}
		]
	},
	cultCrate: {
		name: "Runed Ruined Droppod",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/cultcrate.png"),
		itemTable: [
			{
				id: 'meleeBlunt3',
				weight: 50
			},
			{
				id: 'tomatoBluespace',
				count: [1,50],
				weight: 25
			},
			{
				id: 'foodHuman4',
				count: [1,250],
				weight: 20
			},
			{
				id: 'drinkDemonsBlood',
				count: [1,250],
				weight: 5
			},
			{
				id: 'gunBallistic5',
				weight: 50
			},
			{
				id: 'gunEnergy7',
				weight: 25
			},
			{
				id: 'unholywater',
				weight: 15
			},
			{
				id: 'runeN1',
				weight: 10
			},

		]
	},
	ertCrate: {
		name: "Nanotrasen Droppod",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/ertdroppod.png"),
		itemTable: [
			{
				id: 'ammoEnergy4',
				count: [1000,1500],
				weight: 50
			},
			{
				id: 'meleeBurn4T',
				weight: 40
			},
			{
				id: 'gunEnergy8',
				weight: 15
			},
			{
				id: 'companionAicard',
				weight: 15
			},
			{
				id: 'meleeShield2',
				weight: 15
			},
			{
				id: 'mechSpecial1',
				weight: 10
			},
			{
				id: 'companionPositronic',
				weight: 10
			},
			
		]
	},
	wizCrate: {
		name: "Magical Crate",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/wizcrate.png"),
		itemTable: [
			{
				id: 'ticket10',
				count: [1,20],
				weight: 110
			},
			{
				id: 'gunBallistic7',
				count: [1,10],
				weight: 100
			},
			{
				id: 'ammoRocket1',
				count: [0,5],
				weight: 100
			},
			{
				id: 'rocketLauncher1',
				weight: 80
			},
			{
				id: 'companionParasite',
				weight: 49
			},
			{
				id: 'wizCrate',
				weight: 43
			},
			{
				id: 'capeShitposting',
				weight: 20
			},
			{
				id: 'spendTC',
				weight: 6
			},
		]
	},
	contrabandCrate: {
		name: "Contraband Crate",
		description: "Can be opened",
		icon: require("@/assets/art/shop/items/contrabandcrate.png"),
		itemTable: [
			{
				id: 'ticket10',
				count: [20,40],
				weight: 100
			},
			{
				id: 'ticket1',
				count: [5,10],
				weight: 100
			},
			{
				id: 'ticket2',
				count: [5,10],
				weight: 100
			},
			{
				id: 'ticket40',
				count: [5,10],
				weight: 100
			},
			{
				id: 'ticket3',
				count: [5,10],
				weight: 100
			},
			{
				id: 'ticket55',
				count: [5,10],
				weight: 100
			},
			{
				id: 'ticket60',
				count: [5,10],
				weight: 100
			},
			{
				id: 'limbAdvancedMagboots',
				weight: 50
			},
			{
				id: 'limbBlack',
				weight: 50
			},
			{
				id: 'limbJackboots',
				weight: 50
			},
			{
				id: 'meleeBurn3T',
				weight: 25
			},
		]
	},
	susTile: {
		name: "Loose Floor Tile",
		description: "What could be underneath it?\nCan be opened",
		icon: require("@/assets/art/shop/items/susTile.png"),
		nocomplete: true,
		itemTables: [
			{
				chance: 1,
				items: {
					id: 'bluetimeEmpty',
				}
			},
			{
				chance: 1,
				items: {
					id: 'timeNote',
				}
			},
		]
	},
	timeNote: {
		name: "Time Traveller's Note",
		description: "It reads, \"I'm you from the future. Good job finding my time cache under that floor tile.\
		 If you're reading this, it means you successfully averted the time paradox, but there's still more work to do next loop! Good luck out there!\"",
		icon: require("@/assets/art/shop/items/timeNote.png"),
		nocomplete: true,
		sellPrice: 10000000
	}
}
