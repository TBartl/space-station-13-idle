const BASIC = {
    synthVodka: {
        item: "drinkVodka",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/vodka.png"),
        time: 2,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { potato: 5 }
    },
    /* synthBeer: {
        item: "drinkBeer",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/beer.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthAle: {
        item: "drinkAle",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/ale.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    synthWhiskey: {
        item: "drinkWhiskey",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/whiskey.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    /* synthAbsinthe: {
        item: "drinkAbsinthe",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/absinthe.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthCognac: {
        item: "drinkCognac",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/cognac.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    synthGin: {
        item: "drinkGin",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/gin.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    /* synthKahlua: {
        item: "drinkKahlua",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/kahlua.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    synthRum: {
        item: "drinkRum",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/rum.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    /* synthSake: {
        item: "drinkSake",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/sake.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    synthTequila: {
        item: "drinkTequila",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/tequila.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }
}
const NA_BASIC = {
    synthLemon: {
        item: "drinkLemonJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/lemonjuice.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, 
    synthCream: {
        item: "drinkCream",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/cream.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthCola: {
        item: "drinkSpacecola",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/spacecola.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthTomato: {
        item: "drinkTomatoJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/tomatojuice.png"),
        time: 2,
        xp: 1,
        requiredLevel: 28,
        requiredItems: { tomato: 5 }
    },
    synthOrange: {
        item: "drinkOrangeJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/orangejuice.png"),
        time: 1,
        xp: .1,
        requiredLevel: 42,
        requiredItems: { orange: 5 }
    }
}

const ALC_T1 = {
    mixBilk: {
        item: "drinkBilk",
        icon: require("@/assets/art/bartending/bilk.png"),
        time: 3,
        requiredLevel: 1,
        requiredItems: {
            drinkRum: 2,
            drinkCream: 1
        }
    },
    mixTripleSec: {
        item: "drinkTripleSec",
        icon: require("@/assets/art/bartending/triplesec.png"),
        time: 3,
        requiredLevel: 3,
        requiredItems: {
            drinkWhiskey: 1,
            drinkGin: 1
        }
    },
    mixManlyDorf: {
        item: "drinkManlyDorf",
        icon: require("@/assets/art/bartending/manlydorf.png"),
        time: 3,
        requiredLevel: 4,
        requiredItems: {
            drinkRum: 2,
            drinkTequila: 1
        }
    },
    mixWhiskeyCola: {
        item: "drinkWhiskeyCola",
        icon: require("@/assets/art/bartending/whiskeycola.png"),
        time: 3,
        requiredLevel: 5,
        requiredItems: {
            drinkWhiskey: 2,
            drinkSpacecola: 1
        }
    },
    mixScrewdriver: {
        item: "drinkScrewdriver",
        icon: require("@/assets/art/bartending/screwdriver.png"),
        time: 3,
        requiredLevel: 6,
        requiredItems: {
            drinkVodka: 2,
            drinkWhiskey: 1
        }
    }
}

const ALC_T2 = {
    mixBlackRussian: {
        item: "drinkBlackRussian",
        icon: require("@/assets/art/bartending/blackrussian.png"),
        time: 3,
        requiredLevel: 8,
        requiredItems: {
            drinkVodka: 2,
            drinkTripleSec: 1
        }
    },
    mixManhattan: {
        item: "drinkManhattan",
        icon: require("@/assets/art/bartending/manhattan.png"),
        time: 3,
        requiredLevel: 10,
        requiredItems: {
            drinkWhiskey: 2,
            drinkLemonJuice: 1
        }
    },
    mixAntiFreeze: {
        item: "drinkAntiFreeze",
        icon: require("@/assets/art/bartending/antifreeze.png"),
        time: 3,
        requiredLevel: 12,
        requiredItems: {
            drinkVodka: 2,
            drinkCream: 2
        }
    },
    mixSilencer: {
        item: "drinkSilencer",
        icon: require("@/assets/art/bartending/silencer.png"),
        time: 3,
        requiredLevel: 14,
        requiredItems: {
            drinkVodka: 1,
            drinkCream: 1,
            drinkAntiFreeze: 1
        }
    },
    mixAcidSpit: {
        item: "drinkAcidSpit",
        icon: require("@/assets/art/bartending/anim/acidspit.gif"),
        time: 3,
        requiredLevel: 16,
        requiredItems: {
            sacid: 1,
            drinkScrewdriver: 1
        }
    },
    mixArnoldPalmer: {
        item: "drinkArnoldPalmer",
        icon: require("@/assets/art/bartending/arnoldpalmer.png"),
        time: 3,
        requiredLevel: 18,
        requiredItems: {
            drinkLemonJuice: 1,
            drinkScrewdriver: 2
        }
    }
}

const ALC_T3 = {
    mixWhiteRussian: { //fix
        item: "drinkWhiteRussian",
        icon: require("@/assets/art/bartending/whiterussian.png"),
        time: 3,
        requiredLevel: 20,
        requiredItems: {
            drinkBlackRussian: 1,
            drinkCream: 2
        }
    },
    mixIrishCB: {
        item: "drinkIrishCB",
        icon: require("@/assets/art/bartending/irishcarbomb.png"),
        time: 3,
        requiredLevel: 22,
        requiredItems: {
            drinkWhiskey: 2,
            drinkCream: 1
        }
    },
    mixLizardWine: {
        item: "drinkLizardWine",
        icon: require("@/assets/art/bartending/lizardwine.png"),
        time: 3,
        requiredLevel: 24,
        requiredItems: {
            drinkVodka: 2,
            foodMeatZ: 1
        }
    },
    mixManhattanProject: {
        item: "drinkManhattanProject",
        icon: require("@/assets/art/bartending/anim/manhattan_proj.gif"),
        time: 3,
        requiredLevel: 26,
        requiredItems: {
            drinkManhattan: 1,
            uranium: 2
        }
    },
    mixChangelingSting: {
        item: "drinkChangelingSting",
        icon: require("@/assets/art/bartending/anim/changelingsting.gif"),
        time: 3,
        requiredLevel: 28,
        requiredItems: {
            drinkScrewdriver: 1,
            drinkLemonJuice: 2,
            drinkTomatoJuice: 1
        }
    },
    mixBeepskySmash: {
        item: "drinkBeepskySmash",
        icon: require("@/assets/art/bartending/anim/beepskysmash.gif"),
        time: 3,
        requiredLevel: 30,
        requiredItems: {
            drinkTripleSec: 1,
            drinkLemonJuice: 2,
            iron: 1
        }
    }
}

const ALC_T4 = {
    mixSingulo: {
        item: "drinkSingulo",
        icon: require("@/assets/art/bartending/anim/singulo.gif"),
        time: 3,
        requiredLevel: 32,
        requiredItems: {
            drinkVodka: 2,
            uranium: 2
        }
    },
    mixGargleBlaster: {
        item: "drinkGargleBlaster",
        icon: require("@/assets/art/bartending/anim/gargleblaster.gif"),
        time: 3,
        requiredLevel: 34,
        requiredItems: {
            drinkGin: 1,
            drinkVodka: 1,
            drinkWhiskey: 1,
            drinkLemonJuice: 1
        }
    },
    mixB52: {
        item: "drinkB52",
        icon: require("@/assets/art/bartending/anim/b52_flaming.gif"),
        time: 3,
        requiredLevel: 36,
        requiredItems: {
            drinkIrishCB: 1,
            drinkSingulo: 1,
            uranium: 1
        }
    },
    mixSyndicateBomb: {
        item: "drinkSyndicateBomb",
        icon: require("@/assets/art/bartending/syndicatebomb.png"),
        time: 3,
        requiredLevel: 38,
        requiredItems: {
            drinkTequila: 2,
            drinkVodka: 1,
            uranium: 1
        }
    },
    mixDemonsBlood: {
        item: "drinkDemonsBlood",
        icon: require("@/assets/art/bartending/anim/demonsblood.gif"),
        time: 3,
        requiredLevel: 40,
        requiredItems: {
            drinkChangelingSting: 1,
            drinkLizardWine: 1,
            drinkRum: 1
        }
    },
    mixNeurotoxin: {
        item: "drinkNeurotoxin",
        icon: require("@/assets/art/bartending/anim/neurotoxin.gif"),
        time: 3,
        requiredLevel: 42,
        requiredItems: {
            drinkGargleBlaster: 1,
            drinkOrangeJuice: 1
        }
    }
}

const ALC_T5 = {
    mixWhat: {
        item: "drinkWhat",
        icon: require("@/assets/art/bartending/whatdrink.png"),
        time: 3,
        xp: 23,
        requiredLevel: 44,
        requiredItems: {
            drinkGin: 2,
            drinkSpacecola: 1,
            drinkOrangeJuice: 1
        }
    },
    mixQuicky: {
        item: "drinkQuicky",
        icon: require("@/assets/art/bartending/quicky.png"),
        time: 3,
        xp: 24,
        requiredLevel: 46,
        requiredItems: {
            drinkWhat: 1,
            drinkNeurotoxin: 1,
            uranium: 1
        }
    },
    mixDoctorsDelight: {
        item: "drinkDoctorsDelight",
        icon: require("@/assets/art/bartending/anim/doctorsdelight.gif"),
        time: 3,
        xp: 25,
        requiredLevel: 48,
        requiredItems: {
            drinkTomatoJuice: 2,
            drinkOrangeJuice: 2,
            drinkCream: 1
        }
    },
    mixNukaCola: {
        item: "drinkNukaCola",
        icon: require("@/assets/art/bartending/anim/nukacola.gif"),
        time: 3,
        xp: 30,
        requiredLevel: 50,
        requiredItems: {
            drinkSyndicateBomb: 1,
            drinkGargleBlaster: 1,
            drinkSpacecola: 1,
            uranium: 2
        }
    },
    mixAtomicBomb: {
        item: "drinkAtomicBomb",
        icon: require("@/assets/art/bartending/anim/atomicbomb.gif"),
        time: 3,
        xp: -50,
        requiredLevel: 50,
        requiredItems: {
            drinkB52: 2,
            drinkSyndicateBomb: 1,
            drinkDemonsBlood: 1
        }
    }
}


Object.values(BASIC).forEach(action => action.type = "ALCOHOLIC BASES");
Object.values(NA_BASIC).forEach(action => action.type = "NON-ALCOHOLIC BASES");
let MIN_LEVEL = 1;
let MAX_LEVEL = 6;
Object.values(ALC_T1).forEach((action, index) => {
    action.type = "TIER 1";

    let level = Math.round(MIN_LEVEL + index / (Object.values(ALC_T1).length - 1) * (MAX_LEVEL - MIN_LEVEL));

    action.requiredLevel = level;
    action.xp = Math.max(2, 5 * level / 10);
});
MIN_LEVEL = 8
MAX_LEVEL = 18
Object.values(ALC_T2).forEach((action, index) => {
    action.type = "TIER 2";

    let level = Math.round(MIN_LEVEL + index / (Object.values(ALC_T2).length - 1) * (MAX_LEVEL - MIN_LEVEL));

    action.requiredLevel = level;
    action.xp = Math.max(2, 5 * level / 10);
});
MIN_LEVEL = 20
MAX_LEVEL = 30
Object.values(ALC_T3).forEach((action, index) => {
    action.type = "TIER 3";

    let level = Math.round(MIN_LEVEL + index / (Object.values(ALC_T3).length - 1) * (MAX_LEVEL - MIN_LEVEL));

    action.requiredLevel = level;
    action.xp = Math.max(2, 5 * level / 10);
});
MIN_LEVEL = 32
MAX_LEVEL = 42
Object.values(ALC_T4).forEach((action, index) => {
    action.type = "TIER 4";

    let level = Math.round(MIN_LEVEL + index / (Object.values(ALC_T4).length - 1) * (MAX_LEVEL - MIN_LEVEL));

    action.requiredLevel = level;
    action.xp = Math.max(2, 5 * level / 10);
});
//MIN_LEVEL = 44
//MAX_LEVEL = 50
Object.values(ALC_T5).forEach(action => action.type = "TIER 5");

export const ACTIONS = {
    ...BASIC,
    ...NA_BASIC,
    ...ALC_T1,
    ...ALC_T2,
    ...ALC_T3,
    ...ALC_T4,
    ...ALC_T5
}

export const JOB = {
    id: "bartending",
    name: "Bartending",
    icon: require("@/assets/art/bartending/icon.png"),
    color: "#808080" //gray
}