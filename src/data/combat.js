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
		equipmentSlot: "hand",
		stats: {
			maxHealth: -20,
			evasion: -30,
			precision: -40,
			attackSpeed: .5,
			power: 80,
		}
	},
	riotSuit: {
		name: "Riot Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/riot_suit.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/riot_suit_overlay.png"),
		stats: {
			maxHealth: 30,
			evasion: 15,
			protection: 3,
			precision: 2,
			power: 1,
		}
	},
	syndiHardsuit: {
		name: "Syndicate Hardsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/syndi_hardsuit_overlay.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/syndi_hardsuit_overlay.png"),
		stats: {
			maxHealth: 60,
			evasion: 30,
			protection: 6,
			precision: 4,
			power: 2,
		}
	}
};

export const ENEMIES = {
	mouse: {
		name: "Mouse",
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		stats: {
			maxHealth: 10,
			attackSpeed: 2.5,
			precision: -1,
			power: -1,
			evasion: -1,
			protection: 1
		},
		item: "mouseCarcass"
	},
	lostscientist: {
		name: "Lost Scientist",
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 1.6,
			precision: 1,
			power: 7,
			evasion: 3,
			protection: 1
		},
		item: "mouseCarcass"
	},
	cargoTech: {
		name: "Cargo Technician",
		icon: require("@/assets/art/combat/enemies/cargo_tech.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 1.1,
			precision: 2,
			power: 8,
			evasion: 8,
			protection: 1
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
	chaplain: {
		name: "Chaplain",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 40,
			attackSpeed: 1.6,
			precision: 5,
			power: 2,
			evasion: 1,
			protection: 1
		},
		item: "mouseCarcass"
	},
	miner: {
		name: "Overgeared Miner",
		icon: require("@/assets/art/combat/enemies/miner.png"),
		stats: {
			maxHealth: 50,
			attackSpeed: 3,
			precision: 2,
			power: 10,
			evasion: 6,
			protection: 1
		},
		item: "mouseCarcass"
	},
	catgirl: {
		name: "Catgirl",
		icon: require("@/assets/art/combat/enemies/catgirl.png"),
		stats: {
			maxHealth: 60,
			attackSpeed: 2.7,
			precision: 4,
			power: 5,
			evasion: 8,
			protection: 1
		},
		item: "mouseCarcass"
	},
	braindead: {
		name: "Braindead Assistant",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 70,
			attackSpeed: 2.2,
			precision: 9,
			power: 9,
			evasion: 6,
			protection: 1
		},
		item: "mouseCarcass"
	},
	traitor: {
		name: "Unprepared Traitor",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 80,
			attackSpeed: 2.5,
			precision: -1,
			power: -1,
			evasion: -1,
			protection: 1
		},
		item: "mouseCarcass"
	},
	Ian: {
		name: "Ian",
		icon: require("@/assets/art/combat/enemies/Ian.png"),
		stats: {
			maxHealth: 90,
			attackSpeed: 2.1,
			precision: 6,
			power: 6,
			evasion: 11,
			protection: 1
		},
		item: "mouseCarcass"
	},
	paperworkhop: {
		name: "Head Of Personal",
		icon: require("@/assets/art/combat/enemies/goodhop.png"),
		stats: {
			maxHealth: 100,
			attackSpeed: 1.9,
			precision: 10,
			power: 14,
			evasion: 7,
			protection: 1
		},
		item: "mouseCarcass"
	},
	hopcurity: {
		name: "Self Declared Head of GUNS",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 110,
			attackSpeed: 1.7,
			precision: 9,
			power: 12,
			evasion: 11,
			protection: 1
		},
		item: "mouseCarcass"
	},
	goodchef: {
		name: "Iron Chef",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 120,
			attackSpeed: 1.6,
			precision: 15,
			power: 16,
			evasion: 20,
			protection: 1
		},
		item: "mouseCarcass"
	},
	pete: {
		name: "Pete",
		icon: require("@/assets/art/combat/enemies/pete.png"),
		stats: {
			maxHealth: 130,
			attackSpeed: 1.7,
			precision: 14,
			power: 14,
			evasion: 14,
			protection: 1
		},
		item: "mouseCarcass"
	},
	cannibal: {
		name: "Soylent Green Chef",
		icon: require("@/assets/art/combat/enemies/badchef.png"),
		stats: {
			maxHealth: 140,
			attackSpeed: 2.4,
			precision: 12,
			power: 12,
			evasion: 16,
			protection: 1
		},
		item: "mouseCarcass"
	},
	cluelessdoctor: {
		name: "Useless Doctor",
		icon: require("@/assets/art/combat/enemies/baddoctor.png"),
		stats: {
			maxHealth: 150,
			attackSpeed: 1.1,
			precision: 17,
			power: 13,
			evasion: 24,
			protection: 1
		},
		item: "mouseCarcass"
	},
	surgeon: {
		name: "Chirurgeon",
		icon: require("@/assets/art/combat/enemies/gooddoctor.png"),
		stats: {
			maxHealth: 160,
			attackSpeed: 2.0,
			precision: 13,
			power: 13,
			evasion: 11,
			protection: 1
		},
		item: "mouseCarcass"
	},
	hulk: {
		name: "The Next Step In Human Evolution",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 170,
			attackSpeed: 1.7,
			precision: 24,
			power: 19,
			evasion: 27,
			protection: 1
		},
		item: "mouseCarcass"
	},
	flamingatmostech: {
		name: "Wannabe Pyromancer Atmospheric Technician",
		icon: require("@/assets/art/combat/enemies/atmos.png"),
		stats: {
			maxHealth: 180,
			attackSpeed: 1.5,
			precision: 26,
			power: 21,
			evasion: 41,
			protection: 1
		},
		item: "mouseCarcass"
	},
	goodengineer: {
		name: "Responsible Engineer",
		icon: require("@/assets/art/combat/enemies/badengie.png"),
		stats: {
			maxHealth: 190,
			attackSpeed: 2.1,
			precision: 17,
			power: 8,
			evasion: 30,
			protection: 1
		},
		item: "mouseCarcass"
	},
	badengineer: {
		name: "Fusion Engineer",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 200,
			attackSpeed: 3.0,
			precision: 19,
			power: 8,
			evasion: 27,
			protection: 1
		},
		item: "mouseCarcass"
	},
	redslime: {
		name: "Supermatter Anomaly",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 210,
			attackSpeed: 2.7,
			precision: 14,
			power: 12,
			evasion: 30,
			protection: 1
		},
		item: "mouseCarcass"
	},
	mime: {
		name: ".....",
		icon: require("@/assets/art/combat/enemies/mime.png"),
		stats: {
			maxHealth: 220,
			attackSpeed: 2.0,
			precision: 13,
			power: 24,
			evasion: 34,
			protection: 1
		},
		item: "mouseCarcass"
	},
	badclown: {
		name: "Shoeless Clown",
		icon: require("@/assets/art/combat/enemies/badclown.png"),
		stats: {
			maxHealth: 230,
			attackSpeed: 2.1,
			precision: 15,
			power: 22,
			evasion: 23,
			protection: 1
		},
		item: "mouseCarcass"
	},
	goodclown: {
		name: "Actually Funny Clown",
		icon: require("@/assets/art/combat/enemies/goodclown.png"),
		stats: {
			maxHealth: 240,
			attackSpeed: 2.4,
			precision: 14,
			power: 23,
			evasion: 10,
			protection: 1
		},
		item: "mouseCarcass"
	},
	minibot: {
		name: "Minibot",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 250,
			attackSpeed: 1.4,
			precision: 28,
			power: 18,
			evasion: 36,
			protection: 1
		},
		item: "mouseCarcass"
	},
	techpriest: {
		name: "Techpriest Roboticist",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 260,
			attackSpeed: 1.7,
			precision: 17,
			power: 15,
			evasion: 42,
			protection: 1
		},
		item: "mouseCarcass"
	},
	mech: {
		name: "Mech Building Roboticist",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 270,
			attackSpeed: 2.1,
			precision: 26,
			power: 35,
			evasion: 20,
			protection: 1
		},
		item: "mouseCarcass"
	},
	afkviro: {
		name: "Harmless Virologist",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 280,
			attackSpeed: 3.0,
			precision: 9,
			power: 14,
			evasion: 31,
			protection: 1
		},
		item: "mouseCarcass"
	},
	monkey: {
		name: "Infected Monkey",
		icon: require("@/assets/art/combat/enemies/monkey.png"),
		stats: {
			maxHealth: 290,
			attackSpeed: 1.9,
			precision: 21,
			power: 11,
			evasion: 22,
			protection: 1
		},
		item: "mouseCarcass"
	},
	movingviro: {
		name: "Moving Virologist",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 300,
			attackSpeed: 1.9,
			precision: -1,
			power: -1,
			evasion: -1,
			protection: 1
		},
		item: "mouseCarcass"
	},
	cultist: {
		name: "Cultist",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 310,
			attackSpeed: 1.5,
			precision: 20,
			power: 22,
			evasion: 34,
			protection: 1
		},
		item: "mouseCarcass"
	},
	locker: {
		name: "Captains Locker",
		icon: require("@/assets/art/combat/enemies/locker.png"),
		stats: {
			maxHealth: 500,
			attackSpeed: 30,
			precision: 20,
			power: 500,
			evasion: -10,
			protection: 10
		},
		item: "mouseCarcass"
	},
	axeassistant: {
		name: "Window Breaking Assistant",
		icon: require("@/assets/art/combat/enemies/badassistant.png"),
		stats: {
			maxHealth: 330,
			attackSpeed: 3.0,
			precision: 20,
			power: 27,
			evasion: 25,
			protection: 1
		},
		item: "mouseCarcass"
	},
	captain: {
		name: "Captain",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 340,
			attackSpeed: 1.1,
			precision: 41,
			power: 25,
			evasion: 34,
			protection: 1
		},
		item: "mouseCarcass"
	},
	securitybot: {
		name: "Security Bot",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 350,
			attackSpeed: 2.1,
			precision: 25,
			power: 34,
			evasion: 28,
			protection: 1
		},
		item: "mouseCarcass"
	},
	turrets: {
		name: "Defense Turret",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 360,
			attackSpeed: 2.4,
			precision: 34,
			power: 31,
			evasion: 34,
			protection: 1
		},
		item: "mouseCarcass"
	},
	AI: {
		name: "AI",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 137,
			attackSpeed: 1.9,
			precision: 31,
			power: 46,
			evasion: 33,
			protection: 1
		},
		item: "mouseCarcass"
	},
	debugA: {
		name: "Debug A",
		icon: require("@/assets/art/debug/A.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: -20,
			power: -1,
			evasion: -20,
			protection: 30
		},
		item: "iron"
	},
	debugB: {
		name: "Debug B",
		icon: require("@/assets/art/debug/B.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: -10,
			power: -1,
			evasion: -10,
		},
		items: {
			id: "iron",
			count: 2
		}
	},
	debugC: {
		name: "Debug C",
		icon: require("@/assets/art/debug/C.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: 0,
			power: -1,
			evasion: 0,
		},
		items: {
			id: "iron",
			count: [0, 3]
		}
	},
	debugD: {
		name: "Debug D",
		icon: require("@/assets/art/debug/D.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: 10,
			power: -1,
			evasion: 10,
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
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: 20,
			power: -1,
			evasion: 20,
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
		enemies: ["mouse","lostscientist", "cargoTech"]
	},
	{
		name: "Departures Lounge",
		icon: require("@/assets/art/combat/zones/departures.png"),
		enemies: ["chaplain", "miner"]
	},
	{
		name: "Dorms 4",
		icon: require("@/assets/art/combat/zones/dorms4.png"),
		enemies: ["catgirl", "braindead", "traitor"]
	},
	{
		name: "Head of Personal Line",
		icon: require("@/assets/art/combat/zones/hopline.png"),
		enemies: ["Ian", "paperworkhop", "hopcurity"]
	},
	{
		name: "Kitchen",
		icon: require("@/assets/art/combat/zones/kitchen.png"),
		enemies: ["goodchef", "pete", "cannibal"]
	},
	{
		name: "Medical",
		icon: require("@/assets/art/combat/zones/medical.png"),
		enemies: ["cluelessdoctor", "surgeon", "hulk"]
	},
	{
		name: "Engineering",
		icon: require("@/assets/art/combat/zones/engineering.png"),
		enemies: ["flamingatmostech", "badengineer", "goodengineer", "redslime"]
	},
	{
		name: "Showroom",
		icon: require("@/assets/art/combat/zones/showroom.png"),
		enemies: ["mime", "badclown", "goodclown"]
	},
	{
		name: "Robotics",
		icon: require("@/assets/art/combat/zones/robotics.png"),
		enemies: ["minibot", "techpriest", "mech"]
	},
	{
		name: "Virology",
		icon: require("@/assets/art/combat/zones/viro.png"),
		enemies: ["afkviro", "monkey", "movingviro", "cultist"]
	},
	{
		name: "Bridge",
		icon: require("@/assets/art/combat/zones/bridge.png"),
		enemies: ["locker", "axeassistant", "captain"]
	},
	{
		name: "AI Core",
		icon: require("@/assets/art/combat/zones/core.png"),
		enemies: ["securitybot", "turrets", "AI"]
	},
	{
		name: "Debug Land",
		icon: require("@/assets/art/debug/banner.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	}
]