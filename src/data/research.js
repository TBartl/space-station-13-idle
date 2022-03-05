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
		requiredUpgrade: "toolTinkering",
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
