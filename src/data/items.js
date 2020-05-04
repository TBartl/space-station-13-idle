import { ALL_JOBS } from "./jobs";

let jobItems = new Map();
ALL_JOBS.forEach(job => {
	console.log(jobItems, job.items);
	jobItems = new Map([...jobItems, ...job.items]);
});

console.log(jobItems);

const ITEMS = new Map(...[jobItems]);

export default ITEMS;