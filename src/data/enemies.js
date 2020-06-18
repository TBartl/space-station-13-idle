
export default {
	janitor: {
		name: "Janitor",
		icon: require("@/assets/art/combat/enemies/janitor.png"),
		stats: {
			maxHealth: 10,
			attackSpeed: 1.6,
			precision: 3,
			power: 12,
			evasion: 10,
			protection: 1,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 10]
				}
			},
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 10
					},
					{
						id: 'spacejunk',
						weight: 9
					},
					{
						id: 'armorjunk',
						weight: 3
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	chaplain: {
		name: "Chaplain",
		icon: require("@/assets/art/combat/enemies/chaplain.png"),
		stats: {
			maxHealth: 10,
			attackSpeed: 1.6,
			precision: 6,
			power: 9,
			evasion: 16,
			protection: 1,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [0, 10]
				}
			},
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'junk',
						weight: 10
					},
					{
						id: 'spacejunk',
						weight: 9
					},
					{
						id: 'meleeT1',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	miner: {
		name: "Prelaunch Miner",
		icon: require("@/assets/art/combat/enemies/miner.png"),
		stats: {
			maxHealth: 20,
			attackSpeed: 3,
			precision: 5,
			power: 6,
			evasion: 16,
			protection: 1,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [5, 10]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gunE1',
						weight: 20
					},
					{
						id: 'iron',
						weight: 19
					},
					{
						id: "jumpsuitExplorer",
						weight: 1
					}
				]
			},{
				chance: 1,
				item: "foodMeatZ"
			}
		]
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20
		},
			items: {
				id: "mouseCarcass",
		}
	},
	lostscientist: {
		name: "Lost Scientist",
		icon: require("@/assets/art/combat/enemies/science.png"),
		stats: {
			maxHealth: 40,
			attackSpeed: 1.6,
			precision: 8,
			power: 17,
			evasion: 13,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [5, 20]
				}
			},
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'plasma',
						weight: 1
					},
					{
						id: 'power',
						weight: 1
					},
					{
						id: 'jumpsuitScience',
						weight: 1
					}
				]
			},{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [10, 20]
				}
			},
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'glass',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'jumpsuitTinkering',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [10, 30]
				}
			},
			{
				chance: .8,
				item: "gold"
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	paperworkhop: {
		name: "Head Of Personnel",
		icon: require("@/assets/art/combat/enemies/goodhop.png"),
		stats: {
			maxHealth: 70,
			attackSpeed: 1.9,
			precision: 20,
			power: 24,
			evasion: 22,
			protection: 1,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [15, 30]
				}
			},{
				chance: 0.5,
				itemTable: [
					{
						id: 'armb1',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	hopcurity: {
		name: "Self Declared Head of GUNS",
		icon: require("@/assets/art/combat/enemies/hoGUN.png"),
		stats: {
			maxHealth: 80,
			attackSpeed: 1.7,
			precision: 29,
			power: 19,
			evasion: 36,
			protection: 1,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [15, 40]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'meleeT2',
						weight: 1
					}
				]
			},			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	catgirl: {
		name: "Catboy",
		icon: require("@/assets/art/combat/enemies/catgirl.png"),
		stats: {
			maxHealth: 90,
			attackSpeed: 2.7,
			precision: 20,
			power: 35,
			evasion: 15,
			protection: 1,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceSec',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'meleeC3',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	braindead: {
		name: "Braindead Assistant",
		icon: require("@/assets/art/combat/enemies/bdassist.png"),
		stats: {
			maxHealth: 100,
			attackSpeed: 2.2,
			precision: 37,
			power: 28,
			evasion: 22,
			protection: 1,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceWrestle',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'jumpsuitSecurity',
						weight: 1
					}
				]
			},{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	traitor: {
		name: "Unprepared Traitor",
		icon: require("@/assets/art/combat/enemies/tot.png"),
		stats: {
			maxHealth: 110,
			attackSpeed: 2.5,
			precision: 27,
			power: 22,
			evasion: 33,
			protection: 1,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'faceSyndicate',
						weight: 1
					},
					{
						id: 'armSyndiSuit',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	flamingatmostech: {
		name: "Wannabe Pyromancer Atmospheric Technician",
		icon: require("@/assets/art/combat/enemies/atmos.gif"),
		stats: {
			maxHealth: 120,
			attackSpeed: 1.5,
			precision: 36,
			power: 36,
			evasion: 32,
			protection: 1,
			damageType: "burn",
			burnProtection: 90
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'armB2',
						weight: 1
					},
					{
						id: 'faceTiki',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20

		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40],
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'jumpsuitEngineering',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	badengineer: {
		name: "Fusion Engineer",
		icon: require("@/assets/art/combat/enemies/fusion.png"),
		stats: {
			maxHealth: 140,
			attackSpeed: 3.0,
			precision: 47,
			power: 42,
			evasion: 38,
			protection: 1,
			damageType: "burn",
			burnProtection: 20
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
				chance: 0.5,
				itemTable: [
					{
						id: 'glass',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'faceMeson',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	redslime: {
		name: "Supermatter Anomaly",
		icon: require("@/assets/art/combat/enemies/redslime_anim.gif"),
		stats: {
			maxHealth: 150,
			attackSpeed: 2.7,
			precision: 10,
			power: 37,
			evasion: 28,
			protection: 1,
			damageType: "brute",
			bruteProtection: 90
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
				chance: 0.5,
				itemTable: [
					{
						id: 'slimeRed',
						weight: 1
					},
					{
						id: 'power',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20
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
				chance: 0.5,
				itemTable: [
					{
						id: 'bananamime',
						weight: 1
					},
					{
						id: 'spacejunk',
						weight: 1
					},
					{
						id: 'faceMime',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20
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
				chance: 0.05,
				itemTable: [
					{
						id: 'banana',
						weight: 49
					},
					{
						id: 'honk',
						weight: 1
					},
					{
						id: 'meleeT4',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'banana',
						weight: 1
					},
					{
						id: 'bananium',
						weight: 1
					},
					{
						id: 'faceClown',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	goodchef: {
		name: "Botanist",
		icon: require("@/assets/art/combat/enemies/botanist.png"),
		stats: {
			maxHealth: 190,
			attackSpeed: 1.6,
			precision: 41,
			power: 61,
			evasion: 67,
			protection: 1,
			damageType: "burn",
			burnProtection: 20
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
				chance: 0.5,
				itemTable: [
					{
						id: 'potato',
						weight: 1
					},{
						id: 'tomato',
						weight: 1
					},{
						id: 'flowersun',
						weight: 1
					},{
						id: 'mushroom',
						weight: 1
					},{
						id: 'pepper',
						weight: 1
					},{
						id: 'potatobattery',
						weight: 1
					},{
						id: 'tomatoblue',
						weight: 1
					},{
						id: 'flowermoon',
						weight: 1
					},{
						id: 'mushroomred',
						weight: 1
					},{
						id: 'pepperred',
						weight: 1
					}
				]
			},
			{
				chance: .02,
				item: "jumpsuitBotany"
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20
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
				chance: 0.5,
				itemTable: [
					{
						id: 'foodPasta2',
						weight: 1
					},
					{
						id: 'faceFox',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20
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
				chance: 0.5,
				itemTable: [
					{
						id: 'foot',
						weight: 1
					},{
						id: 'foodMeatH',
						weight: 1
					},{
						id: 'foodMeatA',
						weight: 1
					},{
						id: 'foodMeatZ',
						weight: 1
					}
				]
			},
			{
				chance: .02,
				item: "jumpsuitCooking"
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'faceMedhud',
						weight: 1
					},
					{
						id: 'ammoB2',
						weight: 1
					},
					{
						id: 'jumpsuitChemistry',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foot',
						weight: 1
					},
					{
						id: 'junk',
						weight: 1
					},
					{
						id: 'jumpsuitMedical',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	hulk: {
		name: "The Next Step In Human Evolution",
		icon: require("@/assets/art/combat/enemies/hulk.png"),
		stats: {
			maxHealth: 240,
			attackSpeed: 1.7,
			precision: 250,
			power: 78,
			evasion: 68,
			protection: 1,
			damageType: "brute",
			burnProtection: 20
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
				chance: 0.5,
				itemTable: [
					{
						id: 'faceScience',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'meleeT5',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	minibot: {
		name: "Minibot",
		icon: require("@/assets/art/combat/enemies/minibots.png"),
		stats: {
			maxHealth: 250,
			attackSpeed: 1.4,
			precision: 71,
			power: 78,
			evasion: 75,
			protection: 1,
			damageType: "burn",
			burnProtection: 20
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
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	techpriest: {
		name: "Techpriest Roboticist",
		icon: require("@/assets/art/combat/enemies/techpriest.png"),
		stats: {
			maxHealth: 260,
			attackSpeed: 1.7,
			precision: 63,
			power: 60,
			evasion: 80,
			protection: 1,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'jumpsuitFabrication',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	mech: {
		name: "Mech Building Roboticist",
		icon: require("@/assets/art/combat/enemies/mechbuild.png"),
		stats: {
			maxHealth: 270,
			attackSpeed: 2.1,
			precision: 26,
			power: 35,
			evasion: 20,
			protection: 1,
			damageType: "brute",
			burnProtection: 20
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
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'meleeT6',
						weight: 1
					}
				]
			},
			{
				chance: .2,
				item: "armRiotSuit"
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 10,
			damageType: "brute",
			burnProtection: 20,
			bruteProtection: 20
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
				chance: 0.5,
				itemTable: [
					{
						id: 'armB4',
						weight: 1
					},
					{
						id: 'faceSecglasses',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 5,
			bruteProtection: 5
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
				chance: 0.5,
				itemTable: [
					{
						id: 'faceGas',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'jumpsuitGraytide',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	captain: {
		name: "Captain",
		icon: require("@/assets/art/combat/enemies/captain.png"),
		stats: {
			maxHealth: 300,
			attackSpeed: 1.1,
			precision: 70,
			power: 78,
			evasion: 67,
			protection: 1,
			damageType: "burn",
			burnProtection: 10,
			bruteProtection: 10
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
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	afkviro: {
		name: "Harmless Virologist",
		icon: require("@/assets/art/combat/enemies/goodviro.png"),
		stats: {
			maxHealth: 310,
			attackSpeed: 3.0,
			precision: 86,
			power: 91,
			evasion: 95,
			protection: 1,
			damageType: "brute",
			burnProtection: 0,
			bruteProtection: 5
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
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
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
			protection: 1,
			damageType: "brute",
			burnProtection: 0,
			bruteProtection: 5
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
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	movingviro: {
		name: "Moving Virologist",
		icon: require("@/assets/art/combat/enemies/badviro.png"),
		stats: {
			maxHealth: 330,
			attackSpeed: 1.9,
			precision: 85,
			power: 94,
			evasion: 63,
			protection: 1,
			damageType: "brute",
			burnProtection: 0,
			bruteProtection: 5
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
				chance: 0.5,
				itemTable: [
					{
						id: 'ammoB4',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: .2,
				item: "fireaxe"
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	cultist: {
		name: "Cultist",
		icon: require("@/assets/art/combat/enemies/cultist.png"),
		stats: {
			maxHealth: 340,
			attackSpeed: 1.5,
			precision: 84,
			power: 87,
			evasion: 81,
			protection: 1,
			damageType: "burn",
			burnProtection: 0,
			bruteProtection: 5
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
				chance: 0.5,
				itemTable: [
					{
						id: 'armB6',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	securitybot: {
		name: "Security Bot",
		icon: require("@/assets/art/combat/enemies/secbot.png"),
		stats: {
			maxHealth: 350,
			attackSpeed: 2.1,
			precision: 104,
			power: 80,
			evasion: 72,
			protection: 1,
			damageType: "brute",
			burnProtection: 0,
			bruteProtection: 5
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
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	turrets: {
		name: "Defense Turret",
		icon: require("@/assets/art/combat/enemies/turret.png"),
		stats: {
			maxHealth: 360,
			attackSpeed: 2.4,
			precision: 93,
			power: 73,
			evasion: 52,
			protection: 1,
			damageType: "burn",
			burnProtection: 0,
			bruteProtection: 5
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
				chance: 0.5,
				itemTable: [
					{
						id: 'ammoE4',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "diamond"
			}
		]
	},
	AI: {
		name: "AI",
		icon: require("@/assets/art/combat/enemies/ai_anim.gif"),
		stats: {
			maxHealth: 1337,
			attackSpeed: 1.9,
			precision: 94,
			power: 74,
			evasion: 69,
			protection: 1,
			damageType: "burn",
			burnProtection: 0,
			bruteProtection: 5
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 0]
				}
			},
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'gold',
						weight: 1
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "bluespace"
			}
		]
	},
	// debugA: {
	// 	name: "Debug A",
	// 	icon: require("@/assets/art/debug/A.png"),
	// 	stats: {
	// 		maxHealth: 20,
	// 		attackSpeed: 2,
	// 		precision: -20,
	// 		power: -1,
	// 		evasion: -20,
	// 		protection: 30
	// 	},
	// 	item: "iron"
	// },
	// debugB: {
	// 	name: "Debug B",
	// 	icon: require("@/assets/art/debug/B.png"),
	// 	stats: {
	// 		maxHealth: 20,
	// 		attackSpeed: 2,
	// 		precision: -10,
	// 		power: -1,
	// 		evasion: -10,
	// 	},
	// 	items: {
	// 		id: "iron",
	// 		count: 2
	// 	}
	// },
	// debugC: {
	// 	name: "Debug C",
	// 	icon: require("@/assets/art/debug/C.png"),
	// 	stats: {
	// 		maxHealth: 20,
	// 		attackSpeed: 2,
	// 		precision: 0,
	// 		power: -1,
	// 		evasion: 0,
	// 	},
	// 	items: {
	// 		id: "iron",
	// 		count: [0, 3]
	// 	}
	// },
	// debugD: {
	// 	name: "Debug D",
	// 	icon: require("@/assets/art/debug/D.png"),
	// 	stats: {
	// 		maxHealth: 20,
	// 		attackSpeed: 2,
	// 		precision: 10,
	// 		power: -1,
	// 		evasion: 10,
	// 	},
	// 	itemTable: [
	// 		{
	// 			id: "iron",
	// 			count: [1, 3],
	// 			weight: 600
	// 		}, {
	// 			id: "silver",
	// 			count: 2,
	// 			weight: 200
	// 		}, {
	// 			id: "gold",
	// 			weight: 100
	// 		}, {
	// 			id: "titanium",
	// 			weight: 1
	// 		},
	// 		{
	// 			id: null,
	// 			weight: 99
	// 		}
	// 	]
	// },
	// debugE: {
	// 	name: "Debug E",
	// 	icon: require("@/assets/art/debug/E.png"),
	// 	stats: {
	// 		maxHealth: 20,
	// 		attackSpeed: 2,
	// 		precision: 20,
	// 		power: -1,
	// 		evasion: 20,
	// 	},
	// 	itemTables: [
	// 		{
	// 			chance: 1,
	// 			item: 'iron'
	// 		},
	// 		{
	// 			chance: 0.1,
	// 			items: {
	// 				id: 'silver',
	// 				count: [0, 2]
	// 			}
	// 		},
	// 		{
	// 			chance: 0.01,
	// 			itemTable: [
	// 				{
	// 					id: 'gold',
	// 					weight: 3
	// 				},
	// 				{
	// 					id: 'titanium',
	// 					weight: 1
	// 				}
	// 			]
	// 		}
	// 	]
	// }
}

