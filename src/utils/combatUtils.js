
export const PLAYER_BASE_STATS = {
	maxHealth: 100,
	regen: .5,
	attackSpeed: 3,
	precision: 0,
	power: 0,
	evasion: 0,
	protection: 0,
	command: 0,
	moveTime: 3.5,
	bruteProtection: 0,
	burnProtection: 0,
	damageType: "brute",
	luck: 5
}

export const ENEMY_BASE_STATS = {
	maxHealth: 10,
	regen: 0,
	attackSpeed: 2.5,
	precision: 1,
	power: 1,
	evasion: 1,
	protection: 0,
	moveTime: 3,
	bruteProtection: 0,
	burnProtection: 0,
	damageType: "brute",
	luck: 0
}

// This adds to a, so it should only be used on a fresh object
export function combineStats(a, b) {
	for (let [statId, value] of Object.entries(b)) {
		if (statId == "attackSpeed" || statId == "damageType") {
			a[statId] = value;
		} else {
			a[statId] += value;
		}
		if (statId == "maxHealth") {
			a[statId] = Math.max(1, a[statId]);
		}
	}

	return a;
}

// The stats, based off of the base stats
export function getBasedStats(stats, mobType) {
	let newStats = Object.assign({}, mobType == "player" ? PLAYER_BASE_STATS : ENEMY_BASE_STATS, stats);
	fixProtection(newStats);
	return newStats;
}

export function calcRobustness(stats, mobType) {
	stats = getBasedStats(stats, mobType);

	let robustness = 0;

	// 3 primary stats
	robustness += stats.precision / 3;
	robustness += stats.power / 3;
	robustness += stats.evasion / 3;

	// Health should matter, but only a little
	robustness += stats.maxHealth / 35;

	// Protection is a survivability multiplier
	robustness *= 1 + Math.min(stats.burnProtection, stats.bruteProtection) / 100;

	return Math.round(robustness);
}

export function getRobustnessCssClass(playerRobustness, targetRobustness) {
	let diff = targetRobustness - playerRobustness;
	if (diff >= 14) return "danger-bubble";
	if (diff >= 7) return "orange-bubble";
	if (diff <= -14) return "secondary-bubble"
	if (diff <= -7) return "success-bubble"
	return "warning-bubble";
}

export function fixProtection(stats) {
	if (stats.protection) {
		if (stats.bruteProtection == undefined)
			stats.bruteProtection = 0;
		stats.bruteProtection += stats.protection;

		if (stats.burnProtection == undefined)
			stats.burnProtection = 0;
		stats.burnProtection += stats.protection;

		delete stats.protection;
	}
	return stats;
}