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
			power: 5,
			precision: 25
		}
	},
	ammoBallistic2: {
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
	ammoBallistic3: {
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
	ammoBallistic4: {
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