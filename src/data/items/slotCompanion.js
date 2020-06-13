const SLIMES = {
	slimeGrey: {
		name: "Grey Slime",
		sellPrice: 3,
		icon: require("@/assets/art/xenobio/SlimeGrey.gif"),
	},
	slimeOrange: {
		name: "Orange Slime",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimeOrange.gif")
	},
	slimePurple: {
		name: "Purple Slime",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimePurple.gif")
	},
	slimeBlue: {
		name: "Blue Slime",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimeBlue.gif")
	},
	slimeMetal: {
		name: "Metal Slime",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimeMetal.gif")
	},
	slimeYellow: {
		name: "Yellow Slime",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeYellow.gif")
	},
	slimeDarkPurple: {
		name: "Dark Purple Slime",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeDarkPurple.gif")
	},
	slimeDarkBlue: {
		name: "Dark Blue Slime",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeDarkBlue.gif")
	},
	slimeSilver: {
		name: "Silver Slime",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeSilver.gif")
	},
	slimeBluespace: {
		name: "Bluespace Slime",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimeBluespace.gif")
	},
	slimeSepia: {
		name: "Sepia Slime",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimeSepia.gif")
	},
	slimeCerulean: {
		name: "Cerulean Slime",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimeCerulean.gif")
	},
	slimePyrite: {
		name: "Pyrite Slime",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimePyrite.gif")
	},
	slimeRed: {
		name: "Red Slime",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimeRed.gif")
	},
	slimeGreen: {
		name: "Green Slime",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimeGreen.gif")
	},
	slimePink: {
		name: "Pink Slime",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimePink.gif")
	},
	slimeGold: {
		name: "Gold Slime",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimeGold.gif")
	},
	slimeOil: {
		name: "Oil Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeOil.gif")
	},
	slimeBlack: {
		name: "Black Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeBlack.gif")
	},
	slimeLightPink: {
		name: "Light Pink Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeLightPink.gif")
	},
	slimeAddy: {
		name: "Adamantite Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeAddy.gif")
	},
	slimeRainbow: {
		name: "Rainbow Slime",
		sellPrice: 500,
		icon: require("@/assets/art/xenobio/SlimeRainbow.gif")
	},
}
for (let slime of Object.values(SLIMES)) {
	slime.equipmentSlot = "companion";
}

export default SLIMES;