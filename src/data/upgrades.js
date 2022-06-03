import { MAX_LEVEL } from "@/data/experience";
import ITEMS from "@/data/items";

export const BASE_INVENTORY_SIZE = 10;

const TOTAL_ITEM_COUNT = Object.keys(ITEMS).length;
let inventoryUpgradeImage = require('@/assets/art/shop/inventoryUpgrade.png');


function calcCost(i, total) {
	if (total == 2) { // 20, 40
		return [
			30000,
			200000][i];
	}
	if (total == 3) { // 15, 30, 45
		return [
			10000,
			75000,
			350000][i];
	}
	if (total == 5) { //10, 20, 30, 40, 50
		return [
			5000,
			20000,
			60000,
			180000,
			500000][i]
	}
	if (total == 10) { // Every 5
		return [
			500,
			2250,
			5000,
			10000,
			20000,
			30000,
			50000,
			100000,
			150000,
			250000][i]
	}
	return -1;
}



const INVENTORY_UPGRADES = {}

// "Wouldn't it make more sense to just have one upgrade, with a dynamic description and stuff?"
// Yeah probably, but this is easier
for (let i = 0; i < TOTAL_ITEM_COUNT - BASE_INVENTORY_SIZE; i++) {
	let money = 2654570 * 50 * (i + 2) / (142015 ** (163 / (122 + i)));
	money = Math.min(2000000, Math.round(money));

	let upgrade = {
		name: "Expand Inventory Size",
		description: `Increases the number of items you can hold from ${BASE_INVENTORY_SIZE + i} to ${BASE_INVENTORY_SIZE + i + 1}.`,
		icon: inventoryUpgradeImage,
		requiredItems: {
			money: money
		},
		upgrade: "inventorySize",
		requiredUpgrades: {
			inventorySize: i
		},
	}
	INVENTORY_UPGRADES["upgradeInventory" + i] = upgrade;
}

