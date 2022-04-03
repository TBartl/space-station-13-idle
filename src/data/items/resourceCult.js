export default {
	unholyfavor: {
		name: "Nar'sie's Favor",
		sellPrice: 66,
		icon: require("@/assets/art/cult/blood1.png")
	},
	cultWeapon1: {
		name: "Destructive Touch",
		sellPrice: 666,
		icon: require("@/assets/art/combat/items/hand/cultWeapon1.png"),
		overlay: require("@/assets/art/combat/items/hand/cultWeapon1_overlay.gif"),
		equipmentSlot: "hand",
        stats: {
            maxHealth: 25,
            precision: 4,
            command: 6,
            power: 10,
            evasion: 5,
            attackSpeed: 4,
            protection: 0,
            regen: -0.6,
            damageType: "brute"
        },
		requires: {
			command: 15,
			meleePower: 25
		}
	},
	cultWeapon2: {
		name: "Cultist Dagger",
		sellPrice: 666,
		icon: require("@/assets/art/combat/items/hand/cultWeapon2.png"),
		overlay: require("@/assets/art/combat/items/hand/cultWeapon2_overlay.png"),
		equipmentSlot: "hand",
        stats: {
            maxHealth: 35,
            precision: 11,
            command: 6,
            power: 26,
            evasion: 1,
            attackSpeed: 4,
            protection: 4,
            regen: -1.1,
            damageType: "brute"
        },
		requires: {
			command: 20,
			meleePower: 35
		}
	},
	cultBlade: { // inconsistent naming is due to this being an older item ID. changing it will break saves that have the item.
		name: "Unholy Blade",
		sellPrice: 666,
		icon: require("@/assets/art/combat/items/hand/cultWeapon3.gif"),
		overlay: require("@/assets/art/combat/items/hand/cultWeapon3_overlay.gif"),
		equipmentSlot: "hand",
        stats: {
            maxHealth: 50,
            precision: 15,
            command: 8,
            power: 38,
            evasion: 3,
            attackSpeed: 4,
            protection: 6,
            regen: -1.5,
            damageType: "brute"
        },
		requires: {
			command: 25,
			meleePower: 45
		}
	}
}
