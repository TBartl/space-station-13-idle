import { cloneDeep } from 'lodash';

import SLIMES from "./slotCompanion";

let slimeMapping = { // used to manually map set icons to dynamically generated slime cores
	"slimeGray": require("@/assets/art/xenobio/cores/c_SlimeGray.png"),
	"slimeYellow": require("@/assets/art/xenobio/cores/c_SlimeYellow.png"),
	"slimeAddy": require("@/assets/art/xenobio/cores/c_SlimeAddy.png"),
	"slimeBlack": require("@/assets/art/xenobio/cores/c_SlimeBlack.png"), 
	"slimeBlue": require("@/assets/art/xenobio/cores/c_SlimeBlue.png"),
	"slimeBluespace": require("@/assets/art/xenobio/cores/c_SlimeBluespace.png"), 
	"slimeCerulean": require("@/assets/art/xenobio/cores/c_SlimeCerulean.png"),
	"slimeDarkBlue": require("@/assets/art/xenobio/cores/c_SlimeDarkBlue.png"), 
	"slimeDarkPurple": require("@/assets/art/xenobio/cores/c_SlimeDarkPurple.png"),
	"slimeGold": require("@/assets/art/xenobio/cores/c_SlimeGold.png"), 
	"slimeGreen": require("@/assets/art/xenobio/cores/c_SlimeGreen.png"),
	"slimeLightPink": require("@/assets/art/xenobio/cores/c_SlimeLightPink.png"), 
	"slimeMetal": require("@/assets/art/xenobio/cores/c_SlimeMetal.png"),
	"slimeOil": require("@/assets/art/xenobio/cores/c_SlimeOil.png"), 
	"slimeOrange": require("@/assets/art/xenobio/cores/c_SlimeOrange.png"),
	"slimePink": require("@/assets/art/xenobio/cores/c_SlimePink.png"), 
	"slimePurple": require("@/assets/art/xenobio/cores/c_SlimePurple.png"),
	"slimePyrite": require("@/assets/art/xenobio/cores/c_SlimePyrite.png"), 
	"slimeRainbow": require("@/assets/art/xenobio/cores/c_SlimeRainbow.png"),
	"slimeRed": require("@/assets/art/xenobio/cores/c_SlimeRed.png"), 
	"slimeSepia": require("@/assets/art/xenobio/cores/c_SlimeSepia.png"),
	"slimeSilver": require("@/assets/art/xenobio/cores/c_SlimeSilver.png"), 
  }

let slimeCoreEntries = Object.entries(SLIMES).filter(entry => { return entry[1].noCore != true; }).map(entry => {
	let originalId = entry[0];
	let originalItem = entry[1];

	let newCore = cloneDeep(originalItem);
    newCore.nocomplete = true; // don't count slime cores towards completion percentage
	newCore.name = newCore.name + " Core";
	newCore.healAmount = Math.round(newCore.healAmount * 1.3);
    newCore.equipmentSlot = "pocket";
    newCore.fleeChance = null;
    newCore.icon = slimeMapping[originalId];
	return ["core_" + originalId, newCore];
});

const RESOURCE_XENOBIOLOGY = Object.assign(Object.fromEntries(slimeCoreEntries));

export default RESOURCE_XENOBIOLOGY;
