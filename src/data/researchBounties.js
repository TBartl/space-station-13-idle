import ITEMS from "@/data/items";

//IDs for bounties should end with a number indicative of their tier

const TIER_1_BOUNTIES = { //bounties that appear at levels 1-10, requires 5ish minutes per. 50 to 100 points
	miningBounty1: {
		requiredItems: { //ETA 3 minutes to acquire
			glass: 50,
			iron: 50
		},
		pointsReward: 50 //halfway to VERY basic recipe
	},
	engineeringBounty1: {
		requiredItems: { //ETA 4-8 minutes to acquire
			power: 250,
			oil: 25
		},
		pointsReward: 75
	},
	fabricationBounty1: {
		requiredItems: { //ETA 2.6 + material gathering minutes to acquire
			ammoEnergy1: 320
		},
		pointsReward: 75
	},
	graytideBounty1: {
		requiredItems: { //ETA 4 minutes avg with no upgrades
			junk: 10
		},
		pointsReward: 75
	},
	tinkeringBounty1: {
		requiredItems: { //ETA 5 levels in tinkering
			meleeBlunt1: 3,
			armorBurn1: 2
		},
		pointsReward: 75
	},
	botanyBounty1: {
		requiredItems: { //ETA 6 levels in botany + 2~ minutes
			banana: 80,
			plantSeed: 20
		},
		pointsReward: 100
	},
	//no cooking, bartending, or xenobio beginner bounties since they have something of a time gate early on. also antag jobs + shitposting
	chemistryBounty1: {
		requiredItems: { //ETA 2 minutes in chem + 2 minutes in engineering
			sacid: 100,
			potionMining: 5
		},
		pointsReward: 75
	},
	combatBounty1: {
		requiredItems: { //ETA varies too much
			mouseCarcass: 10,
			wire: 5
		},
		pointsReward: 75
	},
	lootcrateBounty1: {
		requiredItems: { //ETA 6~ minutes with simple mining to sell ores
			supplyCrate: 2
		},
		pointsReward: 50
	},
	mysteriousBounty1: { //named such because it may not be immediately obvious how to obtain these items
		requiredItems: { //ETA 4~ minutes if you know where cactuses are found
			cactus: 10
		},
		pointsReward: 100
	}
}

const TIER_2_BOUNTIES = { //bounties that appear at levels 11-20 requires 10ish minutes per. 100 to 200 points
	miningBounty2: {
		requiredItems: { //ETA 8 minutes at 1 mining upgrade
			silver: 100,
			gold: 100
		},
		pointsReward: 100
	},
	engineeringBounty2: {
		requiredItems: { //ETA 8-10? minutes to acquire
			power: 750,
			burnJunk: 25
		},
		pointsReward: 100
	},
	fabricationBounty2: {
		requiredItems: { //ETA 13 minutes + mining/fab levels
			ripley: 1
		},
		pointsReward: 175
	},
	graytideBounty2: {
		requiredItems: { //ETA <20 minutes avg with 2 upgrades+chem
			junk: 50
		},
		pointsReward: 125
	},
	tinkeringBounty2: {
		requiredItems: { //ETA 13 levels in tinkering + 2~ minutes
			meleeBlunt2: 10,
			armorBrute2: 5
		},
		pointsReward: 150
	},
	botanyBounty2: {
		requiredItems: { //ETA 22 levels in botany OR mutagen with rng
			bananaMime: 160,
			plantSeed: 40
		},
		pointsReward: 200
	},
	cookingBounty2: {
		requiredItems: {
			foodPasta1: 50,
			q_foodPasta1: 5,
			foodPrecision1: 5
		},
		pointsReward: 175
	},
	//no bartending and xenobio bounties in t2
	chemistryBounty2: {
		requiredItems: { 
			oil: 500,
			potionGraytiding: 10
		},
		pointsReward: 150
	},
	combatBounty2: {
		requiredItems: { //Robustness 10~ enemies
			foodMeatZ: 10,
			ticket10: 5
		},
		pointsReward: 175
	},
	lootcrateBounty2: {
		requiredItems: { 
			knifeCrate: 1,
			meleeSharp3: 1 //18% from knife crate or craftable eventually if bad RNG
		},
		pointsReward: 150
	},
	mysteriousBounty2: {
		requiredItems: {
			meleeToolbox2: 1
		},
		pointsReward: 200
	}
}

