import { ITEMS as SHOP_ITEMS } from "./shop";
import COMBAT_ITEMS from "./combatItems";
import { ALL_JOBS } from "./jobs";

let jobItems = {};
jobItems = Object.assign(jobItems, SHOP_ITEMS);
jobItems = Object.assign(jobItems, COMBAT_ITEMS);

ALL_JOBS.forEach(job => {
	jobItems = Object.assign(jobItems, job.items);
});

const ITEMS = jobItems;

export default ITEMS;