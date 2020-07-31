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
			luck: 8,
			protection: 0,
			precision: 0,
			power: 2,
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
			luck: 12,
			protection: 0,
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
			luck: 8,
			protection: 0,
			precision: 2,
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
			evasion: 2,
			protection: 0,
			precision: 0,
			power: 0,
			luck: 8
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
			luck: 8,
			bruteProtection: 2,
			precision: 0,
			power: 0,
		},
		requires: {
			tinkering: MAX_LEVEL
		},
		description: "+1 Tinkering Upgrade",
		providesUpgrade: "tinkeringSpirits"
	},
	capeBotany: {
		name: "Botany Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/hopcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/hopcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			luck: 8,
			protection: 0,
			precision: 0,
			power: 0,
			regen: .1
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
			luck: 8,
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
	capeBartending: {
		name: "Bartending Mastery Tie",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/barcloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/barcloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 60,
			luck: 8,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			bartending: MAX_LEVEL
		},
		description: "+1 Bartending Upgrade",
		providesUpgrade: "boozeDispenser"
	},
	capeXenobiology: {
		name: "Xenobiology Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/scicloak.png"),
		overlay: require("@/assets/art/combat/items/cloak/scicloak_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 20,
			luck: 8,
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
			luck: 8,
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
	capeValid: {
		name: "Validhunter Mastery Cloak",
		sellPrice: 500000,
		icon: require("@/assets/art/combat/items/cloak/cloakvalid.png"),
		overlay: require("@/assets/art/combat/items/cloak/cloakvalid_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 0,
			evasion: 0,
			protection: 0,
			precision: 5,
			power: 5,
			command: -15
		},
		requires: {
			validhunting: MAX_LEVEL
		},
		description: "Mortals fear your name",
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
			luck: 8,
		},
		requires: {
			evasion: 30
		},
	},
	neckFanny2: {
		name: "Zombie Fanny Pack",
		sellPrice: 2500,
		icon: require("@/assets/art/combat/items/cloak/neck_green.png"),
		overlay: require("@/assets/art/combat/items/cloak/neck_green_overlay.png"),
		equipmentSlot: "neck",
		stats: {
			maxHealth: 10,
			evasion: 0,
			precision: 0,
			regen: .2,
		},
		requires: {
			evasion: 30
		},
	},
	runeN1: {
		name: "Manifest Rune",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Manifest_rune.png"),
		overlay: require("@/assets/art/cult/Manifest_rune_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 8,
			evasion: 0,
			precision:30,
			power: 1,
		},
		requires: {
			evasion: 7
		},
	},
	runeN2: {
		name: "Boil Rune",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Boil_rune.png"),
		overlay: require("@/assets/art/cult/Boil_rune_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 16,
			evasion: 0,
			precision: 6,
			power: 2,
		},
		requires: {
			evasion: 17
		},
	},
	runeN3: {
		name: "Reanimation Rune",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Raisedead_rune.png"),
		overlay: require("@/assets/art/cult/Raisedead_rune_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 24,
			evasion: 0,
			precision: 9,
			power: 3,
		},
		requires: {
			evasion: 27
		},
	},
	runeN4: {
		name: "Apocalypse Rune",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Apocalypse.png"),
		overlay: require("@/assets/art/cult/Apocalypse_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 32,
			evasion: 0,
			precision: 12,
			power: 4,
		},
		requires: {
			evasion: 37
		},
	},
	runeN5: {
		name: "Rune of Nar-Sie",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Rune_large.png"),
		overlay: require("@/assets/art/cult/Rune_large_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 40,
			evasion: 0,
			precision: 15,
			power: 5,
		},
		requires: {
			evasion: 47
		},
	},
	runeB1: {
		name: "Sacrifice Rune",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Sacrifice_rune.png"),
		overlay: require("@/assets/art/cult/Sacrifice_rune_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 8,
			evasion: 0,
			precision: 1,
			power: 3,
			luck: 2
		},
		requires: {
			evasion: 7
		},
	},
	runeB2: {
		name: "Empower Rune",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Empower_rune.png"),
		overlay: require("@/assets/art/cult/Empower_rune_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 16,
			evasion: 0,
			precision: 2,
			power: 6,
			luck: 4
		},
		requires: {
			evasion: 17
		},
	},
	runeB3: {
		name: "Teleport Rune",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Teleport_rune.png"),
		overlay: require("@/assets/art/cult/Teleport_rune_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 24,
			evasion: 0,
			precision: 3,
			power: 9,
		},
		requires: {
			evasion: 27
		},
	},
	runeB4: {
		name: "Summon Rune",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Summon_rune.png"),
		overlay: require("@/assets/art/cult/Summon_rune_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 32,
			evasion: 0,
			precision: 4,
			power: 12,
		},
		requires: {
			evasion: 37
		},
	},
	runeB5: {
		name: "Rune of Attor",
		sellPrice: 2500,
		icon: require("@/assets/art/cult/Huge_rune.png"),
		overlay: require("@/assets/art/cult/Summon_rune_overlay.png"),
		overlayAppearInBack: true,
		overlayRune: true,
		equipmentSlot: "neck",
		stats: {
			maxHealth: 40,
			evasion: 0,
			precision: 5,
			power: 15,
		},
		requires: {
			evasion: 47
		},
	},
}