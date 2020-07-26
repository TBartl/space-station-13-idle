const POWER = {
    synthWhiskey: {
        item: "drinkWhiskey",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/whiskey.png"),
        time: 5,
        xp: 1.3,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthVodka: {
        item: "drinkVodka",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/vodka.png"),
        time: 5,
        xp: 1.5,
        requiredLevel: 2,
        requiredItems: { power: 2 }
    },
    synthGin: {
        item: "drinkGin",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/gin.png"),
        time: 5,
        xp: 2.5,
        requiredLevel: 3,
        requiredItems: { power: 3 }
    },
    synthRum: {
        item: "drinkRum",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/rum.png"),
        time: 5,
        xp: 3.5,
        requiredLevel: 4,
        requiredItems: { power: 4 }
    },
    //t2
    mixManlyDorf: {
        item: "drinkManlyDorf",
        icon: require("@/assets/art/bartending/manlydorf.png"),
        time: 5,
        xp: 8.5,
        requiredLevel: 11,
        requiredItems: { power: 5 }
    },
    mixWhiskeyCola: {
        item: "drinkWhiskeyCola",
        icon: require("@/assets/art/bartending/whiskeycola.png"),
        time: 5,
        xp: 9.5,
        requiredLevel: 12,
        requiredItems: { power: 6 }
    },
    mixScrewdriver: {
        item: "drinkScrewdriver",
        icon: require("@/assets/art/bartending/screwdriver.png"),
        time: 5,
        xp: 10.5,
        requiredLevel: 13,
        requiredItems: { power: 7 }
    },
    mixBlackRussian: {
        item: "drinkBlackRussian",
        icon: require("@/assets/art/bartending/blackrussian.png"),
        time: 5,
        xp: 11.5,
        requiredLevel: 14,
        requiredItems: { power: 8 }
    },
    //t3
    mixAntiFreeze: {
        item: "drinkAntiFreeze",
        icon: require("@/assets/art/bartending/antifreeze.png"),
        time: 5,
        xp: 13.5,
        requiredLevel: 31,
        requiredItems: { power: 9, gold: 1 }
    },
    mixChangelingSting: {
        item: "drinkChangelingSting",
        icon: require("@/assets/art/bartending/anim/changelingsting.gif"),
        time: 5,
        xp: 17.5,
        requiredLevel: 32,
        requiredItems: { power: 10 }
    },
    mixBeepskySmash: {
        item: "drinkBeepskySmash",
        icon: require("@/assets/art/bartending/anim/beepskysmash.gif"),
        time: 5,
        xp: 18.5,
        requiredLevel: 33,
        requiredItems: { power: 11 }
    },
    mixSingulo: {
        item: "drinkSingulo",
        icon: require("@/assets/art/bartending/anim/singulo.gif"),
        time: 5,
        xp: 19.5,
        requiredLevel: 34,
        requiredItems: { power: 12 }
    },
}
const SLIME = {
    //t1
    synthOrange: {
        item: "drinkOrangeJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/orangejuice.png"),
        time: 8,
        xp: 1.6,
        requiredLevel: 6,
        requiredItems: { slimeGray: 1 }
    },
    synthTomato: {
        item: "drinkTomatoJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/tomatojuice.png"),
        time: 8,
        xp: 3.2,
        requiredLevel: 7,
        requiredItems: { slimeGray: 2 }
    },
    synthCream: {
        item: "drinkCream",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/cream.png"),
        time: 8,
        xp: 4.8,
        requiredLevel: 8,
        requiredItems: { slimeOrange: 1 }
    },
    synthCola: {
        item: "drinkSpaceCola",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/spacecola.png"),
        time: 8,
        xp: 6.4,
        requiredLevel: 9,
        requiredItems: { slimeOrange: 2 }
    },
    //t2
    mixSilencer: {
        item: "drinkSilencer",
        icon: require("@/assets/art/bartending/silencer.png"),
        time: 8,
        xp: 14.4,
        requiredLevel: 16,
        requiredItems: { slimeBlue: 1 }
    },
    mixAcidSpit: {
        item: "drinkAcidSpit",
        icon: require("@/assets/art/bartending/anim/acidspit.gif"),
        time: 8,
        xp: 16,
        requiredLevel: 17,
        requiredItems: { slimeBlue: 2 }
    },
    mixArnoldPalmer: {
        item: "drinkArnoldPalmer",
        icon: require("@/assets/art/bartending/arnoldpalmer.png"),
        time: 8,
        xp: 17.6,
        requiredLevel: 18,
        requiredItems: { slimeMetal: 1 }
    },
    mixWhiteRussian: {
        item: "drinkWhiteRussian",
        icon: require("@/assets/art/bartending/whiterussian.png"),
        time: 8,
        xp: 19.2,
        requiredLevel: 19,
        requiredItems: { slimeMetal: 2 }
    },
    //t3
    mixSyndicateBomb: {
        item: "drinkSyndicateBomb",
        icon: require("@/assets/art/bartending/syndicatebomb.png"),
        time: 8,
        xp: 27.2,
        requiredLevel: 40,
        requiredItems: { slimeDarkPurple: 1 }
    },
    mixDemonsBlood: {
        item: "drinkDemonsBlood",
        icon: require("@/assets/art/bartending/anim/demonsblood.gif"),
        time: 8,
        xp: 28.8,
        requiredLevel: 41,
        requiredItems: { slimeDarkPurple: 2 }
    },
    mixNeurotoxin: {
        item: "drinkNeurotoxin",
        icon: require("@/assets/art/bartending/anim/neurotoxin.gif"),
        time: 8,
        xp: 30.4,
        requiredLevel: 42,
        requiredItems: { slimeDarkBlue: 1 }
    },
    mixWhat: {
        item: "drinkWhat",
        icon: require("@/assets/art/bartending/whatdrink.png"),
        time: 8,
        xp: 32,
        requiredLevel: 43,
        requiredItems: { slimeDarkBlue: 2 }
    }
}
const POWERPLUS = {
    synthTequila: {
        item: "drinkTequila",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/tequila.png"),
        time: 10,
        xp: 4.5,
        requiredLevel: 21,
        requiredItems: { power: 4, glass: 1 }
    },
    synthLemon: {
        item: "drinkLemonJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/lemonjuice.png"),
        time: 10,
        xp: 5.5,
        requiredLevel: 22,
        requiredItems: { power: 5, iron: 1 }
    },
    mixManhattan: {
        item: "drinkManhattan",
        icon: require("@/assets/art/bartending/manhattan.png"),
        time: 10,
        xp: 12.5,
        requiredLevel: 23,
        requiredItems: { power: 8, silver: 1 }
    },
    mixManhattanProject: {
        item: "drinkManhattanProject",
        icon: require("@/assets/art/bartending/anim/manhattan_proj.gif"),
        time: 10,
        xp: 16.5,
        requiredLevel: 24,
        requiredItems: { power: 9 }
    },
    mixGargleBlaster: {
        item: "drinkGargleBlaster",
        icon: require("@/assets/art/bartending/anim/gargleblaster.gif"),
        time: 10,
        xp: 20.5,
        requiredLevel: 36,
        requiredItems: { power: 12, titanium: 1 }
    },
    mixB52: {
        item: "drinkB52",
        icon: require("@/assets/art/bartending/anim/b52_flaming.gif"),
        time: 10,
        xp: 21.5,
        requiredLevel: 37,
        requiredItems: { power: 13, uranium: 1 }
    },
    mixNukaCola: {
        item: "drinkNukaCola",
        icon: require("@/assets/art/bartending/anim/nukacola.gif"),
        time: 10,
        xp: 25,
        requiredLevel: 50,
        requiredItems: { power: 13, plasma: 2 }
    }
}
const SLIMEPLUS = {
    mixBilk: {
        item: "drinkBilk",
        icon: require("@/assets/art/bartending/bilk.png"),
        time: 16,
        xp: 8,
        requiredLevel: 26,
        requiredItems: { slimePurple: 1, glass: 2 }
    },
    mixTripleSec: {
        item: "drinkTripleSec",
        icon: require("@/assets/art/bartending/triplesec.png"),
        time: 16,
        xp: 9.6,
        requiredLevel: 27,
        requiredItems: { slimePurple: 2, iron: 2 }
    },
    mixIrishCB: {
        item: "drinkIrishCB",
        icon: require("@/assets/art/bartending/irishcarbomb.png"),
        time: 16,
        xp: 20.8,
        requiredLevel: 28,
        requiredItems: { slimeYellow: 1, silver: 2 }
    },
    mixLizardWine: {
        item: "drinkLizardWine",
        icon: require("@/assets/art/bartending/lizardwine.png"),
        time: 16,
        xp: 22.4,
        requiredLevel: 29,
        requiredItems: { slimeYellow: 2, gold: 2 }
    },
    mixQuicky: {
        item: "drinkQuicky",
        icon: require("@/assets/art/bartending/quicky.png"),
        time: 16,
        xp: 33.6,
        requiredLevel: 46,
        requiredItems: { slimeSilver: 1, titanium: 2}
    },
    mixDoctorsDelight: {
        item: "drinkDoctorsDelight",
        icon: require("@/assets/art/bartending/anim/doctorsdelight.gif"),
        time: 16,
        xp: 35.2,
        requiredLevel: 47,
        requiredItems: { slimeSilver: 2, uranium: 2 }
    },
    mixAtomicBomb: {
        item: "drinkAtomicBomb",
        icon: require("@/assets/art/bartending/anim/atomicbomb.gif"),
        time: 16,
        xp: -50,
        requiredLevel: 50,
        requiredItems: { slimeMetal: 2, slimeSilver: 2, plasma: 2 }
    }
}

    /* synthBeer: {
        item: "drinkBeer",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/beer.png"),
        time: 5,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthAle: {
        item: "drinkAle",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/ale.png"),
        time: 5,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    
    /* synthAbsinthe: {
        item: "drinkAbsinthe",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/absinthe.png"),
        time: 5,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthCognac: {
        item: "drinkCognac",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/cognac.png"),
        time: 5,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    /* synthKahlua: {
        item: "drinkKahlua",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/kahlua.png"),
        time: 5,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    
    /* synthSake: {
        item: "drinkSake",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/sake.png"),
        time: 5,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    
Object.values(POWER).forEach(action => action.type = "Virgin");
Object.values(SLIME).forEach(action => action.type = "Alcoholic");
Object.values(POWERPLUS).forEach(action => action.type = "Super Virgin");
Object.values(SLIMEPLUS).forEach(action => action.type = "Super Alcoholic");

export const ACTIONS = {
    ...POWER,
    ...SLIME,
    ...POWERPLUS,
    ...SLIMEPLUS
}

export const JOB = {
    id: "bartending",
    name: "Bartending",
    icon: require("@/assets/art/bartending/icon.png"),
    color: "#808080" //gray
}