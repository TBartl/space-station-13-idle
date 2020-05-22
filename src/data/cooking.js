export const ITEMS = {
	foodPasta1: {
		name: "Pasta",
		sellPrice: 0,
		icon: require("@/assets/art/cooking/pasta1.png")
	},
	foodPasta2: {
		name: "Double Pasta",
		sellPrice: 0,
		icon: require("@/assets/art/cooking/pasta2.png")
	},
}

export const ACTIONS = {
	cookPasta: {
		time: 1,
		name: "Pasta",
		item: "foodPasta1",
		icon: require("@/assets/art/cooking/pasta1.png"),
		xp: 5,
		requiredLevel: 1,
		requiredItems: {
			potato: 1
		}
	},
	cookPasta2: {
		time: 1,
		name: "Copy Pasta",
		item: "foodPasta2",
		icon: require("@/assets/art/cooking/pasta2_anim.gif"),
		xp: 5,
		requiredLevel: 2,
		requiredItems: {
			foodPasta1: 1
		}
	},
}

export const JOB = {
	id: "cooking",
	name: "Cooking",
	icon: require("@/assets/art/cooking/icon.png"),
	color: "#FFFFFF",
	items: ITEMS
}
