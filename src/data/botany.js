import ITEMS from "@/data/items";

const ACTIONS = {
	growPotato: {
		time: 20,
		item: "potato",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		xp: 5,
		requiredLevel: 1,
		requiredItems: { plantSeed: 1 }
	},
	growTomato: {
		time: 20,
		item: "tomato",
		icon: require("@/assets/art/botany/TrayTomato.gif"),
		xp: 5,
		requiredLevel: 1,
		requiredItems: { plantSeed: 1 }
	},
	growBanana: {
		time: 20,
		item: "banana",
		icon: require("@/assets/art/botany/TrayBanana.gif"),
		xp: 5,
		requiredLevel: 8,
		requiredItems: { plantSeed: 1 }
	},
	growFlowersun: {
		time: 20,
		item: "flowersun",
		icon: require("@/assets/art/botany/TrayFlowersun.gif"),
		xp: 5,
		requiredLevel: 8,
		requiredItems: { plantSeed: 1 }
	},
	growMushroom: {
		time: 20,
		item: "mushroom",
		icon: require("@/assets/art/botany/TrayShroomglow.gif"),
		xp: 5,
		requiredLevel: 16,
		requiredItems: { plantSeed: 1 }
	},
	growPepper: {
		time: 20,
		item: "pepper",
		icon: require("@/assets/art/botany/TrayPepperhot.gif"),
		xp: 5,
		requiredLevel: 16,
		requiredItems: { plantSeed: 1 }
	},
	growPotatobattery: {
		time: 20,
		item: "potatobattery",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		xp: 5,
		requiredLevel: 23,
		requiredItems: { plantSeed: 2 }
	},
	growTomatoblue: {
		time: 20,
		item: "tomatoblue",
		icon: require("@/assets/art/botany/TrayTomatoblue.gif"),
		xp: 5,
		requiredLevel: 23,
		requiredItems: { plantSeed: 2 }
	},
	growBananamime: {
		time: 20,
		item: "bananamime",
		icon: require("@/assets/art/botany/TrayBananamime.gif"),
		xp: 5,
		requiredLevel: 29,
		requiredItems: { plantSeed: 2 }
	},
	growFlowermoon: {
		time: 20,
		item: "flowermoon",
		icon: require("@/assets/art/botany/TrayFlowermoon.gif"),
		xp: 5,
		requiredLevel: 29,
		requiredItems: { plantSeed: 2 }
	},
	growMushroomred: {
		time: 20,
		item: "mushroomred",
		icon: require("@/assets/art/botany/TrayShroomred.gif"),
		xp: 5,
		requiredLevel: 34,
		requiredItems: { plantSeed: 2 }
	},
	growPeppercold: {
		time: 20,
		item: "peppercold",
		icon: require("@/assets/art/botany/TrayPeppercold.gif"),
		xp: 5,
		requiredLevel: 34,
		requiredItems: { plantSeed: 2 }
	},
	growOrange: {
		time: 20,
		item: "orange",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		xp: 5,
		requiredLevel: 38,
		requiredItems: { plantSeed: 3 }
	},
	growTomatobluespace: {
		time: 20,
		item: "tomatobluespace",
		icon: require("@/assets/art/botany/TrayTomatobluespace.gif"),
		xp: 5,
		requiredLevel: 38,
		requiredItems: { plantSeed: 3 }
	},
	growBananablue: {
		time: 20,
		item: "bananablue",
		icon: require("@/assets/art/botany/TrayBananablue.gif"),
		xp: 5,
		requiredLevel: 42,
		requiredItems: { plantSeed: 3 }
	},
	growFlowernova: {
		time: 20,
		item: "flowernova",
		icon: require("@/assets/art/botany/TrayFlowernova.gif"),
		xp: 5,
		requiredLevel: 42,
		requiredItems: { plantSeed: 3 }
	},
	growMushroomshadow: {
		time: 20,
		item: "mushroomshadow",
		icon: require("@/assets/art/botany/TrayShroomshadow.gif"),
		xp: 5,
		requiredLevel: 46,
		requiredItems: { plantSeed: 3 }
	},
	growPepperghost: {
		time: 20,
		item: "pepperghost",
		icon: require("@/assets/art/botany/TrayPepperghost.gif"),
		xp: 5,
		requiredLevel: 46,
		requiredItems: { plantSeed: 3 }
	},
	growOrange3d: {
		time: 20,
		item: "orange3d",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		xp: 5,
		requiredLevel: 50,
		requiredItems: { plantSeed: 5 }
	},
	growTomatokiller: {
		time: 20,
		item: "companionKillerTomato",
		icon: require("@/assets/art/botany/TrayTomatokiller.gif"),
		xp: 5,
		requiredLevel: 50,
		requiredItems: { plantSeed: 5 }
	},
}

Object.values(ACTIONS).forEach(action => {
	action.tier = Math.min(action.requiredItems.plantSeed, 4);
	action.name = ITEMS[action.item].name;
	action.items = {
		id: action.item,
		count: [10, 20]
	}
	delete action.item;
});

export { ACTIONS };

export const JOB = {
	id: "botany",
	name: "Botany",
	icon: require("@/assets/art/botany/icon.png"),
	color: "#3df000"
}