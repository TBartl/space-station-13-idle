export default {
//Ammo is in this file, melee combat pills are in the chemistry file.
	ammoEnergy1: {
		name: "Disabling Cell",
		sellPrice: 1,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_e1.png"),
		ammoType: "energized",
		stats: {
			power: 7,
		}
	},
	ammoEnergy2: {
		name: "Stunning Cell",
		sellPrice: 18,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_e2.png"),
		ammoType: "energized",
		stats: {
			power: 18,
		}
	},
	ammoEnergy3: {
		name: "Lethal Cell",
		sellPrice: 34,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_e3.png"),
		ammoType: "energized",
		stats: {
			power: 28,
		}
	},
	ammoEnergy4: {
		name: "Disintegration Cell",
		sellPrice: 52,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_e4.png"),
		ammoType: "energized",
		stats: {
			power: 35,
		}
	},
	ammoBallistic1: {
		name: "Beanbag Shell",
		sellPrice: 4,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_b1.png"),
		ammoType: "ballistic",
		stats: {
			power: 3,
			precision: 21
		}
	},
	ammoBallistic2: {
		name: "Birdshot Shell",
		sellPrice: 21,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_b2.png"),
		ammoType: "ballistic",
		stats: {
			power: 5,
			precision: 24
		}
	},
	ammoBallistic3: {
		name: "Buckshot Shell",
		sellPrice: 43,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_b3.png"),
		ammoType: "ballistic",
		stats: {
			power: 7,
			precision: 27
		}
	},
	ammoBallistic4: {
		name: "Breaching Shell",
		sellPrice: 65,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_b4_anim.gif"),
		ammoType: "ballistic",
		stats: {
			power: 9,
			precision: 30
		}
	},
	ammoRifle1: {
		name: "Training Round",
		sellPrice: 4,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/pocket/ammo_r1.png"),
		ammoType: "rifle",
		stats: {
			power: 3,
			precision: 8
		}
	},
	ammoRifle2: {
		name: "Flechette Round",
		sellPrice: 21,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/pocket/ammo_r2.png"),
		ammoType: "rifle",
		stats: {
			power: 6,
			precision: 16
		}
	},
	ammoRifle3: {
		name: "Tracer Round",
		sellPrice: 43,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/pocket/ammo_r3.png"),
		ammoType: "rifle",
		stats: {
			power: 9,
			precision: 24
		}
	},
	ammoRifle4: {
		name: "Meteor Round",
		sellPrice: 65,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/pocket/ammo_r4.png"),
		ammoType: "rifle",
		stats: {
			power: 12,
			precision: 32
		}
	},
	ammoRocket1: {
		name: "Rocket",
		sellPrice: 700,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/pocket/rocket_anim.gif"),
		ammoType: "rocket",
		stats: {
			power: 15,
			precision: 35
		}
	}
	// pocketPDA1: {
	// 	name: "Personal Digital Assistant",
	// 	sellPrice: 5252,
	// 	equipmentSlot: "pocket",
	// 	icon: require("@/assets/art/combat/items/pocket_pda.png"),
	// 	stats: {
	// 		evasion: 2
	// 	}
	// },
	// mechGunCanno: {
	// 	name: "Mounted Cannon",
	// 	sellPrice: 0,
	// 	equipmentSlot: "pocket",
	// 	icon: require("@/assets/art/engineering/gunbig.png")
	// },
	// cannonAmmo: {
	// 	name: "Cannon Ammo",
	// 	sellPrice: 0,
	// 	equipmentSlot: "pocket",
	// 	icon: require("@/assets/art/engineering/ammobig.png")
	// },
}