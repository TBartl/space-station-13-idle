import ITEMS from "@/data/items";
import { MAX_LEVEL } from "@/data/experience";

const BASIC = {
    synthBeer: {
        item: "beer",
        // icon: require("@/assets/art/bartending/beer.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    },
    synthAle: {
        item: "ale",
        // icon: require("@/assets/art/bartending/ale.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    },
    synthWhiskey: {
        item: "whiskey",
        // icon: require("@/assets/art/bartending/whiskey.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    },
    synthVodka: {
        item: "vodka",
        // icon: require("@/assets/art/bartending/whiskey.png"),
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
        // icon: require("@/assets/art/bartending/lemonjuice.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    }, /*
    synthOrange: {
        item: "orangejuice",
        // icon: require("@/assets/art/bartending/orangejuice.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    }, */
    synthCream: {
        item: "cream",
        // icon: require("@/assets/art/bartending/cream.png"),
        time: 1,
        xp: .1,
        requiredLevel: 1,
        requiredItems: {
            power: 1
        }
    }
}

const ALC_T1 = {
    mixBlackRussian: { //t1
        item: "blackrussian",
        // icon: require("@/assets/art/bartending/blackRussian.png"),
        time: 2,
        xp: 15,
        requiredLevel: 1,
        requiredItems: {
            synthVodka: 4
        }
    }
}
const ALC_T2 = {
    mixWhiteRussian: { //t2
        item: "whiterussian",
        // icon: require("@/assets/art/bartending/whiteRussian.png"),
        time: 3,
        xp: 25,
        requiredLevel: 3,
        requiredItems: {
            mixBlackRussian: 2,
            synthCream: 2
        }
    }
}

const MIN_LEVEL = 1;
Object.values(BASIC).forEach(action => action.type = "ALCOHOLIC BASES");
Object.values(NA_BASIC).forEach(action => action.type = "NON-ALCOHOLIC BASES");
Object.values(ALC_T1).forEach(action => action.type = "TIER 1");
Object.values(ALC_T2).forEach(action => action.type = "TIER 2");

export const JOB = {
    id: "bartending",
    name: "Bartending",
    // icon: require("@/assets/art/bartending/icon.png"),
    color: "#3df000" //customize this later //todo
}