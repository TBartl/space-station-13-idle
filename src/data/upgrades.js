import { MAX_LEVEL } from "@/data/experience";


export const BASE_INVENTORY_SIZE = 10;

let inventoryUpgradeImage = require('@/assets/art/shop/inventoryUpgrade.png');
export const INVENTORY_UPGRADES = {
	upgradeInventory: {
		name: "Expand Inventory Size",
		description: `Increases the number of items you can hold from 10 to 11.`,
		icon: inventoryUpgradeImage,
		requiredItems: {
			money: 10000
		},
		upgrade: "inventorySize"
	},
}

export const COMBAT_UPGRADES = {
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
		},
		requiredLevels: {
			validhunting: 10
		}
	},
	lootDrops1: {
		name: "Extended Looting Tier I",
		description: "Increases the number of loot drop slots from 16 to 32.",
		icon: require('@/assets/art/combat/upgrades/loot.png'),
		requiredItems: {
			money: 30000
		},
		upgrade: "lootDrops",
		requiredUpgrades: {
			lootDrops: 0
		},
		requiredLevels: {
			validhunting: 15
		}
	},
	lootDrops2: {
		name: "Extended Looting Tier II",
		description: "Increases the number of loot drop slots from 32 to 64.",
		icon: require('@/assets/art/combat/upgrades/loot.png'),
		requiredItems: {
			money: 75000
		},
		upgrade: "lootDrops",
		requiredUpgrades: {
			lootDrops: 1
		},
		requiredLevels: {
			validhunting: 20
		}
	},
	lootDrops3: {
		name: "Extended Looting Tier III",
		description: "Allows loot to stacks with items of the same type.",
		icon: require('@/assets/art/combat/upgrades/loot.png'),
		requiredItems: {
			money: 150000
		},
		upgrade: "lootDrops",
		requiredUpgrades: {
			lootDrops: 2
		},
		requiredLevels: {
			validhunting: 25
		}
	}
}

export const MINING_UPGRADE_PERCENT = .2;
const MINING_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Upgrade Mining Tools",
		description: `Increases mining speed by +${MINING_UPGRADE_PERCENT * 100}%`, // Expanded below
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { mining: (i + 1) * 10 },
		upgrade: "miningTools",
		requiredUpgrades: { miningTools: i }

	}

	if (i != 0) {
		upgrade.description = upgrade.description.replace("by", "by an additional");
		upgrade.description += `, to +${(MINING_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}% total`;
	}
	if (i == 0) upgrade.requiredItems.money = 10000
	if (i == 1) upgrade.requiredItems.money = 75000
	if (i == 2) upgrade.requiredItems.money = 250000
	if (i == 3) upgrade.requiredItems.money = 800000
	if (i == 4) upgrade.requiredItems.money = 2000000

	MINING_UPGRADES[`upgradeMining${i + 1}`] = upgrade;
}


const XENOBIO_UPGRADES = {}
for (let i = 0; i < 3; i++) {
	let upgrade = {
		name: "Upgrade Xenobiology Pens",
		description: "", // set below
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { xenobiology: (i + 1) * 10 },
		upgrade: "xenobiologyPens",
		requiredUpgrades: { xenobiologyPens: i }

	}
	for (let j = 0; j <= i; j++) {
		if (j > 0) upgrade.description += ", ";
		upgrade.description += `x${2 ** (i - j + 1)} tier ${j + 1} slime yield`
	}

	if (i == 0) upgrade.requiredItems.money = 10000
	if (i == 1) upgrade.requiredItems.money = 500000
	if (i == 2) upgrade.requiredItems.money = 1500000


	XENOBIO_UPGRADES[`upgradeXenobio${i + 1}`] = upgrade;
}

export const ENGINEERING_UPGRADE_PERCENT = .15;
const ENGINEERING_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Improve Cable Management",
		description: `Increases engineering XP by +${ENGINEERING_UPGRADE_PERCENT * 100}%`, // Expanded below
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { engineering: (i + 1) * 10 },
		upgrade: "cableManagement",
		requiredUpgrades: { cableManagement: i }

	}

	if (i != 0) {
		upgrade.description = upgrade.description.replace("by", "by an additional");
		upgrade.description += `, to +${(ENGINEERING_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}% total`;
	}
	if (i == 0) upgrade.requiredItems.money = 10000
	if (i == 1) upgrade.requiredItems.money = 75000
	if (i == 2) upgrade.requiredItems.money = 250000
	if (i == 3) upgrade.requiredItems.money = 800000
	if (i == 4) upgrade.requiredItems.money = 2000000

	ENGINEERING_UPGRADES[`upgradeEngineering${i + 1}`] = upgrade;
}

export const FABRICATION_UPGRADE_PERCENT = .2;
const FABRICATION_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Upgrade Matter Bins",
		description: `Reduces fabrication ore costs by ${FABRICATION_UPGRADE_PERCENT * 100}%`, // Expanded below
		icon: require('@/assets/art/fabrication/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { fabrication: (i + 1) * 10 },
		upgrade: "fabricationBins",
		requiredUpgrades: { fabricationBins: i }

	}

	if (i != 0) {
		upgrade.description = upgrade.description.replace("by", "by an additional");
		upgrade.description += `, to -${(FABRICATION_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}% total`;
	}
	if (i == 0) upgrade.requiredItems.money = 10000
	if (i == 1) upgrade.requiredItems.money = 75000
	if (i == 2) upgrade.requiredItems.money = 250000
	if (i == 3) upgrade.requiredItems.money = 800000
	if (i == 4) upgrade.requiredItems.money = 2000000

	FABRICATION_UPGRADES[`upgradeFabrication${i + 1}`] = upgrade;
}

