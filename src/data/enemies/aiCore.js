export default {
	securitybot: {
		name: "Security Bot",
		icon: require("@/assets/art/combat/enemies/secbot.png"),
		stats: {
			maxHealth: 350,
			attackSpeed: 2.1,
			precision: 104,
			power: 80,
			evasion: 72,
			damageType: "brute",
			burnProtection: 0,
			bruteProtection: 5
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'ticket3',
						count: [1, 3],
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'diamond',
						weight: 14
					},
					{
						id: 'armorJunk',
						weight: 5
					},
					{
						id: 'bluespace',
						weight: 1
					}
				]
			}
		]
	},
	turrets: {
		name: "Defense Turret",
		icon: require("@/assets/art/combat/enemies/turret.png"),
		stats: {
			maxHealth: 360,
			attackSpeed: 2.4,
			precision: 93,
			power: 73,
			evasion: 52,
			damageType: "burn",
			burnProtection: 0,
			bruteProtection: 5
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'ammoEnergy4',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'plasma',
						weight: 14
					},
					{
						id: 'junk',
						weight: 5
					},
					{
						id: 'uranium',
						weight: 1
					}
				]
			}
		]
	},
	AI: {
		name: "AI",
		icon: require("@/assets/art/combat/enemies/ai_anim.gif"),
		stats: {
			maxHealth: 1337,
			attackSpeed: 1.9,
			precision: 94,
			power: 74,
			evasion: 10,
			damageType: "burn",
			burnProtection: 50,
			bruteProtection: 60
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'uranium',
						weight: 14
					},
					{
						id: 'spacejunk',
						weight: 5
					},
					{
						id: 'bananium',
						weight: 1
					}
				]
			}
		]
	},
}