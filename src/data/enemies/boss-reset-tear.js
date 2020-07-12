const BOSSES = {
	doppleganger: {
		name: "Infinite-Timeline Doppelgänger",
		icon: require("@/assets/art/combat/enemies/boss/doppleganger.png"),
		validhuntable: false,
		stats: {
			maxHealth: 445,
			attackSpeed: 8.9,
			precision: 89,
			power: 89,
			evasion: 89,
			damageType: "burn",
			protection: 89
		},
		overrideRobustness: 189,
		item: "bluetimeEmpty"
	}
}

export default BOSSES;