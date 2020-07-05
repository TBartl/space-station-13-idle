const MBRUTE = {
	meleeBlunt1: {
		name: "Rolling Pin",
		sellPrice: 200,
		icon: require("@/assets/art/combat/items/melee_b1.png"),
		overlay: require("@/assets/art/combat/items/melee_b1_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 3,
			precision: 3,
			power: 6,
			evasion: -3,
			attackspeed: 2.2,
		},
		requires: {
			meleePower: 1
		}
	},
	meleeBlunt2: {
		name: "Baseball Bat",
		sellPrice: 240,
		icon: require("@/assets/art/combat/items/melee_b2.png"),
		overlay: require("@/assets/art/combat/items/melee_b2_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 7,
			precision: 4,
			power: 9,
			evasion: -3,
			attackspeed: 2.2,
		},
		requires: {
			meleePower: 10
		}
	},
	meleeBlunt3: {
		name: "Null Rod",
		sellPrice: 320,
		icon: require("@/assets/art/combat/items/melee_b3.png"),
		overlay: require("@/assets/art/combat/items/melee_b3_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 11,
			precision: 7,
			power: 14,
			evasion: -7,
			attackspeed: 2.2,
		},
		requires: {
			meleePower: 20
		}
	},
	meleeBlunt4: {
		name: "Truncheon",
		sellPrice: 360,
		icon: require("@/assets/art/combat/items/melee_b4.png"),
		overlay: require("@/assets/art/combat/items/melee_b4_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 15,
			precision: 9,
			power: 17,
			evasion: -9,
			attackspeed: 2.2,
		},
		requires: {
			meleePower: 25
		}
	},
	meleeBlunt5: {
		name: "Air Tank",
		sellPrice: 440,
		icon: require("@/assets/art/combat/items/melee_b5.png"),
		overlay: require("@/assets/art/combat/items/melee_b5_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 19,
			precision: 11,
			power: 20,
			evasion: -11,
			attackspeed: 2.2,
		},
		requires: {
			meleePower: 30
		}
	},
	meleeBlunt6: {
		name: "Fire Extinquisher",
		sellPrice: 480,
		icon: require("@/assets/art/combat/items/melee_b6.png"),
		overlay: require("@/assets/art/combat/items/melee_b6_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 23,
			precision: 12,
			power: 25,
			evasion: -12,
			attackspeed: 2.2,
		},
		requires: {
			meleePower: 35
		}
	},
	meleeBlunt7: {
		name: "Jackhammer",
		sellPrice: 710,
		icon: require("@/assets/art/combat/items/melee_b7.png"),
		overlay: require("@/assets/art/combat/items/melee_b7_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 27,
			precision: 14,
			power: 28,
			evasion: -14,
			attackspeed: 2.2,
		},
		requires: {
			meleePower: 40
		}
	},
	meleeBlunt8: {
		name: "Chain Of Command",
		sellPrice: 750,
		icon: require("@/assets/art/combat/items/melee_b8.png"),
		overlay: require("@/assets/art/combat/items/melee_b8_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 31,
			precision: 16,
			power: 32,
			evasion: -16,
			attackspeed: 2.2,
		},
		requires: {
			meleePower: 45
		}
	},
	meleeBlunt9: {
		name: "Stun Baton",
		sellPrice: 950,
		icon: require("@/assets/art/combat/items/melee_b9.png"),
		overlay: require("@/assets/art/combat/items/melee_b9_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 35,
			precision: 18,
			power: 35,
			evasion: -18,
			attackspeed: 2.2,
		},
		requires: {
			meleePower: 50
		}
	}
}

