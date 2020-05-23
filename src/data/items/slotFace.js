export default {
	faceMeson: {
		name: "Meson Goggles",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_meson.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_meson_overlay.png"),
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
	}
}