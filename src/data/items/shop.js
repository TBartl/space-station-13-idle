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
		name: "Knife Crate",
		icon: require("@/assets/art/shop/items/weaponcrate.png"),
		itemTable: [
			{
				id: 'headCake',
				weight: 1
			},
			{
				id: 'headH1',
				weight: 1
			}
		]
	},
	lavaCrate: {
		name: "Local Heritage Crate",
		icon: require("@/assets/art/shop/items/necrocrate.png"),
		itemTable: [
			{
				id: 'headCake',
				weight: 1
			},
			{
				id: 'headH1',
				weight: 1
			}
		]
	},
	supplyCrate: {
		name: "Supply Droppod",
		icon: require("@/assets/art/shop/items/droppod.png"),
		itemTable: [
			{
				id: 'headCake',
				weight: 1
			},
			{
				id: 'headH1',
				weight: 1
			}
		]
	},
	syndieCrate: {
		name: "Hijacked Droppod",
		icon: require("@/assets/art/shop/items/syndiedroppod.png"),
		itemTable: [
			{
				id: 'headCake',
				weight: 1
			},
			{
				id: 'headH1',
				weight: 1
			}
		]
	}
}