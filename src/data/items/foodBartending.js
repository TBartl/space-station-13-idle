const BASIC = {
    beer: {
        name: "Space Beer",
        sellPrice: 1,
        icon: require("@/assets/art/combat/enemies/missing.png"),
        tier: "1"
    },
    ale: {
        name: "Mag-Ale",
        sellPrice: 1,
        icon: require("@/assets/art/combat/enemies/missing.png")        
    },
    whiskey: {
        name: "Whiskey",
        sellPrice: 1,
        icon: require("@/assets/art/combat/enemies/missing.png")
    },
    vodka: {
        name: "Vodka",
        sellPrice: 1,
        icon: require("@/assets/art/combat/enemies/missing.png")
    }
}

const NA_BASIC = {
    lemonJuice: {
        name: "Lemon Juice",
        sellPrice: 1,
        icon: require("@/assets/art/combat/enemies/missing.png")
    },
    orangeJuice: {
        name: "Orange Juice",
        sellPrice: 1,
        icon: require("@/assets/art/combat/enemies/missing.png")
    },
    cream: {
        name: "Cream",
        sellPrice: -1,
        icon: require("@/assets/art/combat/enemies/missing.png")
    }
}

const ALC_T1 = {
    blackRussian: {
        item: "Black Russian",
        sellPrice: 10,
        icon: require("@/assets/art/combat/enemies/missing.png")
    }
}

const ALC_T2 = {
    whiteRussian: {
        item: "White Russian",
        sellPrice: 35,
        icon: require("@/assets/art/combat/enemies/missing.png")
    }
}

export const RESOURCE_BARTENDING = {
    ...BASIC,
    ...NA_BASIC,
    ...ALC_T1,
    ...ALC_T2
}