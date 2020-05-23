const BASES = {
	synthOxygen: {
		item: "oxygen",
		time: 1,
		xp: 1,
		requiredLevel: 1,
		requiredItems: {
			power: 1
		}
	},
	synthOil: {
		item: "oil",
		time: 1,
		xp: 1,
		requiredLevel: 1,
		requiredItems: {
			power: 1
		}
	}
}

const POTIONS = {
	synthFaunaPerfume: {
		item: "faunaPerfume",
		time: 1,
		xp: 20,
		requiredLevel: 1,
		requiredItems: {
			oil: 2,
			oxygen: 1,
			iron: 1
		}
	},
	synthLube: {
		time: 1,
		item: "lube",
		xp: 5,
		requiredLevel: 1,
		requiredItems: {
			power: 100
		}
	}
}

export const ACTIONS = {
	...BASES,
	...POTIONS
}

export const JOB = {
	id: "chemistry",
	name: "Chemistry",
	icon: require("@/assets/art/chemistry/icon.png"),
	color: "#FFAE19",
}
