export const ITEMS = {
	money: {
		name: "Space Coins",
		icon: require("@/assets/art/misc/coin-padded.png")
	}, spaghetti: {
		name: "Spaghetti",
		sellPrice: 100,
		icon: require('@/assets/art/shop/items/spaghetti.png'),
		healAmount: 30
	},
};

export const SECTIONS = [
	{
		name: "Debug Section",
		purchases: ['debugFreeMoney', 'debugFreeSpaghetti'],
		item: "money"
	},
	{
		name: "Debug Equipment Section",
		purchases: ['debugMechClaw', 'debugMechDrill', 'debugCrowbar', 'debugSord', 'debugRipley', 'debugDurand', "debugRiotSuit", "debugSyndiHardsuit"],
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
	},
	debugMechClaw: {
		item: "mechWeaponClaw"
	},
	debugMechDrill: {
		item: "mechWeaponDrill"
	},
	debugCrowbar: {
		item: "crowbar"
	},
	debugSord: {
		item: "sord"
	},
	debugRipley: {
		item: "ripley"
	},
	debugDurand: {
		item: "durand"
	},
	debugSyndiHardsuit: {
		item: "syndiHardsuit"
	},
	debugRiotSuit: {
		item: "riotSuit"
	}
}