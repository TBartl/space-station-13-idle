export default {
	money: {
		name: "Space Coins",
		icon: require("@/assets/art/misc/coin-padded.png")
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

	hatCrate: {
		name: "Hat Crate",
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
		icon: require("@/assets/art/shop/items/weaponcrate.png"),
		itemTable: [
			{
				id: 'ammoEnergy2',
				count: 20,
				weight: 10
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
				id: 'meleeSharp6',
				weight: 3
			},
			{
				id: 'meleeSharp7',
				weight: 1
			},
			{
				id: 'meleeBurn3',
				weight: 1
			}
		]
	},
	lavaCrate: {
		name: "Local Heritage Crate",
		icon: require("@/assets/art/shop/items/necrocrate.png"),
		itemTable: [
			{
				id: 'burnJunk',
				weight: 10
			},
			{
				id: 'ammoBallistic2',
				count: 20,
				weight: 8
			},
			{
				id: 'oxygen',
				count: 50,
				weight: 5
			},
			{
				id: 'potionCooking',
				weight: 5
			},
			{
				id: 'meleeSharp5',
				weight: 4
			},
			{
				id: 'armorBrute3',
				weight: 4
			},
			{
				id: 'slimeGray',
				weight: 3
			},
			{
				id: 'meleeBurn2',
				weight: 1
			},
			{
				id: 'foot',
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
				id: 'foodPrecision1',
				count: 3,
				weight: 4
			},
			{
				id: 'foodEvasion1',
				count: 3,
				weight: 4
			},
			{
				id: 'foodPower1',
				count: 3,
				weight: 4
			},
			{
				id: 'power',
				count: 50,
				weight: 2
			},
			{
				id: 'meleeBurn1',
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
				id: 'ammoBallistic4',
				count: 50,
				weight: 4
			},
			{
				id: 'ammoEnergy4',
				count: 50,
				weight: 4
			},
			{
				id: 'faceSyndicate',
				weight: 2
			},
			{
				id: 'meleeBurn4',
				weight: 2
			},
			{
				id: 'armorBurn6',
				weight: 1
			},
			{
				id: 'darkGygax',
				weight: 1
			},
			{
				id: 'meleeBurn5',
				weight: 1
			}
		]
	}
}