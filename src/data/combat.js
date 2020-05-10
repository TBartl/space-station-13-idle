export const ENEMIES = {
	mouse: {
		name: "Mouse",
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		robustness: 1
	},
	cargoTech: {
		name: "Cargo Technician",
		icon: require("@/assets/art/combat/enemies/cargo_tech.png"),
		robustness: 6
	},
	debugA: {
		name: "Debug A",
		icon: require("@/assets/art/debug/A.png"),
		robustness: 1
	},
	debugB: {
		name: "Debug B",
		icon: require("@/assets/art/debug/B.png"),
		robustness: 2
	},
	debugC: {
		name: "Debug C",
		icon: require("@/assets/art/debug/C.png"),
		robustness: 3
	},
	debugD: {
		name: "Debug D",
		icon: require("@/assets/art/debug/D.png"),
		robustness: 4
	},
	debugE: {
		name: "Debug E",
		icon: require("@/assets/art/debug/E.png"),
		robustness: 5
	}
}

export const ZONES = [
	{
		name: "Maintenance",
		icon: require("@/assets/art/combat/zones/maint.png"),
		enemies: ["mouse", "cargoTech"]
	},
	{
		name: "Debug Land",
		icon: require("@/assets/art/debug/banner.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	}
]

