
export default {
	chaplain: {
		name: "Chaplain",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 10,
			attackSpeed: 1.6,
			precision: 6,
			power: 9,
			evasion: 16,
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
				chance: .2,
				item: "toolbox"
			}
		]
	},
	miner: {
		name: "Overgeared Miner",
		icon: require("@/assets/art/combat/enemies/miner.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 3,
			precision: 5,
			power: 6,
			evasion: 16,
			protection: 1
		},
		item: "mouseCarcass"
	},
	mouse: {
		name: "Mouse",
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		stats: {
			maxHealth: 30,
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
			maxHealth: 40,
			attackSpeed: 1.6,
			precision: 8,
			power: 17,
			evasion: 13,
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
	cargoTech: {
		name: "Cargo Technician",
		icon: require("@/assets/art/combat/enemies/cargo_tech.png"),
		stats: {
			maxHealth: 50,
			attackSpeed: 1.1,
			precision: 6,
			power: 13,
			evasion: 10,
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
	Ian: {
		name: "Ian",
		icon: require("@/assets/art/combat/enemies/Ian.png"),
		stats: {
			maxHealth: 60,
			attackSpeed: 2.1,
			precision: 10,
			power: 21,
			evasion: 23,
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
	paperworkhop: {
		name: "Head Of Personal",
		icon: require("@/assets/art/combat/enemies/goodhop.png"),
		stats: {
			maxHealth: 70,
			attackSpeed: 1.9,
			precision: 20,
			power: 24,
			evasion: 22,
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
	hopcurity: {
		name: "Self Declared Head of GUNS",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 80,
			attackSpeed: 1.7,
			precision: 29,
			power: 19,
			evasion: 36,
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
				chance: .2,
				item: "pill10"
			}
		]
	},
	catgirl: {
		name: "Catgirl",
		icon: require("@/assets/art/combat/enemies/catgirl.png"),
		stats: {
			maxHealth: 90,
			attackSpeed: 2.7,
			precision: 20,
			power: 35,
			evasion: 15,
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
				chance: .2,
				item: "baseball"
			}
		]
	},
	braindead: {
		name: "Braindead Assistant",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 100,
			attackSpeed: 2.2,
			precision: 37,
			power: 28,
			evasion: 22,
			protection: 1
		},
		item: "mouseCarcass"
	},
	traitor: {
		name: "Unprepared Traitor",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 110,
			attackSpeed: 2.5,
			precision: 27,
			power: 22,
			evasion: 33,
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
	flamingatmostech: {
		name: "Wannabe Pyromancer Atmospheric Technician",
		icon: require("@/assets/art/combat/enemies/atmos.png"),
		stats: {
			maxHealth: 120,
			attackSpeed: 1.5,
			precision: 36,
			power: 36,
			evasion: 32,
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
	goodengineer: {
		name: "Responsible Engineer",
		icon: require("@/assets/art/combat/enemies/badengie.png"),
		stats: {
			maxHealth: 130,
			attackSpeed: 2.1,
			precision: 41,
			power: 44,
			evasion: 25,
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
	badengineer: {
		name: "Fusion Engineer",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 140,
			attackSpeed: 3.0,
			precision: 47,
			power: 42,
			evasion: 38,
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
	redslime: {
		name: "Supermatter Anomaly",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 150,
			attackSpeed: 2.7,
			precision: 10,
			power: 37,
			evasion: 28,
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
	mime: {
		name: ".....",
		icon: require("@/assets/art/combat/enemies/mime.png"),
		stats: {
			maxHealth: 160,
			attackSpeed: 2.0,
			precision: 34,
			power: 45,
			evasion: 25,
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
	badclown: {
		name: "Shoeless Clown",
		icon: require("@/assets/art/combat/enemies/badclown.png"),
		stats: {
			maxHealth: 170,
			attackSpeed: 2.1,
			precision: 37,
			power: 44,
			evasion: 40,
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
	goodclown: {
		name: "Actually Funny Clown",
		icon: require("@/assets/art/combat/enemies/goodclown.png"),
		stats: {
			maxHealth: 180,
			attackSpeed: 2.4,
			precision: 57,
			power: 40,
			evasion: 26,
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
				chance: .2,
				item: "pill20"
			}
		]
	},
	goodchef: {
		name: "Iron Chef",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 190,
			attackSpeed: 1.6,
			precision: 41,
			power: 61,
			evasion: 67,
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
	pete: {
		name: "Pete",
		icon: require("@/assets/art/combat/enemies/pete.png"),
		stats: {
			maxHealth: 200,
			attackSpeed: 1.7,
			precision: 49,
			power: 49,
			evasion: 44,
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
	cannibal: {
		name: "Soylent Green Chef",
		icon: require("@/assets/art/combat/enemies/badchef.png"),
		stats: {
			maxHealth: 210,
			attackSpeed: 2.4,
			precision: 41,
			power: 59,
			evasion: 42,
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
				item: "spear"
			}
		]
	},
	cluelessdoctor: {
		name: "Useless Doctor",
		icon: require("@/assets/art/combat/enemies/baddoctor.png"),
		stats: {
			maxHealth: 220,
			attackSpeed: 1.1,
			precision: 47,
			power: 66,
			evasion: 57,
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
	surgeon: {
		name: "Chirurgeon",
		icon: require("@/assets/art/combat/enemies/gooddoctor.png"),
		stats: {
			maxHealth: 230,
			attackSpeed: 2.0,
			precision: 50,
			power: 48,
			evasion: 30,
			protection: 1
		},
		item: "mouseCarcass"
	},
	hulk: {
		name: "The Next Step In Human Evolution",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 240,
			attackSpeed: 1.7,
			precision: 250,
			power: 78,
			evasion: 68,
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
				chance: .01,
				item: "pill50"
			}
		]
	},
	minibot: {
		name: "Minibot",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 250,
			attackSpeed: 1.4,
			precision: 71,
			power: 78,
			evasion: 75,
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
	techpriest: {
		name: "Techpriest Roboticist",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 260,
			attackSpeed: 1.7,
			precision: 63,
			power: 60,
			evasion: 80,
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
				chance: .01,
				item: "sabre"
			}
		]
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
	axeassistant: {
		name: "Window Breaking Assistant",
		icon: require("@/assets/art/combat/enemies/badassistant.png"),
		stats: {
			maxHealth: 290,
			attackSpeed: 3.0,
			precision: 55,
			power: 59,
			evasion: 73,
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
	captain: {
		name: "Captain",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 300,
			attackSpeed: 1.1,
			precision: 70,
			power: 78,
			evasion: 67,
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
				chance: .2,
				item: "pill30"
			}
		]
	},
	afkviro: {
		name: "Harmless Virologist",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 310,
			attackSpeed: 3.0,
			precision: 86,
			power: 91,
			evasion: 95,
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
	monkey: {
		name: "Infected Monkey",
		icon: require("@/assets/art/combat/enemies/monkey.png"),
		stats: {
			maxHealth: 320,
			attackSpeed: 1.9,
			precision: 75,
			power: 71,
			evasion: 73,
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
	movingviro: {
		name: "Moving Virologist",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 330,
			attackSpeed: 1.9,
			precision: 85,
			power: 94,
			evasion: 63,
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
				chance: .2,
				item: "fireaxe"
			}
		]
	},
	cultist: {
		name: "Cultist",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 340,
			attackSpeed: 1.5,
			precision: 84,
			power: 87,
			evasion: 81,
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
	securitybot: {
		name: "Security Bot",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 350,
			attackSpeed: 2.1,
			precision: 104,
			power: 80,
			evasion: 72,
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
	turrets: {
		name: "Defense Turret",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 360,
			attackSpeed: 2.4,
			precision: 93,
			power: 73,
			evasion: 52,
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
	AI: {
		name: "AI",
		icon: require("@/assets/art/combat/enemies/missing.png"),
		stats: {
			maxHealth: 1337,
			attackSpeed: 1.9,
			precision: 94,
			power: 74,
			evasion: 69,
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
				chance: .2,
				item: "pill40"
			}
		]
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

