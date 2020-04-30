import { ALL_JOBS } from "./jobs";

const jobItems = ALL_JOBS.map(job => job.items);

const ITEMS = Object.assign({}, jobItems);

export default ITEMS;