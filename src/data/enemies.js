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

import boss1Security from '@/data/enemies/boss1-security';
import boss2Lavaland from '@/data/enemies/boss2-lavaland';
import boss3Antag from '@/data/enemies/boss3-antag';

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
	...boss1Security,
	...boss2Lavaland,
	...boss3Antag
}

Object.values(ENEMIES).forEach(enemy => {
	let robustness = calcRobustness(enemy.stats, "enemy");

	// Don't allow negative robustness for the purpose of calculations (I'm lookin' at you mouse)
	robustness = Math.max(1, robustness);

	enemy.itemTables.unshift({
		chance: 1,
		items: {
			id: "money",
			count: [0, robustness * 5]
		}
	});
});

export default ENEMIES;
