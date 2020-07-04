export default [
	{
		name: "Arrival Lounge",
		icon: require("@/assets/art/combat/zones/departures.png"),
		enemies: ["janitor", "chaplain", "miner"]
	},
	{
		name: "Maintenance",
		icon: require("@/assets/art/combat/zones/maint.png"),
		enemies: ["mouse", "lostscientist", "cargoTech"]
	},
	{
		name: "Head of Personnel Line",
		icon: require("@/assets/art/combat/zones/hopline.png"),
		enemies: ["Ian", "paperworkhop", "hopcurity"]
	},
	{
		name: "Dorms 4",
		icon: require("@/assets/art/combat/zones/dorms4.png"),
		enemies: ["catgirl", "traitor", "braindead"]
	},
	{
		name: "Engineering",
		icon: require("@/assets/art/combat/zones/engineering.png"),
		enemies: ["redslime", "flamingatmostech", "badengineer", "goodengineer"]
	},
	{
		name: "Showroom",
		icon: require("@/assets/art/combat/zones/showroom.png"),
		enemies: ["bee", "mime", "badclown", "goodclown"]
	},
	{
		name: "Kitchen",
		icon: require("@/assets/art/combat/zones/kitchen.png"),
		enemies: ["pete", "cannibal", "botanist"]
	},

	{
		name: "Medical",
		icon: require("@/assets/art/combat/zones/medical.png"),
		enemies: ["surgeon", "cluelessdoctor", "hulk"]
	},
	{
		name: "Bridge",
		icon: require("@/assets/art/combat/zones/bridge.png"),
		enemies: ["axeassistant", "captain", "locker"]
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
		enemies: ["securitybot", "turrets", "AI"]
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
		name: "Subversive Individuals",
		icon: require("@/assets/art/combat/zones/traitor.gif"),
		enemies: ["antag1", "antag2", "antag3", "antag4"],
		boss: true,
		purchases: ["bossTicket3"]
	},
	// {
	// 	name: "Debug Land",
	// 	icon: require("@/assets/art/debug/banner.png"),
	// 	enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	// }
]