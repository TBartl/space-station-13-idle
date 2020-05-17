export const ITEMS = {
	power: {
		name: "Power",
		sellPrice: 0,
		icon: require("@/assets/art/engineering/power.png")
	},
	meleesmall: {
		name: "Claw",
		sellPrice: 0,
		icon: require("@/assets/art/engineering/meleesmall.png")
	},
	meleebig: {
		name: "Drill",
		sellPrice: 0,
		icon: require("@/assets/art/engineering/meleebig.png")
	},
	gunsmall: {
		name: "Mounted Rifle",
		sellPrice: 0,
		icon: require("@/assets/art/engineering/gunsmall.png")
	},
	ammosmall: {
		name: "Rifle Ammo",
		sellPrice: 0,
		icon: require("@/assets/art/engineering/ammosmall.png")
	},
	gunbig: {
		name: "Mounted Cannon",
		sellPrice: 0,
		icon: require("@/assets/art/engineering/gunbig.png")
	},
	ammobig: {
		name: "Cannon Ammo",
		sellPrice: 0,
		icon: require("@/assets/art/engineering/ammobig.png")
	},
	gunenergy: {
		name: "Energy Rifle",
		sellPrice: 0,
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
		item: "meleesmall",
		icon: require("@/assets/art/engineering/meleesmall.png"),
		xp: 5,
		requiredLevel: 2
	},
	engMeleebig: {
		time: 1,
		item: "meleebig",
		icon: require("@/assets/art/engineering/meleebig.png"),
		xp: 5,
		requiredLevel: 3
	},
	engGunsmall: {
		time: 1,
		item: "gunsmall",
		icon: require("@/assets/art/engineering/gunsmall.png"),
		xp: 5,
		requiredLevel: 4
	},
	engAmmosmall: {
		time: 1,
		item: "ammosmall",
		icon: require("@/assets/art/engineering/ammosmall.png"),
		xp: 5,
		requiredLevel: 5
	},
	engGunbig: {
		time: 1,
		item: "gunbig",
		icon: require("@/assets/art/engineering/gunbig.png"),
		xp: 5,
		requiredLevel: 6
	},
	engAmmobig: {
		time: 1,
		item: "ammobig",
		icon: require("@/assets/art/engineering/ammobig.png"),
		xp: 5,
		requiredLevel: 7
	},
	engGunenergy: {
		time: 1,
		item: "gunenergy",
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
