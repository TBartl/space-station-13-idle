export default {
	jumpsuitMedical: {
		name: "Paramedic Jumpsuit",
		sellPrice: 300,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_medical.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_medical_overlay.png"),
		stats: {
			maxHealth: 130
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
		description: "+50% XP to all default jobs",
		xpBonuses: {
			mining: 50,
			engineering: 50,
			fabrication: 50,
			graytiding: 50,
			tinkering: 50,
			botany: 50,
			cooking: 50,
			xenobiology: 50,
			chemistry: 50,
			shitposting: 50,
			validhunting: 50
		},
		requires: {
			evasion: 1
		}
	},
	jumpsuitTactical: {
		name: "Syndicate Jumpsuit",
		sellPrice: 7777,
		equipmentSlot: "jumpsuit",
		icon: require("@/assets/art/combat/items/jumpsuit_syndicate.png"),
		overlay: require("@/assets/art/combat/items/jumpsuit_syndicate_overlay.png"),
		stats: {
			maxHealth: 77,
			precision: 7,
			command: 7,
			power: 7,
			evasion: 7,
			luck: 7
		},
		requires: {
			evasion: 1
		}
	},
}