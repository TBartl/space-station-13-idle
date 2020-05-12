import { JOB as ENGINEERING_JOB } from "./engineering";
import { JOB as MINING_JOB } from "./mining";
import { JOB as XENOBIO_JOB } from "./xenobiology";
import { JOB as BOTANY_JOB } from "./botany";
import { JOB as FABRICATION_JOB } from "./fabrication";
import { JOB as GRAYTIDING_JOB } from "./graytiding";

import { JOB as PRECISION_JOB } from "./precision";

export const ALL_JOBS = [
	ENGINEERING_JOB,
	MINING_JOB,
	FABRICATION_JOB,
	XENOBIO_JOB,
	BOTANY_JOB,
	GRAYTIDING_JOB,
	PRECISION_JOB
]

export const COMBAT_JOBS = ALL_JOBS.filter(job => job.isCombat);