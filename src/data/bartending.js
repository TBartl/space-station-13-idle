import ITEMS from "@/data/items";
import { MAX_LEVEL } from "@/data/experience";

const BASIC = {
    synthBeer: {
        item: "beer",
        actionName: "SYNTHESIZE",
        icon: require("@/assets/art/combat/enemies/missing.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    },
    synthAle: {
        item: "ale",
        actionName: "SYNTHESIZE",
        icon: require("@/assets/art/combat/enemies/missing.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    },
    synthWhiskey: {
        item: "whiskey",
        actionName: "SYNTHESIZE",
        icon: require("@/assets/art/combat/enemies/missing.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    },
    synthVodka: {
        item: "vodka",
        actionName: "SYNTHESIZE",
        icon: require("@/assets/art/combat/enemies/missing.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    }
}
const NA_BASIC = {
    synthLemon: {
        item: "lemonjuice",
        actionName: "SYNTHESIZE",
        icon: require("@/assets/art/combat/enemies/missing.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    }, /*
    synthOrange: {
        item: "orangejuice",
        actionName: "SYNTHESIZE",
        icon: require("@/assets/art/combat/enemies/missing.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    }, */ //use oranges from botany probably.
    synthCream: {
        item: "cream",
        actionName: "SYNTHESIZE",
        icon: require("@/assets/art/combat/enemies/missing.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    }
}

const ALC_T1 = {
    mixBlackRussian: {
        item: "blackrussian",
        icon: require("@/assets/art/combat/enemies/missing.png"),
        time: 2,
        xp: 15,
        requiredLevel: 1,
        requiredItems: {
            synthVodka: 4
        }
    }
}
const ALC_T2 = {
    mixWhiteRussian: {
        item: "whiterussian",
        icon: require("@/assets/art/combat/enemies/missing.png"),
        time: 3,
        xp: 25,
        requiredLevel: 3,
        requiredItems: {
            mixBlackRussian: 2,
            synthCream: 2
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
    icon: require("@/assets/art/combat/enemies/missing.png"), //todo
    color: "#3df000" //todo
}