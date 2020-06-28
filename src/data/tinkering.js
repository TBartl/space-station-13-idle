const ACTIONS_RECYCLING = {
	tinkerRecycleJ: {
		time: 10,
		actionName: "RECYCLE INTO",
		item: "burnJunk",
		icon: require("@/assets/art/tinkering/burnjunk.png"),
		xp: 10,
		requiredLevel: 1,
		requiredItems: {
			junk: 2
		}
	},
	tinkerRecycleS: {
		time: 10,
		item: "burnJunk",
		actionName: "RECYCLE INTO",
		icon: require("@/assets/art/tinkering/burnjunk.png"),
		xp: 10,
		requiredLevel: 1,
		requiredItems: {
			spaceJunk: 2
		}
	},
	tinkerRecycleA: {
		time: 10,
		item: "burnJunk",
		actionName: "RECYCLE INTO",
		icon: require("@/assets/art/tinkering/burnjunk.png"),
		xp: 10,
		requiredLevel: 1,
		requiredItems: {
			armorJunk: 2
		}
	},
}

const ACTIONS_BLUNT_WEAPONS = {
	tinkerMeleeb1: {
		time: 2,
		item: "meleeBlunt1",
		icon: require("@/assets/art/combat/items/melee_b1.png"),
		xp: 2,
		requiredLevel: 2,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb2: {
		time: 2,
		item: "meleeBlunt2",
		icon: require("@/assets/art/combat/items/melee_b2.png"),
		xp: 8,
		requiredLevel: 8,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb3: {
		time: 2,
		item: "meleeBlunt3",
		icon: require("@/assets/art/combat/items/melee_b3.png"),
		xp: 20,
		requiredLevel: 14,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb4: {
		time: 2,
		item: "meleeBlunt4",
		icon: require("@/assets/art/combat/items/melee_b4.png"),
		xp: 20,
		requiredLevel: 20,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb5: {
		time: 2,
		item: "meleeBlunt5",
		icon: require("@/assets/art/combat/items/melee_b5.png"),
		xp: 20,
		requiredLevel: 26,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb6: {
		time: 2,
		item: "meleeBlunt6",
		icon: require("@/assets/art/combat/items/melee_b6.png"),
		xp: 20,
		requiredLevel: 32,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb7: {
		time: 2,
		item: "meleeBlunt7",
		icon: require("@/assets/art/combat/items/melee_b7.png"),
		xp: 20,
		requiredLevel: 38,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb8: {
		time: 2,
		item: "meleeBlunt8",
		icon: require("@/assets/art/combat/items/melee_b8.png"),
		xp: 20,
		requiredLevel: 44,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleeb9: {
		time: 2,
		item: "meleeBlunt9",
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
		item: "meleeSharp1",
		icon: require("@/assets/art/combat/items/melee_c1.png"),
		xp: 20,
		requiredLevel: 5,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec2: {
		time: 2,
		item: "meleeSharp2",
		icon: require("@/assets/art/combat/items/melee_c2.png"),
		xp: 20,
		requiredLevel: 10,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec3: {
		time: 2,
		item: "meleeSharp3",
		icon: require("@/assets/art/combat/items/melee_c3.png"),
		xp: 20,
		requiredLevel: 16,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec4: {
		time: 2,
		item: "meleeSharp4",
		icon: require("@/assets/art/combat/items/melee_c4.png"),
		xp: 20,
		requiredLevel: 21,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec5: {
		time: 2,
		item: "meleeSharp5",
		icon: require("@/assets/art/combat/items/melee_c5.png"),
		xp: 20,
		requiredLevel: 27,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec6: {
		time: 2,
		item: "meleeSharp6",
		icon: require("@/assets/art/combat/items/melee_c6.png"),
		xp: 20,
		requiredLevel: 32,
		requiredItems: {
			junk: 1
		}
	},
	tinkerMeleec7: {
		time: 2,
		item: "meleeSharp7",
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
		item: "armorBrute1",
		icon: require("@/assets/art/combat/items/arm_b1.png"),
		xp: 20,
		requiredLevel: 4,
		requiredItems: {
			armorJunk: 1
		}
	},
	tinkerArmB2: {
		time: 2,
		item: "armorBrute2",
		icon: require("@/assets/art/combat/items/arm_b2.png"),
		xp: 20,
		requiredLevel: 15,
		requiredItems: {
			armorJunk: 1
		}
	},
	tinkerArmB3: {
		time: 2,
		item: "armorBrute3",
		icon: require("@/assets/art/combat/items/arm_b3.png"),
		xp: 20,
		requiredLevel: 26,
		requiredItems: {
			armorJunk: 1
		}
	},
	tinkerArmB4: {
		time: 2,
		item: "armorBrute4",
		icon: require("@/assets/art/combat/items/arm_b4.png"),
		xp: 20,
		requiredLevel: 37,
		requiredItems: {
			armorJunk: 1
		}
	},
	tinkerArmB5: {
		time: 2,
		item: "armorBrute5",
		icon: require("@/assets/art/combat/items/arm_b5.png"),
		xp: 20,
		requiredLevel: 48,
		requiredItems: {
			armorJunk: 1
		}
	},
}

export const ACTIONS_SPACE_SUITS = {
	tinkerArmS1: {
		time: 2,
		item: "armorBurn1",
		icon: require("@/assets/art/combat/items/arm_s1.png"),
		xp: 20,
		requiredLevel: 3,
		requiredItems: {
			spaceJunk: 1
		}
	},
	tinkerArmS2: {
		time: 2,
		item: "armorBurn2",
		icon: require("@/assets/art/combat/items/arm_s2.png"),
		xp: 20,
		requiredLevel: 14,
		requiredItems: {
			spaceJunk: 1
		}
	},
	tinkerArmS3: {
		time: 2,
		item: "armorBurn3",
		icon: require("@/assets/art/combat/items/arm_s3.png"),
		xp: 20,
		requiredLevel: 25,
		requiredItems: {
			spaceJunk: 1
		}
	},
	tinkerArmS4: {
		time: 2,
		item: "armorBurn4",
		icon: require("@/assets/art/combat/items/arm_s4.png"),
		xp: 20,
		requiredLevel: 36,
		requiredItems: {
			spaceJunk: 1
		}
	},
	tinkerArmS5: {
		time: 2,
		item: "armorBurn5",
		icon: require("@/assets/art/combat/items/arm_s5.png"),
		xp: 20,
		requiredLevel: 47,
		requiredItems: {
			spaceJunk: 1
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