const BOTANY_UPGRADES = {
	upgradeBotany1: {
		name: "Add Second Botany Tray",
		description: "Whenever you grow a plant, also grow the plant to the left as well",
		icon: require('@/assets/art/botany/upgrade1.png'),
		requiredItems: {
			money: 25000
		},
		requiredLevels: {
			botany: 20
		},
		upgrade: "botanyTrays",
		requiredUpgrades: {
			botanyTrays: 0
		}
	},
	upgradeBotany2: {
		name: "Add Third Botany Tray",
		description: "Whenever you grow a plant, also grow the plant to the left and right as well",
		icon: require('@/assets/art/botany/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			botany: 40
		},
		upgrade: "botanyTrays",
		requiredUpgrades: {
			botanyTrays: 1
		}
	}
}

export const GRAYTIDING_UPGRADE_PERCENT = .05;
const GRAYTIDING_UPGRADES = {}
for (let i = 0; i < 10; i++) {
	let upgrade = {
		name: "Buy Hacking Tools",
		description: `Reduces graytiding failure rate by ${GRAYTIDING_UPGRADE_PERCENT * 100}%`, // Expanded below
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { graytiding: (i + 1) * 5 },
		upgrade: "graytidingHacking",
		requiredUpgrades: { graytidingHacking: i }
	}

	if (i != 0) {
		upgrade.description = upgrade.description.replace("by", "by an additional");
		upgrade.description += `, to -${(GRAYTIDING_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}% total`;
	}
	if (i == 0) upgrade.requiredItems.money = 3000
	if (i == 1) upgrade.requiredItems.money = 7000
	if (i == 2) upgrade.requiredItems.money = 25000
	if (i == 3) upgrade.requiredItems.money = 50000
	if (i == 4) upgrade.requiredItems.money = 100000
	if (i == 5) upgrade.requiredItems.money = 250000
	if (i == 6) upgrade.requiredItems.money = 350000
	if (i == 7) upgrade.requiredItems.money = 600000
	if (i == 8) upgrade.requiredItems.money = 800000
	if (i == 9) upgrade.requiredItems.money = 1200000

	GRAYTIDING_UPGRADES[`upgradeGraytiding${i + 1}`] = upgrade;
}

export const CHEMISTRY_UPGRADE_PERCENT = .15;
const CHEMISTRY_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Upgrade Chem Dispenser",
		description: `Reduces the time it takes to synthesize bases by  ${CHEMISTRY_UPGRADE_PERCENT * 100}%`, // Expanded below
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { chemistry: (i + 1) * 10 },
		upgrade: "chemDispenser",
		requiredUpgrades: { chemDispenser: i }
	}

	if (i != 0) {
		upgrade.description = upgrade.description.replace("by", "by an additional");
		upgrade.description += `, to -${(CHEMISTRY_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}% total`;
	}
	if (i == 0) upgrade.requiredItems.money = 10000
	if (i == 1) upgrade.requiredItems.money = 75000
	if (i == 2) upgrade.requiredItems.money = 250000
	if (i == 3) upgrade.requiredItems.money = 800000
	if (i == 4) upgrade.requiredItems.money = 2000000

	CHEMISTRY_UPGRADES[`upgradeChemistry${i + 1}`] = upgrade;
}

export const COOKING_UPGRADE_PERCENT = .15;
const COOKING_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Advanced Fry Cooking",
		description: `Increases the chance you cook a premium quality item by ${COOKING_UPGRADE_PERCENT * 100}%`, // Expanded below
		icon: require('@/assets/art/cooking/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { cooking: (i + 1) * 10 },
		upgrade: "fryCooking",
		requiredUpgrades: { fryCooking: i }
	}

	if (i != 0) {
		upgrade.description = upgrade.description.replace("by", "by an additional");
		upgrade.description += `, to ${(COOKING_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}% total`;
	}
	if (i == 0) upgrade.requiredItems.money = 10000
	if (i == 1) upgrade.requiredItems.money = 75000
	if (i == 2) upgrade.requiredItems.money = 250000
	if (i == 3) upgrade.requiredItems.money = 800000
	if (i == 4) upgrade.requiredItems.money = 2000000

	COOKING_UPGRADES[`upgradeCooking${i + 1}`] = upgrade;
}

const JOB_UPGRADES = {
	...MINING_UPGRADES,
	...ENGINEERING_UPGRADES,
	...FABRICATION_UPGRADES,
	...GRAYTIDING_UPGRADES,
	...BOTANY_UPGRADES,
	...COOKING_UPGRADES,
	...XENOBIO_UPGRADES,
	...CHEMISTRY_UPGRADES
}

// Add a required validhunting level
const VALIDHUNTING_MIN = 10;
Object.values(JOB_UPGRADES).forEach(upgrade => {
	let requiredLevel = Math.max(...Object.values(upgrade.requiredLevels)); // Highest required level

	if (requiredLevel <= VALIDHUNTING_MIN) return;
	let p = (requiredLevel - VALIDHUNTING_MIN) / (MAX_LEVEL - VALIDHUNTING_MIN);
	upgrade.requiredLevels['validhunting'] = Math.round(p * MAX_LEVEL);
});

export { JOB_UPGRADES };