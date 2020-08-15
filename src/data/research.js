export const ACTIONS = {
	makeToolEngineering: {
		time: 5,
		item: "toolEngineering",
		icon: require("@/assets/art/research/tools/multitool.png"),
		xp: 5,
		requiredItems: {
			iron: 3,
			glass: 1
		},
		requiredLevel: 1
	},
}

export const JOB = {
	id: "research",
	name: "R&D",
	icon: require("@/assets/art/research/researchJobIcon.png"),
	color: "#fc03db"//hot pink
}