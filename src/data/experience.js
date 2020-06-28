export const MAX_LEVEL = 50;

const BOTTOM = (1 - 2 ** (-1 / 7)) / 75;

// The following is taken from runescape, but heavily modified to make the early 1-5 leveling experience slightly smoother
export function xpFromLevel(l) {
	if (l <= 1) return 0;
	// This realistically doesn't affect anything, so let's get rid of it
	// let start = (1 / 8) * l * (l - 1);

	let top = 2 ** ((l - 1) / 7) - 1;

	// This is a constant, no need to calculate it here
	// let bottom = 1 - 2 ** (-1 / 7);

	// This offset will primarily affect the first couple of numbers, lowering them so the leveling experience isn't so awful
	let offset = 121 - Math.log10((l + 1) * (l + 1) * 0.45 + 1.5) * 230;

	// return Math.floor(start + 75 * top / bottom);
	// console.log(l, top.toFixed(3), BOTTOM.toFixed(6), offset.toFixed(3));
	return Math.floor(top / BOTTOM + offset);
}

export function levelFromXP(xp) {
	var level = 1;
	while (xpFromLevel(level + 1) <= xp) {
		level++;
	}
	return level;
}