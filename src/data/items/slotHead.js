export default {
	headCake: {
		name: "Cakehat",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/head_cakehat.png"),
		equipmentSlot: "head",
		overlay: require("@/assets/art/combat/items/head_cakehat_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires: {
			evasion: 3,
		}
	},
}