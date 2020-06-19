const ACTIONS_RECYCLING = {
	tinkerRecycleJ: {
		time: 10,
		item: "burnjunk",
		icon: require("@/assets/art/tinkering/burnjunk.png"),
		xp: 10,
		requiredLevel: 1,
		requiredItems: {
			junk: 2
		}
	},
	tinkerRecycleS: {
		time: 10,
		item: "burnjunk",
		icon: require("@/assets/art/tinkering/burnjunk.png"),
		xp: 10,
		requiredLevel: 1,
		requiredItems: {
			spacejunk: 2
		}
	},
	tinkerRecycleA: {
		time: 10,
		item: "burnjunk",
		icon: require("@/assets/art/tinkering/burnjunk.png"),
		xp: 10,
		requiredLevel: 1,
		requiredItems: {
			armorjunk: 2
		}
	},
}

const ACTIONS_BLUNT_WEAPONS = {
	tinkerMeleeb1: {
		time: 2,
		item: "meleeB1",
		icon: require("@/assets/art/combat/items/melee_b1.png"),
		xp: 2,
		requiredLevel: 2,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb2: {
		time: 2,
		item: "meleeB2",
		icon: require("@/assets/art/combat/items/melee_b2.png"),
		xp: 8,
		requiredLevel: 8,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb3: {
		time: 2,
		item: "meleeB3",
		icon: require("@/assets/art/combat/items/melee_b3.png"),
		xp: 20,
		requiredLevel: 14,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb4: {
		time: 2,
		item: "meleeB4",
		icon: require("@/assets/art/combat/items/melee_b4.png"),
		xp: 20,
		requiredLevel: 20,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb5: {
		time: 2,
		item: "meleeB5",
		icon: require("@/assets/art/combat/items/melee_b5.png"),
		xp: 20,
		requiredLevel: 26,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb6: {
		time: 2,
		item: "meleeB6",
		icon: require("@/assets/art/combat/items/melee_b6.png"),
		xp: 20,
		requiredLevel: 32,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb7: {
		time: 2,
		item: "meleeB7",
		icon: require("@/assets/art/combat/items/melee_b7.png"),
		xp: 20,
		requiredLevel: 38,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb8: {
		time: 2,
		item: "meleeB8",
		icon: require("@/assets/art/combat/items/melee_b8.png"),
		xp: 20,
		requiredLevel: 44,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb9: {
		time: 2,
		item: "meleeB9",
		icon: require("@/assets/art/combat/items/melee_b9.png"),
		xp: 20,
		requiredLevel: 50,
		requiredItems: {
			junk: 1
		}
	},
}


const ACTIONS_SHARP_WEAPONS = {
	tinkerMeleec1: {
		time: 2,
		item: "meleeC1",
		icon: require("@/assets/art/combat/items/melee_c1.png"),
		xp: 20,
		requiredLevel: 5,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec2: {
		time: 2,
		item: "meleeC2",
		icon: require("@/assets/art/combat/items/melee_c2.png"),
		xp: 20,
		requiredLevel: 10,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec3: {
		time: 2,
		item: "meleeC3",
		icon: require("@/assets/art/combat/items/melee_c3.png"),
		xp: 20,
		requiredLevel: 16,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec4: {
		time: 2,
		item: "meleeC4",
		icon: require("@/assets/art/combat/items/melee_c4.png"),
		xp: 20,
		requiredLevel: 21,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec5: {
		time: 2,
		item: "meleeC5",
		icon: require("@/assets/art/combat/items/melee_c5.png"),
		xp: 20,
		requiredLevel: 27,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec6: {
		time: 2,
		item: "meleeC6",
		icon: require("@/assets/art/combat/items/melee_c6.png"),
		xp: 20,
		requiredLevel: 32,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec7: {
		time: 2,
		item: "meleeC7",
		icon: require("@/assets/art/combat/items/melee_c7.png"),
		xp: 20,
		requiredLevel: 38,
		requiredItems: {
			junk: 1
		}
	},
}

const ACTIONS_ARMOR = {

	tinkerArmB1: {
		time: 2,
		item: "armB1",
		icon: require("@/assets/art/combat/items/arm_b1.png"),
		xp: 20,
		requiredLevel: 4,
		requiredItems: {
			armorjunk: 1
		}
	},
	tinkerArmB2: {
		time: 2,
		item: "armB2",
		icon: require("@/assets/art/combat/items/arm_b2.png"),
		xp: 20,
		requiredLevel: 15,
		requiredItems: {
			armorjunk: 1
		}
	},
	tinkerArmB3: {
		time: 2,
		item: "armB3",
		icon: require("@/assets/art/combat/items/arm_b3.png"),
		xp: 20,
		requiredLevel: 26,
		requiredItems: {
			armorjunk: 1
		}
	},
	tinkerArmB4: {
		time: 2,
		item: "armB4",
		icon: require("@/assets/art/combat/items/arm_b4.png"),
		xp: 20,
		requiredLevel: 37,
		requiredItems: {
			armorjunk: 1
		}
	},
	tinkerArmB5: {
		time: 2,
		item: "armB5",
		icon: require("@/assets/art/combat/items/arm_b5.png"),
		xp: 20,
		requiredLevel: 48,
		requiredItems: {
			armorjunk: 1
		}
	},
}

export const ACTIONS_SPACE_SUITS = {
	tinkerArmS1: {
		time: 2,
		item: "armS1",
		icon: require("@/assets/art/combat/items/arm_s1.png"),
		xp: 20,
		requiredLevel: 3,
		requiredItems: {
			spacejunk: 1
		}
	},
	tinkerArmS2: {
		time: 2,
		item: "armS2",
		icon: require("@/assets/art/combat/items/arm_s2.png"),
		xp: 20,
		requiredLevel: 14,
		requiredItems: {
			spacejunk: 1
		}
	},
	tinkerArmS3: {
		time: 2,
		item: "armS3",
		icon: require("@/assets/art/combat/items/arm_s3.png"),
		xp: 20,
		requiredLevel: 25,
		requiredItems: {
			spacejunk: 1
		}
	},
	tinkerArmS4: {
		time: 2,
		item: "armS4",
		icon: require("@/assets/art/combat/items/arm_s4.png"),
		xp: 20,
		requiredLevel: 36,
		requiredItems: {
			spacejunk: 1
		}
	},
	tinkerArmS5: {
		time: 2,
		item: "armS5",
		icon: require("@/assets/art/combat/items/arm_s5.png"),
		xp: 20,
		requiredLevel: 47,
		requiredItems: {
			spacejunk: 1
		}
	},
}

Object.values(ACTIONS_RECYCLING).forEach(action => action.type = "recycling");
Object.values(ACTIONS_BLUNT_WEAPONS).forEach(action => action.type = "blunt weapons");
Object.values(ACTIONS_SHARP_WEAPONS).forEach(action => action.type = "sharp weapons");
Object.values(ACTIONS_ARMOR).forEach(action => action.type = "armor");
Object.values(ACTIONS_SPACE_SUITS).forEach(action => action.type = "space suits");

export const ACTIONS = {
	...ACTIONS_RECYCLING,
	...ACTIONS_BLUNT_WEAPONS,
	...ACTIONS_SHARP_WEAPONS,
	...ACTIONS_ARMOR,
	...ACTIONS_SPACE_SUITS
}

export const JOB = {
	id: "tinkering",
	name: "Tinkering",
	icon: require("@/assets/art/tinkering/icon.png"),
	color: "#3681bb"
}