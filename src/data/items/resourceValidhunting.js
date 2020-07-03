export default {
	innocent: {
		name: "Dedication Medal",
		sellPrice: 1,
		description: "A token of appreciation given by central command to hard workers. Just throw it away since it's not worth the medal it's printed on.",
		icon: require("@/assets/art/validhunting/innocent.png")
	},
	criminal: {
		name: "Valor In Combat Medal",
		description: "Given to particularly bloodthirst crewmembers for killing an enemy of Nanotrasen. Just throw it away since it's not worth the medal it's printed on.",
		sellPrice: 1,
		icon: require("@/assets/art/validhunting/guilty.png")
	},
	ticket1: {
		name: "Code Green Bounty Documents",
		description: "Gives the holder legal protection while dealing with minor criminals.",
		sellPrice: 250,
		icon: require("@/assets/art/validhunting/ticketeasy.png")
	},
	ticket2: {
		name: "Code Blue Bounty Documents",
		description: "Provides the holder legal protection while dealing with native threats.",
		sellPrice: 500,
		icon: require("@/assets/art/validhunting/ticketmedium.png")
	},
	ticket3: {
		name: "Code Red Bounty Documents",
		description: "Gives the holder carte blance legal immunity while dealing with threats to station.",
		sellPrice: 1000,
		icon: require("@/assets/art/validhunting/tickethard.png")
	}
}