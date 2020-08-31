const TOOLS = {
	toolMining: {
		name: "Mining Scanner",
		sellPrice: 9,
		icon: require("@/assets/art/research/tools/toolMining.png"),
		description: "TODO",
		potionJob: "mining",
		potionCharges: 8
    },
    toolEngineering: {
		name: "Geiger Counter",
		sellPrice: 79,
		icon: require("@/assets/art/research/tools/toolEngineering.png"),
		description: "All engineering jobs are exactly 1 second faster.",
		potionJob: "engineering",
		potionCharges: 10
    },
    toolFabrication: {
		name: "Multitool",
		sellPrice: 208,
		icon: require("@/assets/art/research/tools/toolFabrication.png"),
		description: "TODO",
		potionJob: "fabrication",
		potionCharges: 15
	},
	toolGraytiding: {
		name: "Hacking Tools",
		sellPrice: 31,
		icon: require("@/assets/art/research/tools/toolGraytiding.png"),
		description: "TODO",
		potionJob: "graytiding",
		potionCharges: 25
    },
    toolTinkering: {
		name: "Automated Wiring",
		sellPrice: 99,
		icon: require("@/assets/art/research/tools/toolTinkering.png"),
		description: "TODO",
		potionJob: "tinkering",
		potionCharges: 5
    },
    toolBotany: {
		name: "Botanical Scanner",
		sellPrice: 67,
		icon: require("@/assets/art/research/tools/toolBotany.png"),
		description: "TODO",
		potionJob: "botany",
		potionCharges: 8
	},
    toolCooking: {
		name: "Microwave",
		sellPrice: 168,
		icon: require("@/assets/art/research/tools/toolCooking.png"),
		description: "TODO",
		potionJob: "cooking",
		potionCharges: 10
    },
    toolBartending: {
		name: "Etheral Disco",
		sellPrice: 180,
		icon: require("@/assets/art/research/tools/toolBartending.png"),
		description: "TODO",
		potionJob: "bartending",
		potionCharges: 10
	},
	toolXenobiology: {
		name: "Slime Scanner",
		sellPrice: 114,
		icon: require("@/assets/art/research/tools/toolXenobiology_anim.gif"),
		description: "TODO",
		potionJob: "xenobiology",
		potionCharges: 30
	},
	toolChemistry: {
		name: "Electrical Inducer",
		sellPrice: 55,
		icon: require("@/assets/art/research/tools/toolChemistry.png"),
		description: "TODO",
		potionJob: "chemistry",
		potionCharges: 5
	},
	toolShitposting: {
		name: "Tube Plunger",
		sellPrice: -37,
		icon: require("@/assets/art/research/tools/toolShitposting.png"),
		description: "TODO",
		potionJob: "shitposting",
		potionCharges: 5
	},
	toolCargonia: {
		name: "Poking Stick",
		sellPrice: 66,
		icon: require("@/assets/art/research/tools/toolCargonia.png"),
		description: "TODO",
		potionJob: "cargonia",
		potionCharges: 1
	},
	toolCult: {
		name: "Rune Assistance Crayons",
		sellPrice: 42,
		icon: require("@/assets/art/research/tools/toolCult.png"),
		description: "TODO",
		potionJob: "cult",
		potionCharges: 10
	},
	toolLing: {
		name: "Medical Wrench",
		sellPrice: 132,
		icon: require("@/assets/art/research/tools/toolLing.png"),
		description: "TODO",
		potionJob: "ling",
		potionCharges: 10
	}
}

export const RESOURCE_RESEARCH = {
	...TOOLS
}