const MCUT = {
	meleeSharp1: {
		name: "Kitchen Fork",
		sellPrice: 220,
		icon: require("@/assets/art/combat/items/melee_c1.png"),
		overlay: require("@/assets/art/combat/items/melee_c1_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 1,
			precision: 1,
			attackSpeed: 2,
			power: 3,
		},
		requires: {
			precision: 5
		}
	},
	meleeSharp2: {
		name: "Kitchen Knife",
		sellPrice: 300,
		icon: require("@/assets/art/combat/items/melee_c2.png"),
		overlay: require("@/assets/art/combat/items/melee_c2_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 10
		}
	},
	meleeSharp3: {
		name: "Butcher Cleaver",
		sellPrice: 340,
		icon: require("@/assets/art/combat/items/melee_c3.png"),
		overlay: require("@/assets/art/combat/items/melee_c3_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 340,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 15
		}
	},
	meleeSharp4: {
		name: "Spear",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/melee_c4.png"),
		overlay: require("@/assets/art/combat/items/melee_c4_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 25
		}
	},
	meleeSharp5: {
		name: "Fire Axe",
		sellPrice: 460,
		icon: require("@/assets/art/combat/items/melee_c5.png"),
		overlay: require("@/assets/art/combat/items/melee_c5_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 30
		}
	},
	meleeSharp6: {
		name: "Chainsaw",
		sellPrice: 690,
		icon: require("@/assets/art/combat/items/melee_c6.png"),
		overlay: require("@/assets/art/combat/items/melee_c6_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 40
		}
	},
	meleeSharp7: {
		name: "Officer Sabre",
		sellPrice: 750,
		icon: require("@/assets/art/combat/items/melee_c7.png"),
		overlay: require("@/assets/art/combat/items/melee_c7_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 35,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 50
		}
	}
}

const MTOOLBOX = {
	meleeToolbox1: {
		name: "Toolbox",
		sellPrice: 360,
		icon: require("@/assets/art/combat/items/hand/melee_t1.png"),
		overlay: require("@/assets/art/combat/items/hand/melee_t1_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			precision: 2,
			power: 3,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 3,
			meleePower: 3
		},
	},
	meleeToolbox2: {
		name: "Toolbox",
		sellPrice: 430,
		icon: require("@/assets/art/combat/items/hand/melee_t2.png"),
		overlay: require("@/assets/art/combat/items/hand/melee_t2_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 7,
			precision: 3,
			power: 4,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 13,
			meleePower: 13
		}
	},
	meleeToolbox3: {
		name: "Toolbox",
		sellPrice: 520,
		icon: require("@/assets/art/combat/items/hand/melee_t3.png"),
		overlay: require("@/assets/art/combat/items/hand/melee_t3_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 14,
			precision: 5,
			power: 9,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 23,
			meleePower: 23
		}
	},
	meleeToolbox4: {
		name: "Toolbox",
		sellPrice: 610,
		icon: require("@/assets/art/combat/items/hand/melee_t4.png"),
		overlay: require("@/assets/art/combat/items/hand/melee_t4_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 21,
			precision: 7,
			power: 14,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 33,
			meleePower: 33
		}
	},
	meleeToolbox5: {
		name: "Toolbox",
		sellPrice: 790,
		icon: require("@/assets/art/combat/items/hand/melee_t5.png"),
		overlay: require("@/assets/art/combat/items/hand/melee_t5_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 28,
			precision: 9,
			power: 19,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 43,
			meleePower: 43
		}
	},
	meleeToolbox6: {
		name: "Toolbox",
		sellPrice: 910,
		icon: require("@/assets/art/combat/items/hand/melee_t6_anim.gif"),
		overlay: require("@/assets/art/combat/items/hand/melee_t6_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 35,
			precision: 11,
			power: 24,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 50,
			meleePower: 50
		}
	}
}

