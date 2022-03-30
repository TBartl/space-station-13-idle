export default {
	facePrescription: {
		name: "Prescription Glasses",
		sellPrice: 5,
		icon: require("@/assets/art/combat/items/face/prescription_glasses.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/prescription_glasses_overlay.png"),
		stats: {
			precision: 1,
			protection: -1,
		},
		requires: {
			precision: 1
		}
	},
	//original face items
	faceMeson: {
		name: "Meson Goggles",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_meson.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_meson_overlay.png"),
		stats: {
			maxHealth: 20,
			evasion: 3,
			protection: -6,
			precision: 3,
			power: 3,
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
			maxHealth: 20,
			evasion: 0,
			protection: 0,
			precision: 3,
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
			maxHealth: 20,
			evasion: 0,
			protection: 3,
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
			maxHealth: 20,
			evasion: 0,
			protection: -4,
			precision: 7,
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
			maxHealth: 30,
			evasion: 2,
			protection: 0,
			precision: 0,
			power: 2,
		},
		requires: {
			evasion: 30,
		}
	},
	faceWrestle: {
		name: "Wrestling Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_wrestle.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_wrestle_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 2,
			protection: 0,
			precision: 2,
			power: 0,
		},
		requires: {
			evasion: 30,
		}
	},
	faceGas: {
		name: "Gas Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_gas.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_gas_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 0,
			protection: 0,
			precision: 2,
			power: 2,
		},
		requires: {
			evasion: 30,
		}
	},
	faceFox: {
		name: "Fox Mask",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/face_fox.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face_fox_overlay.png"),
		stats: {
			maxHealth: 30,
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
			maxHealth: 30,
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
			maxHealth: 30,
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
			maxHealth: -90,
			evasion: 9,
			protection: -11,
			precision: 9,
			power: 9,
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
		overlay: require("@/assets/art/combat/items/face_clown_overlay.png"),
		stats: {
			maxHealth: 170,
			evasion: 0,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 25,
		}
	},
//round 2 face items
	faceMeson2: {
		name: "T-Ray Meson Goggles",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_tray.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_tray_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 4,
			protection: -6,
			precision: 4,
			power: 4,
		},
		requires: {
			evasion: 20,
		}
	},
	faceMedHud2: {
		name: "Health-Science HUD",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_medsci.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_medsci_overlay_anim.gif"),
		stats: {
			maxHealth: 30,
			evasion: 0,
			protection: 0,
			precision: 5,
			power: 0,
		},
		requires: {
			evasion: 20,
		}
	},
	faceSecGlasssesss: {
		name: "SecHUD Gar Glasses",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_secgar.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_secgar_overlay.png"),
		stats: {
			maxHealth: 40,
			evasion: 0,
			protection: 6,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 20,
		}
	},
	faceScience2: {
		name: "Night Vision Goggles",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_nvg.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_nvg_anim_overlay.gif"),
		stats: {
			maxHealth: 30,
			evasion: 0,
			protection: -6,
			precision: 11,
			power: 0,
		},
		requires: {
			evasion: 20,
		}
	},
	faceTiki2: {
		name: "Rangi Mask",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_tiki2.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_tiki2_overlay.png"),
		stats: {
			maxHealth: 60,
			evasion: 4,
			protection: 0,
			precision: 0,
			power: 4,
		},
		requires: {
			evasion: 40,
		}
	},
	faceWrestle2: {
		name: "Luchador Mask",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_wrestle2.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_wrestle2_overlay.png"),
		stats: {
			maxHealth: 60,
			evasion: 4,
			protection: 0,
			precision: 4,
			power: 0,
		},
		requires: {
			evasion: 40,
		}
	},
	faceGas2: {
		name: "Captain's Gas Mask",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_gas2.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_gas2_overlay.png"),
		stats: {
			maxHealth: 60,
			evasion: 0,
			protection: 0,
			precision: 4,
			power: 4,
		},
		requires: {
			evasion: 40,
		}
	},
	faceFox2: {
		name: "Bee Mask",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_fox2.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_fox2_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 0,
			protection: 0,
			precision: 6,
			power: 0,
		},
		requires: {
			evasion: 40,
		}
	},
	faceSec2: {
		name: "SWAT Mask",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_sec2.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_sec2_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 0,
			protection: 0,
			precision: 0,
			power: 6,
		},
		requires: {
			evasion: 40,
		}
	},
	faceSyndicate2: {
		name: "Syndicate Balaclava",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_syndicate2.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_syndicate2_overlay.png"),
		stats: {
			maxHealth: 50,
			evasion: 6,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 40,
		}
	},
	faceMime2: {
		name: "Sexy Mime Mask",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_mimesexy.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_mimesexy_overlay.png"),
		stats: {
			maxHealth: -120,
			evasion: 12,
			protection: -15,
			precision: 12,
			power: 12,
		},
		requires: {
			evasion: 35,
		}
	},
	faceClown2: {
		name: "Sexy Clown Mask",
		sellPrice: 1848,
		icon: require("@/assets/art/combat/items/face/face_clownsexy.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/face_clownsexy_overlay.png"),
		stats: {
			maxHealth: 240,
			evasion: 0,
			protection: 0,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 35,
		}
	},

	//changeling face items
	faceLing0: {
		name: "Ashen Disguise",
		sellPrice: 253,
		icon: require("@/assets/art/ling/ling1.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/ling1_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 2,
			precision: 0,
			power: 2,
		},
		requires: {
			evasion: 1,
		}
	},
	faceLing1: {
		name: "Smokey Disguise",
		sellPrice: 380,
		icon: require("@/assets/art/ling/ling2.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/ling2_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 2,
			precision: 2,
			power: 0,
		},
		requires: {
			evasion: 1,
		}
	},
	faceLing2: {
		name: "Kind Disguise",
		sellPrice: 507,
		icon: require("@/assets/art/ling/ling3.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/ling3_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 0,
			precision: 2,
			power: 2,
		},
		requires: {
			evasion: 1,
		}
	},
	faceLing3: {
		name: "Popular Disguise",
		sellPrice: 634,
		icon: require("@/assets/art/ling/ling4.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/ling4_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 0,
			precision: 4,
			power: 0,
		},
		requires: {
			evasion: 1,
		}
	},
	faceLing4: {
		name: "Efficient Disguise",
		sellPrice: 761,
		icon: require("@/assets/art/ling/ling5.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/ling5_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 0,
			precision: 0,
			power: 4,
		},
		requires: {
			evasion: 1,
		}
	},
	faceLing5: {
		name: "Soft Disguise",
		sellPrice: 870,
		icon: require("@/assets/art/ling/ling6.png"),
		equipmentSlot: "face",
		overlay: require("@/assets/art/combat/items/face/ling6_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 4,
			precision: 0,
			power: 0,
		},
		requires: {
			evasion: 1,
		}
	},
}