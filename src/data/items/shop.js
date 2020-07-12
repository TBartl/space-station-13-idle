export default {
	money: {
		name: "Space Coins",
		icon: require("@/assets/art/misc/coin-padded.png")
	},
	revParts: {
		name: "Employement Law",
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
		itemTable: [
			{
				id: 'junk',
				count: [1,25],
				weight: 38
			},
			{
				id: 'slimeBluespace',
				weight: 25
			},
			{
				id: 'meleeSharp3',
				count: [1,20],
				weight: 13
			},
			{
				id: 'gunEnergy2',
				weight: 11
			},
			{
				id: 'meleeBurn1',
				weight: 9
			},
			{
				id: 'companionPai',
				weight: 5
			},
			{
				id: 'headEpic5',
				weight: .1
			},
		]
		},
	secCrate:{
	name: "Security Crate",
	description: "Can be opened",
	icon: require("@/assets/art/shop/items/seccrate.png"),
	itemTable: [
		{
			id: 'faceSecGlassess',
			weight: 10
		},
		{
			id: 'faceSec',
			weight: 8
		},
		{
			id: 'gunEnergy6',
			weight: 5
		},
		{
			id: 'jumpsuitSecurity',
			weight: 5
		},
		{
			id: 'armorSpecial1',
			weight: 1
		},
		{
			id: 'meleeBlunt9',
			weight: 1
		},
		{
			id: 'meleeBurn2',
			weight: 1
		},
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
				count: [0,500],
				weight: 5
			},
			{
				id: 'mercury',
				count: [0,500],
				weight: 5
			},
			{
				id: 'slimeOil',
				count: [0,50],
				weight: 4
			},
			{
				id: 'jumpsuitClown',
				weight: 4
			},
			{
				id: 'meleeShield1',
				weight: 3
			},
			{
				id: 'companionLava',
				weight: 3
			},
			{
				id: 'gold',
				count: [50,250],
				weight: 2
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
				weight: 100
			},
			{
				id: 'ammoEnergy4',
				count: [0,100],
				weight: 100
			},
			{
				id: 'faceSyndicate',
				weight: 80
			},
			{
				id: 'meleeBurn4',
				weight: 70
			},
			{
				id: 'armorBurn6',
				weight: 49
			},
			{
				id: 'darkGygax',
				weight: 43
			},
			{
				id: 'meleeBurn5',
				weight: 40
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
				weight: 100
			},
			{
				id: 'tomatoBluespace',
				count: [1,50],
				weight: 90
			},
			{
				id: 'foodHuman4',
				count: [1,50],
				weight: 75
			},
			{
				id: 'gunBallistic5',
				weight: 71
			},
			{
				id: 'unholywater',
				weight: 70
			},
			{
				id: 'gunEnergy7',
				weight: 40
			},
			{
				id: 'ticket60',
				count: [1,2],
				weight: 3
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
		]
	}
}