const MENERGY = {
	meleeBurn1: {
		name: "Welding Tool",
		sellPrice: 180,
		icon: require("@/assets/art/combat/items/melee_e1.png"),
		overlay: require("@/assets/art/combat/items/melee_e1_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 8
		}
	},
	meleeBurn2: {
		name: "Handheld Welder",
		sellPrice: 280,
		icon: require("@/assets/art/combat/items/melee_e2.png"),
		overlay: require("@/assets/art/combat/items/melee_e2_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 18
		}
	},
	meleeBurn3: {
		name: "Energy Dagger",
		sellPrice: 380,
		icon: require("@/assets/art/combat/items/melee_e3_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e3_anim_overlay.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 28
		}
	},
	meleeBurn4: {
		name: "Energy Sword",
		sellPrice: 580,
		icon: require("@/assets/art/combat/items/melee_e4_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e4_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 38
		}
	},
	meleeBurn5: {
		name: "Dual Energy Sword",
		sellPrice: 780,
		icon: require("@/assets/art/combat/items/melee_e5_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e5_overlay.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 48
		}
	}
}

const MSHIELD = {
	meleeShield1: {
		name: "Handcrafted Shield",
		sellPrice: 1520,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/hand/melee_shield1.png"),
		overlay: require("@/assets/art/combat/items/hand/melee_shield1_overlay.png"),
		stats: {
			attackSpeed: 4.5,
			evasion: 10,
			power: 5,
			precision: 0
		},
		requires: {
			evasion: 36
		}
	}
}

const GENERGY = {
	gunEnergy1: {
		name: "Kinetic Accelerator",
		sellPrice: 325,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_PKA.png"),
		overlay: require("@/assets/art/combat/items/gune_PKA_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 1,
			power: 2,
			precision: 5
		},
		requires: {
			rangedPower: 1
		}
	},
	gunEnergy2: {
		name: "Advanced Kinetic Accelerator",
		sellPrice: 400,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_PKA+.png"),
		overlay: require("@/assets/art/combat/items/gune_PKA+_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 1,
			power: 3,
			precision: 5
		},
		requires: {
			rangedPower: 15
		}
	},
	gunEnergy3: {
		name: "Plasma Cutter",
		sellPrice: 750,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_cutter.png"),
		overlay: require("@/assets/art/combat/items/gune_cutter_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 1,
			power: 3,
			precision: 6
		},
		requires: {
			rangedPower: 20
		}
	},
	gunEnergy4: {
		name: "Laser Gun",
		sellPrice: 1275,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_laser.png"),
		overlay: require("@/assets/art/combat/items/gune_laser_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 2,
			power: 4,
			precision: 7
		},
		requires: {
			rangedPower: 30
		}
	},
	gunEnergy5: {
		name: "Tesla Rifle",
		sellPrice: 1550,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_tesla.png"),
		overlay: require("@/assets/art/combat/items/gune_tesla_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 2,
			power: 5,
			precision: 7
		},
		requires: {
			rangedPower: 35
		}
	},
	gunEnergy6: {
		name: "Energy Gun",
		sellPrice: 1900,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_energy.png"),
		overlay: require("@/assets/art/combat/items/gune_energy_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 2,
			power: 5,
			precision: 8
		},
		requires: {
			rangedPower: 40
		}
	},
	gunEnergy7: {
		name: "Wartime Rifle",
		sellPrice: 2250,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_caplaser.png"),
		overlay: require("@/assets/art/combat/items/gune_caplaser_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 3,
			power: 6,
			precision: 9
		},
		requires: {
			rangedPower: 50
		}
	}
}

