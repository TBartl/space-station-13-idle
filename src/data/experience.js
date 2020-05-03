export const MAX_LEVEL = 50;

export function xpFromLevel(l) {
	let start = (1 / 8) * l * (l - 1);
	let top = 2 ** ((l - 1) / 7) - 1;
	let bottom = 1 - 2 ** (-1 / 7);
	return Math.floor(start + 75 * top / bottom);
}

export function levelFromXP(xp) {
	var level = 1;
	while (xpFromLevel(level + 1) < xp) {
		level++;
	}
	return level;
}