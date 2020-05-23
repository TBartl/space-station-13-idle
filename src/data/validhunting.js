export const ITEMS = {
	innocent: {
		name: "BWOINK",
		sellPrice: -10,
		icon: require("@/assets/art/validhunting/innocent.png")
	},
	criminal: {
		name: "Valid Points",
		sellPrice: 0,
		icon: require("@/assets/art/validhunting/guilty.png")
	}
}

export const JOB = {
	id: "validhunting",
	name: "Validhunting",
	icon: require("@/assets/art/validhunting/icon.png"),
	color: "#A30000",
	items: ITEMS,
	isCombat: true
}
