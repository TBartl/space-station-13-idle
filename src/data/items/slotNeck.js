import { MAX_LEVEL } from "@/data/experience";

export default {
	capeMining: {
		name: "Mining Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/cloakmining.png"),
		overlay: require("@/assets/art/combat/items/cloak/cloakmining_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 4,
			protection: 0,
			precision: 0,
			power: 1,
		},
		requires: {
			mining: MAX_LEVEL
		}
	},
	capeEngineering: {
		name: "Engineering Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/engcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/engcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 4,
			protection: 0,
			precision: 2,
			power: 0,
		},
		requires: {
			engineering: MAX_LEVEL
		}
	},
	capeFabrication: {
		name: "Fabrication Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/hoscloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/hoscloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 4,
			protection: 0,
			precision: 1,
			power: 0,
		},
		requires: {
			fabrication: MAX_LEVEL
		}
	},
	capeGraytiding: {
		name: "Master of the Tides Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/capcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/capcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 5,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			graytiding: MAX_LEVEL
		}
	},
	capeTinkering: {
		name: "Tinkering Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/tinkeringcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/tinkeringcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 4,
			bruteProtection: 4,
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
			maxHealth: 4,
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
			maxHealth: 0,
			evasion: 4,
			burnProtection: 4,
			precision: 0,
			power: 0,
		},
		requires: {
			cooking: MAX_LEVEL
		}
	},
	capeXenobiology: {
		name: "Xenobiology Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/scicloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/scicloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 4,
			protection: 0,
			precision: 0,
			power: 0,
			command: 5,
		},
		requires: {
			xenobiology: MAX_LEVEL
		}
	},
	capeChemistry: {
		name: "Chemistry Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/cmocloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/cmocloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 4,
			protection: 0,
			precision: 0,
			power: 0,
			moveTime: -.25,
		},
		requires: {
			chemistry: MAX_LEVEL
		}
	},
	capeShitposting: {
		name: "Cloak of the True Master",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/shitcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/shitcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 5,
			evasion: 3,
			precision: 2,
			power: 2,
			command: 2,
			protection: 2
		},
		requires: {
			shitposting: MAX_LEVEL
		}
	}
}