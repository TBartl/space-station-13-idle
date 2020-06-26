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

const ENEMIES = {
	...aiCore,
	...arrivalLounge,
	...bridge,
	...dorms4,
	...engineering,
	...hopLine,
	...kitchen,
	...maintenance,
	...medical,
	...science,
	...showroom,
	...virology
}

Object.values(ENEMIES).forEach(enemy => {
	let robustness = calcRobustness(enemy.stats, "enemy");

	// Don't allow negative robustness for the purpose of calculations (I'm lookin' at you mouse)
	robustness = Math.max(1, robustness);

	enemy.itemTables.unshift({
		chance: 1,
		items: {
			id: "money",
			count: [0, robustness * 3]
		}
	});
});

export default ENEMIES;
