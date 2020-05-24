export default {
	crowbar: {
		name: "Crowbar",
		sellPrice: 1,
		equipmentSlot: "hand",
		icon: require("@/assets/art/fabrication/crowbar.png"),
		overlay: require("@/assets/art/fabrication/crowbar_overlay.png"),
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
		requires: {
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
	mechWeaponClaw: {
		name: "Mech Claw",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/meleesmall.png"),
		restrictions: ["mech"],
		stats: {
			power: 10,
			attackSpeed: 4
		}
	},
	mechWeaponDrill: {
		name: "Mech Drill",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/meleebig.png")
	},
	mechGunRifle: {
		name: "Mounted Rifle",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/gunsmall.png"),
		restrictions: ["mech"],
		ammoType: "ballistic",
		stats: {
			weaponSpeed: 4,
			power: 15,
			precision: 5
		}
	},
	mechGunRifle: {
		name: "Mounted Rifle",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/gunsmall.png"),
		ammoType: "energized",
		stats: {
			weaponSpeed: 4,
			power: 15,
			precision: 5,
			requires: {
				rangedPower: 1
			}
		}
	},
	gunE1: {
		name: "Kinetic Accelerator",
		sellPrice: 22,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_PKA.png"),
		overlay: require("@/assets/art/combat/items/gune_PKA_overlay.png"),
		ammoType: "energized",
		stats: {
			weaponSpeed: 3,
			evasion: 1,
			power: 2,
			precision: 0,
			requires: {
				rangedPower: 1
			}
		}
	},
	gunE2: {
		name: "Advanced Kinetic Accelerator",
		sellPrice: 75,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_PKA+.png"),
		overlay: require("@/assets/art/combat/items/gune_PKA+_overlay.png"),
		ammoType: "energized",
		stats: {
			weaponSpeed: 3,
			evasion: 1,
			power: 3,
			precision: 0,
			requires: {
				rangedPower: 15
			}
		}
	},
	gunE3: {
		name: "Plasma Cutter",
		sellPrice: 80,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_cutter.png"),
		overlay: require("@/assets/art/combat/items/gune_cutter_overlay.png"),
		ammoType: "energized",
		stats: {
			weaponSpeed: 3,
			evasion: 1,
			power: 3,
			precision: 1,
			requires: {
				rangedPower: 20
			}
		}
	},	
	gunE4: {
		name: "Laser Gun",
		sellPrice: 180,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_laser.png"),
		overlay: require("@/assets/art/combat/items/gune_laser_overlay.png"),
		ammoType: "energized",
		stats: {
			weaponSpeed: 3,
			evasion: 2,
			power: 4,
			precision: 2,
			requires: {
				rangedPower: 30
			}
		}
	},
	gunE5: {
		name: "Tesla Rifle",
		sellPrice: 250,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_tesla.png"),
		overlay: require("@/assets/art/combat/items/gune_tesla_overlay.png"),
		ammoType: "energized",
		stats: {
			weaponSpeed: 3,
			evasion: 2,
			power: 5,
			precision: 2,
			requires: {
				rangedPower: 35
			}
		}
	},
	gunE6: {
		name: "Energy Gun",
		sellPrice: 210,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_energy.png"),
		overlay: require("@/assets/art/combat/items/gune_energy_overlay.png"),
		ammoType: "energized",
		stats: {
			weaponSpeed: 3,
			evasion: 2,
			power: 5,
			precision: 3,
			requires: {
				rangedPower: 40
			}
		}
	},
	gunE7: {
		name: "Wartime Rifle",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_caplaser.png"),
		overlay: require("@/assets/art/combat/items/gune_caplaser_overlay.png"),
		ammoType: "energized",
		stats: {
			weaponSpeed: 3,
			evasion: 3,
			power: 6,
			precision: 4,
			requires: {
				rangedPower: 50
			}
		}
	},
	gunB1: {
		name: "Pipe Shotgun",
		sellPrice: 18,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot1.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot1_overlay.png"),
		ammoType: "ballistic",
		stats: {
			weaponSpeed: 7,
			evasion: 3,
			power: 2,
			precision: 0,
			requires: {
				rangedPower: 1
			}
		}
	},
	gunB2: {
		name: "Double Barreled Shotgun",
		sellPrice: 75,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot2.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot4_overlay.png"),
		ammoType: "ballistic",
		stats: {
			weaponSpeed: 6,
			evasion: 4,
			power: 3,
			precision: 0,
			requires: {
				rangedPower: 20
			}
		}
	},
	gunB3: {
		name: "Cycling Shotgun",
		sellPrice: 42,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot3.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot4_overlay.png"),
		ammoType: "ballistic",
		stats: {
			weaponSpeed: 5,
			evasion: 5,
			power: 3,
			precision: 0,
			requires: {
				rangedPower: 25
			}
		}
	},	
	gunB4: {
		name: "Riot Shotgun",
		sellPrice: 64,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot4.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot4_overlay.png"),
		ammoType: "ballistic",
		stats: {
			weaponSpeed: 4,
			evasion: 7,
			power: 4,
			precision: 0,
			requires: {
				rangedPower: 35
			}
		}
	},
	gunB5: {
		name: "Sawed Off Shotgun",
		sellPrice: 125,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot5.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot6_overlay.png"),
		ammoType: "ballistic",
		stats: {
			weaponSpeed: 3,
			evasion: 8,
			power: 4,
			precision: 0,
			requires: {
				rangedPower: 40
			}
		}
	},
	gunB6: {
		name: "Compact Shotgun",
		sellPrice: 86,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot6.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot6_overlay.png"),
		ammoType: "ballistic",
		stats: {
			weaponSpeed: 2,
			evasion: 9,
			power: 5,
			precision: 0,
			requires: {
				rangedPower: 45
			}
		}
	},
	gunB7: {
		name: "Combat Shotgun",
		sellPrice: 104,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot7.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot7_overlay.png"),
		ammoType: "ballistic",
		stats: {
			weaponSpeed: 1,
			evasion: 10,
			power: 5,
			precision: 0,
			requires: {
				rangedPower: 50
			}
		}
	},
	mechGunEnergyRifle: {
		name: "Mech Energy Rifle",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/gunenergy.png")
	},
}