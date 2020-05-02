import { ALL_JOBS } from "./jobs";

const jobItems = new Map(...ALL_JOBS.map(job => job.items));

const ITEMS = new Map(...[jobItems]);

export default ITEMS;