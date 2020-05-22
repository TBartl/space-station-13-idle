export default {
	mouseCarcass: {
		name: "Mouse Carcass",
		sellPrice: 3,
		icon: require("@/assets/art/combat/items/dead_mouse.png"),
		healAmount: 15
	},
	sord: {
		name: "SORD",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/sord.png"),
		overlay: require("@/assets/art/combat/items/sord_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: -20,
			evasion: -30,
			precision: -40,
			attackSpeed: .5,
			power: 80,
		},
		requires:{
			precision: 3,
			meleePower: 2
		}
	},
	toolbox: {
		name: "Toolbox",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/toolbox.png"),
		overlay: require("@/assets/art/combat/items/toolbox_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	baseball: {
		name: "Baseball Bat",
		sellPrice: 40,
		icon: require("@/assets/art/combat/items/baseball.png"),
		overlay: require("@/assets/art/combat/items/baseball_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 10,
			evasion: -10,
			precision: 10,
			attackSpeed: 2,
			power: 20,
		}
	},
	spear: {
		name: "Spear",
		sellPrice: 50,
		icon: require("@/assets/art/combat/items/spear.png"),
		overlay: require("@/assets/art/combat/items/spear_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 15,
			evasion: -15,
			precision: 15,
			attackSpeed: 2,
			power: 30,
		}
	},
	fireaxe: {
		name: "Fireaxe",
		sellPrice: 80,
		icon: require("@/assets/art/combat/items/fireaxe.png"),
		overlay: require("@/assets/art/combat/items/fireaxe_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 20,
			evasion: -20,
			precision: 20,
			attackSpeed: 2,
			power: 40,
		}
	},
	sabre: {
		name: "Captain's Sabre",
		sellPrice: 100,
		icon: require("@/assets/art/combat/items/sabre.png"),
		overlay: require("@/assets/art/combat/items/sabre_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 25,
			evasion: -25,
			precision: 25,
			attackSpeed: 2,
			power: 50,
		}
	},
	armCardboard: {
		name: "Cardborg Disguise",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_cardborg.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_cardborg_overlay.png"),
		stats: {
			maxHealth: 10,
			evasion: 6,
			protection: 4,
			precision: 2,
			power: 2,
		},
		requires: {
			evasion: 1
		}
	},	armFiresuit: {
		name: "Firefighting Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_firesuit.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_firesuit_overlay.png"),
		stats: {
			maxHealth: 20,
			evasion: 12,
			protection: 8,
			precision: 4,
			power: 4,
		},
		requires: {
			evasion: 2
		}
	},	armVest: {
		name: "Personal Protection Vest PPV",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_vest.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_vest_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 18,
			protection: 12,
			precision: 6,
			power: 6,
		},
		requires: {
			evasion: 2
		}
	},	armRiotSuit: {
		name: "Riot Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/arm_riot.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_riot_overlay.png"),
		stats: {
			maxHealth: 0,
			evasion: 24,
			protection: 16,
			precision: 8,
			power: 8,
		},
		requires: {
			evasion: 2
		}
	},
	armSyndiSuit: {
		name: "Syndicate Hardsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/arm_syndi.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/arm_syndi_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},
	headCake: {
		name: "Cakehat",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head_cakehat.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head_cakehat_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},
	faceMeson: {
		name: "Meson Goggles",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_meson.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_meson_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},
	limbBlack: {
		name: "Insulated Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_yellow.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_yellow_overlay.png"),
		stats: {
			maxHealth: 1,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},	
	limbBlack: {
		name: "Boxing Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_boxing.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_boxing_overlay.png"),
		stats: {
			maxHealth: 1,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},	
	limbBlack: {
		name: "Mag Krava Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_fightgloves.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_fightgloves_overlay.png"),
		stats: {
			maxHealth: 1,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},	
	limbBlack: {
		name: "Captain's Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_captain.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_captain_overlay.png"),
		stats: {
			maxHealth: 1,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},	
	limbBlack: {
		name: "Ninja Gloves",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/glove_ninja.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/glove_ninja_overlay.png"),
		stats: {
			maxHealth: 1,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},	
	limbBlack: {
		name: "Black Sneakers",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_black.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/shoe_black_overlay.png"),
		stats: {
			maxHealth: 1,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},	
	limbMagboot: {
		name: "Magnetic Boots",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_magboots.png"),
		equipmentSlot: "climb",
		overlay: require("@/assets/art/combat/items/shoe_magboots_overlay.png"),
		stats: {
			maxHealth: 2,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},	
	limbClown: {
		name: "Clown Shoes",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_clown.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/shoe_clown_overlay.png"),
		stats: {
			maxHealth: 3,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},
	limbJack: {
		name: "Jackboots",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_jackboots.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/shoe_jackboots_overlay.png"),
		stats: {
			maxHealth: 4,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},
	limbAdvanced: {
		name: "Syndicate Hardsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/shoe_advmag.png"),
		equipmentSlot: "limb",
		overlay: require("@/assets/art/combat/items/shoe_advmag_overlay.png"),
		stats: {
			maxHealth: 5,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},
	jumpsuitGrey: {
		name: "Assistants Jumpsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/jumpsuit_grey.png"),
		equipmentSlot: "jumpsuit",
		overlay: require("@/assets/art/combat/items/jumpsuit_grey.png"),
		stats: {
			maxHealth: 5,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires:{
			evasion: 3,
		}
	},
	neckEng: {
		name: "Engineering Mastery Cloak",
		sellPrice: 600,
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
		requires:{
			Engineering: 50
		}
	},
	capemining: {
		name: "Mining Mastery Cloak",
		sellPrice: 600,
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
		requires:{
			Mining: 3
		}
	},
	capefabrication: {
		name: "Fabrication Mastery Cloak",
		sellPrice: 600,
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
		requires:{
			Fabrication: 50
		}
	},
	capexenobiology: {
		name: "Xenobiology Mastery Cloak",
		sellPrice: 600,
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
		requires:{
			Xenobiology: 50
		}
	},
	capebotany: {
		name: "Botany Mastery Cloak",
		sellPrice: 600,
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
		requires:{
			Botany: 50
		}
	},
	capetiding: {
		name: "Master of the Tides",
		sellPrice: 600,
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
		requires:{
			Engineering: 50
		}
	},
	pill10: {
		name: "Level 10 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill1.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 10,
			protection: 0,
			precision: 10,
			power: 10,
		}
	},
	pill20: {
		name: "Level 20 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill2.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 20,
			protection: 0,
			precision: 20,
			power: 20,
		}
	},
	pill30: {
		name: "Level 30 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill3.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 30,
			protection: 0,
			precision: 30,
			power: 30,
		}
	},
	pill40: {
		name: "Level 40 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill4.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 40,
			protection: 0,
			precision: 40,
			power: 40,
		}
	},
	pill50: {
		name: "Level 50 Pill",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/pill5.png"),
		equipmentSlot: "pocket",
		stats: {
			maxHealth: 0,
			evasion: 50,
			protection: 0,
			precision: 50,
			power: 50,
		}
	}
};