
export const PLAYER_BASE_STATS = {
	maxHealth: 100,
	attackSpeed: 3,
	precision: 0,
	power: 0,
	evasion: 0,
	protection: 0,
	moveTime: 3
}

export const ENEMY_BASE_STATS = {
	maxHealth: 10,
	attackSpeed: 2.5,
	precision: 1,
	power: 1,
	evasion: 1,
	protection: 0,
	moveTime: 3
}

// This adds to a, so it should only be used on a fresh object
export function combineStats(a, b) {
	for (let [statId, value] of Object.entries(b)) {
		if (statId == "attackSpeed") {
			a[statId] = value;
		} else {
			a[statId] += value;
		}
	}

	return a;
}

// The stats, based off of the base stats
export function getBasedStats(stats, mobType) {
	return Object.assign({}, mobType == "player" ? PLAYER_BASE_STATS : ENEMY_BASE_STATS, stats);
}

export function calcRobustness(stats, mobType) {
	stats = getBasedStats(stats, mobType);

	let robustness = 0;

	// 3 primary stats
	robustness += stats.precision / 3;
	robustness += stats.power / 3;
	robustness += stats.evasion / 3;

	// Health should matter, but only a little
	robustness += stats.maxHealth / 25;

	// Protection is a survivability multiplier
	robustness *= 1 + (stats.protection / 100);

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