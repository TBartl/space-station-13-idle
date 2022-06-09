import { calcRobustness } from "@/utils/combatUtils";

import aiCore from "./enemies/aiCore.js";
import arrivalLounge from "./enemies/arrivalLounge.js";
import robotics from "./enemies/robotics.js";
import bridge from "./enemies/bridge.js";
import dorms4 from "./enemies/dorms4.js";
import engineering from "./enemies/engineering.js";
import hopLine from "./enemies/hopLine.js";
import kitchen from "./enemies/kitchen.js";
import maintenance from "./enemies/maintenance.js";
import medical from "./enemies/medical.js";
import science from "./enemies/science.js";
import showroom from "./enemies/showroom.js";
import virology from "./enemies/virology.js";
import zombies from "./enemies/zombies.js";
import holiday from "./enemies/holiday.js";

import boss10Rev from '@/data/enemies/boss10-rev';
import boss20Security from '@/data/enemies/boss20-security';
import boss30Lavaland from '@/data/enemies/boss30-lavaland';
import boss40Nuke from '@/data/enemies/boss40-nuke';
import boss50Cult from '@/data/enemies/boss50-cult';
import boss55ERT from '@/data/enemies/boss55-ert';
import boss60Wizard from '@/data/enemies/boss60-wizard';
import bossResetTear from '@/data/enemies/boss-reset-tear';

const BOSS_ENEMIES = {
	...boss10Rev,
	...boss20Security,
	...boss30Lavaland,
	...boss40Nuke,
	...boss50Cult,
	...boss55ERT,
	...boss60Wizard,
	...bossResetTear
}

Object.values(BOSS_ENEMIES).forEach(bossEnemy => {
	bossEnemy.boss = true;
});

const ENEMIES = {
	...arrivalLounge,
	...maintenance,
	...hopLine,
	...dorms4,
	...engineering,
	...showroom,
	...kitchen,
	...medical,
	...bridge,
	...robotics,
	...virology,
	...science,
	...aiCore,
	...zombies,
	...holiday,
	...BOSS_ENEMIES
}

const TICKETS = ["ticket10", "ticket1", "ticket2", "ticket40", "ticket3", "ticket55", "ticket60"];
const TICKET_MIN = .1;
const TICKET_MAX_BONUS = .15;

let enemyVals = Object.values(ENEMIES)
	.filter(enemy => !enemy.boss)
	.sort((a, b) => calcRobustness(a.stats, "enemy") - calcRobustness(b.stats, "enemy"));

let enemyDivision = enemyVals.length / TICKETS.length;

enemyVals.forEach((enemy, index) => {
	let robustness = calcRobustness(enemy.stats, "enemy");

	// Don't allow negative robustness for the purpose of calculations (I'm lookin' at you mouse)
	robustness = Math.max(1, robustness);

	enemy.itemTables.unshift({
		chance: 1,
		items: {
			id: "money",
			count: [0, robustness * 10]
		}
	});

	let thisDivision = Math.floor(index / enemyDivision);

	let chance = TICKET_MIN + (index % enemyDivision) / enemyDivision * TICKET_MAX_BONUS;
	// Get rid of some zeroes
	chance = Math.round(100 * chance) / 100;

	enemy.itemTables.push({
		chance: chance,
		item: TICKETS[thisDivision]
	});
});

export default ENEMIES;
