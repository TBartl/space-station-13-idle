export const ACTIONS = {
	blood1: {
		time: 1,
		item: "unholyfavor",
		icon: require("@/assets/art/cult/blood.png"),
		xp: 5,
		requiredLevel: 10
	},
	renounce: {
		time: 1,
		item: "unholyfavor",
		icon: require("@/assets/art/cult/bible.png"),
		xp: -100000,
		requiredLevel: 50,
	},
	runeN1: {
		time: 1,
		item: "runeN1",
		icon: require("@/assets/art/cult/Manifest_rune.png"),
		xp: 5,
		requiredLevel: 11,
		requiredItems: { unholyfavor: 1 }
	},
	runeN2: {
		time: 1,
		item: "runeN2",
		icon: require("@/assets/art/cult/Boil_rune.png"),
		xp: 5,
		requiredLevel: 20,
		requiredItems: { unholyfavor: 1 }
	},
	runeN3: {
		time: 1,
		item: "runeN3",
		icon: require("@/assets/art/cult/Raisedead_rune.png"),
		xp: 5,
		requiredLevel: 30,
		requiredItems: { unholyfavor: 1 }
	},
	runeN4: {
		time: 1,
		item: "runeN4",
		icon: require("@/assets/art/cult/Apocalypse.png"),
		xp: 5,
		requiredLevel: 40,
		requiredItems: { unholyfavor: 1 }
	},
	runeN5: {
		time: 1,
		item: "runeN5",
		icon: require("@/assets/art/cult/Rune_large.png"),
		xp: 5,
		requiredLevel: 50,
		requiredItems: { unholyfavor: 1 }
	},
	runeB1: {
		time: 1,
		item: "runeB1",
		icon: require("@/assets/art/cult/Sacrifice_rune.png"),
		xp: 5,
		requiredLevel: 15,
		requiredItems: { unholyfavor: 1 }
	},
	runeB2: {
		time: 1,
		item: "runeB2",
		icon: require("@/assets/art/cult/Empower_rune.png"),
		xp: 5,
		requiredLevel: 25,
		requiredItems: { unholyfavor: 1 }
	},
	runeB3: {
		time: 1,
		item: "runeB3",
		icon: require("@/assets/art/cult/Teleport_rune.png"),
		xp: 5,
		requiredLevel: 35,
		requiredItems: { unholyfavor: 1 }
	},
	runeB4: {
		time: 1,
		item: "runeB4",
		icon: require("@/assets/art/cult/Summon_rune.png"),
		xp: 5,
		requiredLevel: 45,
		requiredItems: { unholyfavor: 1 }
	},
	runeB5: {
		time: 1,
		item: "runeB5",
		icon: require("@/assets/art/cult/Huge_rune.png"),
		xp: 5,
		requiredLevel: 50,
		requiredItems: { unholyfavor: 1 }
	},
}

export const JOB = {
	id: "cult",
	name: "Cult",
	icon: require("@/assets/art/cult/Sacrifice_rune.png"),
	color: "#9266cc"
}