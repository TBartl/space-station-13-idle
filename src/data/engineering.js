export const ACTIONS = {
	engBike: {
		time: 1,
		name: "Stationary Bicycle",
		items: {
			id: "power",
			count: 1
		},
		icon: require("@/assets/art/engineering/bicycle.png"),
		xp: 5,
		requiredLevel: 1
	},
	engDebug: {
		time: 1,
		name: "DEBUG REMOVE THIS",
		items: {
			id: "power",
			count: 100
		},
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
	// These ammos will all probably be removed from here, but this one is causing issues
	// engAmmosmall: {
	// 	time: 1,
	// 	item: "rifleAmmo",
	// 	icon: require("@/assets/art/engineering/ammosmall.png"),
	// 	xp: 5,
	// 	requiredLevel: 5
	// },
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
	color: "#FFDB00"
}
