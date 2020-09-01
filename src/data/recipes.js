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
		description: "Enables the development of a tool that teaches you how to mine faster.",
		icon: require('@/assets/art/research/tools/toolMining.png'),
		requiredResearchPoints: 75,
		upgrade: "toolMining",
		requiredUpgrades: {
			toolMining: 0
		}
	}
}

export const RESEARCH_RECIPES_II = {
	tierFourAmmo: {
		name: "RECIPE: Tier IV Ammo",
		description: "The Fabrication department can now produce tier four ammo.",
		icon: require('@/assets/art/combat/items/ammo_b4_anim.gif'),
		requiredResearchPoints: 500,//tentative (might need to be like 10x this?)
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
