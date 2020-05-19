export const PLAYER_BASE_STATS = {
	maxHealth: 100,
	attackSpeed: 3,
	precision: 1,
	power: 1,
	evasion: 1,
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

export function calcRobustness(stats, mobType) {
	stats = Object.assign({}, mobType == "player" ? PLAYER_BASE_STATS : ENEMY_BASE_STATS, stats);

	let robustness = 0;

	// 3 primary stats
	robustness += stats.precision / 3;
	robustness += stats.power / 3;
	robustness += stats.evasion / 3;
	robustness /= 3;

	// Health should matter, but only a little
	robustness += stats.maxHealth / 25;

	// Protection is a survivability multiplier
	robustness *= stats.protection;

	return Math.round(robustness);
}