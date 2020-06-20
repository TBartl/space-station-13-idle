export const ACTIONS = {
	engBike: {
		time: 5,
		name: "Stationary Bicycle",
		items: {
			id: "power",
			count: 1
		},
		icon: require("@/assets/art/engineering/bicycle.png"),
		xp: 1,
		requiredLevel: 1
	},
	engOil: {
		time: 5,
		name: "Oil Barrel",
		items: {
			id: "power",
			count: 10
		},
		icon: require("@/assets/art/engineering/burning_anim.gif"),
		xp: 3,
		requiredLevel: 5,
		requiredItems: {
			oil: 1
		}
	},
	engTreadmill: {
		time: 5,
		name: "Treadmill",
		items: {
			id: "power",
			count: 2
		},
		icon: require("@/assets/art/engineering/treadmill.png"),
		xp: 10,
		requiredLevel: 10,
	},
	engPotato: {
		time: 5,
		name: "Potato Battery",
		items: {
			id: "power",
			count: 3
		},
		icon: require("@/assets/art/botany/PlantPotatobattery.png"),
		xp: 15,
		requiredLevel: 15,
		requiredItems: {
			potatobattery: 8
		}

	},
	engGen: {
		time: 5,
		name: "Portable Generator",
		items: {
			id: "power",
			count: 9
		},
		icon: require("@/assets/art/engineering/generator_anim.gif"),
		xp: 20,
		requiredLevel: 20,
		requiredItems: {
			power: 5
		}
	},
	engSlime: {
		time: 5,
		name: "Charged Slime",
		items: {
			id: "power",
			count: 5
		},
		icon: require("@/assets/art/xenobio/SlimeYellow.gif"),
		xp: 25,
		requiredLevel: 25,
		requiredItems: {
			slimeYellow: 1
		}
	},
	engIncinerator: {
		time: 5,
		name: "Incinerator",
		items: {
			id: "power",
			count: 6
		},
		icon: require("@/assets/art/engineering/incinerator_anim.gif"),
		xp: 30,
		requiredLevel: 30,
		requiredItems: {
			burnJunk: 1
		}
	},
	engPowerBottom: {
		time: 5,
		name: "Power Bottom",
		items: {
			id: "power",
			count: 7
		},
		icon: require("@/assets/art/engineering/powerbottom.png"),
		xp: 18,
		requiredLevel: 35,
		requiredItems: {
			lube: 8
		}
	},
	engSMES: {
		time: 5,
		title: "Prepare For Sale",
		name: "Stored Power",
		items: {
			id: "money",
			count: 50
		},
		icon: require("@/assets/art/engineering/smes_anim.gif"),
		xp: 20,
		requiredLevel: 40,
		requiredItems: {
			power: 10
		}
	},
	engUnholy: {
		time: 5,
		name: "Unholy ",
		items: {
			id: "power",
			count: 9
		},
		icon: require("@/assets/art/engineering/eng_shitpost.png"),
		xp: 18,
		requiredLevel: 42,
		requiredItems: {
			salt: 1
		}
	},
	engSingularity: {
		time: 600,
		name: "Gravitational Singularity",
		items: {
			id: "power",
			count: 50000
		},
		icon: require("@/assets/art/engineering/big.gif"),
		xp: -50000,
		requiredLevel: 50,
		requiredItems: {
			power: 500
		}
	},
	// engMeleesmall: {
	// 	time: 1,
	// 	item: "mechWeaponClaw",
	// 	icon: require("@/assets/art/engineering/meleesmall.png"),
	// 	xp: 5,
	// 	requiredLevel: 2
	// },
	// engMeleebig: {
	// 	time: 1,
	// 	item: "mechWeaponDrill",
	// 	icon: require("@/assets/art/engineering/meleebig.png"),
	// 	xp: 5,
	// 	requiredLevel: 3
	// },
	// engGunsmall: {
	// 	time: 1,
	// 	item: "mechGunRifle",
	// 	icon: require("@/assets/art/engineering/gunsmall.png"),
	// 	xp: 5,
	// 	requiredLevel: 4
	// These ammos will all probably be removed from here, but this one is causing issues
	// engAmmosmall: {
	// 	time: 1,
	// 	item: "rifleAmmo",
	// 	icon: require("@/assets/art/engineering/ammosmall.png"),
	// 	xp: 5,
	// 	requiredLevel: 5
	// },
	// engGunbig: {
	// 	time: 1,
	// 	item: "mechGunCanno",
	// 	icon: require("@/assets/art/engineering/gunbig.png"),
	// 	xp: 5,
	// 	requiredLevel: 6
	// },
	// engAmmobig: {
	// 	time: 1,
	// 	item: "cannonAmmo",
	// 	icon: require("@/assets/art/engineering/ammobig.png"),
	// 	xp: 5,
	// 	requiredLevel: 7
	// },
	// engGunenergy: {
	// 	time: 1,
	// 	item: "mechGunEnergyRifle",
	// 	icon: require("@/assets/art/engineering/gunenergy.png"),
	// 	xp: 5,
	// 	requiredLevel: 8
	// },
}

export const JOB = {
	id: "engineering",
	name: "Engineering",
	icon: require("@/assets/art/engineering/icon.png"),
	color: "#FFDB00"
}
