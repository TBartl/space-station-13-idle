import { MAX_LEVEL } from "@/data/experience";
import { INVENTORY_UPGRADES, COMBAT_UPGRADES, JOB_UPGRADES } from "@/data/upgrades";
import {HEAD_SEASON_ONE, HEAD_SEASON_TWO} from '@/data/items/slotHead'

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
		purchases: ["unlockFabrication", "unlockTinkering", "unlockChemistry", "unlockResearch", "unlockCooking", "unlockBartending", "unlockXenobiology", "unlockShitposting", "unlockCargonia","unlockTraitor", "unlockCult", "unlockLing"]
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
		purchases: ["supplyCrate", "knifeCrate", "hatCrate", "hatCrate2", "revCrate", "secCrate", "lavaCrate", "syndieCrate",  "cultCrate", "ertCrate", "wizCrate"]
	},
	{
		name: "Clothes Vendo-Matic",
		purchases: ["capeMining", "capeEngineering", "capeFabrication", "capeResearch", "capeGraytiding", "capeTinkering", "capeBotany", "capeCooking", "capeBartending", "capeXenobiology", "capeChemistry","capeValid", "capeShitposting"]
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
		},
		hideIfXP: "cooking"
	},
	unlockBartending: {
		name: "Unlock Bartending",
		description: "Allows you to turn power, slimes, and ore into delicious drinks",
		icon: require("@/assets/art/bartending/icon.png"),
		requiredItems: {
			money: 15000
		},
		upgrade: "bartendingUnlocked",
		requiredUpgrades: {
			bartendingUnlocked: 0
		},
		hideIfXP: "bartending"
	},
	unlockFabrication: {
		name: "Unlock Fabrication",
		description: "Allows you to turn raw minerals into ranged weapons and exosuits",
		icon: require('@/assets/art/fabrication/icon.png'),
		requiredItems: {
			glass: 10,
			power: 10,
		},
		upgrade: "fabricationUnlocked",
		requiredUpgrades: {
			fabricationUnlocked: 0
		},
		hideIfXP: "fabrication"
	},
	unlockTinkering: {
		name: "Unlock Tinkering",
		description: "Allows you to turn junk into weapons and armor",
		icon: require('@/assets/art/tinkering/icon.png'),
		requiredItems: {
			junk: 3
		},
		upgrade: "tinkeringUnlocked",
		requiredUpgrades: {
			tinkeringUnlocked: 0
		},
		hideIfXP: "tinkering"
	},
	unlockChemistry: {
		name: "Unlock Chemistry",
		description: "Allows you to turn energy into job-boosting CHEMs and combat-boosting pills",
		icon: require('@/assets/art/chemistry/icon.png'),
		requiredItems: {
			power: 20
		},
		upgrade: "chemistryUnlocked",
		requiredUpgrades: {
			chemistryUnlocked: 0
		},
		hideIfXP: "chemistry"
	},
	unlockResearch: {
		name: "Unlock R&D",
		description: "Allows you to Research tasks for other jobs and Develop facewear and job-boosting TOOLs",
		icon: require('@/assets/art/research/researchJobIcon.png'),
		requiredLevels: {
			mining: 5
		},
		upgrade: "researchUnlocked",
		requiredUpgrades: {
			researchUnlocked: 0
		},
		hideIfXP: "research"
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
		},
		hideIfXP: "xenobiology"
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
		},
		hideIfXP: "shitposting"
	},
	unlockCargonia: {
		name: "Unlock Cargonia",
		description: "Allows you to spend money for minerals and guns",
		icon: require('@/assets/art/jobinfo/cargo_banner.png'),
		requiredItems: {
			antag: 1
		},
		upgrade: "cargoniaUnlocked",
		requiredUpgrades: {
			cargoniaUnlocked: 0
		},
		hideIfXP: "cargonia"
	},
	unlockTraitor: {
		name: "Unlock Traitor",
		description: "Allows you to spend 20 special Telecrystals to kickstart your progression",
		icon: require('@/assets/art/traitor/icon.png'),
		requiredItems: {
			antag: 1
		},
		items: {
			id: "spendTC",
			count: 20
		},
		upgrade: "traitorUnlocked",
		requiredUpgrades: {
			traitorUnlocked: 0
		},
		hideIfXP: "traitor"
	},
	unlockCult: {
		name: "Unlock Cult",
		description: "Allows you to sacrifice health for dark runes and minions",
		icon: require("@/assets/art/cult/Sacrifice_rune.png"),
		requiredItems: {
			antag: 1
		},
		upgrade: "cultUnlocked",
		requiredUpgrades: {
			cultUnlocked: 0
		},
		hideIfXP: "cult"
	},
	unlockLing: {
		name: "Unlock Changeling",
		description: "Allows you to shape meat into regenerative armor",
		icon: require('@/assets/art/ling/icon.png'),
		requiredItems: {
			antag: 1
		},
		upgrade: "lingUnlocked",
		requiredUpgrades: {
			lingUnlocked: 0
		},
		hideIfXP: "ling"
	},
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
	capeBartending: {
		item: "capeBartending",
		description: "Requires max Bartending to wear.",
		requiredLevels: {
			bartending: MAX_LEVEL
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
	capeResearch: {
		item: "capeResearch",
		description: "Requires max R&D to wear.",
		requiredLevels: {
			research: MAX_LEVEL
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
		description: `No Key Required. Hats can not be refunded for scrap. Collect all ${Object.keys(HEAD_SEASON_ONE).length}!`,
		requiredItems: {
			money: 10000
		}
	},
	hatCrate2: {
		item: "hatCrate2",
		description: `Christmas In July. I hope you asked for hats. Collect all ${Object.keys(HEAD_SEASON_TWO).length}!`,
		requiredItems: {
			money: 10000
		}
	},
	revCrate: {
		item: "revCrate",
		description: "Workers fighting for equal pay have stashed supplies for the next time they inevitably need them. Finders Keepers.",
		requiredItems: {
			revParts: 20
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
	cultCrate: {
		item: "cultCrate",
		description: "If you avert your eyes from the sigils and just reach into the pod you can escape mostly intact.",
		requiredItems: {
			cultParts: 20,
		}
	},
	ertCrate: {
		item: "ertCrate",
		description: "A prize from Nanotrasen for stopping some internal problems, contains even more problems!",
		requiredItems: {
			ertParts: 20,
		}
	},
	wizCrate: {
		item: "wizCrate",
		description: "This magical vending machine is just too arcane to use. It looks like it has a slot to put scrolls in?",
		requiredItems: {
			wizParts: 20,
		}
	},
}

const TICKETS = {
	bossTicket10: {
		name: "Review Employment Contract",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket10.png"),
		requiredItems: {
			ticket10: 5,
		},
		fightZone: "Worker Strike"
	},
	bossTicket1: {
		name: "Appeal Improper Citation",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket20.png"),
		requiredItems: {
			ticket1: 5,
		},
		fightZone: "Brutal Security"
	},
	bossTicket2: {
		name: "Book Planetary Travel",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket30.png"),
		requiredItems: {
			ticket2: 5,
		},
		fightZone: "Primordial Planet"
	},
	bossTicket40: {
		name: "Crack Cryptographic Code",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket40.png"),
		requiredItems: {
			ticket40: 5,
		},
		fightZone: "Syndicate Nuclear Assault Team"
	},
	bossTicket3: {
		name: "Investigate Occult Theory",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket50.png"),
		requiredItems: {
			ticket3: 5,
		},
		fightZone: "Bloodsworn Cultists"
	},
	bossTicket55: {
		name: "Check Nanotrasen Reports",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket55.png"),
		requiredItems: {
			ticket55: 5,
		},
		fightZone: "Rogue Nanotrasen Team"
	},
	bossTicket60: {
		name: "Schedule Celebrity Tour",
		description: "On purchase, starts a fight with a random boss in this zone.",
		icon: require("@/assets/art/shop/items/ticket60_anim.gif"),
		requiredItems: {
			ticket60: 5,
		},
		fightZone: "Wizard Federation 'Diplomats'"
	},
	bossTicketReset: {
		name: "Create a reality disruption",
		description: "On purchase, starts a fight with this boss.",
		icon: require("@/assets/art/combat/items/boh.gif"),
		requiredItems: {
			bluespace: 8,
			tomatoBluespace: 8,
			slimeBluespace: 8
		},
		fightZone: "Tear in the Fabric of Reality"
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