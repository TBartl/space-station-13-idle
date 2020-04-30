import { ALL_JOBS } from "./jobs";

const jobItems = new Map();
ALL_JOBS.forEach(job => jobItems.merge(job.items));

const ITEMS = new Map();
ITEMS.merge(jobItems);

export default ITEMS;