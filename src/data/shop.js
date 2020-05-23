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
	capeEngineering: {
		name: "Engineering Mastery Cloak",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/engcloak.png"),
		overlay: require("@/assets/art/combat/items/engcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			engineering: 50
		}
	},
	capeMining: {
		name: "Mining Mastery Cloak",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/hoscloak.png"),
		overlay: require("@/assets/art/combat/items/hoscloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			mining: 50
		}
	},
	capeFabrication: {
		name: "Fabrication Mastery Cloak",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/cmocloak.png"),
		overlay: require("@/assets/art/combat/items/cmocloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			fabrication: 50
		}
	},
	capeXenobiology: {
		name: "Xenobiology Mastery Cloak",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/scicloak.png"),
		overlay: require("@/assets/art/combat/items/scicloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			xenobiology: 50
		}
	},
	capeBotany: {
		name: "Botany Mastery Cloak",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/hopcloak.png"),
		overlay: require("@/assets/art/combat/items/hopcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			botany: 50
		}
	},
	capeTiding: {
		name: "Master of the Tides",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/capcloak.png"),
		overlay: require("@/assets/art/combat/items/capcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			graytiding: 50
		}
	},
};

export const SECTIONS = [
	{
		name: "MegaSeed Servitor",
		purchases: ['seed10', 'seed100', 'seed500', 'seed2000', 'seed5000']
	},
	{
		name: "Clothes Vendo-matic",
		purchases: []
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
	},


}