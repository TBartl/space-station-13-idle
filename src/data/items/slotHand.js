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
	meleeB1: {
		name: "Rolling Pin",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b1.png"),
		overlay: require("@/assets/art/combat/items/melee_b1_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeB2: {
		name: "Baseball Bat",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b2.png"),
		overlay: require("@/assets/art/combat/items/melee_b2_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 10,
			evasion: -10,
			precision: 10,
			attackSpeed: 2,
			power: 20,
		}
	},
	meleeB3: {
		name: "Null Rod",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b3.png"),
		overlay: require("@/assets/art/combat/items/melee_b3_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 15,
			evasion: -15,
			precision: 15,
			attackSpeed: 2,
			power: 30,
		}
	},
		meleeB4: {
			name: "Truncheon",
			sellPrice: 30,
			icon: require("@/assets/art/combat/items/melee_b4.png"),
			overlay: require("@/assets/art/combat/items/melee_b4_overlay.png"),
			equipmentSlot: "hand",
			stats: {
				maxHealth: 15,
				evasion: -10,
				precision: 15,
				attackSpeed: 2,
				power: 30,
			}
	},
	meleeB5: {
		name: "Air Tank",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b5.png"),
		overlay: require("@/assets/art/combat/items/melee_b5_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 15,
			evasion: -5,
			precision: 15,
			attackSpeed: 2,
			power: 30,
		}
	},
	meleeB6: {
		name: "Fire Extinquisher",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b6.png"),
		overlay: require("@/assets/art/combat/items/melee_b6_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 20,
			evasion: -20,
			precision: 20,
			attackSpeed: 2,
			power: 40,
		}
	},
	meleeB7: {
		name: "Toolbox",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b7.png"),
		overlay: require("@/assets/art/combat/items/melee_b7_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 25,
			evasion: -25,
			precision: 25,
			attackSpeed: 2,
			power: 50,
		}
	},
	meleeB8: {
		name: "Chain Of Command",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b8.png"),
		overlay: require("@/assets/art/combat/items/melee_b8_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 30,
			evasion: -30,
			precision: 30,
			attackSpeed: 2,
			power: 600,
		}
	},
	meleeB9: {
		name: "Stun Baton",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b9.png"),
		overlay: require("@/assets/art/combat/items/melee_b9_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 35,
			evasion: -35,
			precision: 35,
			attackSpeed: 2,
			power: 70,
		}
	},
	meleeC1: {
		name: "Kitchen Fork",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c1.png"),
		overlay: require("@/assets/art/combat/items/melee_c1_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeC2: {
		name: "Kitchen Knife",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c2.png"),
		overlay: require("@/assets/art/combat/items/melee_c2_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeC3: {
		name: "Butcher Cleaver",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c3.png"),
		overlay: require("@/assets/art/combat/items/melee_c3_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeC4: {
		name: "Spear",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c4.png"),
		overlay: require("@/assets/art/combat/items/melee_c4_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeC5: {
		name: "Fire Axe",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c5.png"),
		overlay: require("@/assets/art/combat/items/melee_c5_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeC6: {
		name: "Chainsaw",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c6.png"),
		overlay: require("@/assets/art/combat/items/melee_c6_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeC7: {
		name: "Officer Sabre",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c7.png"),
		overlay: require("@/assets/art/combat/items/melee_c7_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeB1: {
		name: "Rolling Pin",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b1.png"),
		overlay: require("@/assets/art/combat/items/melee_b1_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeE1: {
		name: "Welding Tool",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e1.png"),
		overlay: require("@/assets/art/combat/items/melee_e1_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeE2: {
		name: "Handheld Welder",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e2.png"),
		overlay: require("@/assets/art/combat/items/melee_e2_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeE3: {
		name: "Energy Dagger",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e3_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e3_anim_overlay.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeE4: {
		name: "Energy Sword",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e4_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e4_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
		}
	},
	meleeE5: {
		name: "Dual Energy Sword",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e5_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e5_overlay.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
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