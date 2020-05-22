export const ITEMS = {
	power: {
		name: "Power",
		sellPrice: 0,
		icon: require("@/assets/art/engineering/power.png")
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
	rifleAmmo: {
		name: "Rifle Ammo",
		sellPrice: 0,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/engineering/ammosmall.png"),
		ammoType: "ballistic",
		stats: {
			power: 3
		}
	},
	mechGunCanno: {
		name: "Mounted Cannon",
		sellPrice: 0,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/engineering/gunbig.png")
	},
	cannonAmmo: {
		name: "Cannon Ammo",
		sellPrice: 0,
		equipmentSlot: "pocket",
		icon: require("@/assets/art/engineering/ammobig.png")
	},
	mechGunEnergyRifle: {
		name: "Mech Energy Rifle",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/gunenergy.png")
	},
}

export const ACTIONS = {
	engBike: {
		time: 1,
		name: "Stationary Bicycle",
		item: "power",
		icon: require("@/assets/art/engineering/bicycle.png"),
		xp: 5,
		requiredLevel: 1
	},
	engMeleesmall: {
		time: 1,
		item: "mechWeaponClaw",
		icon: require("@/assets/art/engineering/meleesmall.png"),
		xp: 5,
		requiredLevel: 2
	},
	engMeleebig: {
		time: 1,
		item: "mechWeaponDrill",
		icon: require("@/assets/art/engineering/meleebig.png"),
		xp: 5,
		requiredLevel: 3
	},
	engGunsmall: {
		time: 1,
		item: "mechGunRifle",
		icon: require("@/assets/art/engineering/gunsmall.png"),
		xp: 5,
		requiredLevel: 4
	},
	engAmmosmall: {
		time: 1,
		item: "rifleAmmo",
		icon: require("@/assets/art/engineering/ammosmall.png"),
		xp: 5,
		requiredLevel: 5
	},
	engGunbig: {
		time: 1,
		item: "mechGunCanno",
		icon: require("@/assets/art/engineering/gunbig.png"),
		xp: 5,
		requiredLevel: 6
	},
	engAmmobig: {
		time: 1,
		item: "cannonAmmo",
		icon: require("@/assets/art/engineering/ammobig.png"),
		xp: 5,
		requiredLevel: 7
	},
	engGunenergy: {
		time: 1,
		item: "mechGunEnergyRifle",
		icon: require("@/assets/art/engineering/gunenergy.png"),
		xp: 5,
		requiredLevel: 8
	},
}

export const JOB = {
	id: "engineering",
	name: "Engineering",
	icon: require("@/assets/art/engineering/icon.png"),
	color: "#FFDB00",
	items: ITEMS
}
