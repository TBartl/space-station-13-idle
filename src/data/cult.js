export const ACTIONS = {
	blood1: {
		time: 1,
		actionName: "Worship",
		item: "unholyfavor",
		icon: require("@/assets/art/cult/blood.png"),
		xp: 864,
		requiredLevel: 1,
		requiredItems: { startCult: 1 }
	},
	blood2: {
		time: 1,
		item: "unholyfavor",
		icon: require("@/assets/art/cult/blood.png"),
		xp: 5,
		requiredLevel: 10,
	},
	renounceCult: {
		time: 1,
		item: "antag",
		icon: require("@/assets/art/cult/bible.png"),
		xp: -200000,
		requiredLevel: 1,
	},
	runeN1: {
		time: 10,
		item: "runeN1",
		xp: 12,
		requiredLevel: 11,
		requiredItems: { unholyfavor: 1 }
	},
	runeN2: {
		time: 10,
		item: "runeN2",
		xp: 22,
		requiredLevel: 21,
		requiredItems: { unholyfavor: 1 }
	},
	runeN3: {
		time: 10,
		item: "runeN3",
		xp: 32,
		requiredLevel: 31,
		requiredItems: { unholyfavor: 1 }
	},
	runeN4: {
		time: 10,
		item: "runeN4",
		xp: 42,
		requiredLevel: 41,
		requiredItems: { unholyfavor: 1 }
	},
	runeN5: {
		time: 10,
		item: "runeN5",
		xp: 50,
		requiredLevel: 50,
		requiredItems: { unholyfavor: 1 }
	},
	runeB1: {
		time: 10,
		item: "runeB1",
		xp: 12,
		requiredLevel: 12,
		requiredItems: { unholyfavor: 1 }
	},
	runeB2: {
		time: 10,
		item: "runeB2",
		xp: 22,
		requiredLevel: 22,
		requiredItems: { unholyfavor: 1 }
	},
	runeB3: {
		time: 10,
		item: "runeB3",
		xp: 32,
		requiredLevel: 32,
		requiredItems: { unholyfavor: 1 }
	},
	runeB4: {
		time: 10,
		item: "runeB4",
		xp: 42,
		requiredLevel: 42,
		requiredItems: { unholyfavor: 1 }
	},
	runeB5: {
		time: 10,
		item: "runeB5",
		xp: 50,
		requiredLevel: 50,
		requiredItems: { unholyfavor: 1 }
	},
	sac1: {
		time: 20,
		item: "companionMousecult",
		xp: 230,
		requiredLevel: 13,
		requiredItems: { unholyfavor: 1 , companionMouse: 1 }
	},
	sac2: {
		time: 20,
		item: "companionDogcult",
		xp: 430,
		requiredLevel: 23,
		requiredItems: { unholyfavor: 1 , companionDog: 1 }
	},
	sac3: {
		time: 20,
		item: "companionCatcult",
		xp: 430,
		requiredLevel: 23,
		requiredItems: { unholyfavor: 1 , companionCat: 1 }
	},
	sac4: {
		time: 20,
		item: "companionFoxcult",
		xp: 63,
		requiredLevel: 33,
		requiredItems: { unholyfavor: 1 , companionFox: 1 }
	},
	sac5: {
		time: 20,
		item: "companionGoatcult",
		xp: 830,
		requiredLevel: 43,
		requiredItems: { unholyfavor: 1, companionGoat: 1  }
	},
	sac6: {
		time: 20,
		item: "companionBeecult",
		xp: 500,
		requiredLevel: 50,
		requiredItems: { unholyfavor: 1, companionBee: 1  }
	},
}

export const JOB = {
	id: "cult",
	name: "Cult",
	icon: require("@/assets/art/cult/Sacrifice_rune.png"),
	color: "#9266cc"
}