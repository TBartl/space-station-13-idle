import { cloneDeep } from 'lodash';

/*import SLIMES from "./slotCompanion";

let slimeCoreEntries = Object.entries(SLIMES).filter(entry => { return entry[1].noCore != true; }).map(entry => {
	let originalId = entry[0];
	let originalItem = entry[1];

	let newCore = cloneDeep(originalItem);
    newCore.nocomplete = true; // don't count slime cores towards completion percentage
	newCore.name = newCore.name + " Core";
	newCore.healAmount = Math.round(newCore.healAmount * 1.3);
	newCore.sellPrice *= 2;
    newCore.equipmentSlot = "pocket";
    newCore.fleeChance = null;
    //if(originalItem.name.includes("Slime")){
    //    let coreIcon = "@/assets/art/xenobio/cores/c_"+originalId.toString()+".png";
    //    newCore.icon = require(coreIcon);
    //}
    newCore.icon = require("@/assets/art/xenobio/cores/c_slimeGray.png"); // TODO: Fix commented icons code above
	return ["core_" + originalId, newCore];
});

const RESOURCE_XENOBIOLOGY = Object.assign(Object.fromEntries(slimeCoreEntries));

// above is busted code to automatically copy cores from the slimes category in slotCompanion.js.
// it mostly works, but icons are seemingly impossible to correct due to dynamic loading issues.
// the uncommented code below is mostly copypasted from slotCompanion.js. if a fix is found for
// dynamic icon loading, we can un-copypaste all of it by using the code above.
*/


const RESOURCE_XENOBIOLOGY = {
	core_slimeGray: {
		name: "Gray Slime Core",
		sellPrice: 3,
		icon: require("@/assets/art/xenobio/cores/c_SlimeGray.png"),
		tier: 1,
		stats: {
			regen: .5
		}
	},
	core_slimeOrange: {
		name: "Orange Slime Core",
		sellPrice: 8,
		icon: require("@/assets/art/xenobio/cores/c_SlimeOrange.png"),
		tier: 2
	},
	core_slimePurple: {
		name: "Purple Slime Core",
		sellPrice: 8,
		icon: require("@/assets/art/xenobio/cores/c_SlimePurple.png"),
		tier: 2
	},
	core_slimeBlue: {
		name: "Blue Slime Core",
		sellPrice: 8,
		icon: require("@/assets/art/xenobio/cores/c_SlimeBlue.png"),
		tier: 2
	},
	core_slimeMetal: {
		name: "Metal Slime Core",
		sellPrice: 8,
		icon: require("@/assets/art/xenobio/cores/c_SlimeMetal.png"),
		tier: 2
	},
	core_slimeYellow: {
		name: "Yellow Slime Core",
		sellPrice: 20,
		icon: require("@/assets/art/xenobio/cores/c_SlimeYellow.png"),
		tier: 3
	},
	core_slimeDarkPurple: {
		name: "Dark Purple Slime Core",
		sellPrice: 20,
		icon: require("@/assets/art/xenobio/cores/c_SlimeDarkPurple.png"),
		tier: 3
	},
	core_slimeDarkBlue: {
		name: "Dark Blue Slime Core",
		sellPrice: 20,
		icon: require("@/assets/art/xenobio/cores/c_SlimeDarkBlue.png"),
		tier: 3
	},
	core_slimeSilver: {
		name: "Silver Slime Core",
		sellPrice: 20,
		icon: require("@/assets/art/xenobio/cores/c_SlimeSilver.png"),
		tier: 3
	},
	core_slimeBluespace: {
		name: "Bluespace Slime Core",
		sellPrice: 45,
		icon: require("@/assets/art/xenobio/cores/c_SlimeBluespace.png"),
		tier: 4
	},
	core_slimeSepia: {
		name: "Sepia Slime Core",
		sellPrice: 45,
		icon: require("@/assets/art/xenobio/cores/c_SlimeSepia.png"),
		tier: 4
	},
	core_slimeCerulean: {
		name: "Cerulean Slime Core",
		sellPrice: 45,
		icon: require("@/assets/art/xenobio/cores/c_SlimeCerulean.png"),
		tier: 4
	},
	core_slimePyrite: {
		name: "Pyrite Slime Core",
		sellPrice: 45,
		icon: require("@/assets/art/xenobio/cores/c_SlimePyrite.png"),
		tier: 4
	},
	core_slimeRed: {
		name: "Red Slime Core",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/cores/c_SlimeRed.png"),
		tier: 5
	},
	core_slimeGreen: {
		name: "Green Slime Core",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/cores/c_SlimeGreen.png"),
		tier: 5
	},
	core_slimePink: {
		name: "Pink Slime Core",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/cores/c_SlimePink.png"),
		tier: 5
	},
	core_slimeGold: {
		name: "Gold Slime Core",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/cores/c_SlimeGold.png"),
		tier: 5
	},
	core_slimeOil: {
		name: "Oil Slime Core",
		sellPrice: 250,
		icon: require("@/assets/art/xenobio/cores/c_SlimeOil.png"),
		tier: 6
	},
	core_slimeBlack: {
		name: "Black Slime Core",
		sellPrice: 250,
		icon: require("@/assets/art/xenobio/cores/c_SlimeBlack.png"),
		tier: 6
	},
	core_slimeLightPink: {
		name: "Light Pink Slime Core",
		sellPrice: 250,
		icon: require("@/assets/art/xenobio/cores/c_SlimeLightPink.png"),
		tier: 6
	},
	core_slimeAddy: {
		name: "Adamantite Slime Core",
		sellPrice: 250,
		icon: require("@/assets/art/xenobio/cores/c_SlimeAddy.png"),
		tier: 6
	},
	core_slimeRainbow: {
		name: "Rainbow Slime Core",
		sellPrice: 2000,
		icon: require("@/assets/art/xenobio/cores/c_SlimeRainbow.png"),
		tier: 7,
		stats: {
			precision: 10,
			power: 10,
			protection: 10,
			evasion: 10,
			maxHealth: 100,
			luck: 20
		}
	},
}


Object.values(RESOURCE_XENOBIOLOGY).forEach((slime, index) => {
	slime.equipmentSlot = "pocket";
    slime.nocomplete = true;

	// Some slimes have custom stats set
	if (slime.stats) return;

	let mod = (index - 1) % 8;

	if (mod == 0) {
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			burnProtection: (slime.tier - 1) * 4
		}
	}
	else if (mod == 1) {
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			moveTime: -1,
		}
	}
	else if (mod == 2) {
		slime.stats = {
			regen: (slime.tier) * 2 / 10,
			moveTime: 3,
		}
	}
	else if (mod == 3) {
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			bruteProtection: (slime.tier - 1) * 4
		}
	}
	else if (mod == 4) {
		slime.description = "Changes your weapon's damage type"
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			luck: (slime.tier) * 4,
			damageType: "burn"
		}
	}
	else if (mod == 5) {
		slime.description = "Changes your weapon's attack speed"
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			luck: (slime.tier) * 4,
			attackSpeed: 2 - (slime.tier / 5)
		}
	}
	else if (mod == 6) {
		slime.description = "Changes your weapon's attack speed"
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			luck: (slime.tier) * 4,
			attackSpeed: 3 + (slime.tier / 5)
		}
	}
	else if (mod == 7) {
		slime.description = "Changes your weapon's damage type"
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			luck: (slime.tier) * 4,
			damageType: "brute"
		}
	}

});

export default RESOURCE_XENOBIOLOGY;