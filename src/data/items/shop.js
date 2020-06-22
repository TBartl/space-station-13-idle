export default {
	money: {
		name: "Space Coins",
		icon: require("@/assets/art/misc/coin-padded.png")
	},
	telecrystal: {
		name: "Telecrystal",
		sellPrice: 500,
		icon: require("@/assets/art/shop/items/telecrystal.png")
	},
	exoticparts: {
		name: "Exotic Remains",
		sellPrice: 500,
		icon: require("@/assets/art/shop/items/exotic.png")
	},
	hatCrate: {
		name: "Hat Crate",
		icon: require("@/assets/art/shop/items/hatcrate.png"),
		itemTable: [
			{
				id: 'headCake',
				weight: 1
			},
			{
				id: 'headH1',
				weight: 1
			},
			{
				id: 'headH2',
				weight: 1
			},
			{
				id: 'headRadio1',
				weight: 1
			},
			{
				id: 'headRadio2',
				weight: 1
			},
			{
				id: 'headRadio3',
				weight: 1
			},
			{
				id: 'headRadio4',
				weight: 1
			}
		]
	},
	knifeCrate: {
		name: "Weapon Crate",
		icon: require("@/assets/art/shop/items/weaponcrate.png"),
		itemTable: [
			{
				id: 'meleeC2',
				weight: 10
			},
			{
				id: 'meleeC3',
				weight: 9
			},
			{
				id: 'meleeC4',
				weight: 8
			},
			{
				id: 'meleeC6',
				weight: 3
			},
			{
				id: 'meleeC7',
				weight: 1
			},
			{
				id: 'meleeE3',
				weight: 1
			},
			{
				id: 'ammoE2',
				count: 20,
				weight: 10
			},
		]
	},
	lavaCrate: {
		name: "Local Heritage Crate",
		icon: require("@/assets/art/shop/items/necrocrate.png"),
		itemTable: [
			{
				id: 'oxygen',
				count: 50,
				weight: 5
			},
			{
				id: 'meleeC5',
				weight: 4
			},
			{
				id: 'potionCooking',
				weight: 5
			},
			{
				id: 'burnJunk',
				weight: 10
			},
			{
				id: 'foot',
				weight: 1
			},
			{
				id: 'armB3',
				weight: 4
			},
			{
				id: 'ammoB2',
				count: 20,
				weight: 8
			},
			{
				id: 'slimeGray',
				weight: 3
			},
			{
				id: 'meleeE2',
				weight: 1
			},
		]
	},
	supplyCrate: {
		name: "Supply Droppod",
		icon: require("@/assets/art/shop/items/droppod.png"),
		itemTable: [
			{
				id: 'seeds',
				count: 10,
				weight: 5
			},
			{
				id: 'power',
				count: 50,
				weight: 2
			},
			{
				id: 'foodPer1',
				count: 3,
				weight: 4
			},
			{
				id: 'foodEva1',
				count: 3,
				weight: 4
			},
			{
				id: 'foodPow1',
				count: 3,
				weight: 4
			},
			{
				id: 'meleeE1',
				count: 3,
				weight: 1
			},
		]
	},
	syndieCrate: {
		name: "Hijacked Droppod",
		icon: require("@/assets/art/shop/items/syndiedroppod.png"),
		itemTable: [
			{
				id: 'armSyndiSuit',
				weight: 1
			},
			{
				id: 'darkgygax',
				weight: 1
			},
			{
				id: 'faceSyndicate',
				weight: 2
			},
			{
				id: 'ammoB4',
				count: 50,
				weight: 4
			},
			{
				id: 'ammoE4',
				count: 50,
				weight: 4
			},
			{
				id: 'meleeE4',
				weight: 2
			},
			{
				id: 'meleeE5',
				weight: 1
			}
		]
	}
}