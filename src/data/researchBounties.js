import ITEMS from "@/data/items";

//IDs for bounties should end with a number indicative of their tier

export const TIER_I_BOUNTIES = { //bounties that appear at levels 1-10
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

export const TIER_II_BOUNTIES = { //bounties that appear at levels 11-20
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
			armorBlunt2: 5
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
	//needs bartending and xenobio bounties
	//code unfinished below this line
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