const TIER_3_BOUNTIES = { //bounties that appear at levels 21-30, requires 10 minutes per of high level skills. 175 to 250 points
	miningBounty3: {
		requiredItems: {
			titanium: 100,
			uranium: 100
		},
		pointsReward: 175
	},
	engineeringBounty3: {
		requiredItems: {
			power: 2000,
			wire: 25
		},
		pointsReward: 200
	},
	fabricationBounty3: {
		requiredItems: {
			gunBallistic4: 1,
			ammoBallistic2: 100
		},
		pointsReward: 250
	},
	graytideBounty3: {
		requiredItems: {
			armorJunk: 100,
			foodMeatA: 20
		},
		pointsReward: 150
	},
	tinkeringBounty3: {
		requiredItems: {
			meleeSharp3: 10,
			armorBurn3: 5
		},
		pointsReward: 225
	},
	botanyBounty3: {
		requiredItems: {
			orange: 160,
			plantSeed: 100
		},
		pointsReward: 225
	},
	cookingBounty3: {
		requiredItems: {
			q_foodPasta1: 50,
			foodPower2: 50,
			q_foodAnimal1: 1
		},
		pointsReward: 225
	},

	bartendingBounty3: {
		requiredItems: {
			drinkArnoldPalmer: 40,
			drinkTomatoJuice: 1
		},
		pointsReward: 250
	},
	xenobiologyBounty3: {
		requiredItems: {
			slimeYellow: 5,
			slimeDarkPurple: 5,
			slimeDarkBlue: 5,
			slimeSilver: 5
		},
		pointsReward: 200
	},

	chemistryBounty3: {
		requiredItems: {
			potionChemistry: 5,
			pillSpacelube: 300
		},
		pointsReward: 200
	},
	combatBounty3: {
		requiredItems: {
			companionBee: 1,
			criminal: 5
		},
		pointsReward: 200
	},
	lootcrateBounty3: {
		requiredItems: { 
			S2headCommon1: 1,
			S2headCommon2: 1,
			S2headCommon3: 1
		},
		pointsReward: 225
	},
	mysteriousBounty3: {
		requiredItems: {
			faceTiki: 1
		},
		pointsReward: 250
	}

}

const TIER_4_BOUNTIES = { //bounties that appear at levels 31-40, requires 10 minutes per of unlocked recipes or low boss items 200 to 300 points
	miningBounty4: {
		requiredItems: {
			plasma: 100,
			diamond: 100
		},
		pointsReward: 225
	},
	engineeringBounty4: {
		requiredItems: {
			power: 5000,
			ammoEnergy3: 120
		},
		pointsReward: 250
	},
	fabricationBounty4: {
		requiredItems: { 
			mauler: 1
		},
		pointsReward: 275
	},
	graytideBounty4: {
		requiredItems: {
			limbClownShoes: 1
		},
		pointsReward: 300
	},
	tinkeringBounty4: {
		requiredItems: {
			meleeBlunt6: 30,
			meleeSharp6: 30
		},
		pointsReward: 250
	},
	botanyBounty4: {
		requiredItems: {
			flowerNova: 500,
			potionBotany: 20
		},
		pointsReward: 225
	},
	cookingBounty4: {
		requiredItems: {
			foodPasta4: 10,
			q_foodAlien2: 50
		},
		pointsReward: 300
	},
	bartendingBounty4: {
		requiredItems: {
			drinkLizardWine: 150
		},
		pointsReward: 250
	},
	xenobiologyBounty3: {
		requiredItems: {
			slimeRed: 25,
			slimeGreen: 25,
			slimePink: 25,
			slimeGold: 25
		},
		pointsReward: 250
	},
	chemistryBounty4: {
		requiredItems: {
			potionCargonia: 100,
			pillPrecision: 100
		},
		pointsReward: 225
	},
	combatBounty4: {
		requiredItems: {
			jumpsuitMedical: 2,
			ticket3: 5
		},
		pointsReward: 300
	},
	lootcrateBounty4: {
		requiredItems: {
			startCargonia: 3
		},
		pointsReward: 300
	},
	mysteriousBounty4: {
		requiredItems: {
			mechPlating1: 1,
			mechPlating2: 1,
			holidayhat: 3
		},
		pointsReward: 275
	}
}

