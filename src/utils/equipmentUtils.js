import ITEMS from "@/data/items";


export function getEquipmentSlot(itemId) {
	let item = ITEMS[itemId];
	if (item.equipmentSlot) return item.equipmentSlot;
	if (item.healAmount) return "food";
	return null;
}