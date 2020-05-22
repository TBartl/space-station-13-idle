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
		name: "MegaSeed Servitor",
		purchases: ['seed10', 'seed100', 'seed500', 'seed2000', 'seed5000'],
		item: "money"
	},
]

export const PURCHASES = {
	seed10: {
		name: "Plant seeds x10",
		description: "For all your botany needs.",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantseed",
			count: 10
		},
		requiredItems: {
			money: 10 * 50
		}
	},
	seed100: {
		name: "Plant seeds x100",
		description: "For all your botany needs. 5% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantseed",
			count: 100
		},
		requiredItems: {
			money: Math.round(100 * 50 * .95)
		}
	},
	seed500: {
		name: "Plant seeds x500",
		description: "For all your botany needs. 10% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantseed",
			count: 500
		},
		requiredItems: {
			money: Math.round(500 * 50 * .90)
		}
	},
	seed2000: {
		name: "Plant seeds x2000",
		description: "For all your botany needs. 15% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantseed",
			count: 2000
		},
		requiredItems: {
			money: Math.round(2000 * 50 * .85)
		}
	},
	seed5000: {
		name: "Plant seeds x5000",
		description: "For all your botany needs. 20% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantseed",
			count: 5000
		},
		requiredItems: {
			money: Math.round(5000 * 50 * .8)
		}
	}
}