const GBULLET = {
	gunBallistic1: {
		name: "Pipe Shotgun",
		sellPrice: 210,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot1.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot1_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 7,
			evasion: 3,
			power: 2,
			precision: 5
		},
		requires: {
			rangedPower: 1
		}
	},
	gunBallistic2: {
		name: "Double Barreled Shotgun",
		sellPrice: 360,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot2.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot4_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 6,
			evasion: 4,
			power: 3,
			precision: 5
		},
		requires: {
			rangedPower: 20
		}
	},
	gunBallistic3: {
		name: "Cycling Shotgun",
		sellPrice: 545,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot3.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot4_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 5,
			evasion: 5,
			power: 3,
			precision: 5
		},
		requires: {
			rangedPower: 25
		}
	},
	gunBallistic4: {
		name: "Riot Shotgun",
		sellPrice: 980,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot4.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot4_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 4,
			evasion: 7,
			power: 4,
			precision: 5
		},
		requires: {
			rangedPower: 35
		}
	},
	gunBallistic5: {
		name: "Sawed Off Shotgun",
		sellPrice: 1140,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot5.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot6_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 3,
			evasion: 8,
			power: 4,
			precision: 5
		},
		requires: {
			rangedPower: 40
		}
	},
	gunBallistic6: {
		name: "Compact Shotgun",
		sellPrice: 1395,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot6.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot6_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 2,
			evasion: 9,
			power: 5,
			precision: 0
		},
		requires: {
			rangedPower: 45
		}
	},
	gunBallistic7: {
		name: "Combat Shotgun",
		sellPrice: 1520,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot7.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot7_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 1,
			evasion: 10,
			power: 5,
			precision: 0
		},
		requires: {
			rangedPower: 50
		}
	}
}
// 	mechGunEnergyRifle: {
// 		name: "Mech Energy Rifle",
// 		sellPrice: 0,
// 		equipmentSlot: "hand",
// 		icon: require("@/assets/art/engineering/gunenergy.png")
// 	},
// 	mechWeaponDrill: {
// 		name: "Mech Drill",
// 		sellPrice: 0,
// 		equipmentSlot: "hand",
// 		icon: require("@/assets/art/engineering/meleebig.png")
// 	},
// 	mechGunRifle: {
// 		name: "Mounted Rifle",
// 		sellPrice: 0,
// 		equipmentSlot: "hand",
// 		icon: require("@/assets/art/engineering/gunsmall.png"),
// 		restrictions: ["mech"],
// 		ammoType: "ballistic",
// 		stats: {
// 			attackSpeed: 4,
// 			power: 15,
// 			precision: 5
// 		}
// 	},
// 	mechGunRifle: {
// 		name: "Mounted Rifle",
// 		sellPrice: 0,
// 		equipmentSlot: "hand",
// 		icon: require("@/assets/art/engineering/gunsmall.png"),
// 		ammoType: "energized",
// 		stats: {
// 			attackSpeed: 4,
// 			power: 15,
// 			precision: 5
// 		},
// 		requires: {
// 			rangedPower: 1
// 		}
// 	},
// 	mechWeaponClaw: {
// 		name: "Mech Claw",
// 		sellPrice: 0,
// 		equipmentSlot: "hand",
// 		icon: require("@/assets/art/engineering/meleesmall.png"),
// 		restrictions: ["mech"],
// 		stats: {
// 			power: 10,
// 			attackSpeed: 4
// 		}
// 	},
// },

// Health is 1, The remaining stats are a total of .7 (35 points at 50) Energy gets a boost due to it's bonus being good for the level
// Cut and brute on 0-5, toolbox on 3's, energy on 8's, shield on 6


Object.values(MBRUTE).forEach(mbrute => {
	mbrute.equipmentSlot = "hand";
//	mbrute.sellPrice = Math.ceil(mbrute.requires.meleePower * 10 + 150);
	mbrute.stats.maxHealth = mbrute.requires.meleePower * 1;
	mbrute.stats.precision = Math.ceil(mbrute.requires.meleePower * .35);
	mbrute.stats.power = Math.round(mbrute.requires.meleePower * .6);
	mbrute.stats.evasion = Math.trunc(mbrute.requires.meleePower * -.25);
	mbrute.stats.attackspeed = 2.2;
});

Object.values(MCUT).forEach(mcut => {
	mcut.equipmentSlot = "hand";
//	mcut.sellPrice = Math.ceil(mcut.requires.precision * 10 + 150);
	mcut.stats.maxHealth = mcut.requires.precision * 1;
	mcut.stats.precision = Math.ceil(mcut.requires.precision * .30);
	mcut.stats.power = Math.round(mcut.requires.precision * .45);
	mcut.stats.evasion = Math.trunc(mcut.requires.precision * -.05);
	mcut.stats.attackspeed = 2.5;
});

