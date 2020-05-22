import ITEMS from "@/data/items";


export function getEquipmentSlot(itemId) {
	let item = ITEMS[itemId];
	if (item.equipmentSlot) return item.equipmentSlot;
	if (item.healAmount) return "food";
	return null;
}

export function getEquipmentStackable(itemId) {
	let equipmentSlot = getEquipmentSlot(itemId);
	if (equipmentSlot == "food") return true;
	if (equipmentSlot == "pocket") return true;
	return false;
}

export function getBankItemsOfSlot(bank, slot) {
	return Object.keys(bank).filter(itemId => getEquipmentSlot(itemId) == slot);
}

export function getRestricted({ }, itemId) {
	let item = ITEMS[itemId];
	if (!item.restrictions) return false;
	for (let restriction of item.restrictions) {
		if (restriction) {
			return true;
		}
	}
	return false;
}