export { INVENTORY_UPGRADES };

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
			validhunting: 5
		}
	},
	lootDrops1: {
		name: "Extended Looting Tier I",
		description: "Increases the number of loot drop slots from 16 to 32.",
		icon: require('@/assets/art/combat/upgrades/loot.png'),
		requiredItems: {
			money: 10000
		},
		upgrade: "lootDrops",
		requiredUpgrades: {
			lootDrops: 0
		},
		requiredLevels: {
			validhunting: 10
		}
	},
	lootDrops2: {
		name: "Extended Looting Tier II",
		description: "Allows meat loot to stack with other meat.",
		icon: require('@/assets/art/combat/upgrades/loot.png'),
		requiredItems: {
			money: 30000
		},
		upgrade: "lootDrops",
		requiredUpgrades: {
			lootDrops: 1
		},
		requiredLevels: {
			validhunting: 15
		}
	},
	lootDrops3: {
		name: "Extended Looting Tier III",
		description: "Increases the number of loot drop slots from 32 to 64.",
		icon: require('@/assets/art/combat/upgrades/loot.png'),
		requiredItems: {
			money: 75000
		},
		upgrade: "lootDrops",
		requiredUpgrades: {
			lootDrops: 2
		},
		requiredLevels: {
			validhunting: 20
		}
	},
	lootDrops4: {
		name: "Extended Looting Tier IV",
		description: "Allows all loot to stack with items of the same type.",
		icon: require('@/assets/art/combat/upgrades/loot.png'),
		requiredItems: {
			money: 150000
		},
		upgrade: "lootDrops",
		requiredUpgrades: {
			lootDrops: 3
		},
		requiredLevels: {
			validhunting: 25
		}
	},
	foodSavingRoll1: {
		name: "Book on Rationing",
		description: "Teaches you the art of eating only the parts of food that you need. Food has a 5% chance to not be consumed when eaten.",
		icon: require('@/assets/art/combat/upgrades/redbook.png'),
		requiredItems: {
			revParts: 5,
			money: 5000
		},
		upgrade: "foodSavingRoll",
		requiredUpgrades: {
			foodSavingRoll: 0
		},
		requiredLevels: {
			validhunting: 10
		}
	},
	foodSavingRoll12: {
		name: "Cybernetic Stomach",
		description: "Perfectly efficient, allowing for more energy from less food. Food has an additional 5% chance to not be consumed when eaten.",
		icon: require('@/assets/art/combat/upgrades/cyberstomach.png'),
		requiredItems: {
			telecrystal: 5,
			money: 25000
		},
		upgrade: "foodSavingRoll",
		requiredUpgrades: {
			foodSavingRoll: 1
		},
		requiredLevels: {
			validhunting: 25
		}
	},
	ammoSaver: {
		name: "Ammo Reclaimer",
		description: "A lightweight device that can teleport fired bullets back into your gun. It will make every 5th bullet free.",
		icon: require('@/assets/art/combat/upgrades/bluespace_core.png'),
		requiredItems: {
			bluespace: 50,
			tomatoBluespace: 50,
			slimeBluespace: 50,
			money: 30000
		},
		upgrade: "ammoSaver",
		requiredUpgrades: {
			ammoSaver: 0
		},
		requiredLevels: {
			validhunting: 20
		}
	},
	combatXPBoost1: {
		name: "Combat Learning Tier I",
		description: "Increases the percentage of combat skill experience you get from damage you deal by 8.5%.",
		icon: require('@/assets/art/combat/upgrades/bigbrain.png'),
		requiredItems: {
			money: 25000
		},
		upgrade: "combatXPBoost",
		requiredUpgrades: {
			combatXPBoost: 0
		},
		requiredLevels: {
			validhunting: 25
		}
	},
	combatXPBoost2: {
		name: "Combat Learning Tier II",
		description: "Further increases the percentage of combat skill experience you get from damage you deal by 8.5%.",
		icon: require('@/assets/art/combat/upgrades/bigbrain.png'),
		requiredItems: {
			money: 50000
		},
		upgrade: "combatXPBoost",
		requiredUpgrades: {
			combatXPBoost: 1
		},
		requiredLevels: {
			validhunting: 35
		}
	},
	cargoCombatRoll: {
		name: "+1 Validhunting Reroll",
		description: "Allows you to reroll your validhunting bounty +1 time per successful bounty.",
		icon: require('@/assets/art/combat/upgrades/d20.png'),
		requiredItems: {
			money: 200000 // compare this + level requirement to chrono shops version that costs 3 bluespace time
		},
		upgrade: "cargoCombatRoll",
		requiredUpgrades: {
			cargoCombatRoll: 0
		},
		requiredLevels: {
			validhunting: 25
		},
		onPurchase(store) {
			store.dispatch(`validhunting/refreshRerolls`, 1, { root: true });
		}
	}
}

export const MINING_UPGRADE_PERCENT = .15;
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
	upgrade.requiredItems.money = calcCost(i, 5);

	MINING_UPGRADES[`upgradeMining${i + 1}`] = upgrade;
}


const XENOBIO_UPGRADES = {}
for (let i = 0; i < 5; i++) {
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

	upgrade.requiredItems.money = calcCost(i, 5);

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
	upgrade.requiredItems.money = calcCost(i, 5);

	ENGINEERING_UPGRADES[`upgradeEngineering${i + 1}`] = upgrade;
}

export const FABRICATION_UPGRADE_PERCENT = .1;
const FABRICATION_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Upgrade Matter Bins",
		description: `Reduces fabrication ore costs to ${100 - FABRICATION_UPGRADE_PERCENT * (i + 1) * 100}%`, // Expanded below
		icon: require('@/assets/art/fabrication/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { fabrication: (i + 1) * 10 },
		upgrade: "fabricationBins",
		requiredUpgrades: { fabricationBins: i }

	}

	if (i != 0) {
		upgrade.description += `, from ${(100 - FABRICATION_UPGRADE_PERCENT * i * 100).toFixed()}%`;
	}
	upgrade.requiredItems.money = calcCost(i, 5);

	FABRICATION_UPGRADES[`upgradeFabrication${i + 1}`] = upgrade;
}

export const RESEARCH_UPGRADE_PERCENT = .1;
const RESEARCH_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Expand Points Bank",
		description: "Each level of this upgrade raises your maximum research points banked by 100.",
		icon: require('@/assets/art/research/upgrade.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { research: (i + 1) * 10 },
		upgrade: "researchUpgrade",
		requiredUpgrades: { researchUpgrade: i }

	}
	upgrade.requiredItems.money = calcCost(i, 5);

	RESEARCH_UPGRADES[`researchUpgrade${i + 1}`] = upgrade;
}

