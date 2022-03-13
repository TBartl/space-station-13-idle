export const TOOLS = {
	makeToolMining: {
		time: 5,
		item: "toolMining",
		icon: require("@/assets/art/research/tools/toolMining.png"),
		xp: 5,
		requiredItems: {
			silver: 5,
			lithium: 4
		},
		requiredLevel: 1,
		requiredUpgrade: "toolMining",
	},
	makeToolEngineering: {
		time: 1.5,
		item: "toolEngineering",
		icon: require("@/assets/art/research/tools/toolEngineering.png"),
		xp: 1.5,
		requiredItems: {
			glass: 1,
			power: 4
		},
		requiredLevel: 1,
		requiredUpgrade: "toolEngineering",
	},
	makeToolFabrication: {
		time: 5,
		item: "toolFabrication",
		icon: require("@/assets/art/research/tools/toolFabrication.png"),
		xp: 5,
		requiredItems: {
			wire: 2,
			iron: 2
		},
		requiredLevel: 1,
		requiredUpgrade: "toolFabrication",
	},
	makeToolGraytiding: {
		time: 5,
		item: "toolGraytiding",
		icon: require("@/assets/art/research/tools/toolGraytiding.png"),
		xp: 5,
		requiredItems: {
			junk: 2,
			silver: 2
		},
		requiredLevel: 1,
		requiredUpgrade: "toolGraytiding",
	},
	makeToolTinkering: {
		time: 2.5,
		item: "toolTinkering",
		icon: require("@/assets/art/research/tools/toolTinkering.png"),
		xp: 2.5,
		requiredItems: {
			gold: 1,
			power: 4
		},
		requiredLevel: 1,
		requiredUpgrade: "toolTinkering",
	},
	makeToolBotany: {
		time: 5,
		item: "toolBotany",
		icon: require("@/assets/art/research/tools/toolBotany.png"),
		xp: 5,
		requiredItems: {
			plantSeed: 10,
			uranium: 1
		},
		requiredLevel: 1,
		requiredUpgrade: "toolBotany",
	},
	makeToolCooking: {
		time: 5,
		item: "toolCooking",
		icon: require("@/assets/art/research/tools/toolCooking.png"),
		xp: 5,
		requiredItems: {
			toolEngineering: 2,
			glass: 2
		},
		requiredLevel: 1,
		requiredUpgrade: "toolCooking",
	},
	makeToolBartending: {
		time: 7.5,
		item: "toolBartending",
		icon: require("@/assets/art/research/tools/toolBartending.png"),
		xp: 7.5,
		requiredItems: {
			slimeMetal: 8,
			wire: 10,
			titanium: 1
		},
		requiredLevel: 1,
		requiredUpgrade: "toolBartending",
	},
	makeToolXenobiology: {
		time: 5,
		item: "toolXenobiology",
		icon: require("@/assets/art/research/tools/toolXenobiology_anim.gif"),
		xp: 5,
		requiredItems: {
			potionBotany: 1,
			plasma: 3
		},
		requiredLevel: 1,
		requiredUpgrade: "toolXenobiology",
	},
	toolChemistry: {
		time: 5,
		item: "toolChemistry",
		icon: require("@/assets/art/research/tools/toolChemistry.png"),
		xp: 5,
		requiredItems: {
			silver: 1,
			gold: 1,
			money: 500
		},
		requiredLevel: 1,
		requiredUpgrade: "toolChemistry",
	},
	toolShitposting: {
		time: 5,
		item: "toolShitposting",
		icon: require("@/assets/art/research/tools/toolShitposting.png"),
		xp: 5,
		requiredItems: {
			potionShitposting: 1,
			money: 5000,
			bananium: 1
		},
		requiredLevel: 1,
		requiredUpgrade: "toolShitposting",
	},
	toolCargonia: {
		time: 5,
		item: "toolCargonia",
		icon: require("@/assets/art/research/tools/toolCargonia.png"),
		xp: 5,
		requiredItems: {
			diamond: 10,
			drinkManlyDorf: 1
		},
		requiredLevel: 1,
		requiredUpgrade: "toolCargonia",
	},
	toolCult: {
		time: 5,
		item: "toolCult",
		icon: require("@/assets/art/research/tools/toolCult.png"),
		xp: 5,
		requiredItems: {
			foodMeatH: 5,
			iron: 10
		},
		requiredLevel: 1,
		requiredUpgrade: "toolCult",
	},
	toolLing: {
		time: 45,
		item: "toolLing",
		icon: require("@/assets/art/research/tools/toolLing.png"),
		xp: 45,
		requiredItems: {
			uranium: 20,
			tomatoBluespace: 20
		},
		requiredLevel: 1,
		requiredUpgrade: "toolLing",
	},
}