const TIER_5_BOUNTIES = { //bounties that appear at levels 41-50 requires 10 minutes per of unlocked recipes, antag jobs, and high boss items 250 to 350 points
	miningBounty5: {
		requiredItems: {
			bananium: 100
		},
		pointsReward: 250
	},
	engineeringBounty5: {
		requiredItems: {
			power: 10000,
			orange3d: 100
		},
		pointsReward: 350
	},
	fabricationBounty5: {
		requiredItems: {
			phazon: 1
		},
		pointsReward: 300
	},
	graytideBounty5: {
		requiredItems: {
			junk: 100,
			foodPasta6: 5,
			ammoEnergy4: 5,
			ammoBallistic4: 5
		},
		pointsReward: 275
	},
	tinkeringBounty5: {
		requiredItems: {
			meleeBlunt9: 10,
			armorBurn5: 10,
			armorBrute5: 10
		},
		pointsReward: 325
	},
	botanyBounty5: {
		requiredItems: {
			orange3d: 450,
			companionKillerTomato: 150,
			plantSeed: 1000
		},
		pointsReward: 300
	},
	cookingBounty5: {
		requiredItems: {
			q_foodPasta5: 10,
			foodPasta6: 1,
			foodAnimal4: 5,
			foodHuman4: 5,
			foodAlien4: 5
		},
		pointsReward: 350
	},
	bartendingBounty5: {
		requiredItems: {
			drinkAtomicBomb: 50,
			drinkWhat: 100
		},
		pointsReward: 300
	},
	xenobiologyBounty5: {
		requiredItems: {
			slimeRainbow: 20
		},
		pointsReward: 300
	},
	chemistryBounty5: {
		requiredItems: { //ETA 2 minutes in chem + 2 minutes in engineering
			pillRegen: 1000,
			potionTinkering: 100
		},
		pointsReward: 300
	},
	combatBounty5: {
		requiredItems: { //ETA varies too much
			ticket60: 10,
			foodMeatH: 100,
			foodMeatA: 100,
			foodMeatZ: 100
		},
		pointsReward: 325
	},
	lootcrateBounty5: {
		requiredItems: { //ETA 6~ minutes with simple mining to sell ores
			meleeBurn3: 2,
			telecrystal: 10
		},
		pointsReward: 300
	},
	mysteriousBounty5: { //named such because it may not be immediately obvious how to obtain these items
		requiredItems: { //ETA 4~ minutes if you know where cactuses are found
			companionMouse: 5,
			companionDog: 1,
			companionCat: 1,
			foot: 50
		},
		pointsReward: 300
	}
}

Object.values(TIER_1_BOUNTIES).forEach(bounty => bounty.tier = 1);
Object.values(TIER_2_BOUNTIES).forEach(bounty => bounty.tier = 2);
Object.values(TIER_3_BOUNTIES).forEach(bounty => bounty.tier = 3);
Object.values(TIER_4_BOUNTIES).forEach(bounty => bounty.tier = 4);
Object.values(TIER_5_BOUNTIES).forEach(bounty => bounty.tier = 5);

export const RESEARCH_BOUNTIES = {
	...TIER_1_BOUNTIES,
	...TIER_2_BOUNTIES,
	...TIER_3_BOUNTIES,
	...TIER_4_BOUNTIES,
	...TIER_5_BOUNTIES
}
