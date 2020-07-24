export default {
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
    drinkWhiskey: {
        name: "Whiskey",
        sellPrice: 1,
        icon: require("@/assets/art/bartending/whiskey.png")
    },
    drinkVodka: {
        name: "Vodka",
        sellPrice: 1,
        icon: require("@/assets/art/bartending/vodka.png")
    },
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
    drinkGin: {
        name: "Gin",
        sellPrice: 1,
        icon: require("@/assets/art/bartending/gin.png")
    },
    /* drinkKahlua: {
        name: "Kahlua",
        sellPrice: 1,
        icon: require("@/assets/art/bartending/kahlua.png")
    }, */
    drinkRum: {
        name: "Rum",
        sellPrice: 1,
        icon: require("@/assets/art/bartending/rum.png")
    },
    /* drinkSake: {
        name: "Sake",
        sellPrice: 1,
        icon: require("@/assets/art/bartending/sake.png")
    }, */
    drinkTequila: {
        name: "Tequila",
        sellPrice: 1,
        icon: require("@/assets/art/bartending/tequila.png")
    },
    drinkLemonJuice: {
        name: "Lemon Juice",
        sellPrice: -1,
        icon: require("@/assets/art/bartending/lemonjuice.png")
    },
    drinkOrangeJuice: {
        name: "Orange Juice",
        sellPrice: 1,
        icon: require("@/assets/art/bartending/orangejuice.png"),
        healAmount: 35
    },
    drinkTomatoJuice: {
        name: "Tomato Juice",
        sellPrice: -2,
        icon: require("@/assets/art/bartending/tomatojuice.png"),
        healAmount: 15
    },
    drinkCream: {
        name: "Cream",
        sellPrice: -1,
        icon: require("@/assets/art/bartending/cream.png")
    },
    drinkSpacecola: {
        name: "Space Cola",
        sellPrice: 1,
        icon: require("@/assets/art/bartending/spacecola.png")
    },
    drinkBlackRussian: {
        name: "Black Russian",
        sellPrice: 50,
        icon: require("@/assets/art/bartending/blackrussian.png"),
        healAmount: 15
    },
    drinkWhiteRussian: {
        name: "White Russian",
        sellPrice: 95,
        icon: require("@/assets/art/bartending/whiterussian.png"),
        healAmount: 25
    },
    drinkBilk: {
        name: "Bilk",
        sellPrice: 5,
        icon: require("@/assets/art/bartending/bilk.png"),
        healAmount: 6
    },
    drinkTripleSec: {
        name: "Triple Sec",
        sellPrice: 12,
        icon: require("@/assets/art/bartending/triplesec.png"),
        healAmount: 10,
        stats: {
            precision: -1,
            evasion: -1,
            power: 1
        }
    },
    drinkAtomicBomb: {
        name: "Atomic Bomb",
        sellPrice: 500,
        icon: require("@/assets/art/bartending/anim/atomicbomb.gif"),
        healAmount: 60,
        stats: {
            maxHealth: -300,
            precision: -20,
            power: 20
        }
    },
    drinkB52: {
        name: "B-52",
        sellPrice: 273,
        icon: require("@/assets/art/bartending/anim/b52_flaming.gif"),
        healAmount: 40,
        stats: {
            precision: -10,
            power: 10
        }
    },
    drinkGargleBlaster: {
        name: "Pan-Galactic Gargle Blaster",
        sellPrice: 248,
        icon: require("@/assets/art/bartending/anim/gargleblaster.gif"),
        healAmount: 40,
        stats: {
            precision: -5,
            evasion: -5,
            power: 9
        }
    },
    drinkSingulo: {
        name: "Singulo",
        sellPrice: 216,
        icon: require("@/assets/art/bartending/anim/singulo.gif"),
        healAmount: 35
    },
    drinkSilencer: {
        name: "Silencer",
        sellPrice: 70,
        icon: require("@/assets/art/bartending/silencer.png"),
        healAmount: 20,
        stats: {
            command: -4,
            power: 4
        }
    },
    drinkSyndicateBomb: {
        name: "Syndicate Bomb",
        sellPrice: 300,
        icon: require("@/assets/art/bartending/syndicatebomb.png"),
        healAmount: 40,
        stats: {
            evasion: -10,
            power: 10
        }
    },
    drinkManlyDorf: {
        name: "Manly Dorf",
        sellPrice: 20,
        icon: require("@/assets/art/bartending/manlydorf.png"),
        healAmount: 10,
        stats: {
            precision: -2,
            power: 2
        }
    },
    drinkWhiskeyCola: {
        name: "Whiskey Cola",
        sellPrice: 28,
        icon: require("@/assets/art/bartending/whiskeycola.png"),
        healAmount: 10,
        stats: {
            evasion: -2,
            power: 2
        }
    },
    drinkWhat: {
        name: "Mistake",
        sellPrice: 382,
        icon: require("@/assets/art/bartending/whatdrink.png"),
        healAmount: 45
    },
    drinkDemonsBlood: {
        name: "Demon's Blood",
        sellPrice: 326,
        icon: require("@/assets/art/bartending/anim/demonsblood.gif"),
        healAmount: 40,
        stats: {
            command: -10,
            power: 10
        }
    },
    drinkIrishCB: {
        name: "Irish Car Bomb",
        sellPrice: 108,
        icon: require("@/assets/art/bartending/irishcarbomb.png"),
        healAmount: 30,
        stats: {
            precision: -3,
            evasion: -3,
            power: 5
        }
    },
    drinkLizardWine: {
        name: "Lizard Wine",
        sellPrice: 124,
        icon: require("@/assets/art/bartending/lizardwine.png"),
        healAmount: 30,
        stats: {
            precision: -6,
            power: 6
        }
    },
    drinkManhattan: {
        name: "Manhattan",
        sellPrice: 54,
        icon: require("@/assets/art/bartending/manhattan.png"),
        healAmount: 20,
        stats: {
            precision: -2,
            evasion: -2,
            power: 4
        }
    },
    drinkManhattanProject: {
        name: "Manhattan Project",
        sellPrice: 145,
        icon: require("@/assets/art/bartending/anim/manhattan_proj.gif"),
        healAmount: 30,
        stats: {
            evasion: -6,
            power: 6
        }
    },
    drinkBeepskySmash: {
        name: "Beepsky Smash",
        sellPrice: 192,
        icon: require("@/assets/art/bartending/anim/beepskysmash.gif"),
        healAmount: 30,
        stats: {
            maxHealth: -90,
            power: 6
        }
    },
    drinkAcidSpit: {
        name: "Acid Spit",
        sellPrice: 78,
        icon: require("@/assets/art/bartending/anim/acidspit.gif"),
        healAmount: 20,
        stats: {
            evasion: -4,
            power: 4
        }
    },
    drinkAntiFreeze: {
        name: "Anti-Freeze",
        sellPrice: 62,
        icon: require("@/assets/art/bartending/antifreeze.png"),
        healAmount: 20,
        stats: {
            precision: -4,
            power: 4
        }
    },
    drinkNukaCola: {
        name: "Nuka-Cola", //call it "spicy" in the description
        sellPrice: 458,
        icon: require("@/assets/art/bartending/anim/nukacola.gif"),
        healAmount: 50,
        stats: {
            maxHealth: -150,
            precision: -8,
            evasion: -8,
            power: 15
        }
    },
    drinkNeurotoxin: {
        name: "Neurotoxin",
        sellPrice: 359,
        icon: require("@/assets/art/bartending/anim/neurotoxin.gif"),
        healAmount: 40,
        stats: {
            maxHealth: -120,
            power: 10
        }
    },
    drinkScrewdriver: {
        name: "Screwdriver",
        sellPrice: 36,
        icon: require("@/assets/art/bartending/screwdriver.png"),
        healAmount: 10,
        stats: {
            maxHealth: -30,
            power: 2
        }
    },
    drinkChangelingSting: {
        name: "Changeling Sting",
        sellPrice: 174,
        icon: require("@/assets/art/bartending/anim/changelingsting.gif"),
        healAmount: 30,
        stats: {
            precision: -6,
            command: 3,
            power: 3
        }
    },
    drinkDoctorsDelight: {
        name: "Doctor's Delight",
        sellPrice: 420,
        icon: require("@/assets/art/bartending/anim/doctorsdelight.gif"),
        healAmount: 60,
        stats: {
            maxHealth: 150,
            evasion: -15,
            command: 5
        }
    },
    drinkQuicky: {
        name: "Quicky",
        sellPrice: 404,
        icon: require("@/assets/art/bartending/quicky.png"),
        healAmount: 50,
        stats: {
            precision: -8,
            power: -7,
            evasion: 14
        }
    },
    drinkArnoldPalmer: {
        name: "Arnold Palmer",
        sellPrice: 86,
        icon: require("@/assets/art/bartending/arnoldpalmer.png"),
        healAmount: 20,
        stats: {
            healAmount: -60,
            power: 40
        }
    }
}