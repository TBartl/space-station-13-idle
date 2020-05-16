export const ITEMS = new Map([
	["money", {
		name: "Space Coins",
		icon: require("@/assets/art/misc/coin-padded.png")
	}], ["spaghetti", {
		name: "Spaghetti",
		sellPrice: 100,
		icon: require('@/assets/art/shop/items/spaghetti.png'),
	}],
]);

export const SECTIONS = [
	{
		name: "Debug Section",
		purchases: ['debugFreeMoney', 'debugFreeSpaghetti'],
		item: "money"
	}
]

export const PURCHASES = {
	debugFreeMoney: {
		name: "Lods o' emone",
		description: "What's that spell? Loads of money! Prob'ly...",
		icon: require('@/assets/art/misc/coin.png'),
		item: "money"
	},
	debugFreeSpaghetti: {
		name: "Spaghetti",
		description: "I'll have the spaghetti and meatballs",
		icon: require('@/assets/art/shop/items/spaghetti.png'),
		item: "spaghetti"
	}
}