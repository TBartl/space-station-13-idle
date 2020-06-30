import ITEMS from "@/data/items";
import { MAX_LEVEL } from "@/data/experience";

const ACTIONS = {
	growPotato: {
		time: 20,
		item: "potato",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growTomato: {
		time: 20,
		item: "tomato",
		icon: require("@/assets/art/botany/TrayTomato.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growBanana: {
		time: 20,
		item: "banana",
		icon: require("@/assets/art/botany/TrayBanana.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growFlowersun: {
		time: 20,
		item: "flowerSun",
		icon: require("@/assets/art/botany/TrayFlowersun.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growMushroom: {
		time: 20,
		item: "mushroom",
		icon: require("@/assets/art/botany/TrayShroomglow.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growPepper: {
		time: 20,
		item: "pepper",
		icon: require("@/assets/art/botany/TrayPepperhot.gif"),
		requiredItems: { plantSeed: 3 }
	},
	growPotatobattery: {
		time: 20,
		item: "potatoBattery",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		requiredItems: { plantSeed: 5 }
	},
	growTomatoblue: {
		time: 20,
		item: "tomatoBlue",
		icon: require("@/assets/art/botany/TrayTomatoblue.gif"),
		requiredItems: { plantSeed: 5 }
	},
	growBananamime: {
		time: 20,
		item: "bananaMime",
		icon: require("@/assets/art/botany/TrayBananamime.gif"),
		requiredItems: { plantSeed: 5 }
	},
	growFlowermoon: {
		time: 20,
		item: "flowerMoon",
		icon: require("@/assets/art/botany/TrayFlowermoon.gif"),
		requiredItems: { plantSeed: 5 }
	},
	growMushroomred: {
		time: 20,
		item: "mushroomRed",
		icon: require("@/assets/art/botany/TrayShroomred.gif"),
		requiredItems: { plantSeed: 5 }
	},
	growPeppercold: {
		time: 20,
		item: "peppercold",
		icon: require("@/assets/art/botany/TrayPeppercold.gif"),
		requiredItems: { plantSeed: 5 }
	},
	growOrange: {
		time: 20,
		item: "orange",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		requiredItems: { plantSeed: 7 }
	},
	growTomatobluespace: {
		time: 20,
		item: "tomatoBluespace",
		icon: require("@/assets/art/botany/TrayTomatobluespace.gif"),
		requiredItems: { plantSeed: 7 }
	},
	growBananablue: {
		time: 20,
		item: "bananaBlue",
		icon: require("@/assets/art/botany/TrayBananablue.gif"),
		requiredItems: { plantSeed: 7 }
	},
	growFlowernova: {
		time: 20,
		item: "flowerNova",
		icon: require("@/assets/art/botany/TrayFlowernova.gif"),
		requiredItems: { plantSeed: 7 }
	},
	growMushroomshadow: {
		time: 20,
		item: "mushroomShadow",
		icon: require("@/assets/art/botany/TrayShroomshadow.gif"),
		requiredItems: { plantSeed: 7 }
	},
	growPepperghost: {
		time: 20,
		item: "pepperGhost",
		icon: require("@/assets/art/botany/TrayPepperghost.gif"),
		requiredItems: { plantSeed: 7 }
	},
	growOrange3d: {
		time: 20,
		item: "orange3d",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		requiredItems: { plantSeed: 10 }
	},
	growTomatokiller: {
		time: 20,
		item: "companionKillerTomato",
		icon: require("@/assets/art/botany/TrayTomatokiller.gif"),
		requiredItems: { plantSeed: 10 }
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