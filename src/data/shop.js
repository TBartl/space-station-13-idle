import { MAX_LEVEL } from "@/data/experience";
import { INVENTORY_UPGRADES, COMBAT_UPGRADES, JOB_UPGRADES } from "@/data/upgrades";
import HEAD_ITEMS from '@/data/items/slotHead'

export const SECTIONS = [
	{
		name: "Inventory Expansion",
		purchases: Object.keys(INVENTORY_UPGRADES)
	},
	{
		name: "MegaSeed Servitor",
		purchases: ['seed10', 'seed100', 'seed500', 'seed2000', 'seed5000']
	},
	{
		name: "Job Unlocks",
		purchases: [
			"unlockCooking", "unlockXenobiology", "unlockShitposting"
		]
	},
	{
		name: "Job Upgrades",
		purchases: Object.keys(JOB_UPGRADES)
	},
	{
		name: "Combat Upgrades",
		purchases: Object.keys(COMBAT_UPGRADES)
	},
	{
		name: "Gamble-O-Tron",
		purchases: ["supplyCrate", "knifeCrate", "hatCrate", "secCrate", "lavaCrate", "syndieCrate"]
	},
	{
		name: "Clothes Vendo-Matic",
		purchases: ["capeMining", "capeEngineering", "capeFabrication", "capeGraytiding", "capeTinkering", "capeBotany", "capeCooking", "capeXenobiology", "capeChemistry","capeValid", "capeShitposting"]
	}
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

const JOB_UNLOCKS = {
	unlockCooking: {
		name: "Unlock Cooking",
		description: "Allows you to turn meat and produce into quality foods",
		icon: require('@/assets/art/cooking/icon.png'),
		requiredItems: {
			money: 10000
		},
		upgrade: "cookingUnlocked",
		requiredUpgrades: {
			cookingUnlocked: 0
		}
	},
	unlockXenobiology: {
		name: "Unlock Xenobiology",
		description: "Allows you to raise slimes that can fight alongside you",
		icon: require('@/assets/art/xenobio/icon.gif'),
		requiredItems: {
			money: 25000
		},
		upgrade: "xenobiologyUnlocked",
		requiredUpgrades: {
			xenobiologyUnlocked: 0
		}
	},
	unlockShitposting: {
		name: "Unlock ???",
		description: "???",
		icon: require('@/assets/art/sidebar/mystery.png'),
		requiredItems: {
			money: 9999999
		},
		upgrade: "shitpostingUnlocked",
		requiredUpgrades: {
			shitpostingUnlocked: 0
		}
	}
}

const CAPES = {
	capeMining: {
		item: "capeMining",
		description: "Requires max Mining to wear.",
		requiredLevels: {
			mining: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeEngineering: {
		item: "capeEngineering",
		description: "Requires max Engineering to wear.",
		requiredLevels: {
			engineering: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeFabrication: {
		item: "capeFabrication",
		description: "Requires max Fabrication to wear.",
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
	capeTinkering: {
		item: "capeTinkering",
		description: "Requires max Tinkering to wear.",
		requiredLevels: {
			tinkering: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeBotany: {
		item: "capeBotany",
		description: "Requires max Botany to wear.",
		requiredLevels: {
			botany: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeCooking: {
		item: "capeCooking",
		description: "Requires max Cooking to wear.",
		requiredLevels: {
			cooking: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeXenobiology: {
		item: "capeXenobiology",
		description: "Requires max Xenobiology to wear.",
		requiredLevels: {
			xenobiology: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeChemistry: {
		item: "capeChemistry",
		description: "Requires max Chemistry to wear.",
		requiredLevels: {
			chemistry: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeValid: {
		item: "capeValid",
		description: "Requires max Validhunting to wear.",
		requiredLevels: {
			validhunting: MAX_LEVEL
		},
		requiredItems: {
			money: 500000,
			foodMeatH: 250,
			foodMeatZ: 250,
			foodMeatA: 250,
			foot: 5
		}
	},
	capeShitposting: {
		item: "capeShitposting",
		description: "Only the truly elite can handle this.",
		requiredLevels: {
			shitposting: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	}
}

const CRATES = {
	supplyCrate: {
		item: "supplyCrate",
		description: "Nanotrasen can send the supplies YOU need directly to your location with this state of the art drop pod.",
		requiredItems: {
			money: 1000
		}
	},
	knifeCrate: {
		item: "knifeCrate",
		description: "Running with knives might not always make you faster, but you'll look cool and edgy.",
		requiredItems: {
			money: 2500
		}
	},
	hatCrate: {
		item: "hatCrate",
		description: `No Key Required. Hats can not be refunded for scrap. Collect all ${Object.keys(HEAD_ITEMS).length}!`,
		requiredItems: {
			money: 10000
		}
	},
	secCrate: {
		item: "secCrate",
		description: "Everything needed to run an effecient internal security organization. Pre-dyed red to help cover those pesky blood stains.",
		requiredItems: {
			boss1Parts: 20
		}
	},
	lavaCrate: {
		item: "lavaCrate",
		description: "Handcrafted materials and relics aquired from the local planetary natives. ",
		requiredItems: {
			exoticParts: 20
		}
	},
	syndieCrate: {
		item: "syndieCrate",
		description: "Syndicate forces have hijacked the droppod system to help you be the murderer you always knew you could be.",
		requiredItems: {
			telecrystal: 20,
		}
	},
}

const TICKETS = {
	bossTicket10: {
		name: "Employment Contract",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket10.png"),
		requiredItems: {
			ticket1: 5,
		},
		fightZone: "Workers Revolution"
	},
	bossTicket1: {
		name: "Code Green Ticket",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket20.png"),
		requiredItems: {
			ticket1: 5,
		},
		fightZone: "Brutal Security"
	},
	bossTicket2: {
		name: "Code Blue Bounty Ticket",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket30.png"),
		requiredItems: {
			ticket2: 5,
		},
		fightZone: "Primordial Planet"
	},
	bossTicket40: {
		name: "Code Green Ticket",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket40.png"),
		requiredItems: {
			ticket1: 5,
		},
		fightZone: "Syndicate Nuclear Assault Team"
	},
	bossTicket3: {
		name: "Code Red Bounty Ticket",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket50.png"),
		requiredItems: {
			ticket3: 5,
		},
		fightZone: "Subversive Individuals"
	},
	bossTicket60: {
		name: "Code Green Ticket",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket60_anim.gif"),
		requiredItems: {
			ticket1: 5,
		},
		fightZone: "Brutal Security"
	},
}

export const PURCHASES = {
	...INVENTORY_UPGRADES,
	...SEEDS,
	...CAPES,
	...JOB_UNLOCKS,
	...COMBAT_UPGRADES,
	...JOB_UPGRADES,
	...CRATES,
	...TICKETS

}