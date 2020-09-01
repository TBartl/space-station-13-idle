export const TOOLS = {
	makeToolEngineering: {
		time: 5,
		item: "toolEngineering",
		icon: require("@/assets/art/research/tools/toolEngineering.png"),
		xp: 5,
		requiredItems: {
			iron: 3,
			glass: 1
		},
		requiredLevel: 1,
		requiredUpgrade: "toolEngineering",
	},
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
}

export const FACEWEAR = {
	makeFacePrescription: {
		time: 60,
		item: "facePrescription",
		icon: require("@/assets/art/combat/items/face/prescription_glasses.png"),
		xp: 50,
		requiredItems: {
			glass: 2
		},
		requiredLevel: 1,
		requiredUpgrade: "facePrescription",
	},
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
