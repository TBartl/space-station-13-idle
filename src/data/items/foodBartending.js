const DRINKS = {
	//t1power
	drinkWhiskey: {
		name: "Whiskey",
		sellPrice: 4,
		icon: require("@/assets/art/bartending/whiskey.png"),
		stats: {
			precision: 3,
			luck: 10,
		},
		healAmount: 10
	},
	drinkVodka: {
		name: "Vodka",
		sellPrice: 8,
		icon: require("@/assets/art/bartending/vodka.png"),
		stats: {
			power: 3,
			luck: 10,
		},
		healAmount: 10
	},
	drinkGin: {
		name: "Gin",
		sellPrice: 13,
		icon: require("@/assets/art/bartending/gin.png"),
		stats: {
			evasion: 3,
			luck: 10,
		},
		healAmount: 10
	},
	drinkRum: {
		name: "Rum",
		sellPrice: 17,
		icon: require("@/assets/art/bartending/rum.png"),
		stats: {
			luck: 16,
		},
		healAmount: 10
	},
	//t1slime
	drinkOrangeJuice: {
		name: "Orange Juice",
		sellPrice: 24,
		icon: require("@/assets/art/bartending/orangejuice.png"),
		stats: {
			precision: 3,
			regen: .25
		},
		healAmount: 10
	},
	drinkTomatoJuice: {
		name: "Tomato Juice",
		sellPrice: 28,
		icon: require("@/assets/art/bartending/tomatojuice.png"),
		stats: {
			power: 3,
			regen: .25
		},
		healAmount: 10
	},
	drinkCream: {
		name: "Cream",
		sellPrice: 32,
		icon: require("@/assets/art/bartending/cream.png"),
		stats: {
			evasion: 3,
			regen: .25
		},
		healAmount: 10
	},
	drinkSpaceCola: {
		name: "Space Cola",
		sellPrice: 36,
		icon: require("@/assets/art/bartending/spacecola.png"),
		stats: {
			regen: .4
		},
		healAmount: 10
	},
	//t2
	drinkManlyDorf: {
		name: "Manly Dorf",
		sellPrice: 46,
		icon: require("@/assets/art/bartending/manlydorf.png"),
		healAmount: 10,
		stats: {
			precision: 4,
			luck: 10,
		},
		healAmount: 20
	},
	drinkWhiskeyCola: {
		name: "Whiskey Cola",
		sellPrice: 50,
		icon: require("@/assets/art/bartending/whiskeycola.png"),
		healAmount: 10,
		stats: {
			power: 4,
			luck: 10,
		},
		healAmount: 20
	},
	drinkScrewdriver: {
		name: "Screwdriver",
		sellPrice: 54,
		icon: require("@/assets/art/bartending/screwdriver.png"),
		healAmount: 10,
		stats: {
			evasion: 4,
			luck: 10,
		},
		healAmount: 20
	},
	drinkBlackRussian: {
		name: "Black Russian",
		sellPrice: 58,
		icon: require("@/assets/art/bartending/blackrussian.png"),
		stats: {
			luck: 18,
		},
		healAmount: 20
	},
	//t2slime
	drinkSilencer: {
		name: "Silencer",
		sellPrice: 64,
		icon: require("@/assets/art/bartending/silencer.png"),
		healAmount: 20,
		stats: {
			precision: 4,
			regen: .25
		},
		healAmount: 20
	},
	drinkAcidSpit: {
		name: "Acid Spit",
		sellPrice: 68,
		icon: require("@/assets/art/bartending/anim/acidspit.gif"),
		healAmount: 20,
		stats: {
			power: 4,
			regen: .25
		},
		healAmount: 20
	},
	drinkArnoldPalmer: {
		name: "Arnold Palmer",
		sellPrice: 72,
		icon: require("@/assets/art/bartending/arnoldpalmer.png"),
		healAmount: 20,
		stats: {
			evasion: 4,
			regen: .25
		},
		healAmount: 20
	},
	drinkWhiteRussian: {
		name: "White Russian",
		sellPrice: 76,
		icon: require("@/assets/art/bartending/whiterussian.png"),
		stats: {
			regen: .45
		},
		healAmount: 20
	},
	//t3power
	drinkTequila: {
		name: "Tequila",
		sellPrice: 175,
		icon: require("@/assets/art/bartending/tequila.png"),
		stats: {
			precision: 5,
			luck: 10,
		},
		healAmount: 30
	},
	drinkLemonJuice: {
		name: "Lemon Juice",
		sellPrice: 183,
		icon: require("@/assets/art/bartending/lemonjuice.png"),
		stats: {
			power: 5,
			luck: 10,
		},
		healAmount: 30
	},
	drinkManhattan: {
		name: "Manhattan",
		sellPrice: 192,
		icon: require("@/assets/art/bartending/manhattan.png"),
		stats: {
			evasion: 5,
			luck: 10,
		},
		healAmount: 30
	},
	drinkManhattanProject: {
		name: "Manhattan Project",
		sellPrice: 200,
		icon: require("@/assets/art/bartending/anim/manhattan_proj.gif"),
		stats: {
			luck: 20,
		},
		healAmount: 30
	},
	//t3slime
	drinkBilk: {
		name: "Bilk",
		sellPrice: 208,
		icon: require("@/assets/art/bartending/bilk.png"),
		stats: {
			precision: 5,
			regen: .25
		},
		healAmount: 30
	},
	drinkTripleSec: {
		name: "TripleSec",
		sellPrice: 216,
		icon: require("@/assets/art/bartending/triplesec.png"),
		stats: {
			power: 5,
			regen: .25
		},
		healAmount: 30
	},
	drinkIrishCB: {
		name: "Irish Car Bomb",
		sellPrice: 224,
		icon: require("@/assets/art/bartending/irishcarbomb.png"),
		stats: {
			evasion: 5,
			regen: .25
		},
		healAmount: 30
	},
	drinkLizardWine: {
		name: "Lizard Wine",
		sellPrice: 232,
		icon: require("@/assets/art/bartending/lizardwine.png"),
		stats: {
			regen: .5
		},
		healAmount: 30
	},
	//t4power
	drinkAntiFreeze: {
		name: "Anti-Freeze",
		sellPrice: 129,
		icon: require("@/assets/art/bartending/antifreeze.png"),
		stats: {
			precision: 6,
			luck: 10,
		},
		healAmount: 35
	},
	drinkChangelingSting: {
		name: "Changeling Sting",
		sellPrice: 133,
		icon: require("@/assets/art/bartending/anim/changelingsting.gif"),
		stats: {
			power: 6,
			luck: 10,
		},
		healAmount: 35
	},
	drinkBeepskySmash: {
		name: "Beepsky Smash",
		sellPrice: 138,
		icon: require("@/assets/art/bartending/anim/beepskysmash.gif"),
		stats: {
			evasion: 6,
			luck: 10,
		},
		healAmount: 35
	},
	drinkSingulo: {
		name: "Singulo",
		sellPrice: 142,
		icon: require("@/assets/art/bartending/anim/singulo.gif"),
		stats: {
			luck: 22,
		},
		healAmount: 35
	},
	//t4slime
	drinkSyndicateBomb: {
		name: "Syndicate Bomb",
		sellPrice: 160,
		icon: require("@/assets/art/bartending/syndicatebomb.png"),
		stats: {
			precision: 6,
			regen: .25
		},
		healAmount: 35
	},
	drinkDemonsBlood: {
		name: "Demon's Blood",
		sellPrice: 164,
		icon: require("@/assets/art/bartending/anim/demonsblood.gif"),
		stats: {
			power: 6,
			regen: .25
		},
		healAmount: 35
	},
	drinkNeurotoxin: {
		name: "Neurotoxin",
		sellPrice: 168,
		icon: require("@/assets/art/bartending/anim/neurotoxin.gif"),
		stats: {
			evasion: 6,
			regen: .25
		},
		healAmount: 35
	},
	drinkWhat: {
		name: "Mistake",
		sellPrice: 172,
		icon: require("@/assets/art/bartending/whatdrink.png"),
		stats: {
			regen: .55
		},
		healAmount: 35
	},
	//t5
	drinkGargleBlaster: {
		name: "Pan-Galactic Gargle Blaster",
		sellPrice: 375,
		icon: require("@/assets/art/bartending/anim/gargleblaster.gif"),
		healAmount: 40,
		stats: {
			precision: 7,
			luck: 10,
		},
	},
	drinkB52: {
		name: "B-52",
		sellPrice: 383,
		icon: require("@/assets/art/bartending/anim/b52_flaming.gif"),
		healAmount: 40,
		stats: {
			power: 7,
			luck: 10,
		},
	},
	drinkNukaCola: {
		name: "Nuka-Cola", //call it "spicy" in the description
		sellPrice: 417,
		icon: require("@/assets/art/bartending/anim/nukacola.gif"),
		healAmount: 40,
		stats: {
			evasion: 7,
			luck: 10,
		},
		//t5slime
	},
	drinkQuicky: {
		name: "Quicky",
		sellPrice: 384,
		icon: require("@/assets/art/bartending/quicky.png"),
		healAmount: 40,
		stats: {
			precision: 7,
			regen: .25
		},
	},
	drinkDoctorsDelight: {
		name: "Doctor's Delight",
		sellPrice: 392,
		icon: require("@/assets/art/bartending/anim/doctorsdelight.gif"),
		healAmount: 40,
		stats: {
			power: 7,
			regen: .25
		},
	},
	drinkAtomicBomb: {
		name: "Atomic Bomb",
		sellPrice: 400,
		icon: require("@/assets/art/bartending/anim/atomicbomb.gif"),
		healAmount: 40,
		stats: {
			evasion: 7,
			regen: .25
		},
	},

	/* drinkBeer: {
			name: "Space Beer",
			sellPrice: 1,
			icon: require("@/assets/art/bartending/beer.png"),
			healAmount: 1 //placeholder
	},
	drinkAle: {
			name: "Mag-Ale",
			sellPrice: 1,
			icon: require("@/assets/art/bartending/ale.png")        
	}, */
	/* drinkAbsinthe: {
			name: "Absinthe",
			sellPrice: 1,
			icon: require("@/assets/art/bartending/absinthe.png")
	},
	drinkCognac: {
			name: "Cognac",
			sellPrice: 1,
			icon: require("@/assets/art/bartending/cognac.png")
	}, */
	/* drinkKahlua: {
			name: "Kahlua",
			sellPrice: 1,
			icon: require("@/assets/art/bartending/kahlua.png")
	}, */
	/* drinkSake: {
			name: "Sake",
			sellPrice: 1,
			icon: require("@/assets/art/bartending/sake.png")
	}, */
}
Object.values(DRINKS).forEach(drink => {
	drink.isDrink = true;
});

export default DRINKS;