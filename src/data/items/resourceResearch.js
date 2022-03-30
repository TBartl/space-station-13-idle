export const GRAYTIDING_TOOL_PERCENT = .1;

const TOOLS = {
	toolMining: {
		name: "Mining Scanner",
		sellPrice: 9,
		icon: require("@/assets/art/research/tools/toolMining.png"),
		description: "All mining tasks give double XP.",
		potionJob: "mining",
		potionCharges: 12
    },
    toolEngineering: {
		name: "Geiger Counter",
		sellPrice: 79,
		icon: require("@/assets/art/research/tools/toolEngineering.png"),
		description: "All engineering tasks are 1.5 seconds faster.",
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
		description: "Reduces graytiding failure chance by 10%. Being apprehended does not consume a charge and deals 3 less damage.",
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
		description: "Botany tasks now also grow additional chemicals and meats.",
		potionJob: "botany",
		potionCharges: 8
	},
    toolCooking: {
		name: "Microwave",
		sellPrice: 168,
		icon: require("@/assets/art/research/tools/toolCooking.png"),
		description: "Cooking a dish that you have less than 100 of is 3x faster, or 1.5x faster with less than 250.",
		potionJob: "cooking",
		potionCharges: 30
    },
    toolBartending: {
		name: "Ethereal Disco Ball",
		sellPrice: 180,
		icon: require("@/assets/art/research/tools/toolBartending.png"),
		description: "Mixing drinks also yields 2x the sell value of that drink.",
		potionJob: "bartending",
		potionCharges: 25
	},
	toolXenobiology: {
		name: "Slime Scanner",
		sellPrice: 114,
		icon: require("@/assets/art/research/tools/toolXenobiology_anim.gif"),
		description: "Xenobiology tasks now take several slimes and produce slime cores.",
		potionJob: "xenobiology",
		potionCharges: 20
	},
	toolChemistry: {
		name: "Microdoser",
		sellPrice: 55,
		icon: require("@/assets/art/research/tools/toolChemistry.png"),
		description: "Doubles chemistry pill production. ",
		potionJob: "chemistry",
		potionCharges: 5
	},
	toolShitposting: {
		name: "Tube Plunger",
		sellPrice: -37,
		icon: require("@/assets/art/research/tools/toolShitposting.png"),
		description: "Further increases XP gain from ??? tasks. Strongly inadvised.",
		potionJob: "shitposting",
		potionCharges: 10
	},
	toolCargonia: {
		name: "Poking Stick",
		sellPrice: 66,
		icon: require("@/assets/art/research/tools/toolCargonia.png"),
		description: "Whenever you get money from Cargonia, you may also get a complimentary crate.",
		potionJob: "cargonia",
		potionCharges: 30
	},
	toolCult: {
		name: "Rune Assistance Crayons",
		sellPrice: 42,
		icon: require("@/assets/art/research/tools/toolCult.png"),
		description: "Non-blood sacrifice tasks give double Cult XP, but cost health.",
		potionJob: "cult",
		potionCharges: 25
	},
	toolLing: {
		name: "Medical Wrench",
		sellPrice: 132,
		icon: require("@/assets/art/research/tools/toolLing.png"),
		description: "Guarantees Changeling armor of the next tier up.",
		potionJob: "ling",
		potionCharges: 1
	}
}

export const RESOURCE_RESEARCH = {
	...TOOLS
}
