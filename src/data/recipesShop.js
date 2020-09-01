import { RESEARCH_RECIPES_I, RESEARCH_RECIPES_II } from "@/data/recipes";

export const SECTIONS = [
	{
		name: "Research Recipes I",
		purchases: Object.keys(RESEARCH_RECIPES_I)
	},
	{
		name: "Research Recipes II",
		purchases: Object.keys(RESEARCH_RECIPES_II)
	},
]

export const PURCHASES = {
	...RESEARCH_RECIPES_I,
	...RESEARCH_RECIPES_II,
}