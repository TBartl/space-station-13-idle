import { ITEMS as SHOP_ITEMS } from "./shop";
import { ALL_JOBS } from "./jobs";

let jobItems = new Map();
jobItems = new Map([...jobItems, ...SHOP_ITEMS]);

ALL_JOBS.forEach(job => {
	jobItems = new Map([...jobItems, ...job.items]);
});

const ITEMS = new Map(...[jobItems]);

export default ITEMS;