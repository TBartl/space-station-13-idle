import { ALL_JOBS } from "./jobs";

let jobItems = new Map();
ALL_JOBS.forEach(job => {
	jobItems = new Map([...jobItems, ...job.items]);
});

const ITEMS = new Map(...[jobItems]);

export default ITEMS;