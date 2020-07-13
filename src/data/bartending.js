const BASIC = {
    /* synthBeer: {
        item: "beer",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/beer.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthAle: {
        item: "ale",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/ale.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    synthWhiskey: {
        item: "whiskey",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/whiskey.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthVodka: {
        item: "vodka",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/vodka.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    /* synthAbsinthe: {
        item: "absinthe",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/absinthe.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthCognac: {
        item: "cognac",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/cognac.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    synthGin: {
        item: "gin",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/gin.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthKahlua: {
        item: "kahlua",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/kahlua.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthRum: {
        item: "rum",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/rum.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    /* synthSake: {
        item: "sake",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/sake.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, */
    synthTequila: {
        item: "tequila",
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
        item: "lemonJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/lemonjuice.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }, /*
    synthOrange: {
        item: "orangeJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/orangejuice.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 } //oranges from botany as synthOrange?
    }, */ 
    synthCream: {
        item: "cream",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/cream.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthTomato: {
        item: "tomatoJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/tomatojuice.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthOrange: {
        item: "orangeJuice",
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/orangejuice.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    }
}

const ALC_T1 = {
    mixBlackRussian: {
        item: "blackRussian",
        icon: require("@/assets/art/bartending/blackrussian.png"),
        time: 2,
        xp: 15,
        requiredLevel: 1,
        requiredItems: {
            vodka: 4
        }
    }
}

const ALC_T2 = {
    mixWhiteRussian: {
        item: "whiteRussian",
        icon: require("@/assets/art/bartending/whiterussian.png"),
        time: 3,
        xp: 25,
        requiredLevel: 3,
        requiredItems: {
            blackRussian: 2,
            cream: 2
        }
    }
}

Object.values(BASIC).forEach(action => action.type = "ALCOHOLIC BASES");
Object.values(NA_BASIC).forEach(action => action.type = "NON-ALCOHOLIC BASES");
Object.values(ALC_T1).forEach(action => action.type = "TIER 1");
Object.values(ALC_T2).forEach(action => action.type = "TIER 2");

export const ACTIONS = {
    ...BASIC,
    ...NA_BASIC,
    ...ALC_T1,
    ...ALC_T2
}

export const JOB = {
    id: "bartending",
    name: "Bartending",
    icon: require("@/assets/art/bartending/icon.png"),
    color: "#808080" //todo
}