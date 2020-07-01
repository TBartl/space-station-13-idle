const RENEWABLE_ACTIONS = {
	engBike: {
		time: 5,
		name: "Stationary Bicycle",
		items: {
			id: "power",
			count: 2
		},
		icon: require("@/assets/art/engineering/bicycle.png"),
		xp: 1.3,
		requiredLevel: 1
	},
	engTreadmill: {
		time: 5,
		name: "Treadmill",
		items: {
			id: "power",
			count: 4
		},
		icon: require("@/assets/art/engineering/treadmill.png"),
		xp: 3.5,
		requiredLevel: 7,
	},
	engGen: {
		time: 5,
		name: "Portable Generator",
		items: {
			id: "power",
			count: 10
		},
		icon: require("@/assets/art/engineering/generator_anim.gif"),
		xp: 7,
		requiredLevel: 14,
		requiredItems: {
			power: 4
		}
	},
}

const RESOURCE_CONSUMING_ACTIONS = {
	engOil: {
		time: 2.5,
		name: "Oil Barrel",
		items: {
			id: "power",
			count: 5
		},
		icon: require("@/assets/art/engineering/burning_anim.gif"),
		xp: 2.2,
		requiredLevel: 4,
		requiredItems: {
			oil: 1
		}
	},
	engIncinerator: {
		time: 5,
		name: "Incinerator",
		items: {
			id: "power",
			count: 10
		},
		icon: require("@/assets/art/engineering/incinerator_anim.gif"),
		xp: 10,
		requiredLevel: 10,
		requiredItems: {
			burnJunk: 1
		}
	},
	engSlime: {
		time: 5,
		name: "Charged Slime",
		items: {
			id: "power",
			count: 10
		},
		icon: require("@/assets/art/xenobio/SlimeYellow.gif"),
		xp: 8.5,
		requiredLevel: 17,
		requiredItems: {
			slimeYellow: 1
		}
	},
	engPotato: {
		time: 5,
		name: "Potato Battery",
		items: {
			id: "power",
			count: 10
		},
		icon: require("@/assets/art/botany/PlantPotatobattery.png"),
		xp: 10,
		requiredLevel: 20,
		requiredItems: {
			potatoBattery: 8
		}
	},
	engSolars: {
		time: 5,
		name: "Solars",
		items: {
			id: "power",
			count: 10
		},
		icon: require("@/assets/art/engineering/solars.png"),
		xp: 11.5,
		requiredLevel: 23,
		requiredItems: {
			wire: 1
		}
	},
	engBee: {
		time: 5,
		name: "Plan Bee",
		items: {
			id: "power",
			count: 16
		},
		icon: require("@/assets/art/engineering/beepower.png"),
		xp: 13.5,
		requiredLevel: 27,
		requiredItems: {
			companionBee: 1
		}
	},
	engBattery: {
		time: 5,
		name: "Battery Array",
		items: {
			id: "power",
			count: 15
		},
		icon: require("@/assets/art/engineering/battery.png"),
		xp: 16.5,
		requiredLevel: 33,
		requiredItems: {
			ammoEnergy3: 1
		}
	},
	engSlimeoil: {
		time: 5,
		name: "American Military Slime",
		items: {
			id: "power",
			count: 19
		},
		icon: require("@/assets/art/xenobio/SlimeOil.gif"),
		xp: 18,
		requiredLevel: 36,
		requiredItems: {
			slimeOil: 1
		}
	},
	engUnholy: {
		time: 5,
		name: "Unholy Matter",
		items: {
			id: "power",
			count: 74
		},
		icon: require("@/assets/art/engineering/eng_shitpost.png"),
		xp: 20,
		requiredLevel: 40,
		requiredItems: {
			salt: 1
		}
	},
	engOrange: {
		time: 5,
		name: "Super Compressed Matter",
		items: {
			id: "power",
			count: 17
		},
		icon: require("@/assets/art/engineering/supermatter_anim.gif"),
		xp: 21.5,
		requiredLevel: 43,
		requiredItems: {
			orange3d: 8
		}
	},
	engBananaore: {
		time: 5,
		name: "Advanced Capacitors Plating",
		items: {
			id: "power",
			count: 17
		},
		icon: require("@/assets/art/engineering/banana.png"),
		xp: 23,
		requiredLevel: 46,
		requiredItems: {
			bananium: 1
		}
	}
}

const ILL_ADVISED_ACTIONS = {
	engSMES: {
		time: 5,
		actionName: "PREPARE FOR SALE",
		name: "Stored Power",
		items: {
			id: "money",
			count: 50
		},
		icon: require("@/assets/art/engineering/smes_anim.gif"),
		xp: 15,
		requiredLevel: 30,
		requiredItems: {
			power: 10
		}
	},
	engSingularity: {
		time: 600,
		actionName: "UNLEASH",
		name: "Gravitational Singularity",
		items: {
			id: "power",
			count: 1337
		},
		icon: require("@/assets/art/engineering/big.gif"),
		xp: -50000,
		requiredLevel: 50,
		requiredItems: {
			power: 500
		}
	}
}

Object.values(RENEWABLE_ACTIONS).forEach(action => {
	action.type = "RENEWABLE";
});
Object.values(RESOURCE_CONSUMING_ACTIONS).forEach(action => {
	action.type = "RESOURCE-CONSUMING";
});
Object.values(ILL_ADVISED_ACTIONS).forEach(action => {
	action.type = "ILL-ADVISED";
});

export const ACTIONS = {
	...RENEWABLE_ACTIONS,
	...RESOURCE_CONSUMING_ACTIONS,
	...ILL_ADVISED_ACTIONS
}

export const JOB = {
	id: "engineering",
	name: "Engineering",
	icon: require("@/assets/art/engineering/icon.png"),
	color: "#FFDB00"
}
