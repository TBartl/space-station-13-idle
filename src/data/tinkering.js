const ACTIONS_RECYCLING = {
	tinkerRecycleJ: {
		time: 10,
		actionName: "RECYCLE INTO",
		item: "burnJunk",
		icon: require("@/assets/art/tinkering/burnjunk.png"),
		xp: 4,
		requiredLevel: 1,
		requiredItems: {
			junk: 1
		}
	},
	tinkerRecycleS: {
		time: 10,
		item: "burnJunk",
		actionName: "RECYCLE INTO",
		icon: require("@/assets/art/tinkering/burnjunk.png"),
		xp: 4,
		requiredLevel: 1,
		requiredItems: {
			spaceJunk: 1
		}
	},
	tinkerRecycleA: {
		time: 10,
		item: "burnJunk",
		actionName: "RECYCLE INTO",
		icon: require("@/assets/art/tinkering/burnjunk.png"),
		xp: 4,
		requiredLevel: 1,
		requiredItems: {
			armorJunk: 1
		}
	},
}

const ACTIONS_BLUNT_WEAPONS = {
	tinkerMeleeb1: {
		time: 10,
		item: "meleeBlunt1",
		icon: require("@/assets/art/combat/items/melee_b1.png"),
		xp: 5,
		requiredLevel: 5,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb2: {
		time: 10,
		item: "meleeBlunt2",
		icon: require("@/assets/art/combat/items/melee_b2.png"),
		xp: 9,
		requiredLevel: 9,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb3: {
		time: 10,
		item: "meleeBlunt3",
		icon: require("@/assets/art/combat/items/melee_b3.png"),
		xp: 17,
		requiredLevel: 17,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb4: {
		time: 10,
		item: "meleeBlunt4",
		icon: require("@/assets/art/combat/items/melee_b4.png"),
		xp: 21,
		requiredLevel: 21,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb5: {
		time: 10,
		item: "meleeBlunt5",
		icon: require("@/assets/art/combat/items/melee_b5.png"),
		xp: 29,
		requiredLevel: 29,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb6: {
		time: 10,
		item: "meleeBlunt6",
		icon: require("@/assets/art/combat/items/melee_b6.png"),
		xp: 33,
		requiredLevel: 33,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb7: {
		time: 10,
		item: "meleeBlunt7",
		icon: require("@/assets/art/combat/items/melee_b7.png"),
		xp: 41,
		requiredLevel: 41,
		requiredItems: {
			junk: 2
		}
	},
	tinkerMeleeb8: {
		time: 10,
		item: "meleeBlunt8",
		icon: require("@/assets/art/combat/items/melee_b8.png"),
		xp: 45,
		requiredLevel: 45,
		requiredItems: {
			junk: 2
		}
	},
	tinkerMeleeb9: {
		time: 10,
		item: "meleeBlunt9",
		icon: require("@/assets/art/combat/items/melee_b9.png"),
		xp: 50,
		requiredLevel: 50,
		requiredItems: {
			junk: 3
		}
	},
}


const ACTIONS_SHARP_WEAPONS = {
	tinkerMeleec1: {
		time: 10,
		item: "meleeSharp1",
		icon: require("@/assets/art/combat/items/melee_c1.png"),
		xp: 7,
		requiredLevel: 7,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec2: {
		time: 10,
		item: "meleeSharp2",
		icon: require("@/assets/art/combat/items/melee_c2.png"),
		xp: 15,
		requiredLevel: 15,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec3: {
		time: 10,
		item: "meleeSharp3",
		icon: require("@/assets/art/combat/items/melee_c3.png"),
		xp: 19,
		requiredLevel: 19,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec4: {
		time: 10,
		item: "meleeSharp4",
		icon: require("@/assets/art/combat/items/melee_c4.png"),
		xp: 27,
		requiredLevel: 27,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec5: {
		time: 10,
		item: "meleeSharp5",
		icon: require("@/assets/art/combat/items/melee_c5.png"),
		xp: 31,
		requiredLevel: 31,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec6: {
		time: 10,
		item: "meleeSharp6",
		icon: require("@/assets/art/combat/items/melee_c6.png"),
		xp: 39,
		requiredLevel: 39,
		requiredItems: {
			junk: 2
		}
	},
	tinkerMeleec7: {
		time: 43,
		item: "meleeSharp7",
		icon: require("@/assets/art/combat/items/melee_c7.png"),
		xp: 73,
		requiredLevel: 43,
		requiredItems: {
			junk: 2
		}
	},
}

const ACTIONS_ARMOR = {

	tinkerArmB1: {
		time: 10,
		item: "armorBrute1",
		icon: require("@/assets/art/combat/items/arm_b1.png"),
		xp: 5,
		requiredLevel: 3,
		requiredItems: {
			armorJunk: 1
		}
	},
	tinkerArmB2: {
		time: 10,
		item: "armorBrute2",
		icon: require("@/assets/art/combat/items/arm_b2.png"),
		xp: 13,
		requiredLevel: 13,
		requiredItems: {
			armorJunk: 1
		}
	},
	tinkerArmB3: {
		time: 10,
		item: "armorBrute3",
		icon: require("@/assets/art/combat/items/arm_b3.png"),
		xp: 25,
		requiredLevel: 25,
		requiredItems: {
			armorJunk: 1
		}
	},
	tinkerArmB4: {
		time: 10,
		item: "armorBrute4",
		icon: require("@/assets/art/combat/items/arm_b4.png"),
		xp: 37,
		requiredLevel: 37,
		requiredItems: {
			armorJunk: 2
		}
	},
	tinkerArmB5: {
		time: 10,
		item: "armorBrute5",
		icon: require("@/assets/art/combat/items/arm_b5.png"),
		xp: 49,
		requiredLevel: 49,
		requiredItems: {
			armorJunk: 3
		}
	},
}

export const ACTIONS_SPACE_SUITS = {
	tinkerArmS1: {
		time: 10,
		item: "armorBurn1",
		icon: require("@/assets/art/combat/items/arm_s1.png"),
		xp: 5,
		requiredLevel: 2,
		requiredItems: {
			spaceJunk: 1
		}
	},
	tinkerArmS2: {
		time: 10,
		item: "armorBurn2",
		icon: require("@/assets/art/combat/items/arm_s2.png"),
		xp: 11,
		requiredLevel: 11,
		requiredItems: {
			spaceJunk: 1
		}
	},
	tinkerArmS3: {
		time: 10,
		item: "armorBurn3",
		icon: require("@/assets/art/combat/items/arm_s3.png"),
		xp: 23,
		requiredLevel: 23,
		requiredItems: {
			spaceJunk: 1
		}
	},
	tinkerArmS4: {
		time: 10,
		item: "armorBurn4",
		icon: require("@/assets/art/combat/items/arm_s4.png"),
		xp: 35,
		requiredLevel: 35,
		requiredItems: {
			spaceJunk: 2
		}
	},
	tinkerArmS5: {
		time: 10,
		item: "armorBurn5",
		icon: require("@/assets/art/combat/items/arm_s5.png"),
		xp: 47,
		requiredLevel: 47,
		requiredItems: {
			spaceJunk: 3
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