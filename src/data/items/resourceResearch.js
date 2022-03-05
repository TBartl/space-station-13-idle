export const GRAYTIDING_TOOL_PERCENT = .1;

const TOOLS = {
	toolMining: {
		name: "Mining Scanner",
		sellPrice: 9,
		icon: require("@/assets/art/research/tools/toolMining.png"),
		description: "All mining actions give double XP.",
		potionJob: "mining",
		potionCharges: 10
    },
    toolEngineering: {
		name: "Geiger Counter",
		sellPrice: 79,
		icon: require("@/assets/art/research/tools/toolEngineering.png"),
		description: "All engineering jobs are exactly 1 second faster.",
		potionJob: "engineering",
		potionCharges: 25
    },
    toolFabrication: {
		name: "Multitool",
		sellPrice: 208,
		icon: require("@/assets/art/research/tools/toolFabrication.png"),
		description: "Fabrication of ammo is now multiplied by 0x-3x.",
		potionJob: "fabrication",
		potionCharges: 15
	},
	toolGraytiding: {
		name: "Door Hacking Kit",
		sellPrice: 31,
		icon: require("@/assets/art/research/tools/toolGraytiding.png"),
		description: "Reduces graytiding failure chance by 10%, and does not consume a charge when apprehended.",
		potionJob: "graytiding",
		potionCharges: 20
    },
    toolTinkering: {
		name: "Wire Ripper",
		sellPrice: 99,
		icon: require("@/assets/art/research/tools/toolTinkering.png"),
		description: "Multiplies tinkering XP by 1.5x and makes tinkering give wire, but doubles junk cost.",
		potionJob: "tinkering",
		potionCharges: 20
    },
    toolBotany: {
		name: "Botanical Scanner",
		sellPrice: 67,
		icon: require("@/assets/art/research/tools/toolBotany.png"),
		description: "Botany jobs now also grow additional chemicals and meats.",
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
