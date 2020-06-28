export default {
	faceMeson: {
		name: "Meson Goggles",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_meson.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_meson_overlay.png"),
		stats: {
			maxHealth: 2,
			evasion: 2,
			protection: -5,
			precision: 2,
			power: 2,
		},
		requires: {
			evasion: 10,
		}
	},
	faceMedHud: {
		name: "Health HUD Glasses",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_healthhud.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_healthhud_overlay.png"),
		stats: {
			maxHealth: 4,
			evasion: 0,
			protection: 0,
			precision: 2,
			power: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	faceSecGlassess: {
		name: "SecurityHUD Sunglasses",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_secglass.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_secglass_overlay.png"),
		stats: {
			maxHealth: 0,
			evasion: 0,
			protection: 5,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	faceScience: {
		name: "Science Goggles",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_science.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_science_overlay.png"),
		stats: {
			maxHealth: 0,
			evasion: 0,
			protection: -5,
			precision: 4,
			power: 0,
		},
		requires: {
			evasion: 10,
		}
	},
	faceTiki: {
		name: "Tiki Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_tiki.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_tiki_overlay.png"),
		stats: {
			maxHealth: 2,
			evasion: 2,
			protection: 0,
			precision: 0,
			power: 2,
		},
		requires: {
			evasion: 3,
		}
	},
	faceWrestle: {
		name: "Wrestling Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_wrestle.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_wrestle_overlay.png"),
		stats: {
			maxHealth: 2,
			evasion: 2,
			protection: 0,
			precision: 2,
			power: 0,
		},
		requires: {
			evasion: 3,
		}
	},
	faceGas: {
		name: "Gas Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_gas.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_gas_overlay.png"),
		stats: {
			maxHealth: 2,
			evasion: 0,
			protection: 0,
			precision: 2,
			power: 2,
		},
		requires: {
			evasion: 3,
		}
	},
	faceFox: {
		name: "Fox Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_fox.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_fox_overlay.png"),
		stats: {
			maxHealth: 4,
			evasion: 0,
			protection: 0,
			precision: 4,
			power: 0,
		},
		requires: {
			evasion: 30,
		}
	},
	faceSec: {
		name: "Security Hailer",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_sec.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_sec_overlay.png"),
		stats: {
			maxHealth: 4,
			evasion: 0,
			protection: 0,
			precision: 0,
			power: 4,
		},
		requires: {
			evasion: 30,
		}
	},
	faceSyndicate: {
		name: "Syndicate Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_syndicate.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_syndicate_overlay_anim.gif"),
		stats: {
			maxHealth: 4,
			evasion: 4,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 30,
		}
	},
	faceMime: {
		name: "Mime Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_mime.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_mime_overlay.png"),
		stats: {
			maxHealth: -10,
			evasion: 10,
			protection: -10,
			precision: 10,
			power: 10,
		},
		requires: {
			evasion: 25,
		}
	},
	faceClown: {
		name: "Clown Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_clown.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_mime_overlay.png"),
		stats: {
			maxHealth: 15,
			evasion: 0,
			protection: 0,
			precision: -10,
			power: 0,
		},
		requires: {
			evasion: 25,
		}
	},

}