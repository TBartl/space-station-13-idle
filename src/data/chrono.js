export const BASE_BONUS = 5;
export const ITEM_INTERVALS = [40, 65, 85, 92, 97, 100];
export const ENEMY_INTERVALS = [60, 80, 100];
export const JOB_INTERVALS = [40, 60, 80, 90, 95, 100];

export const SECTIONS = [

	{
		name: "Chrono Exchange",
		purchases: ["chronoToCash"]
	},

	{
		name: "Time Bank Upgrades",
		purchases: []
	},
]

export const PURCHASES = {
	chronoToCash: {
		name: "Chrono-To-Cash",
		description: "Gain $100,000",
		icon: require('@/assets/art/misc/coin-padded.png'),
		items: {
			id: "money",
			count: 100000
		},
		requiredItems: {
			bluetime: 1
		}
	}
}