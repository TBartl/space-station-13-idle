export const ITEMS = new Map([
	["item_slime_grey", {
		name: "Grey Slime Core",
		sellPrice: 0,
		icon: require("@/assets/art/xenobio/SlimeGrey.gif")
	}],
	["item_slime_orange", {
		name: "Orange Slime Core",
		sellPrice: 1,
		icon: require("@/assets/art/xenobio/SlimeOrange.gif")
	}],
	["item_slime_purple", {
		name: "Purple Slime Core",
		sellPrice: 1,
		icon: require("@/assets/art/xenobio/SlimePurple.gif")
	}],
	["item_slime_blue", {
		name: "Blue Slime Core",
		sellPrice: 1,
		icon: require("@/assets/art/xenobio/SlimeBlue.gif")
	}],
	["item_slime_metal", {
		name: "Metal Slime Core",
		sellPrice: 1,
		icon: require("@/assets/art/xenobio/SlimeMetal.gif")
	}],
	["item_slime_yellow", {
		name: "Yellow Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeYellow.gif")
	}],
	["item_slime_darkpurple", {
		name: "Dark Purple Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeDarkPurple.gif")
	}],
	["item_slime_darkblue", {
		name: "Dark Blue Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeDarkBlue.gif")
	}],
	["item_slime_silver", {
		name: "Silver Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeSilver.gif")
	}],
	["item_slime_bluespace", {
		name: "Bluespace Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeBluespace.gif")
	}],
	["item_slime_sepia", {
		name: "Sepia Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeSepia.gif")
	}],
	["item_slime_cerulean", {
		name: "Cerulean Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeCerulean.gif")
	}],
	["item_slime_pyrite", {
		name: "Pyrite Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimePyrite.gif")
	}],
	["item_slime_red", {
		name: "Red Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeRed.gif")
	}],
	["item_slime_green", {
		name: "Green Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeGreen.gif")
	}],
	["item_slime_pink", {
		name: "Pink Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimePink.gif")
	}],
	["item_slime_oil", {
		name: "Oil Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeOil.gif")
	}],
	["item_slime_black", {
		name: "Black Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeBlack.gif")
	}],
	["item_slime_lightpink", {
		name: "Light Pink Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeLightPink.gif")
	}],
	["item_slime_addy", {
		name: "Adamantite Slime Core",
		sellPrice: 2,
		icon: require("@/assets/art/xenobio/SlimeAddy.gif")
	}],
	["item_slime_rainbow", {
		name: "Rainbow Slime Core",
		sellPrice: 6,
		icon: require("@/assets/art/xenobio/SlimeRainbow.gif")
	}],
]);

