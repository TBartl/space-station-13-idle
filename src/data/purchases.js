import { PURCHASES as SHOP_PURCHASES } from "@/data/shop";
import { PURCHASES as RECIPE_PURCHASES } from "@/data/recipesShop";
import { PURCHASES as CHRONO_PURCHASES } from "@/data/chrono";

export default {
	...SHOP_PURCHASES,
	...RECIPE_PURCHASES,
	...CHRONO_PURCHASES
}