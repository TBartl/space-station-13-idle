import { MAX_LEVEL } from "@/data/experience";

export const SECTIONS = [
	{
		name: "MegaSeed Servitor",
		purchases: ['seed10', 'seed100', 'seed500', 'seed2000', 'seed5000']
	},
	{
		name: "Upgrade Terminal",
		purchases: ["upgradeMining1", "upgradeMining2", "upgradeMining3", "upgradeMining4", "upgradeMining5"]
	},
	{
		name: "Clothes Vendo-matic",
		purchases: ["capeMining", "capeEngineering", "capeFabrication", "capeGraytiding", "capeBotany", "capeXenobiology"]
	},
]

export const PURCHASES = {
	seed10: {
		name: "Plant seeds x10",
		description: "For all your botany needs.",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
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
			id: "plantSeed",
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
			id: "plantSeed",
			count: 500
		},
		requiredItems: {
			money: Math.round(500 * 50 * .90)
		}
	},
	seed2000: {
		name: "Plant seeds x2,000",
		description: "For all your botany needs. 15% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 2000
		},
		requiredItems: {
			money: Math.round(2000 * 50 * .85)
		}
	},
	seed5000: {
		name: "Plant seeds x5,000",
		description: "For all your botany needs. 20% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 5000
		},
		requiredItems: {
			money: Math.round(5000 * 50 * .8)
		}
	},
	capeMining: {
		item: "capeMining",
		description: "Requires max fabrication to wear.",
		requiredLevels: {
			mining: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeEngineering: {
		item: "capeEngineering",
		description: "Requires max engineering to wear.",
		requiredLevels: {
			engineering: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeFabrication: {
		item: "capeFabrication",
		description: "Requires max mining to wear.",
		requiredLevels: {
			fabrication: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeGraytiding: {
		item: "capeGraytiding",
		description: "Requires max Graytiding to wear.",
		requiredLevels: {
			graytiding: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeBotany: {
		item: "capeBotany",
		description: "Requires max botany to wear.",
		requiredLevels: {
			botany: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeXenobiology: {
		item: "capeXenobiology",
		description: "Requires max xenobiology to wear.",
		requiredLevels: {
			xenobiology: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	upgradeMining1: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by +20%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			mining: 10
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 0
		}
	},
	upgradeMining2: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by +20%, to +40%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 75000
		},
		requiredLevels: {
			mining: 20
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 1
		}
	},
	upgradeMining3: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by an additional +20%, to +60%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 250000
		},
		requiredLevels: {
			mining: 30
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 2
		}
	},
	upgradeMining4: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by an additional +20%, to +80%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 800000
		},
		requiredLevels: {
			mining: 40
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 3
		}
	},
	upgradeMining5: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by an additional +20%, to +100%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			mining: 50
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 4
		}
	}
}