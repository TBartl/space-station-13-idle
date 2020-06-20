

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
		upgrade.description += `, to +${(MINING_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}%`;
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
		upgrade.description += `, to +${(ENGINEERING_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}%`;
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
		upgrade.description += `, to -${(FABRICATION_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}%`;
	}
	if (i == 0) upgrade.requiredItems.money = 10000
	if (i == 1) upgrade.requiredItems.money = 75000
	if (i == 2) upgrade.requiredItems.money = 250000
	if (i == 3) upgrade.requiredItems.money = 800000
	if (i == 4) upgrade.requiredItems.money = 2000000

	ENGINEERING_UPGRADES[`upgradeEngineering${i + 1}`] = upgrade;
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

const GRAYTIDING_UPGRADES = {
	upgradeGraytiding1: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by 10%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			graytiding: 10
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 0
		}
	},
	upgradeGraytiding2: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by an additional 10%, to -20%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 75000
		},
		requiredLevels: {
			graytiding: 20
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 1
		}
	},
	upgradeGraytiding3: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by an additional 10%, to -30%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 250000
		},
		requiredLevels: {
			graytiding: 30
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 2
		}
	},
	upgradeGraytiding4: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by an additional 10%, to -40%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 800000
		},
		requiredLevels: {
			graytiding: 40
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 3
		}
	},
	upgradeGraytiding5: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by an additional 10%, to -50%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			graytiding: 50
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 4
		}
	}
}

const CHEMISTRY_UPGRADES = {
	upgradeChemistry1: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			chemistry: 10
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 0
		}
	},
	upgradeChemistry2: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%, to -30%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 75000
		},
		requiredLevels: {
			chemistry: 20
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 1
		}
	},
	upgradeChemistry3: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%, to -45%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 250000
		},
		requiredLevels: {
			chemistry: 30
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 2
		}
	},
	upgradeChemistry4: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%, to -60%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 800000
		},
		requiredLevels: {
			chemistry: 40
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 3
		}
	},
	upgradeChemistry5: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%, to -85%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			chemistry: 50
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 4
		}
	}
}


export default {
	...MINING_UPGRADES,
	...ENGINEERING_UPGRADES,
	...FABRICATION_UPGRADES,
	...XENOBIO_UPGRADES,
	...BOTANY_UPGRADES,
	...GRAYTIDING_UPGRADES,
	...COMBAT_UPGRADES,
	...CHEMISTRY_UPGRADES
}