export default {
	unholyfavor: {
		name: "Nar'sie's Favor",
		sellPrice: 66,
		icon: require("@/assets/art/cult/blood1.png")
	},
	cultBlade: {
		name: "Unholy Blade",
		sellPrice: 666,
		icon: require("@/assets/art/combat/items/cultblade.gif"),
		overlay: require("@/assets/art/combat/items/cultblade_overlay.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: -100,
			precision: -15,
			command: 15,
			power: 25,
			evasion: -20,
			attackspeed: 2,
			protection: 3,
			regen: 3
		},
		requires: {
			command: 25,
			meleePower: 25
		}
	}
}