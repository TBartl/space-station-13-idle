import { MAX_LEVEL } from "@/data/experience";

export default {
	capeMining: {
		name: "Mining Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/hoscloak.png"),
		overlay: require("@/assets/art/combat/items/hoscloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			mining: MAX_LEVEL
		}
	},
	capeEngineering: {
		name: "Engineering Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/engcloak.png"),
		overlay: require("@/assets/art/combat/items/engcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			engineering: MAX_LEVEL
		}
	},
	capeFabrication: {
		name: "Fabrication Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cmocloak.png"),
		overlay: require("@/assets/art/combat/items/cmocloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			fabrication: MAX_LEVEL
		}
	},
	capeGraytiding: {
		name: "Master of the Tides Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/capcloak.png"),
		overlay: require("@/assets/art/combat/items/capcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			graytiding: MAX_LEVEL
		}
	},
	capeBotany: {
		name: "Botany Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/hopcloak.png"),
		overlay: require("@/assets/art/combat/items/hopcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			botany: MAX_LEVEL
		}
	},
	capeXenobiology: {
		name: "Xenobiology Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/scicloak.png"),
		overlay: require("@/assets/art/combat/items/scicloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		},
		requires: {
			xenobiology: MAX_LEVEL
		}
	},
}