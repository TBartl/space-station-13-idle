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
	mechGunEnergyRifle: {
		name: "Mech Energy Rifle",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/gunenergy.png")
	},
}