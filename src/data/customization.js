export const RACES = {
	human: {
		icon: require("@/assets/art/customization/icon.png"),
		skin: require("@/assets/art/customization/HumanMale.png"),
		skinColor: true,
		hair: true
	},
	lizard: {
		icon: require("@/assets/art/customization/lizardIcon.png"),
		skin: require("@/assets/art/customization/LizardMale.png"),
		scaleColor: true,
		horns: true,
		frills: true
	},
	moth: {
		icon: require("@/assets/art/customization/mothIcon.png"),
		skin: require("@/assets/art/customization/MothMale.png"),
		moth: true
	},
	// ipc: {
	// 	icon: require("@/assets/art/customization/ipcIcon.png"),
	// 	skin: require("@/assets/art/customization/IpcMale.png")
	// }
};

const none = require("@/assets/art/customization/none.png");

export const HAIR = {
	none,
	thinningrear: require("@/assets/art/customization/hair/m_thinningrear.png"),
	bigpompadour: require("@/assets/art/customization/hair/m_bigpompadour.png"),
	cia: require("@/assets/art/customization/hair/m_cia.png"),
	spiky: require("@/assets/art/customization/hair/m_spiky.png"),
	undercut: require("@/assets/art/customization/hair/m_undercut.png"),
	business: require("@/assets/art/customization/hair/m_business.png"),
	unshaven_mohawk: require("@/assets/art/customization/hair/m_unshaven_mohawk.png"),
	shavedmohawk: require("@/assets/art/customization/hair/m_shavedmohawk.png"),
	undercutright: require("@/assets/art/customization/hair/m_undercutright.png"),

	kusanagi: require("@/assets/art/customization/hair/f_kusanagi.png"),
	poofy: require("@/assets/art/customization/hair/f_poofy.png"),
	drillhairextended: require("@/assets/art/customization/hair/f_drillhairextended.png"),
	modern: require("@/assets/art/customization/hair/f_modern.png"),
	_80s: require("@/assets/art/customization/hair/f_80s.png"),
	ponytail7: require("@/assets/art/customization/hair/f_ponytail7.png"),
	sidetail4: require("@/assets/art/customization/hair/f_sidetail4.png"),
	hime: require("@/assets/art/customization/hair/f_hime.png"),
	wisp: require("@/assets/art/customization/hair/f_wisp.png"),
	floorlength_bedhead: require("@/assets/art/customization/hair/f_floorlength_bedhead.png"),
};

export const HORNS = {
	none,
	ram: require("@/assets/art/customization/lizard_horns/ram.png"),
	simple: require("@/assets/art/customization/lizard_horns/simple.png")
};
export const FRILLS = {
	none,
	aqua: require("@/assets/art/customization/lizard_frills/aqua.png"),
	short: require("@/assets/art/customization/lizard_frills/short.png"),
	simple: require("@/assets/art/customization/lizard_frills/simple.png"),
};

export const MOTH = {
	plain: {
		body: require("@/assets/art/customization/moth/plain.png"),
		head: require("@/assets/art/customization/moth/plain_top.png")
	},
	firewatch: {
		body: require("@/assets/art/customization/moth/firewatch.png"),
		head: require("@/assets/art/customization/moth/firewatch_top.png")
	},
	lovers: {
		body: require("@/assets/art/customization/moth/lovers.png"),
		head: require("@/assets/art/customization/moth/lovers_top.png"),
	},
	moonfly: {
		body: require("@/assets/art/customization/moth/moonfly.png"),
		head: require("@/assets/art/customization/moth/moonfly_top.png"),
	},
	white: {
		body: require("@/assets/art/customization/moth/white.png"),
		head: require("@/assets/art/customization/moth/white_top.png")
	}
};
export const BASE_CLOTHING = require("@/assets/art/customization/BaseClothing.png");


export const SKIN_COLORS = [
	{
		hue: 20,
		saturation: 100,
		lightness: 91
	},
	{
		hue: 21,
		saturation: 92,
		lightness: 85
	},
	{
		hue: 20,
		saturation: 63,
		lightness: 76
	},
	{
		hue: 21,
		saturation: 47,
		lightness: 72
	},
	{
		hue: 16,
		saturation: 35,
		lightness: 66
	},
	{
		hue: 34,
		saturation: 100,
		lightness: 85
	},
	{
		hue: 34,
		saturation: 63,
		lightness: 70
	},
	{
		hue: 30,
		saturation: 46,
		lightness: 57
	},
	{
		hue: 28,
		saturation: 48,
		lightness: 49
	},
	{
		hue: 25,
		saturation: 54,
		lightness: 30
	},
	{
		hue: 5,
		saturation: 49,
		lightness: 19
	},
	{
		hue: 34,
		saturation: 100,
		lightness: 95
	}
]

export const VIVID_COLORS = [
	{
		hue: 0,
		saturation: 0,
		lightness: 95,
	},
	{
		hue: 0,
		saturation: 0,
		lightness: 70,
	},
	{
		hue: 0,
		saturation: 0,
		lightness: 30,
	},
	{
		hue: 0,
		saturation: 0,
		lightness: 5,
	},
	{
		hue: 10,
		saturation: 95,
		lightness: 55,
	},
	{
		hue: 40,
		saturation: 95,
		lightness: 55,
	},
	{
		hue: 70,
		saturation: 95,
		lightness: 65,
	},
	{
		hue: 100,
		saturation: 95,
		lightness: 55,
	},
	{
		hue: 150,
		saturation: 95,
		lightness: 55,
	},
	{
		hue: 190,
		saturation: 95,
		lightness: 55,
	},
	{
		hue: 230,
		saturation: 95,
		lightness: 55,
	},
	{
		hue: 280,
		saturation: 95,
		lightness: 55,
	},
	{
		hue: 315,
		saturation: 95,
		lightness: 55,
	},
]