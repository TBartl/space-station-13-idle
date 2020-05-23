export const ACTIONS = {
	chemLube: {
		time: 1,
		name: "Space Lube",
		item: "lube",
		icon: require("@/assets/art/chemistry/lube.png"),
		xp: 5,
		requiredLevel: 1,
		requiredItems: {
			power: 100
		}
	}
}

export const JOB = {
	id: "chemistry",
	name: "Chemistry",
	icon: require("@/assets/art/chemistry/icon.png"),
	color: "#FFAE19",
}
