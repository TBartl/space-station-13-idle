import { MAX_LEVEL } from "@/data/experience";

export const SECTIONS = [
	{
		name: "MegaSeed Servitor",
		purchases: ['seed10', 'seed100', 'seed500', 'seed2000', 'seed5000']
	},
	{
		name: "Upgrade Terminal",
		purchases: [
			"upgradeMining1", "upgradeMining2", "upgradeMining3", "upgradeMining4", "upgradeMining5",
			"upgradeEngineering1", "upgradeEngineering2", "upgradeEngineering3", "upgradeEngineering4", "upgradeEngineering5",
			"upgradeXenobio1", "upgradeXenobio2", "upgradeXenobio3"
		]
	},
	{
		name: "Combat Unlocks",
		purchases: [
			"autoeat"
		]
	},
	{
		name: "Clothes Vendo-matic",
		purchases: ["capeMining", "capeEngineering", "capeFabrication", "capeGraytiding", "capeBotany", "capeXenobiology"]
	},
]

const SEEDS = {
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
	}
}

const CAPES = {
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
}

const COMBAT_UPGRADES = {
	autoeat: {
		name: "Unlock Auto-Eat",
		description: "Allows food to automatically be consumed when missing more health than the food's heal amount.",
		icon: require('@/assets/art/combat/upgrades/autoeat.png'),
		requiredItems: {
			money: 10000
		},
		upgrade: "autoeat",
		requiredUpgrades: {
			autoeat: 0
		}
	}
}

const MINING_UPGRADES = {
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

const XENOBIO_UPGRADES = {
	upgradeXenobio1: {
		name: "Upgrade Xenobiology Pens",
		description: "x2 tier 1 slime yield.",
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			xenobiology: 10
		},
		upgrade: "xenobiologyPens",
		requiredUpgrades: {
			xenobiologyPens: 0
		}
	},
	upgradeXenobio2: {
		name: "Upgrade Xenobiology Pens",
		description: "x4 tier 1 slime yield, x2 tier 2 slime yield.",
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {
			money: 500000
		},
		requiredLevels: {
			xenobiology: 25
		},
		upgrade: "xenobiologyPens",
		requiredUpgrades: {
			xenobiologyPens: 1
		}
	},
	upgradeXenobio3: {
		name: "Upgrade Xenobiology Pens",
		description: "x8 tier 1 slime yield, x4 tier 2 slime yield, x2 tier 3 slime yield.",
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {
			money: 1500000
		},
		requiredLevels: {
			xenobiology: 40
		},
		upgrade: "xenobiologyPens",
		requiredUpgrades: {
			xenobiologyPens: 2
		}
	}
}
const ENGINEERING_UPGRADES = {
	upgradeEngineering1: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			engineering: 10
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 0
		}
	},
	upgradeEngineering2: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%, to +30%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 75000
		},
		requiredLevels: {
			engineering: 20
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 1
		}
	},
	upgradeEngineering3: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%, to +45%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 250000
		},
		requiredLevels: {
			engineering: 30
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 2
		}
	},
	upgradeEngineering4: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%, to +60%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 800000
		},
		requiredLevels: {
			engineering: 40
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 3
		}
	},
	upgradeEngineering5: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%, to +75%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			engineering: 50
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 4
		}
	}
}

export const PURCHASES = {
	...SEEDS,
	...CAPES,
	...MINING_UPGRADES,
	...ENGINEERING_UPGRADES,
	...XENOBIO_UPGRADES,
	...COMBAT_UPGRADES


}