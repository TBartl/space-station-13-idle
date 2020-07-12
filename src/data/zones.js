export default [
	{
		name: "Arrival Lounge",
		icon: require("@/assets/art/combat/zones/departures.png"),
		enemies: ["janitor", "chaplain", "miner","playershop"]
	},
	{
		name: "Maintenance",
		icon: require("@/assets/art/combat/zones/maint.png"),
		enemies: ["mouse", "lostscientist", "cargoTech","fugitive"]
	},
	{
		name: "Head of Personnel Line",
		icon: require("@/assets/art/combat/zones/hopline.png"),
		enemies: ["Ian", "paperworkhop", "hopcurity","plasmarobo"]
	},
	{
		name: "Dorms 4",
		icon: require("@/assets/art/combat/zones/dorms4.png"),
		enemies: ["catgirl", "traitor", "braindead","chemist"]
	},
	{
		name: "Engineering",
		icon: require("@/assets/art/combat/zones/engineering.png"),
		enemies: ["redslime", "flamingatmostech", "goodengineer", "badengineer"]
	},
	{
		name: "Showroom",
		icon: require("@/assets/art/combat/zones/showroom.png"),
		enemies: ["bee", "mime", "badclown", "goodclown"]
	},
	{
		name: "Kitchen",
		icon: require("@/assets/art/combat/zones/kitchen.png"),
		enemies: ["pete", "cannibal", "botanist","bartender"]
	},

	{
		name: "Medical",
		icon: require("@/assets/art/combat/zones/medical.png"),
		enemies: ["surgeon", "runtime", "cluelessdoctor", "hulk"]
	},
	{
		name: "Bridge",
		icon: require("@/assets/art/combat/zones/bridge.png"),
		enemies: ["renault", "axeassistant", "captain", "locker"]
	},
	{
		name: "Virology",
		icon: require("@/assets/art/combat/zones/viro.png"),
		enemies: ["monkey", "afkviro", "gorilla", "movingviro"]
	},
	{
		name: "Science",
		icon: require("@/assets/art/combat/zones/robotics.png"),
		enemies: ["mech", "techpriest", "minibot", "ayyyyy"]
	},
	{
		name: "AI Core",
		icon: require("@/assets/art/combat/zones/core.png"),
		enemies: ["drone","securitybot", "turrets", "AI"]
	},
	{
		name: "Worker Strike",
		icon: require("@/assets/art/combat/zones/revolution.png"),
		enemies: ["rev1", "rev2", "rev3", "rev4"],
		boss: true,
		purchases: ["bossTicket10"]
	},
	{
		name: "Brutal Security",
		icon: require("@/assets/art/combat/zones/security.png"),
		enemies: ["sec1", "sec2", "sec3", "sec4"],
		boss: true,
		purchases: ["bossTicket1"]
	},
	{
		name: "Primordial Planet",
		icon: require("@/assets/art/combat/zones/lavaland.gif"),
		enemies: ["lava1", "lava2", "lava3", "lava4"],
		boss: true,
		purchases: ["bossTicket2"]
	},
	{
		name: "Syndicate Nuclear Assault Team",
		icon: require("@/assets/art/combat/zones/nuke.png"),
		enemies: ["nuke1", "nuke2", "nuke3", "nuke4"],
		boss: true,
		purchases: ["bossTicket40"]
	},
	{
		name: "Bloodsworn Cultists",
		icon: require("@/assets/art/combat/zones/cult.gif"),
		enemies: ["cult1", "cult2", "cult3", "cult4"],
		boss: true,
		purchases: ["bossTicket3"]
	},
	{
		name: "Wizard Federation 'Diplomats'",
		icon: require("@/assets/art/combat/zones/traitor.gif"),
		enemies: ["wizard1", "wizard2", "wizard3", "wizard4"],
		boss: true,
		purchases: ["bossTicket60"]
	},
	{
		name: "Tear in the Fabric of Reality",
		icon: require("@/assets/art/combat/zones/tear.gif"),
		enemies: ["doppleganger"],
		boss: true,
		purchases: ["bossTicketReset"]
	},
	// {
	// 	name: "Debug Land",
	// 	icon: require("@/assets/art/debug/banner.png"),
	// 	enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	// }
]