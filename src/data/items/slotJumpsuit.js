export default {
	jumpsuitMedical: {
		name: "Paramedic Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_medical.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_medical_overlay.png"),
		stats: {
			maxHealth: 100,
			regen: .2
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitExplorer: {
		name: "Explorer's Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_mining.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_mining_overlay.png"),
		stats: {
			maxHealth: 50,
			power: 5,
			evasion: 3
		},
		description: "+20% Mining XP",
		xpBonuses: {
			mining: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitEngineering: {
		name: "Engineering Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_engi.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_engi_overlay.png"),
		stats: {
			maxHealth: 50,
			precision: 5,
			evasion: 3
		},
		description: "+20% Engineering XP",
		xpBonuses: {
			engineering: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitFabrication: {
		name: "Roboticist Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_robotics.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_robotics_overlay.png"),
		stats: {
			maxHealth: 50,
			precision: 5,
			evasion: 3
		},
		description: "+20% Fabrication XP",
		xpBonuses: {
			fabrication: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitGraytide: {
		name: "Assistant Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_grey.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_grey_overlay.png"),
		stats: {
			maxHealth: 50,
			power: 5,
			evasion: 3
		},
		description: "+20% Graytiding XP",
		xpBonuses: {
			graytiding: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitTinkering: {
		name: "Tinkerer's Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_janitor.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_janitor_overlay.png"),
		stats: {
			maxHealth: 50,
			precision: 5,
			evasion: 3
		},
		description: "+20% Tinkering XP",
		xpBonuses: {
			tinkering: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitBotany: {
		name: "Botanist Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_botany.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_botany_overlay.png"),
		stats: {
			maxHealth: 50,
			power: 5,
			evasion: 3
		},
		description: "+20% Botany XP",
		xpBonuses: {
			botany: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitCooking: {
		name: "Chefs Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_chef.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_chef_overlay.png"),
		stats: {
			maxHealth: 50,
			precision: 5,
			evasion: 3
		},
		description: "+20% Cooking XP",
		xpBonuses: {
			cooking: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitChemistry: {
		name: "Chemistry Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_chemistry.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_chemistry_overlay.png"),
		stats: {
			maxHealth: 50,
			power: 5,
			evasion: 3
		},
		description: "+20% Chemistry XP",
		xpBonuses: {
			chemistry: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitScience: {
		name: "Scientist Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_science.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_science_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 3,
			command:5
		},
		description: "+20% Xenobiology XP",
		xpBonuses: {
			xenobiology: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitBartending: {
		name: "Bartending Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_bartender.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_bartender_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 3,
			precision: 5
		},
		description: "+20% Bartending XP",
		xpBonuses: {
			bartending: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitResearch: {
		name: "R&D Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_research.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_research_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 3,
			precision: 5
		},
		description: "+20% R&D XP",
		xpBonuses: {
			research: 20
		},
		requires: {
			evasion: 5
		}
	},
	jumpsuitSecurity: {
		name: "Security Officer Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_valid.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_valid_overlay.png"),
		stats: {
			maxHealth: 60,
			precision: 2,
			power: 2,
			evasion: 3
		},
		description: "+20% Validhunting XP",
		xpBonuses: {
			validhunting: 20
		},
		requires: {
			evasion: 15
		}
	},
	jumpsuitClown: {
		name: "Clownsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_clown.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_clown_overlay.png"),
		stats: {
			maxHealth: 200,
			precision: -5,
			power: 0,
			evasion: 8
		},
		description: "+20% Clown XP, HONK",
		xpBonuses: {
			clown: 20
		},
		requires: {
			evasion: 15
		}
	},
	jumpsuitChameleon: {
		name: "Chameleon Suit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_all.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_all_overlay.png"),
		stats: {
			maxHealth: 100,
			precision: 0,
			power: 0,
			evasion: 0,
		},
		description: "+30% XP to all default jobs",
		xpBonuses: {
			mining: 30,
			engineering: 30,
			fabrication: 30,
			research: 30,
			graytiding: 30,
			tinkering: 30,
			botany: 30,
			cooking: 30,
			bartending: 30,
			xenobiology: 30,
			chemistry: 30,
			shitposting: 30,
			validhunting: 30
		},
		requires: {
			evasion: 1
		}
	},
	jumpsuitTactical: {
		name: "Syndicate Jumpsuit",
		sellPrice: 4444,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_syndicate.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_syndicate_overlay.png"),
		stats: {
			maxHealth: 44,
			precision: 4,
			command: 4,
			power: 4,
			evasion: 4,
			luck: 4
		},
		requires: {
			command: 4
		}
	},
}