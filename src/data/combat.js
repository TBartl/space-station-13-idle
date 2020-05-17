export const ITEMS = {
	mouseCarcass: {
		name: "Mouse Carcass",
		sellPrice: 3,
		icon: require("@/assets/art/combat/items/dead_mouse.png"),
		healAmount: 15
	},
	sord: {
		name: "SORD",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/sord.png"),
		overlay: require("@/assets/art/combat/items/sord_overlay.png"),
		equipmentSlot: "hand"
	},
	riotSuit: {
		name: "Riot Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/riot_suit.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/riot_suit_overlay.png"),
	},
	syndiHardsuit: {
		name: "Syndicate Hardsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/syndi_hardsuit_overlay.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/syndi_hardsuit_overlay.png")
	}
};

export const ENEMIES = {
	mouse: {
		name: "Mouse",
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 2
		},
		robustness: 1,
		item: "mouseCarcass"
	},
	cargoTech: {
		name: "Cargo Technician",
		icon: require("@/assets/art/combat/enemies/cargo_tech.png"),
		robustness: 6,
		stats: {
			maxHealth: 20,
			attackSpeed: 3
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},
			{
				chance: .8,
				item: "iron"
			}
		]
	},
	debugA: {
		name: "Debug A",
		icon: require("@/assets/art/debug/A.png"),
		robustness: 1,
		stats: {
			maxHealth: 20,
			attackSpeed: 2
		},
		item: "iron"
	},
	debugB: {
		name: "Debug B",
		icon: require("@/assets/art/debug/B.png"),
		robustness: 2,
		stats: {
			maxHealth: 20,
			attackSpeed: 2
		},
		items: {
			id: "iron",
			count: 2
		}
	},
	debugC: {
		name: "Debug C",
		icon: require("@/assets/art/debug/C.png"),
		robustness: 3,
		stats: {
			maxHealth: 20,
			attackSpeed: 2
		},
		items: {
			id: "iron",
			count: [0, 3]
		}
	},
	debugD: {
		name: "Debug D",
		icon: require("@/assets/art/debug/D.png"),
		robustness: 4,
		stats: {
			maxHealth: 20,
			attackSpeed: 2
		},
		itemTable: [
			{
				id: "iron",
				count: [1, 3],
				weight: 600
			}, {
				id: "silver",
				count: 2,
				weight: 200
			}, {
				id: "gold",
				weight: 100
			}, {
				id: "titanium",
				weight: 1
			},
			{
				id: null,
				weight: 99
			}
		]
	},
	debugE: {
		name: "Debug E",
		icon: require("@/assets/art/debug/E.png"),
		robustness: 5,
		stats: {
			maxHealth: 20,
			attackSpeed: 2
		},
		itemTables: [
			{
				chance: 1,
				item: 'iron'
			},
			{
				chance: 0.1,
				items: {
					id: 'silver',
					count: [0, 2]
				}
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: 'gold',
						weight: 3
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			}
		]
	}
}

export const ZONES = [
	{
		name: "Maintenance",
		icon: require("@/assets/art/combat/zones/maint.png"),
		enemies: ["mouse", "cargoTech"]
	},
	{
		name: "Departures Lounge",
		icon: require("@/assets/art/combat/zones/departures.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Dorms 4",
		icon: require("@/assets/art/combat/zones/dorms4.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Head of Personal Line",
		icon: require("@/assets/art/combat/zones/hopline.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Kitchen",
		icon: require("@/assets/art/combat/zones/kitchen.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Medical",
		icon: require("@/assets/art/combat/zones/medical.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Engineering",
		icon: require("@/assets/art/combat/zones/engineering.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Showroom",
		icon: require("@/assets/art/combat/zones/showroom.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Robotics",
		icon: require("@/assets/art/combat/zones/robotics.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Virology",
		icon: require("@/assets/art/combat/zones/viro.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Bridge",
		icon: require("@/assets/art/combat/zones/bridge.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "AI Core",
		icon: require("@/assets/art/combat/zones/core.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	},
	{
		name: "Debug Land",
		icon: require("@/assets/art/debug/banner.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	}
]