const BOTANY_UPGRADES = {
	upgradeBotany1: {
		name: "Add Second Botany Tray",
		description: "Whenever you grow a plant, also grow the plant to the left as well",
		icon: require('@/assets/art/botany/upgrade1.png'),
		requiredItems: {
			money: calcCost(0, 2)
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
			money: calcCost(1, 2)
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

export const GRAYTIDING_UPGRADE_PERCENT = .06;
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
		upgrade.description += `, to ${(GRAYTIDING_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}% total`;
	}
	upgrade.requiredItems.money = calcCost(i, 10);

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
		upgrade.description += `, to ${(CHEMISTRY_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}% total`;
	}
	upgrade.requiredItems.money = calcCost(i, 5);

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
	upgrade.requiredItems.money = calcCost(i, 5);

	COOKING_UPGRADES[`upgradeCooking${i + 1}`] = upgrade;
}


export const TINKERING_UPGRADE_INCREMENT = .03;
export const TINKERING_UPGRADE_CAP = .25;
const TINKERING_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Buy Well-Laid Plans",
		description: `Each consecutive tinkering craft of the same item increases future crafting speeds by ${TINKERING_UPGRADE_INCREMENT * 100}%. This effect caps at ${(i + 1) * TINKERING_UPGRADE_CAP * 100}%`, // Expanded below
		icon: require('@/assets/art/tinkering/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { tinkering: (i + 1) * 10 },
		upgrade: "tinkeringSpirits",
		requiredUpgrades: { tinkeringSpirits: i }

	}

	if (i != 0) {
		upgrade.description += `, up from ${(TINKERING_UPGRADE_CAP * i * 100).toFixed()}%`;
	}
	upgrade.requiredItems.money = calcCost(i, 5);

	TINKERING_UPGRADES[`upgradeTinkering${i + 1}`] = upgrade;
}


export const BARTENDING_UPGRADE_INCREMENT = .04;
export const BARTENDING_UPGRADE_CAP = 5;
const BARTENDING_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Expand Drink Table",
		description: `Each unique drink in your inventory increases bartending speed by ${BARTENDING_UPGRADE_INCREMENT * 100}%. This effect caps at ${(i + 1) * BARTENDING_UPGRADE_CAP} unique drinks`, // Expanded below
		icon: require('@/assets/art/bartending/upgrade1.png'),
		requiredItems: {},
		requiredLevels: { bartending: (i + 1) * 10 },
		upgrade: "drinkTable",
		requiredUpgrades: { drinkTable: i }
	}

	upgrade.requiredItems.money = calcCost(i, 5);

	BARTENDING_UPGRADES[`upgradeBartending${i + 1}`] = upgrade;
}


export const ANTAG_UPGRADE_PERCENT = .05;
const ANTAG_UPGRADES = {}
for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 4; j++) {
    let upgrade = {
        name: "Black Operations Efficiency",
        description: `Increases the speed of ALL Black Operations by +${ANTAG_UPGRADE_PERCENT * 100}%`, // Expanded below
        icon: require('@/assets/art/shop/antagupgrade.png'),
        requiredItems: {}, // Filled out below
        requiredLevels: { validhunting: (i + 1) * 10 },
        upgrade: "antagUpgrade",
        requiredUpgrades: { antagUpgrade: i, antagRoll: j }
    }

    if (i != 0) {
        upgrade.description = upgrade.description.replace("by", "by an additional");
        upgrade.description += `, to +${(ANTAG_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}% total`;
    }
    upgrade.requiredItems.money = calcCost(i, 5);

    ANTAG_UPGRADES[`upgradeAntag${i + 1}-${j}`] = upgrade;
    }
}
const JOB_UPGRADES = {
	...MINING_UPGRADES,
	...ENGINEERING_UPGRADES,
	...FABRICATION_UPGRADES,
	...RESEARCH_UPGRADES,
	...GRAYTIDING_UPGRADES,
	...TINKERING_UPGRADES,
	...BOTANY_UPGRADES,
	...COOKING_UPGRADES,
	...XENOBIO_UPGRADES,
	...CHEMISTRY_UPGRADES,
	...BARTENDING_UPGRADES,
	...ANTAG_UPGRADES,
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