export const FACEWEAR = {
	makeFacePrescription: {
		time: 60,
		item: "facePrescription",
		icon: require("@/assets/art/combat/items/face/prescription_glasses.png"),
		xp: 60,
		requiredItems: {
			glass: 2
		},
		requiredLevel: 5,
		requiredUpgrade: "facePrescription",
	},
	makeFaceMeson2: {
		time: 60,
		item: "faceMeson2",
		icon: require("@/assets/art/combat/items/face/face_tray.png"),
		xp: 60,
		requiredItems: {
			faceMeson: 2
		},
		requiredLevel: 25,
		requiredUpgrade: "faceMeson2",
	},
	makeFaceMedHud2: {
		time: 60,
		item: "faceMedHud2",
		icon: require("@/assets/art/combat/items/face/face_medsci.png"),
		xp: 60,
		requiredItems: {
			faceMedHud: 2
		},
		requiredLevel: 26,
		requiredUpgrade: "faceMedHud2",
	},
	makeFaceSecGlasssesss: {
		time: 60,
		item: "faceSecGlasssesss",
		icon: require("@/assets/art/combat/items/face/face_secgar.png"),
		xp: 60,
		requiredItems: {
			faceSecGlassess: 2
		},
		requiredLevel: 27,
		requiredUpgrade: "faceSecGlasssesss",
	},
	makeFaceScience2: {
		time: 60,
		item: "faceScience2",
		icon: require("@/assets/art/combat/items/face/face_nvg.png"),
		xp: 60,
		requiredItems: {
			faceScience: 2
		},
		requiredLevel: 28,
		requiredUpgrade: "faceScience2",
	},
	makeFaceTiki2: {
		time: 60,
		item: "faceTiki2",
		icon: require("@/assets/art/combat/items/face/face_tiki2.png"),
		xp: 60,
		requiredItems: {
			faceTiki: 2
		},
		requiredLevel: 29,
		requiredUpgrade: "faceTiki2",
	},
	makeFaceWrestle2: {
		time: 60,
		item: "faceWrestle2",
		icon: require("@/assets/art/combat/items/face/face_wrestle2.png"),
		xp: 60,
		requiredItems: {
			faceWrestle: 2
		},
		requiredLevel: 30,
		requiredUpgrade: "faceWrestle2",
	},
	makeFaceGas2: {
		time: 60,
		item: "faceGas2",
		icon: require("@/assets/art/combat/items/face/face_gas2.png"),
		xp: 60,
		requiredItems: {
			faceGas: 2
		},
		requiredLevel: 31,
		requiredUpgrade: "faceGas2",
	},
	makeFaceFox2: {
		time: 60,
		item: "faceFox2",
		icon: require("@/assets/art/combat/items/face/face_fox2.png"),
		xp: 60,
		requiredItems: {
			faceFox: 2
		},
		requiredLevel: 32,
		requiredUpgrade: "faceFox2",
	},
	makeFaceSec2: {
		time: 60,
		item: "faceSec2",
		icon: require("@/assets/art/combat/items/face/face_sec2.png"),
		xp: 60,
		requiredItems: {
			faceSec: 2
		},
		requiredLevel: 33,
		requiredUpgrade: "faceSec2",
	},
	makeFaceSyndicate2: {
		time: 60,
		item: "faceSyndicate2",
		icon: require("@/assets/art/combat/items/face/face_syndicate2.png"),
		xp: 60,
		requiredItems: {
			faceSyndicate: 2
		},
		requiredLevel: 34,
		requiredUpgrade: "faceSyndicate2",
	},
	makeFaceMime2: {
		time: 60,
		item: "faceMime2",
		icon: require("@/assets/art/combat/items/face/face_mimesexy.png"),
		xp: 60,
		requiredItems: {
			faceMime: 2
		},
		requiredLevel: 35,
		requiredUpgrade: "faceMime2",
	},
	makeFaceClown2: {
		time: 60,
		item: "faceClown2",
		icon: require("@/assets/art/combat/items/face/face_clownsexy.png"),
		xp: 60,
		requiredItems: {
			faceClown: 2
		},
		requiredLevel: 36,
		requiredUpgrade: "faceClown2",
	}
}

Object.values(TOOLS).forEach(action => { action.type = "tools" });
Object.values(FACEWEAR).forEach(action => { action.type = "facewear" });

export const ACTIONS = {
	...TOOLS,
	...FACEWEAR
}

export const JOB = {
	id: "research",
	name: "R&D",
	icon: require("@/assets/art/research/researchJobIcon.png"),
	color: "#fc03db"//hot pink
}
