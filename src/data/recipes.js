import ITEMS from "@/data/items";

export const RESEARCH_RECIPES_I = {
	recipePills: {
		name: "RECIPE: Pills",
		description: "Enables the simple fabrication of edible chemicals. Chemistry can now make pills.",
		icon: require('@/assets/art/combat/items/pill1.png'),
		requiredResearchPoints: 25,
		requiredItems: {
			sacid: 25
		},
		upgrade: "recipePills",
		requiredUpgrades: {
			recipePills: 0
		},
		requiredLevels: {
			chemistry: 2
		}
	},
	toolEngineering: {
		name: "RECIPE: Geiger Counter",
		description: "Enables the development of a tool that can speed up engineering.",
		icon: require('@/assets/art/research/tools/toolEngineering.png'),
		requiredResearchPoints: 75,
		upgrade: "toolEngineering",
		requiredUpgrades: {
			toolEngineering: 0
		}
	},
	toolMining: {
		name: "RECIPE: Mining Scanner",
		description: "Enables the development of a tool that reveals nearby ores, doubling mining XP.",
		icon: require('@/assets/art/research/tools/toolMining.png'),
		requiredResearchPoints: 75,
		upgrade: "toolMining",
		requiredUpgrades: {
			toolMining: 0
		}
	},
	toolFabrication: {
		name: "RECIPE: Multitool",
		description: "Enables the development of a tool that increases the rate of bullet and cell fabrication.",
		icon: require('@/assets/art/research/tools/toolFabrication.png'),
		requiredResearchPoints: 75,
		upgrade: "toolFabrication",
		requiredUpgrades: {
			toolFabrication: 0
		}
	},
	toolGraytiding: {
		name: "RECIPE: Door Hacking Kit",
		description: "Enables the development of a tool that decreases your chance to get caught tiding and is extra durable.",
		icon: require('@/assets/art/research/tools/toolGraytiding.png'),
		requiredResearchPoints: 75,
		upgrade: "toolGraytiding",
		requiredUpgrades: {
			toolGraytiding: 0
		}
	},
	toolTinkering: {
		name: "RECIPE: Wire Ripper",
		description: "Enables the development of a Tinkering tool that rapidly remakes junk, yielding wire in the process.",
		icon: require('@/assets/art/research/tools/toolTinkering.png'),
		requiredResearchPoints: 75,
		upgrade: "toolTinkering",
		requiredUpgrades: {
			toolTinkering: 0
		}
	},
	toolBotany: {
		name: "RECIPE: Botanical Scanner",
		description: "Enables the development of a tool that allows for specific chemical yields from plants.",
		icon: require('@/assets/art/research/tools/toolBotany.png'),
		requiredResearchPoints: 75,
		upgrade: "toolBotany",
		requiredUpgrades: {
			toolBotany: 0
		}
	},
	toolCooking: {
		name: "RECIPE: Microwave",
		description: "Enables the development of a space microwave that cooks small amounts of things quickly.",
		icon: require('@/assets/art/research/tools/toolCooking.png'),
		requiredResearchPoints: 75,
		upgrade: "toolCooking",
		requiredUpgrades: {
			toolCooking: 0
		}
	},
	toolBartending: {
		name: "RECIPE: Ethereal Disco",
		description: "Enables the development of a disco ball that will entertain bargoers, convincing them to give out tips.",
		icon: require('@/assets/art/research/tools/toolBartending.png'),
		requiredResearchPoints: 75,
		upgrade: "toolBartending",
		requiredUpgrades: {
			toolBartending: 0
		}
	},
	toolXenobiology: {
		name: "RECIPE: Slime Scanner",
		description: "Enables the development of a tool that allows Xenobiology to produce potent slime cores.",
		icon: require('@/assets/art/research/tools/toolXenobiology_anim.gif'),
		requiredResearchPoints: 75,
		upgrade: "toolXenobiology",
		requiredUpgrades: {
			toolXenobiology: 0
		}
	},
	toolChemistry: {
		name: "RECIPE: Microdoser",
		description: "Enables the development of a tool doubles pill production in Chemistry.",
		icon: require('@/assets/art/research/tools/toolChemistry.png'),
		requiredResearchPoints: 75,
		upgrade: "toolChemistry",
		requiredUpgrades: {
			toolChemistry: 0
		}
	},
	toolCargonia: {
		name: "RECIPE: Poking Stick",
		description: "Enables the development of a tool that can find hidden Cargonia shipping crates.",
		icon: require('@/assets/art/research/tools/toolCargonia.png'),
		requiredResearchPoints: 150,
		upgrade: "toolCargonia",
		requiredUpgrades: {
			toolCargonia: 0
		}
	},
	toolCult: {
		name: "RECIPE: Rune Assistance Crayons",
		description: "Enables the development of a tool that will make drawing cult runes more potent.",
		icon: require('@/assets/art/research/tools/toolCult.png'),
		requiredResearchPoints: 150,
		upgrade: "toolCult",
		requiredUpgrades: {
			toolCult: 0
		}
	},
	toolLing: {
		name: "RECIPE: Medical Wrench",
		description: "Enables the development of a tool that would allow a Changeling to precisely shape themself.",
		icon: require('@/assets/art/research/tools/toolLing.png'),
		requiredResearchPoints: 150,
		upgrade: "toolLing",
		requiredUpgrades: {
			toolCult: 0
		}
	},
}

