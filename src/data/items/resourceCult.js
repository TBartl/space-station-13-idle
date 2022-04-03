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
			maxHealth: -150,
			precision: -15,
			command: 20,
			power: 20,
			evasion: -20,
			attackSpeed: 2,
			protection: 3,
			regen: 3,
			damageType: "brute"
		},
		requires: {
			command: 25,
			meleePower: 25
		}
	}
}