Object.values(MTOOLBOX).forEach(mtoolbox => {
	mtoolbox.equipmentSlot = "hand";
	mtoolbox.sellPrice = Math.ceil((mtoolbox.requires.meleePower + 10) * 12.25 - 75);
	mtoolbox.stats.maxHealth = mtoolbox.requires.meleePower * 1;
	mtoolbox.stats.precision = Math.ceil(mtoolbox.requires.meleePower * .35);
	mtoolbox.stats.power = Math.round(mtoolbox.requires.meleePower * .5);
	mtoolbox.stats.evasion = Math.trunc(mtoolbox.requires.meleePower * -.1);
	mtoolbox.stats.command = Math.ceil(mtoolbox.requires.meleePower * -.1);
	mtoolbox.stats.attackspeed = 2.7;
});

Object.values(MSHIELD).forEach(mshield => {
	mshield.equipmentSlot = "hand";
	mshield.sellPrice = Math.ceil((mshield.requires.evasion + 10) * 75 - 75);
	mshield.stats.maxHealth = mshield.requires.evasion * 5;
	mshield.stats.precision = Math.trunc(mshield.requires.evasion * .1);
	mshield.stats.power = Math.ceil(mshield.requires.evasion * -.2);
	mshield.stats.evasion = Math.ceil(mshield.requires.evasion * .2);
	mshield.stats.protection = Math.trunc(mshield.requires.evasion * .2);
	mshield.stats.attackspeed = 4.5;
});

Object.values(MENERGY).forEach(menergy => {
	menergy.equipmentSlot = "hand";
	menergy.sellPrice = Math.ceil((menergy.requires.precision + 2) * (menergy.requires.precision + 2) - menergy.requires.precision + 2);
	menergy.stats.maxHealth = (menergy.requires.precision + 2) * 1;
	menergy.stats.precision = Math.ceil((menergy.requires.precision + 2) * .4);
	menergy.stats.power = Math.round((menergy.requires.precision + 2) * .45);
	menergy.stats.evasion = Math.trunc((menergy.requires.precision + 2) * -.15);
	menergy.stats.command = Math.ceil(menergy.requires.precision * -.1);
	menergy.stats.attackspeed = 2.2;
});

Object.values(GENERGY).forEach(genergy => {
	genergy.stats.damageType = "burn"
	// genergy.stats.maxHealth = genergy.requires.meleePower * 1;
	// genergy.stats.precision = Math.ceil(genergy.requires.meleePower * .35);
	// genergy.stats.power = Math.round(genergy.requires.meleePower * .7);
	// genergy.stats.evasion = Math.trunc(genergy.requires.meleePower * -.35);
	// genergy.stats.attackspeed = 2.2;
});

Object.values(GBULLET).forEach(gbullet => {
	// gbullet.equipmentSlot = "hand";
	// gbullet.stats.maxHealth = gbullet.requires.meleePower * 1;
	// gbullet.stats.precision = Math.ceil(gbullet.requires.meleePower * .35);
	// gbullet.stats.power = Math.round(gbullet.requires.meleePower * .7);
	// gbullet.stats.evasion = Math.trunc(gbullet.requires.meleePower * -.35);
});


const WEAPONS = {
	...MBRUTE,
	...MCUT,
	...MTOOLBOX,
	...MENERGY,
	...MSHIELD,
	...GENERGY,
	...GBULLET
}

Object.values(WEAPONS).forEach(weapon => {
	// Do this to show "BRUTE" on all the weapon item popovers that are otherwise defaulting
	if (!weapon.stats.damageType) weapon.stats.damageType = "brute";
	if (!weapon.stats.attackSpeed) weapon.stats.attackSpeed = 3;
})

export default WEAPONS;