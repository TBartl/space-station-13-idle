import ITEMS from "@/data/items";

export const RESEARCH_RECIPES_I = {
	autoeatTest: {
		name: "Unlock Auto-Eat DEBUG",
		description: "Allows food to automatically be consumed when missing more health than the food's heal amount. DEBUG SHOP TEST",
		icon: require('@/assets/art/combat/upgrades/autoeat.png'),
		requiredItems: {
			money: 10000
		},
		upgrade: "autoeat",
		requiredUpgrades: {
			autoeatTest: 0
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