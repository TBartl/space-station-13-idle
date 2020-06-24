export default {
	jumpsuitMedical: {
		name: "Paramedic Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_medical.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_medical_overlay.png"),
		stats: {
			maxHealth: 20
		},
	},
	jumpsuitExplorer: {
		name: "Explorer's Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_mining.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_mining_overlay.png"),
		stats: {
			maxHealth: 5,
			power: 5,
			evasion: 3
		},
		description: "+20% mining XP",
		xpBonuses: {
			mining: 20
		}
	},
	jumpsuitEngineering: {
		name: "Engineering Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_engi.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_engi_overlay.png"),
		stats: {
			maxHealth: 5,
			precision: 5,
			evasion: 3
		},
		description: "+20% engineering XP",
		xpBonuses: {
			engineering: 20
		}
	},
	jumpsuitFabrication: {
		name: "Roboticist Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_robotics.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_robotics_overlay.png"),
		stats: {
			maxHealth: 5,
			precision: 5,
			evasion: 3
		},
		description: "+20% fabrication XP",
		xpBonuses: {
			fabrication: 20
		}
	},
	jumpsuitGraytide: {
		name: "Assistant Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_grey.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_grey_overlay.png"),
		stats: {
			maxHealth: 5,
			power: 5,
			evasion: 3
		},
		description: "+20% graytiding XP",
		xpBonuses: {
			graytiding: 20
		}
	},
	jumpsuitTinkering: {
		name: "Tinkerer's Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_janitor.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_janitor_overlay.png"),
		stats: {
			maxHealth: 5,
			precision: 5,
			evasion: 3
		},
		description: "+20% tinkering XP",
		xpBonuses: {
			jumpsuitTinkering: 20
		}
	},
	jumpsuitBotany: {
		name: "Botanist Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_botany.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_botany_overlay.png"),
		stats: {
			maxHealth: 5,
			power: 5,
			evasion: 3
		},
		description: "+20% botany XP",
		xpBonuses: {
			botany: 20
		}
	},
	jumpsuitCooking: {
		name: "Chefs Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_chef.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_chef_overlay.png"),
		stats: {
			maxHealth: 5,
			precision: 5,
			evasion: 3
		},
		description: "+20% cooking XP",
		xpBonuses: {
			cooking: 20
		}
	},
	jumpsuitChemistry: {
		name: "Chemistry Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_chemistry.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_chemistry_overlay.png"),
		stats: {
			maxHealth: 10,
			power: 5,
			evasion: 3
		},
		description: "+20% chemistry XP",
		xpBonuses: {
			chemistry: 20
		}
	},
	jumpsuitScience: {
		name: "Scientist Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_science.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_science_overlay.png"),
		stats: {
			maxHealth: 5,
			evasion: 3,
			command:5
		},
		description: "+20% xenobiology XP",
		xpBonuses: {
			xenobiology: 20
		}
	},
	jumpsuitSecurity: {
		name: "Security Officer Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_valid.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_valid_overlay.png"),
		stats: {
			maxHealth: 5,
			precision: 2,
			power: 2,
			evasion: 3
		},
		description: "+20% validhunting XP",
		xpBonuses: {
			validhunting: 20
		}
	},
}