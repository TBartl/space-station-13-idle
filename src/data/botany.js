import ITEMS from "@/data/items";
import { MAX_LEVEL } from "@/data/experience";

const ACTIONS = {
	growPotato: {
		time: 20,
		item: "potato",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		requiredItems: { plantSeed: 1 }
	},
	growTomato: {
		time: 20,
		item: "tomato",
		icon: require("@/assets/art/botany/TrayTomato.gif"),
		requiredItems: { plantSeed: 1 }
	},
	growBanana: {
		time: 20,
		item: "banana",
		icon: require("@/assets/art/botany/TrayBanana.gif"),
		requiredItems: { plantSeed: 1 }
	},
	growFlowersun: {
		time: 20,
		item: "flowersun",
		icon: require("@/assets/art/botany/TrayFlowersun.gif"),
		requiredItems: { plantSeed: 1 }
	},
	growMushroom: {
		time: 20,
		item: "mushroom",
		icon: require("@/assets/art/botany/TrayShroomglow.gif"),
		requiredItems: { plantSeed: 1 }
	},
	growPepper: {
		time: 20,
		item: "pepper",
		icon: require("@/assets/art/botany/TrayPepperhot.gif"),
		requiredItems: { plantSeed: 1 }
	},
	growPotatobattery: {
		time: 20,
		item: "potatobattery",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		requiredItems: { plantSeed: 2 }
	},
	growTomatoblue: {
		time: 20,
		item: "tomatoblue",
		icon: require("@/assets/art/botany/TrayTomatoblue.gif"),
		requiredItems: { plantSeed: 2 }
	},
	growBananamime: {
		time: 20,
		item: "bananamime",
		icon: require("@/assets/art/botany/TrayBananamime.gif"),
		requiredItems: { plantSeed: 2 }
	},
	growFlowermoon: {
		time: 20,
		item: "flowermoon",
		icon: require("@/assets/art/botany/TrayFlowermoon.gif"),
		requiredItems: { plantSeed: 2 }
	},
	growMushroomred: {
		time: 20,
		item: "mushroomred",
		icon: require("@/assets/art/botany/TrayShroomred.gif"),
		requiredItems: { plantSeed: 2 }
	},
	growPeppercold: {
		time: 20,
		item: "peppercold",
		icon: require("@/assets/art/botany/TrayPeppercold.gif"),
		requiredItems: { plantSeed: 2 }
	},
	growOrange: {
		time: 20,
		item: "orange",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growTomatobluespace: {
		time: 20,
		item: "tomatobluespace",
		icon: require("@/assets/art/botany/TrayTomatobluespace.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growBananablue: {
		time: 20,
		item: "bananablue",
		icon: require("@/assets/art/botany/TrayBananablue.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growFlowernova: {
		time: 20,
		item: "flowernova",
		icon: require("@/assets/art/botany/TrayFlowernova.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growMushroomshadow: {
		time: 20,
		item: "mushroomshadow",
		icon: require("@/assets/art/botany/TrayShroomshadow.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growPepperghost: {
		time: 20,
		item: "pepperghost",
		icon: require("@/assets/art/botany/TrayPepperghost.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growOrange3d: {
		time: 20,
		item: "orange3d",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		requiredItems: { plantSeed: 5 }
	},
	growTomatokiller: {
		time: 20,
		item: "companionKillerTomato",
		icon: require("@/assets/art/botany/TrayTomatokiller.gif"),
		requiredItems: { plantSeed: 5 }
	},
}

const MIN_LEVEL = 1;
Object.values(ACTIONS).forEach((action, index) => {
	action.tier = Math.min(action.requiredItems.plantSeed, 4);
	action.name = ITEMS[action.item].name;
	action.items = {
		id: action.item,
		count: [10, 20]
	}
	delete action.item;

	let level = Math.round(MIN_LEVEL + index / (Object.values(ACTIONS).length - 1) * (MAX_LEVEL - MIN_LEVEL));

	action.requiredLevel = level;
	action.xp = Math.max(5, action.time * level / 10);
});

export { ACTIONS };

export const JOB = {
	id: "botany",
	name: "Botany",
	icon: require("@/assets/art/botany/icon.png"),
	color: "#3df000"
}