export const ACTIONS = {
	splitGrey: {
		time: 1.5,
		item: "item_slime_grey",
		icon: require("@/assets/art/xenobio/SlimeGrey.gif"),
		xp: 5,
		requiredLevel: 1
	},
	splitOrange: {
		time: 1.5,
		item: "item_slime_orange",
		icon: require("@/assets/art/xenobio/SlimeOrange.gif"),
		xp: 5,
		requiredLevel: 4
	},
	splitPurple: {
		time: 1.5,
		item: "item_slime_purple",
		icon: require("@/assets/art/xenobio/SlimePurple.gif"),
		xp: 5,
		requiredLevel: 5
	},
	splitBlue: {
		time: 1.5,
		item: "item_slime_blue",
		icon: require("@/assets/art/xenobio/SlimeBlue.gif"),
		xp: 5,
		requiredLevel: 6
	},
	splitMetal: {
		time: 1.5,
		item: "item_slime_metal",
		icon: require("@/assets/art/xenobio/SlimeMetal.gif"),
		xp: 5,
		requiredLevel: 7
	},
	splitYellow: {
		time: 1.5,
		item: "item_slime_yellow",
		icon: require("@/assets/art/xenobio/SlimeYellow.gif"),
		xp: 5,
		requiredLevel: 14
	},
	splitDarkPurple: {
		time: 1.5,
		item: "item_slime_darkpurple",
		icon: require("@/assets/art/xenobio/SlimeDarkPurple.gif"),
		xp: 5,
		requiredLevel: 15
	},
	splitDarkBlue: {
		time: 1.5,
		item: "item_slime_darkblue",
		icon: require("@/assets/art/xenobio/SlimeDarkBlue.gif"),
		xp: 5,
		requiredLevel: 16
	},
	splitSilver: {
		time: 1.5,
		item: "item_slime_silver",
		icon: require("@/assets/art/xenobio/SlimeSilver.gif"),
		xp: 5,
		requiredLevel: 17
	},
	splitBluespace: {
		time: 1.5,
		item: "item_slime_bluespace",
		icon: require("@/assets/art/xenobio/SlimeBluespace.gif"),
		xp: 5,
		requiredLevel: 24
	},
	splitSepia: {
		time: 1.5,
		item: "item_slime_sepia",
		icon: require("@/assets/art/xenobio/SlimeSepia.gif"),
		xp: 5,
		requiredLevel: 25
	},
	splitCerulean: {
		time: 1.5,
		item: "item_slime_cerulean",
		icon: require("@/assets/art/xenobio/SlimeCerulean.gif"),
		xp: 5,
		requiredLevel: 26
	},
	splitPyrite: {
		time: 1.5,
		item: "item_slime_pyrite",
		icon: require("@/assets/art/xenobio/SlimePyrite.gif"),
		xp: 5,
		requiredLevel: 27
	},
	splitRed: {
		time: 1.5,
		item: "item_slime_red",
		icon: require("@/assets/art/xenobio/SlimeRed.gif"),
		xp: 5,
		requiredLevel: 34
	},
	splitGreen: {
		time: 1.5,
		item: "item_slime_green",
		icon: require("@/assets/art/xenobio/SlimeGreen.gif"),
		xp: 5,
		requiredLevel: 35
	},
	splitPink: {
		time: 1.5,
		item: "item_slime_pink",
		icon: require("@/assets/art/xenobio/SlimePink.gif"),
		xp: 5,
		requiredLevel: 36
	},
	splitGold: {
		time: 1.5,
		item: "item_slime_gold",
		icon: require("@/assets/art/xenobio/SlimeGold.gif"),
		xp: 5,
		requiredLevel: 37
	},
	splitOil: {
		time: 1.5,
		item: "item_slime_oil",
		icon: require("@/assets/art/xenobio/SlimeOil.gif"),
		xp: 5,
		requiredLevel: 44
	},
	splitBlack: {
		time: 1.5,
		item: "item_slime_black",
		icon: require("@/assets/art/xenobio/SlimeBlack.gif"),
		xp: 5,
		requiredLevel: 45
	},
	splitLightPink: {
		time: 1.5,
		item: "item_slime_lightpink",
		icon: require("@/assets/art/xenobio/SlimeLightPink.gif"),
		xp: 5,
		requiredLevel: 46
	},
	splitAddy: {
		time: 1.5,
		item: "item_slime_grey",
		icon: require("@/assets/art/xenobio/SlimeAddy.gif"),
		xp: 5,
		requiredLevel: 47
	},
	splitRainbow: {
		time: 1.5,
		item: "item_slime_rainbow",
		icon: require("@/assets/art/xenobio/SlimeRainbow.gif"),
		xp: 5,
		requiredLevel: 50
	},
}

export const JOB = {
	id: "xenobiology",
	name: "XenoBiology",
	icon: require("@/assets/art/xenobio/icon.gif"),
	color: "#95857a",
	items: ITEMS
}

export function finishAction(commit, actionId) {
	var action = ACTIONS[actionId];
	commit("obtainItem", { itemId: action.item }, { root: true });
	commit("addXP", action.xp);
}