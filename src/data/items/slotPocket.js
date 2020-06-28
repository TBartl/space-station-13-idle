export default {
//Ammo is in this file, melee combat pills are in the chemistry file.
	ammoE1: {
		name: "Disabling Cell",
		sellPrice: 1,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_e1.png"),
		ammoType: "energized",
		stats: {
			power: 7,
		}
	},
	ammoE2: {
		name: "Stunning Cell",
		sellPrice: 18,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_e2.png"),
		ammoType: "energized",
		stats: {
			power: 18,
		}
	},
	ammoE3: {
		name: "Lethal Cell",
		sellPrice: 34,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_e3.png"),
		ammoType: "energized",
		stats: {
			power: 28,
		}
	},
	ammoE4: {
		name: "Disintegration Cell",
		sellPrice: 52,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_e4.png"),
		ammoType: "energized",
		stats: {
			power: 35,
		}
	},
	ammoB1: {
		name: "Beanbag Shell",
		sellPrice: 4,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_b1.png"),
		ammoType: "ballistic",
		stats: {
			power: 5,
			precision: 25
		}
	},
	ammoB2: {
		name: "Birdshot Shell",
		sellPrice: 21,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_b2.png"),
		ammoType: "ballistic",
		stats: {
			power: 13,
			precision: 30
		}
	},
	ammoB3: {
		name: "Buckshot Shell",
		sellPrice: 43,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_b3.png"),
		ammoType: "ballistic",
		stats: {
			power: 20,
			precision: 35
		}
	},
	ammoB4: {
		name: "Breaching Shell",
		sellPrice: 65,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/combat/items/ammo_b4_anim.gif"),
		ammoType: "ballistic",
		stats: {
			power: 25,
			precision: 40
		}
	},
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