export const RESEARCH_RECIPES_II = {
	facePrescription: {
		name: "RECIPE: Prescription Glasses",
		description: "Enables simple facewear development, allowing you to develop the most basic facewear around.",
		icon: require('@/assets/art/combat/items/face/prescription_glasses.png'),
		requiredResearchPoints: 100,
		upgrade: "facePrescription",
		requiredUpgrades: {
			facePrescription: 0
		},
		requiredLevels: {
			research: 5
		}
	},
	faceMeson2: {
		name: "RECIPE: T-Ray Mesons",
		description: "Allows you to upgrade Meson goggles with T-Ray vision capabilities.",
		icon: require('@/assets/art/combat/items/face/face_tray.png'),
		requiredResearchPoints: 100,
		upgrade: "faceMeson2",
		requiredUpgrades: {
			faceMeson2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceMedHud2: {
		name: "RECIPE: Health-Science HUD",
		description: "Allows you to upgrade a medical HUD to also have science goggle capabilities.",
		icon: require('@/assets/art/combat/items/face/face_medsci.png'),
		requiredResearchPoints: 100,
		upgrade: "faceMedHud2",
		requiredUpgrades: {
			faceMedHud2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceSecGlasssesss: {
		name: "RECIPE: SecHUD Gar Glasses",
		description: "Enables you to use an upgrade that will make a security HUD look sharper.",
		icon: require('@/assets/art/combat/items/face/face_secgar.png'),
		requiredResearchPoints: 100,
		upgrade: "faceSecGlasssesss",
		requiredUpgrades: {
			faceSecGlasssesss: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceScience2: {
		name: "RECIPE: Night Vision Goggles",
		description: "Allows you to tune science goggles to enable night vision, which is also scientific.",
		icon: require('@/assets/art/combat/items/face/face_nvg.png'),
		requiredResearchPoints: 100,
		upgrade: "faceScience2",
		requiredUpgrades: {
			faceScience2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceTiki2: {
		name: "RECIPE: Rangi Mask",
		description: "Enables an upgrade for the tiki mask that will better intimidate enemies.",
		icon: require('@/assets/art/combat/items/face/face_tiki2.png'),
		requiredResearchPoints: 100,
		upgrade: "faceTiki2",
		requiredUpgrades: {
			faceTiki2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceWrestle2: {
		name: "RECIPE: Luchador Mask",
		description: "Allows you to upgrade a wrestling mask to represent a different fighting style.",
		icon: require('@/assets/art/combat/items/face/face_wrestle2.png'),
		requiredResearchPoints: 100,
		upgrade: "faceWrestle2",
		requiredUpgrades: {
			faceWrestle2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceGas2: {
		name: "RECIPE: Captain's Gas Mask",
		description: "Lets you upgrade a standard gas mask to one fit for a station captain.",
		icon: require('@/assets/art/combat/items/face/face_gas2.png'),
		requiredResearchPoints: 100,
		upgrade: "faceGas2",
		requiredUpgrades: {
			faceGas2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceFox2: {
		name: "RECIPE: Bee Mask",
		description: "Enables an upgrade that will let you tweak a fox mask to repesent a different kind of animal.",
		icon: require('@/assets/art/combat/items/face/face_fox2.png'),
		requiredResearchPoints: 100,
		upgrade: "faceFox2",
		requiredUpgrades: {
			faceFox2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceSec2: {
		name: "RECIPE: SWAT Mask",
		description: "Enables you to upgrade a standard security hailer to a more heavy-duty version.",
		icon: require('@/assets/art/combat/items/face/face_sec2.png'),
		requiredResearchPoints: 100,
		upgrade: "faceSec2",
		requiredUpgrades: {
			faceSec2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceSyndicate2: {
		name: "RECIPE: Syndicate Balaclava",
		description: "Lets you upgrade a syndicate mask into a full head-covering balaclava.",
		icon: require('@/assets/art/combat/items/face/face_syndicate2.png'),
		requiredResearchPoints: 100,
		upgrade: "faceSyndicate2",
		requiredUpgrades: {
			faceSyndicate2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceMime2: {
		name: "RECIPE: Sexy Mime Mask",
		description: "Lets you upgrade a mime mask to a more unconventional version.",
		icon: require('@/assets/art/combat/items/face/face_mimesexy.png'),
		requiredResearchPoints: 100,
		upgrade: "faceMime2",
		requiredUpgrades: {
			faceMime2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
	faceClown2: {
		name: "RECIPE: Sexy Clown Mask",
		description: "Lets you upgrade a clown mask to a much more horrifying version.",
		icon: require('@/assets/art/combat/items/face/face_clownsexy.png'),
		requiredResearchPoints: 100,
		upgrade: "faceClown2",
		requiredUpgrades: {
			faceClown2: 0
		},
		requiredLevels: {
			research: 25
		}
	},
}

export const RESEARCH_RECIPES_III = {
	alienMining: {
		name: "RECIPE: Alien Alloy Mining",
		description: "Mining can now detect and mine for alien alloys.",
		icon: require('@/assets/art/mining/OreAlien.gif'),
		requiredResearchPoints: 500,//tentative (might need to be like 10x this?)
		requiredItems: {
			bluespace: 1
		},
		upgrade: "alienMining",
		requiredUpgrades: {
			alienMining: 0
		},
		requiredLevels: {
			research: 15//tentative
		}
	},
	tierFourAmmo: {
		name: "RECIPE: Tier IV Ammo",
		description: "Fabrication can now produce tier four ammo.",
		icon: require('@/assets/art/combat/items/ammo_b4_anim.gif'),
		requiredResearchPoints: 650,//tentative (might need to be like 10x this?)
		requiredItems: {
			ammoBallistic3: 800,
			ammoEnergy3: 800
		},
		upgrade: "tierFourAmmo",
		requiredUpgrades: {
			tierFourAmmo: 0
		},
		requiredLevels: {
			research: 30//tentative
		}
	},
	toolShitposting: {
		name: "RECIPE: Tube Plunger",
		description: "Enables the development of a strange tool. The computer only displays \"???\" when asked about it.",
		icon: require('@/assets/art/research/tools/toolShitposting.png'),
		requiredResearchPoints: 750,
		upgrade: "toolShitposting",
		requiredUpgrades: {
			toolShitposting: 0
		},
		requiredLevels: {
			shitposting: 10
		}
	},
	cultblade: {
		name: "RECIPE: Unholy Blade",
		description: "Discover how a cultist can corrupt a null rod. The Cult can now make Unholy Blades.",
		icon: require('@/assets/art/combat/items/cultblade.gif'),
		requiredResearchPoints: 300,
		upgrade: "cultblade",
		requiredUpgrades: {
			cultblade: 0
		},
		requiredLevels: {
			research: 25
		}
	},
}