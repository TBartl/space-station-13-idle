export const ITEMS = new Map([
	["potato", {
		name: "Potato",
		sellPrice: 1,
		icon: require("@/assets/art/botany/PlantPotato.png")
	}],
	["tomato", {
		name: "Tomato",
		sellPrice: 2,
		icon: require("@/assets/art/botany/PlantTomato.png")
	}],
	["banana", {
		name: "Banana",
		sellPrice: 5,
		icon: require("@/assets/art/botany/PlantBanana.png")
	}],
	["flowersun", {
		name: "Sunflower",
		sellPrice: 8,
		icon: require("@/assets/art/botany/PlantFlowersun.png")
	}],
	["mushroom", {
		name: "Glowshroom",
		sellPrice: 10,
		icon: require("@/assets/art/botany/PlantShroomglow.png")
	}],
	["pepper", {
		name: "Hot Pepper",
		sellPrice: 10,
		icon: require("@/assets/art/botany/PlantPepperhot.png")
	}],
	["potatobattery", {
		name: "Potato Battery",
		sellPrice: 12,
		icon: require("@/assets/art/botany/PlantPotatobattery.png")
	}],
	["tomatoblue", {
		name: "Blue Tomato",
		sellPrice: 23,
		icon: require("@/assets/art/botany/PlantTomatoblue.png")
	}],
	["bananamime", {
		name: "...",
		sellPrice: 27,
		icon: require("@/assets/art/botany/PlantBananamime.png")
	}],
	["flowermoon", {
		name: "Moonflower",
		sellPrice: 30,
		icon: require("@/assets/art/botany/PlantFlowermoon.png")
	}],
	["mushroomred", {
		name: "Glowcap",
		sellPrice: 10,
		icon: require("@/assets/art/botany/PlantShroomred.png")
	}],	
	["peppercold", {
		name: "Ice Pepper",
		sellPrice: 44,
		icon: require("@/assets/art/botany/PlantPeppercold.png")
	}],
	["orange", {
		name: "Orange",
		sellPrice: 12,
		icon: require("@/assets/art/botany/PlantOrange.png")
	}],
	["tomatobluespace", {
		name: "Bluespace Tomato",
		sellPrice: 23,
		icon: require("@/assets/art/botany/PlantTomatobluespace_anim.gif")
	}],
	["bananablue", {
		name: "Blue Banana",
		sellPrice: 27,
		icon: require("@/assets/art/botany/PlantBananablue.png")
	}],
	["flowernova", {
		name: "Novaflower",
		sellPrice: 30,
		icon: require("@/assets/art/botany/PlantFlowernova.png")
	}],
	["mushroomshadow", {
		name: "Shadowshroom",
		sellPrice: 10,
		icon: require("@/assets/art/botany/PlantShroomshadow.png")
	}],	
	["pepperghost", {
		name: "Ghost Pepper",
		sellPrice: 44,
		icon: require("@/assets/art/botany/PlantPepperghost.png")
	}],
	["orange3d", {
		name: "Multidimensional Orange",
		sellPrice: 12,
		icon: require("@/assets/art/botany/PlantOrange3d_anim.gif")
	}],
	["tomatokiller", {
		name: "Killer Tomato",
		sellPrice: 23,
		icon: require("@/assets/art/botany/PlantTomatokiller.png")
	}],	
]);

export const ACTIONS = {
	growPotato: {
		time: 1.5,
		item: "potato",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		xp: 5,
		requiredLevel: 1
	},
	growTomato: {
		time: 1.5,
		item: "tomato",
		icon: require("@/assets/art/botany/TrayTomato.gif"),
		xp: 5,
		requiredLevel: 1
	},
	growBanana: {
		time: 1.5,
		item: "banana",
		icon: require("@/assets/art/botany/TrayBanana.gif"),
		xp: 5,
		requiredLevel: 8
	},
	growFlowersun: {
		time: 1.5,
		item: "flowersun",
		icon: require("@/assets/art/botany/TrayFlowersun.gif"),
		xp: 5,
		requiredLevel: 8
	},
	growMushroom: {
		time: 1.5,
		item: "mushroom",
		icon: require("@/assets/art/botany/TrayShroomglow.gif"),
		xp: 5,
		requiredLevel: 16
	},
	growPepper: {
		time: 1.5,
		item: "pepper",
		icon: require("@/assets/art/botany/TrayPepperhot.gif"),
		xp: 5,
		requiredLevel: 16
	},
	growPotatobattery: {
		time: 1.5,
		item: "potatobattery",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		xp: 5,
		requiredLevel: 23
	},
	growTomatoblue: {
		time: 1.5,
		item: "tomatoblue",
		icon: require("@/assets/art/botany/TrayTomatoblue.gif"),
		xp: 5,
		requiredLevel: 23
	},
	growBananamime: {
		time: 1.5,
		item: "bananamime",
		icon: require("@/assets/art/botany/TrayBananamime.gif"),
		xp: 5,
		requiredLevel: 29
	},
	growFlowermoon: {
		time: 1.5,
		item: "flowermoon",
		icon: require("@/assets/art/botany/TrayFlowermoon.gif"),
		xp: 5,
		requiredLevel: 29
	},
	growMushroomred: {
		time: 1.5,
		item: "mushroomred",
		icon: require("@/assets/art/botany/TrayShroomred.gif"),
		xp: 5,
		requiredLevel: 34
	},
	growPeppercold: {
		time: 1.5,
		item: "peppercold",
		icon: require("@/assets/art/botany/TrayPeppercold.gif"),
		xp: 5,
		requiredLevel: 34
	},
	growOrange: {
		time: 1.5,
		item: "orange",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		xp: 5,
		requiredLevel: 38
	},
	growTomatobluespace: {
		time: 1.5,
		item: "tomatobluespace",
		icon: require("@/assets/art/botany/TrayTomatobluespace.gif"),
		xp: 5,
		requiredLevel: 38
	},
	growBananablue: {
		time: 1.5,
		item: "bananablue",
		icon: require("@/assets/art/botany/TrayBananablue.gif"),
		xp: 5,
		requiredLevel: 42
	},
	growFlowernova: {
		time: 1.5,
		item: "flowernova",
		icon: require("@/assets/art/botany/TrayFlowernova.gif"),
		xp: 5,
		requiredLevel: 42
	},
	growMushroomshadow: {
		time: 1.5,
		item: "mushroomshadow",
		icon: require("@/assets/art/botany/TrayShroomshadow.gif"),
		xp: 5,
		requiredLevel: 46
	},
	growPepperghost: {
		time: 1.5,
		item: "pepperghost",
		icon: require("@/assets/art/botany/TrayPepperghost.gif"),
		xp: 5,
		requiredLevel: 46
	},
	growOrange3d: {
		time: 1.5,
		item: "Orange3d",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		xp: 5,
		requiredLevel: 50
	},
	growTomatokiller: {
		time: 1.5,
		item: "tomatokiller",
		icon: require("@/assets/art/botany/TrayTomatokiller.gif"),
		xp: 5,
		requiredLevel: 50
	},
}

export const JOB = {
	id: "botany",
	name: "Botany",
	icon: require("@/assets/art/botany/icon.png"),
	color: "#3df000",
	items: ITEMS
}

export function finishAction(commit, actionId) {
	var action = ACTIONS[actionId];
	commit("obtainItem", { itemId: action.item }, { root: true });
	commit("addXP", action.xp);
}