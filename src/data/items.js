import FOOD_BOTANY from "./items/foodBotany";
import FOOD_COOKING from "./items/foodCooking";
import FOOD_OTHER from "./items/foodOther";
import FOOD_BARTENDING from "./items/foodBartending";
import { RESOURCE_CHEMISTRY } from "./items/resourceChemistry";
import RESOURCE_ENGINEERING from "./items/resourceEngineering";
import RESOURCE_GRAYTIDING from "./items/resourceGraytiding";
import RESOURCE_TINKERING from "./items/resourceTinkering";
import RESOURCE_MINING from "./items/resourceMining";
import RESOURCE_SHITPOSTING from "./items/resourceShitposting";
import RESOURCE_VALIDHUNTING from "./items/resourceValidhunting";
import SHOP from "./items/shop";
import SLOT_CHEST from "./items/slotChest";
import SLOT_COMPANION from "./items/slotCompanion";
import SLOT_FACE from "./items/slotFace";
import SLOT_HAND from "./items/slotHand";
import SLOT_HEAD from "./items/slotHead";
import SLOT_JUMPSUIT from "./items/slotJumpsuit";
import SLOT_LIMB from "./items/slotLimb";
import SLOT_NECK from "./items/slotNeck";
import SLOT_POCKET from "./items/slotPocket";

const ITEMS = {
	...SHOP,
	...RESOURCE_VALIDHUNTING,
	...RESOURCE_ENGINEERING,
	...FOOD_OTHER,
	...FOOD_BOTANY,
	...FOOD_COOKING,
	...FOOD_BARTENDING,
	...RESOURCE_MINING,
	...RESOURCE_GRAYTIDING,
	...RESOURCE_TINKERING,
	...RESOURCE_CHEMISTRY,
	...RESOURCE_SHITPOSTING,
	...SLOT_FACE,
	...SLOT_HEAD,
	...SLOT_NECK,
	...SLOT_JUMPSUIT,
	...SLOT_CHEST,
	...SLOT_LIMB,
	...SLOT_HAND,
	...SLOT_POCKET,
	...SLOT_COMPANION
};

export default ITEMS;