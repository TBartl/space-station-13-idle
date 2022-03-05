import ITEMS from "@/data/items";

export const RESEARCH_RECIPES_I = {
	recipePills: {
		name: "RECIPE: Pills",
		description: "Enables the simple fabrication of edible chemicals. Chemistry can now make pills.",
		icon: require('@/assets/art/combat/items/pill1.png'),
		requiredResearchPoints: 25,
		requiredItems: {
			sacid: 25
		},
		upgrade: "recipePills",
		requiredUpgrades: {
			recipePills: 0
		},
		requiredLevels: {
			chemistry: 8
		}
	},
	facePrescription: {
		name: "RECIPE: Prescription Glasses",
		description: "Enables facewear development facilities, and allows you to develop the most basic facewear around.",
		icon: require('@/assets/art/combat/items/face/prescription_glasses.png'),
		requiredResearchPoints: 100,
		upgrade: "facePrescription",
		requiredUpgrades: {
			facePrescription: 0
		},
		requiredLevels: {
			research: 4
		}
	},
	toolEngineering: {
		name: "RECIPE: Geiger Counter",
		description: "Enables the development of a tool that can speed up engineering.",
		icon: require('@/assets/art/research/tools/toolEngineering.png'),
		requiredResearchPoints: 75,
		upgrade: "toolEngineering",
		requiredUpgrades: {
			toolEngineering: 0
		}
	},
	toolMining: {
		name: "RECIPE: Mining Scanner",
		description: "Enables the development of a tool that doubles mining XP.",
		icon: require('@/assets/art/research/tools/toolMining.png'),
		requiredResearchPoints: 75,
		upgrade: "toolMining",
		requiredUpgrades: {
			toolMining: 0
		}
	},
	toolFabrication: {
		name: "RECIPE: Multitool",
		description: "Enables the development of a tool that increases the rate of bullet and cell fabrication.",
		icon: require('@/assets/art/research/tools/toolFabrication.png'),
		requiredResearchPoints: 75,
		upgrade: "toolFabrication",
		requiredUpgrades: {
			toolFabrication: 0
		}
	},
	toolGraytiding: {
		name: "RECIPE: Door Hacking Kit",
		description: "Enables the development of a tool that decreases your chance to get caught tiding and is extra durable.",
		icon: require('@/assets/art/research/tools/toolGraytiding.png'),
		requiredResearchPoints: 75,
		upgrade: "toolGraytiding",
		requiredUpgrades: {
			toolGraytiding: 0
		}
	},
	toolTinkering: {
		name: "RECIPE: Wire Ripper",
		description: "Enables the development of a tool that rapidly remakes junk, yielding wire in the process.",
		icon: require('@/assets/art/research/tools/toolTinkering.png'),
		requiredResearchPoints: 75,
		upgrade: "toolTinkering",
		requiredUpgrades: {
			toolTinkering: 0
		}
	},
	toolBotany: {
		name: "RECIPE: Botanical Scanner",
		description: "Enables the development of a tool that allows for specific chemical yields from plants.",
		icon: require('@/assets/art/research/tools/toolBotany.png'),
		requiredResearchPoints: 75,
		upgrade: "toolBotany",
		requiredUpgrades: {
			toolBotany: 0
		}
	},
}

export const RESEARCH_RECIPES_II = {
	alienMining: {
		name: "RECIPE: Alien Alloy Mining",
		description: "Mining can now detect and mine for alien alloys.",
		icon: require('@/assets/art/mining/OreAlien.gif'),
		requiredResearchPoints: 500,//tentative (might need to be like 10x this?)
		requiredItems: {
			bluespace: 1
		},
		upgrade: "alienMining",
		requiredUpgrades: {
			alienMining: 0
		},
		requiredLevels: {
			research: 15//tentative
		}
	},
	tierFourAmmo: {
		name: "RECIPE: Tier IV Ammo",
		description: "Fabrication can now produce tier four ammo.",
		icon: require('@/assets/art/combat/items/ammo_b4_anim.gif'),
		requiredResearchPoints: 650,//tentative (might need to be like 10x this?)
		requiredItems: {
			ammoBallistic3: 800,
			ammoEnergy3: 800
		},
		upgrade: "tierFourAmmo",
		requiredUpgrades: {
			tierFourAmmo: 0
		},
		requiredLevels: {
			research: 30//tentative
		}
	},
}
