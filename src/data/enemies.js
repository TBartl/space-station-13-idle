import { calcRobustness } from "@/utils/combatUtils";

import aiCore from "./enemies/aiCore.js";
import arrivalLounge from "./enemies/arrivalLounge.js";
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

import boss10Rev from '@/data/enemies/boss10-rev';
import boss20Security from '@/data/enemies/boss20-security';
import boss30Lavaland from '@/data/enemies/boss30-lavaland';
import boss40Nuke from '@/data/enemies/boss40-nuke';
import boss50Cult from '@/data/enemies/boss50-cult';
import boss60Wizard from '@/data/enemies/boss60-wizard';

const BOSS_ENEMIES = {
	...boss10Rev,
	...boss20Security,
	...boss30Lavaland,
	...boss40Nuke,
	...boss50Cult,
	...boss60Wizard,
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
	...virology,
	...science,
	...aiCore,
	...BOSS_ENEMIES
}

Object.values(ENEMIES).forEach(enemy => {
	let robustness = calcRobustness(enemy.stats, "enemy");

	// Don't allow negative robustness for the purpose of calculations (I'm lookin' at you mouse)
	robustness = Math.max(1, robustness);

	if (enemy.boss) return;

	enemy.itemTables.unshift({
		chance: 1,
		items: {
			id: "money",
			count: [0, robustness * 5]
		}
	});
});

export default ENEMIES;
