import { JOB as ENGINEERING_JOB } from "./engineering";
import { JOB as CHEMISTRY_JOB } from "./chemistry";
import { JOB as MINING_JOB } from "./mining";
import { JOB as XENOBIO_JOB } from "./xenobiology";
import { JOB as BOTANY_JOB } from "./botany";
import { JOB as COOKING_JOB } from "./cooking";
import { JOB as FABRICATION_JOB } from "./fabrication";
import { JOB as GRAYTIDING_JOB } from "./graytiding";
import { JOB as VALIDHUNTING_JOB } from "./validhunting";
import { JOB as SHITPOSTING_JOB } from "./shitposting";

import { JOB as PRECISION_JOB } from "./precision";
import { JOB as MELEE_POWER_JOB } from "./meleePower";
import { JOB as RANGED_POWER_JOB } from "./rangedPower";
import { JOB as EVASION_JOB } from "./evasion";

export const ALL_JOBS = [
	MINING_JOB,
	ENGINEERING_JOB,
	FABRICATION_JOB,
	GRAYTIDING_JOB,
	// TODO: TINKERING_JOB
	BOTANY_JOB,
	COOKING_JOB,
	XENOBIO_JOB,
	CHEMISTRY_JOB,
	SHITPOSTING_JOB,
	PRECISION_JOB,
	MELEE_POWER_JOB,
	RANGED_POWER_JOB,
	EVASION_JOB,
	VALIDHUNTING_JOB
]

export const COMBAT_JOBS = ALL_JOBS.filter(job => job.isCombat);