import { RESEARCH_RECIPES_I, RESEARCH_RECIPES_II, RESEARCH_RECIPES_III } from "@/data/recipes";

export const SECTIONS = [
	{
		name: "Research Recipes I: Simple Recipes & Tools",
		purchases: Object.keys(RESEARCH_RECIPES_I)
	},
	{
		name: "Research Recipes II: Facewear",
		purchases: Object.keys(RESEARCH_RECIPES_II)
	},
	{
		name: "Research Recipes III: Advanced Recipes",
		purchases: Object.keys(RESEARCH_RECIPES_III)
	},
]

export const PURCHASES = {
	...RESEARCH_RECIPES_I,
	...RESEARCH_RECIPES_II,
	...RESEARCH_RECIPES_III
}