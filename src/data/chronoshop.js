
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