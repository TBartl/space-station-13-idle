const POWER = {
    synthWhiskey: {
		name: "Whiskey",
		items:
		{
			id: "drinkWhiskey",
			count: 3,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/whiskey.png"),
        time: 5,
        xp: 1.3,
        requiredLevel: 1,
        requiredItems: { power: 1 }
    },
    synthVodka: {
        name: "Vodka",
		items:
		{
			id: "drinkVodka",
			count: 3,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/vodka.png"),
        time: 5,
        xp: 1.7,
        requiredLevel: 2,
        requiredItems: { power: 2 }
    },
    synthGin: {
        name: "Gin",
		items:
		{
			id: "drinkGin",
			count: 3,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/gin.png"),
        time: 5,
        xp: 2,
        requiredLevel: 3,
        requiredItems: { power: 3 }
    },
    synthRum: {
        name: "Rum",
		items:
		{
			id: "drinkRum",
			count: 3,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/rum.png"),
        time: 5,
        xp: 3,
        requiredLevel: 4,
        requiredItems: { power: 4 }
    },
    //t2
    mixManlyDorf: {
        name: "Manly Dorf",
		items:
		{
			id: "drinkManlyDorf",
			count: 3,
		},
        icon: require("@/assets/art/bartending/manlydorf.png"),
        time: 5,
        xp: 4,
        requiredLevel: 11,
        requiredItems: { power: 5 }
    },
    mixWhiskeyCola: {
        name: "Whiskey Cola",
		items:
		{
			id: "drinkWhiskeyCola",
			count: 3,
		},
        icon: require("@/assets/art/bartending/whiskeycola.png"),
        time: 5,
        xp: 5,
        requiredLevel: 12,
        requiredItems: { power: 6 }
    },
    mixScrewdriver: {
        name: "Screwdriver",
		items:
		{
			id: "drinkScrewdriver",
			count: 3,
		},
        icon: require("@/assets/art/bartending/screwdriver.png"),
        time: 5,
        xp: 6,
        requiredLevel: 13,
        requiredItems: { power: 7 }
    },
    mixBlackRussian: {
        name: "Black Russian",
		items:
		{
			id: "drinkBlackRussian",
			count: 3,
		},
        icon: require("@/assets/art/bartending/blackrussian.png"),
        time: 5,
        xp: 7,
        requiredLevel: 14,
        requiredItems: { power: 8 }
    },
    //t3
    mixAntiFreeze: {
        name: "Anti-Freeze",
		items:
		{
			id: "drinkAntiFreeze",
			count: 3,
		},
        icon: require("@/assets/art/bartending/antifreeze.png"),
        time: 5,
        xp: 15,
        requiredLevel: 31,
        requiredItems: { power: 9 }
    },
    mixChangelingSting: {
        name: "Changeling Sting",
		items:
		{
			id: "drinkChangelingSting",
			count: 3,
		},
        icon: require("@/assets/art/bartending/anim/changelingsting.gif"),
        time: 5,
        xp: 18,
        requiredLevel: 32,
        requiredItems: { power: 10 }
    },
    mixBeepskySmash: {
        name: "Beepsky Smash",
		items:
		{
			id: "drinkBeepskySmash",
			count: 3,
		},
        icon: require("@/assets/art/bartending/anim/beepskysmash.gif"),
        time: 5,
        xp: 19,
        requiredLevel: 33,
        requiredItems: { power: 11 }
    },
    mixSingulo: {
        name: "Singulo",
		items:
		{
			id: "drinkSingulo",
			count: 3,
		},
        icon: require("@/assets/art/bartending/anim/singulo.gif"),
        time: 5,
        xp: 20,
        requiredLevel: 34,
        requiredItems: { power: 12 }
    },
}
const SLIME = {
    //t1
    synthOrange: {
        name: "Orange Juice",
		items:
		{
			id: "drinkOrangeJuice",
			count: 4,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/orangejuice.png"),
        time: 8,
        xp: 5,
        requiredLevel: 6,
        requiredItems: { slimeGray: 1 }
    },
    synthTomato: {
        name: "Tomato Juice",
		items:
		{
			id: "drinkTomatoJuice",
			count: 5,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/tomatojuice.png"),
        time: 8,
        xp: 6,
        requiredLevel: 7,
        requiredItems: { slimeGray: 2 }
    },
    synthCream: {
        name: "Cream",
		items:
		{
			id: "drinkCream",
			count: 4,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/cream.png"),
        time: 8,
        xp: 7,
        requiredLevel: 8,
        requiredItems: { slimeOrange: 1 }
    },
    synthCola: {
        name: "Space Cola",
		items:
		{
			id: "drinkSpaceCola",
			count: 5,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/spacecola.png"),
        time: 8,
        xp: 8,
        requiredLevel: 9,
        requiredItems: { slimeOrange: 2 }
    },
    //t2
    mixSilencer: {
        name: "Silencer",
		items:
		{
			id: "drinkSilencer",
			count: 4,
		},
        icon: require("@/assets/art/bartending/silencer.png"),
        time: 8,
        xp: 14,
        requiredLevel: 16,
        requiredItems: { slimeBlue: 1 }
    },
    mixAcidSpit: {
        name: "Acid Spit",
		items:
		{
			id: "drinkAcidSpit",
			count: 5,
		},
        icon: require("@/assets/art/bartending/anim/acidspit.gif"),
        time: 8,
        xp: 16,
        requiredLevel: 17,
        requiredItems: { slimeBlue: 2 }
    },
    mixArnoldPalmer: {
        name: "Arnold Palmer",
		items:
		{
			id: "drinkArnoldPalmer",
			count: 4,
		},
        icon: require("@/assets/art/bartending/arnoldpalmer.png"),
        time: 8,
        xp: 18,
        requiredLevel: 18,
        requiredItems: { slimeMetal: 1 }
    },
    mixWhiteRussian: {
        name: "White Russian",
		items:
		{
			id: "drinkWhiteRussian",
			count: 5,
		},
        icon: require("@/assets/art/bartending/whiterussian.png"),
        time: 8,
        xp: 19,
        requiredLevel: 19,
        requiredItems: { slimeMetal: 2 }
    },
    //t3
    mixSyndicateBomb: {
        name: "Syndicate Bomb",
		items:
		{
			id: "drinkSyndicateBomb",
			count: 4,
		},
        icon: require("@/assets/art/bartending/syndicatebomb.png"),
        time: 8,
        xp: 27,
        requiredLevel: 40,
        requiredItems: { slimeDarkPurple: 1 }
    },
    mixDemonsBlood: {
        name: "Demon's Blood",
		items:
		{
			id: "drinkDemonsBlood",
			count: 5,
		},
        icon: require("@/assets/art/bartending/anim/demonsblood.gif"),
        time: 8,
        xp: 29,
        requiredLevel: 41,
        requiredItems: { slimeDarkPurple: 2 }
    },
    mixNeurotoxin: {
        name: "Neurotoxin",
		items:
		{
			id: "drinkNeurotoxin",
			count: 4,
		},
        icon: require("@/assets/art/bartending/anim/neurotoxin.gif"),
        time: 8,
        xp: 30.4,
        requiredLevel: 42,
        requiredItems: { slimeDarkBlue: 1 }
    },
    mixWhat: {
        name: "Mistake",
		items:
		{
			id: "drinkWhat",
			count: 5,
		},
        icon: require("@/assets/art/bartending/whatdrink.png"),
        time: 8,
        xp: 32,
        requiredLevel: 43,
        requiredItems: { slimeDarkBlue: 2 }
    }
}
const POWERPLUS = {
    synthTequila: {
        name: "Tequila",
		items:
		{
			id: "drinkTequila",
			count: 3,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/tequila.png"),
        time: 10,
        xp: 4.5,
        requiredLevel: 21,
        requiredItems: { power: 4, glass: 1 }
    },
    synthLemon: {
        name: "Lemon Juice",
		items:
		{
			id: "drinkLemonJuice",
			count: 3,
		},
        actionName: "DISPENSE",
        icon: require("@/assets/art/bartending/lemonjuice.png"),
        time: 10,
        xp: 5.5,
        requiredLevel: 22,
        requiredItems: { power: 5, iron: 1 }
    },
    mixManhattan: {
        name: "Manhattan",
		items:
		{
			id: "drinkManhattan",
			count: 3,
		},
        count: 2,
        icon: require("@/assets/art/bartending/manhattan.png"),
        time: 10,
        xp: 12.5,
        requiredLevel: 23,
        requiredItems: { power: 8, silver: 1 }
    },
    mixManhattanProject: {
        name: "Manhattan Project",
		items:
		{
			id: "drinkManhattanProject",
			count: 3,
		},
        icon: require("@/assets/art/bartending/anim/manhattan_proj.gif"),
        time: 10,
        xp: 16.5,
        requiredLevel: 24,
        requiredItems: { power: 9, gold: 1 }
    },
    mixGargleBlaster: {
        name: "Pan-Galactic Gargle Blaster",
		items:
		{
			id: "drinkGargleBlaster",
			count: 3,
		},
        icon: require("@/assets/art/bartending/anim/gargleblaster.gif"),
        time: 10,
        xp: 20.5,
        requiredLevel: 45,
        requiredItems: { power: 12, titanium: 1 }
    },
    mixB52: {
        name: "B-52",
		items:
		{
			id: "drinkB52",
			count: 3,
		},
        icon: require("@/assets/art/bartending/anim/b52_flaming.gif"),
        time: 10,
        xp: 21.5,
        requiredLevel: 46,
        requiredItems: { power: 13, uranium: 1 }
    },
    mixNukaCola: {
        name: "Nuka-Cola",
		items:
		{
			id: "drinkNukaCola",
			count: 3,
		},
        icon: require("@/assets/art/bartending/anim/nukacola.gif"),
        time: 10,
        xp: 25,
        requiredLevel: 50,
        requiredItems: { power: 13, plasma: 2 }
    }
}
const SLIMEPLUS = {
    mixBilk: {
        name: "Bilk",
		items:
		{
			id: "drinkBilk",
			count: 4,
		},
        icon: require("@/assets/art/bartending/bilk.png"),
        time: 16,
        xp: 42,
        requiredLevel: 26,
        requiredItems: { slimePurple: 1, glass: 2 }
    },
    mixTripleSec: {
        name: "Triple Sec",
		items:
		{
			id: "drinkTripleSec",
			count: 5,
		},
        icon: require("@/assets/art/bartending/triplesec.png"),
        time: 16,
        xp: 44,
        requiredLevel: 27,
        requiredItems: { slimePurple: 2, iron: 2 }
    },
    mixIrishCB: {
        name: "Irish Car Bomb",
		items:
		{
			id: "drinkIrishCB",
			count: 4,
		},
        icon: require("@/assets/art/bartending/irishcarbomb.png"),
        time: 16,
        xp: 45,
        requiredLevel: 28,
        requiredItems: { slimeYellow: 1, silver: 2 }
    },
    mixLizardWine: {
        name: "Lizard Wine",
		items:
		{
			id: "drinkLizardWine",
			count: 5,
		},
        icon: require("@/assets/art/bartending/lizardwine.png"),
        time: 16,
        xp: 46,
        requiredLevel: 29,
        requiredItems: { slimeYellow: 2, gold: 2 }
    },
    mixQuicky: {
        name: "Quicky",
		items:
		{
			id: "drinkQuicky",
			count: 4,
		},
        icon: require("@/assets/art/bartending/quicky.png"),
        time: 16,
        xp: 77,
        requiredLevel: 48,
        requiredItems: { slimeSilver: 1, titanium: 2}
    },
    mixDoctorsDelight: {
        name: "Doctor's Delight",
		items:
		{
			id: "drinkDoctorsDelight",
			count: 5,
		},
        icon: require("@/assets/art/bartending/anim/doctorsdelight.gif"),
        time: 16,
        xp: 78,
        requiredLevel: 49,
        requiredItems: { slimeSilver: 2, uranium: 2 }
    },
    mixAtomicBomb: {
        name: "Atomic Bomb",
		items:
		{
			id: "drinkAtomicBomb",
			count: 5,
		},
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
    
Object.values(POWER).forEach(action => action.type = "Basic Drinks");
Object.values(SLIME).forEach(action => action.type = "Complex Drinks");
Object.values(POWERPLUS).forEach(action => action.type = "Super Basic Drinks");
Object.values(SLIMEPLUS).forEach(action => action.type = "Super Complex Drinks");

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