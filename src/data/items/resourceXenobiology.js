import { cloneDeep } from 'lodash';

import SLIMES from "./slotCompanion"; // this technically includes other non slime pets but they can go unused and not count for completion ;)

let slimeCoreEntries = Object.entries(SLIMES).map(entry => {
	let originalId = entry[0];
	let originalItem = entry[1];

	let newCore = cloneDeep(originalItem);
    newCore.nocomplete = true; // don't count slime cores towards completion percentage
	newCore.name = newCore.name + " Core";
	newCore.healAmount = Math.round(newCore.healAmount * 1.3);
	newCore.sellPrice *= 2;
    newCore.equipmentSlot = "pocket";
    newCore.fleeChance = null;
    /*if(originalItem.name.includes("Slime")){
        let coreIcon = "@/assets/art/xenobio/cores/c_"+originalId.toString()+".png";
        newCore.icon = require(coreIcon);
    }*/
    newCore.icon = require("@/assets/art/xenobio/cores/c_slimeGray.png"); // TODO: Fix commented icons code above
	return ["core_" + originalId, newCore];
});

const RESOURCE_XENOBIOLOGY = Object.assign(Object.fromEntries(slimeCoreEntries));

export default RESOURCE_XENOBIOLOGY;