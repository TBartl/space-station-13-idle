import { MAX_LEVEL } from "@/data/experience";

export default {
	capeMining: {
		name: "Mining Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/cloakmining.png"),
		overlay: require("@/assets/art/combat/items/cloak/cloakmining_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			evasion: 4,
			protection: 0,
			precision: 0,
			power: 1,
		},
		requires: {
			mining: MAX_LEVEL
		},
		description: "+1 Mining Upgrade",
		providesUpgrade: "miningTools"
	},
	capeEngineering: {
		name: "Engineering Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/engcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/engcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			evasion: 4,
			protection: 0,
			precision: 1,
			power: 0,
		},
		requires: {
			engineering: MAX_LEVEL
		},
		description: "+1 Engineering Upgrade",
		providesUpgrade: "cableManagement"
	},
	capeFabrication: {
		name: "Fabrication Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/hoscloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/hoscloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			evasion: 4,
			protection: 0,
			precision: 1,
			power: 0,
		},
		requires: {
			fabrication: MAX_LEVEL
		},
		description: "+1 Fabrication Upgrade",
		providesUpgrade: "fabricationBins"
	},
	capeGraytiding: {
		name: "Master of the Tides Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/capcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/capcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			evasion: 5,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			graytiding: MAX_LEVEL
		},
		description: "+1 Graytiding Upgrade",
		providesUpgrade: "graytidingHacking"
	},
	capeTinkering: {
		name: "Tinkering Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/tinkeringcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/tinkeringcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			evasion: 4,
			bruteProtection: 2,
			precision: 0,
			power: 0,
		},
		requires: {
			graytiding: MAX_LEVEL
		}
	},
	capeBotany: {
		name: "Botany Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/hopcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/hopcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 30,
			evasion: 4,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			botany: MAX_LEVEL
		}
	},
	capeCooking: {
		name: "Cooking Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/cookingcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/cookingcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			evasion: 4,
			burnProtection: 2,
			precision: 0,
			power: 0,
		},
		requires: {
			cooking: MAX_LEVEL
		},
		description: "+1 Cooking Upgrade",
		providesUpgrade: "fryCooking"
	},
	capeXenobiology: {
		name: "Xenobiology Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/scicloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/scicloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			evasion: 4,
			protection: 0,
			precision: 0,
			power: 0,
			command: 5,
		},
		requires: {
			xenobiology: MAX_LEVEL
		},
		description: "+1 Xenobiology Upgrade",
		providesUpgrade: "xenobiologyPens"
	},
	capeChemistry: {
		name: "Chemistry Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/cmocloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/cmocloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			evasion: 4,
			protection: 0,
			precision: 0,
			power: 0,
			moveTime: -.25,
		},
		requires: {
			chemistry: MAX_LEVEL
		},
		description: "+1 Chemistry Upgrade",
		providesUpgrade: "chemDispenser"
	},
	capeShitposting: {
		name: "Cloak of the True Master",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/shitcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/shitcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 30,
			evasion: 3,
			precision: 2,
			power: 2,
			command: 2,
			protection: 2
		},
		requires: {
			shitposting: MAX_LEVEL
		},
	},
	neckFanny1: {
		name: "Fruity Fanny Pack",
		sellPrice: 2500,
		icon: require("@/assets/art/combat/items/cloak/neck_orange.png"),
		overlay: require("@/assets/art/combat/items/cloak/neck_orange_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 10,
			evasion: 0,
			precision: 0,
			power: 3,
		},
		requires: {
			evasion: 30
		},
	},
}