import ITEMS from "@/data/items";

export const RESEARCH_RECIPES_I = {
	recipeMultitool: {
		name: "RECIPE: Multitool",
		description: "Enables the development of a tool that can speed up engineering.",
		icon: require('@/assets/art/research/tools/toolFabrication.png'),
		requiredItems: {
			money: 1
		},
		upgrade: "recipeMultitool",
		requiredUpgrades: {
			recipeMultitool: 0
		}
	},
	recipePills: {
		name: "RECIPE: Pills",
		description: "Enables the simple fabrication of edible chemicals. Chemistry can now make pills.",
		icon: require('@/assets/art/combat/items/pill1.png'),
		requiredItems: {
			money: 1
		},
		upgrade: "recipePills",
		requiredUpgrades: {
			recipePills: 0
		}
	},
	lootDrops1: {
		name: "Extended Looting Tier I DEBUG",
		description: "Increases the number of loot drop slots from 16 to 32. DEBUG SHOP TEST",
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
	}
}

export const RESEARCH_RECIPES_II = {
	foodSavingRoll1: {
		name: "Book on Rationing DEBUG",
		description: "Teaches you the art of eating only the parts of food that you need. Food has a 5% chance to not be consumed when eaten. DEBUG",
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
	}
}