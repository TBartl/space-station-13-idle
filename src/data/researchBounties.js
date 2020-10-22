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
		pointsReward: 75
	},
	mysteriousBounty1: { //named such because it may not be immediately obvious how to obtain these items
		requiredItems: { //ETA 4~ minutes if you know where cactuses are found
			cactus: 10
		},
		pointsReward: 100
	}
}

const TIER_2_BOUNTIES = { //bounties that appear at levels 11-20 requires 10ish minutes per. 75 to 200 points
	miningBounty2: {
		requiredItems: { //ETA 8 minutes at 1 mining upgrade
			silver: 100,
			gold: 100
		},
		pointsReward: 125
	},
	engineeringBounty2: {
		requiredItems: { //ETA 8-10? minutes to acquire
			power: 750,
			burnJunk: 25
		},
		pointsReward: 150
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
		pointsReward: 175
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
	//needs bartending and xenobio bounties in t2?
	chemistryBounty2: {
		requiredItems: { //ETA 2 minutes in chem + 2 minutes in engineering
			sacid: 100,
			potionMining: 5
		},
		pointsReward: 75
	},
	combatBounty2: {
		requiredItems: { //ETA varies too much
			mouseCarcass: 10,
			wire: 5
		},
		pointsReward: 75
	},
	lootcrateBounty2: {
		requiredItems: { //ETA 6~ minutes with simple mining to sell ores
			supplyCrate: 2
		},
		pointsReward: 75
	},
	mysteriousBounty2: { //named such because it may not be immediately obvious how to obtain these items
		requiredItems: { //ETA 4~ minutes if you know where cactuses are found
			cactus: 10
		},
		pointsReward: 100
	}
}

const TIER_3_BOUNTIES = { //bounties that appear at levels 21-30, requires 10 minutes per of high level skills 100 to 250 points
	miningBounty3: {
		requiredItems: {
			titanium: 100,
			uranium: 100
		},
		pointsReward: 200
	},
	engineeringBounty3: {
		requiredItems: {
			power: 750,
			burnJunk: 25
		},
		pointsReward: 225
	},
	fabricationBounty3: {
		requiredItems: {
			gunBallistic4: 1,
			ammoBallistic3: 100
		},
		pointsReward: 250
	},
	graytideBounty3: {
		requiredItems: {
			armorJunk: 100
		},
		pointsReward: 150
	},
	tinkeringBounty3: {
		requiredItems: {
			meleeSharp3: 10,
			armorBurn3: 5
		},
		pointsReward: 100
	},
	botanyBounty3: {
		requiredItems: {
			orange: 160,
			plantSeed: 100
		},
		pointsReward: 200
	},
	cookingBounty3: {
		requiredItems: {
			foodPasta1: 50,
			q_foodPasta1: 5,
			foodPrecision1: 5
		},
		pointsReward: 225
	},

	bartendingBounty3: {
		requiredItems: {
			drinkTequila: 100,
			drinkLemonJuice: 5
		},
		pointsReward: 250
	},
	xenobiologyBounty3: {
		requiredItems: {
			slimeRainbow: 10
		},
		pointsReward: 200
	},

	chemistryBounty3: {
		requiredItems: { //ETA 2 minutes in chem + 2 minutes in engineering
			mercury: 100,
			potionCooking: 5
		},
		pointsReward: 175
	},
	combatBounty3: {
		requiredItems: { //ETA varies too much
			companionFox: 1,
			criminal: 5
		},
		pointsReward: 150
	},
	lootcrateBounty3: {
		requiredItems: { //ETA 6~ minutes with simple mining to sell ores
			S2headCommon1: 5
		},
		pointsReward: 75
	},
	mysteriousBounty3: { //named such because it may not be immediately obvious how to obtain these items
		requiredItems: { //ETA 4~ minutes if you know where cactuses are found
			faceTiki: 10
		},
		pointsReward: 175
	}

}

const TIER_4_BOUNTIES = { //bounties that appear at levels 31-40, requires 10 minutes per of unlocked recipes or low boss items 150 to 300 points
	miningBounty4: {
		requiredItems: {
			plasma: 100,
			diamond: 100
		},
		pointsReward: 150
	},
	engineeringBounty4: {
		requiredItems: {
			power: 10000,
		},
		pointsReward: 250
	},
	fabricationBounty4: {
		requiredItems: { //ETA 13 minutes + mining/fab levels
			ripley: 1
		},
		pointsReward: 175
	},
	graytideBounty4: {
		requiredItems: { //ETA <20 minutes avg with 2 upgrades+chem
			junk: 50
		},
		pointsReward: 175
	},
	tinkeringBounty4: {
		requiredItems: { //ETA 13 levels in tinkering + 2~ minutes
			meleeBlunt4: 10,
			armorBrute4: 5
		},
		pointsReward: 150
	},
	botanyBounty4: {
		requiredItems: { //ETA 22 levels in botany OR mutagen with rng
			bananaMime: 160,
			plantSeed: 500
		},
		pointsReward: 200
	},
	cookingBounty4: {
		requiredItems: {
			foodPasta1: 50,
			q_foodPasta1: 5,
			foodPrecision1: 5
		},
		pointsReward: 175
	},

	bartendingBounty4: {
		requiredItems: {
			drinkTequila: 100,
			drinkLemonJuice: 5
		},
		pointsReward: 250
	},
	xenobiologyBounty4: {
		requiredItems: {
			slimeRainbow: 10
		},
		pointsReward: 200
	},

	chemistryBounty4: {
		requiredItems: { //ETA 2 minutes in chem + 2 minutes in engineering
			sacid: 100,
			potionMining: 5
		},
		pointsReward: 200
	},
	combatBounty4: {
		requiredItems: { //ETA varies too much
			mouseCarcass: 10,
			wire: 5
		},
		pointsReward: 300
	},
	lootcrateBounty4: {
		requiredItems: { //ETA 6~ minutes with simple mining to sell ores
			supplyCrate: 2
		},
		pointsReward: 275
	},
	mysteriousBounty4: { //named such because it may not be immediately obvious how to obtain these items
		requiredItems: { //ETA 4~ minutes if you know where cactuses are found
			cactus: 10
		},
		pointsReward: 250
	}
}

const TIER_5_BOUNTIES = { //bounties that appear at levels 41-50 requires 10 minutes per of unlocked recipes, antag jobs, and high boss items 200 to 350 points
	miningBounty5: {
		requiredItems: {
			bananium: 100
		},
		pointsReward: 250
	},
	engineeringBounty5: {
		requiredItems: { //ETA 8-10? minutes to acquire
			power: 100000,
		},
		pointsReward: 350
	},
	fabricationBounty5: {
		requiredItems: { //ETA 13 minutes + mining/fab levels
			ripley: 1
		},
		pointsReward: 275
	},
	graytideBounty5: {
		requiredItems: { //ETA <20 minutes avg with 2 upgrades+chem
			junk: 50
		},
		pointsReward: 225
	},
	tinkeringBounty5: {
		requiredItems: { //ETA 13 levels in tinkering + 2~ minutes
			meleeBlunt6: 10,
			armorBurn5: 5
		},
		pointsReward: 300
	},
	botanyBounty5: {
		requiredItems: { //ETA 22 levels in botany OR mutagen with rng
			orange3d: 160,
			plantSeed: 1000
		},
		pointsReward: 375
	},
	cookingBounty5: {
		requiredItems: {
			foodPasta1: 50,
			q_foodPasta1: 5,
			foodPrecision1: 5
		},
		pointsReward: 225
	},
	bartendingBounty5: {
		requiredItems: {
			drinkTequila: 100,
			drinkLemonJuice: 5
		},
		pointsReward: 250
	},
	xenobiologyBounty5: {
		requiredItems: {
			slimeRainbow: 10
		},
		pointsReward: 300
	},
	chemistryBounty5: {
		requiredItems: { //ETA 2 minutes in chem + 2 minutes in engineering
			sacid: 100,
			potionMining: 5
		},
		pointsReward: 200
	},
	combatBounty5: {
		requiredItems: { //ETA varies too much
			mouseCarcass: 10,
			wire: 5
		},
		pointsReward: 250
	},
	lootcrateBounty5: {
		requiredItems: { //ETA 6~ minutes with simple mining to sell ores
			supplyCrate: 2
		},
		pointsReward: 250
	},
	mysteriousBounty5: { //named such because it may not be immediately obvious how to obtain these items
		requiredItems: { //ETA 4~ minutes if you know where cactuses are found
			cactus: 10
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
