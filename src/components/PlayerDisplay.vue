<template>
  <div class="overlay-div w-100 h-100">
    <div
      class="skin"
      :style="{backgroundImage: 'url('+skin+')', maskImage: 'url('+skin+')', backgroundColor: skinColor}"
    />
    <div
      v-if="race.moth"
      class="skin"
      :style="{backgroundImage: 'url('+moth.body+')', maskImage: 'url('+moth.body+')'}"
    />

    <img :src="clothing" />
    <img v-if="race.hair" :src="baseShoes" />
    <div
      v-if="race.hair && !hasHat"
      class="hair"
      :style="{backgroundImage: 'url('+hair+')', maskImage: 'url('+hair+')', backgroundColor: hairColor}"
    />
    <div
      v-if="race.frills && !hasHat"
      class="hair"
      :style="{backgroundImage: 'url('+frills+')', maskImage: 'url('+frills+')', backgroundColor: skinColor}"
    />
    <div
      v-if="race.horns && !hasHat"
      class="hair"
      :style="{backgroundImage: 'url('+horns+')', maskImage: 'url('+horns+')', backgroundColor: skinColor}"
    />
    <div
      v-if="race.moth"
      class="hair"
      :style="{backgroundImage: 'url('+moth.head+')', maskImage: 'url('+moth.head+')'}"
    />

    <img
      v-for="(overlay, index) in playerOverlayIcons"
      :key="index"
      :src="overlay.icon"
      :class="{'appear-in-back': overlay.appearInBack}"
    />
    <img v-if="companion && showEquipment" :src="companion.icon" alt class="companion-overlay" />
  </div>
</template>

<script>
import {
  BASE_CLOTHING,
  BASE_SHOES,
  RACES,
  HAIR,
  HORNS,
  FRILLS,
  MOTH
} from "@/data/customization";
import ITEMS from "@/data/items";

export default {
  props: ["showEquipment"],
  computed: {
    race() {
      return RACES[this.$store.getters["customization/race"]];
    },
    skin() {
      return this.race.skin;
    },
    skinColor() {
      if (this.race.skinColor)
        return this.$store.getters["customization/skinColor/hsl"];
      if (this.race.scaleColor)
        return this.$store.getters["customization/scaleColor/hsl"];
      return "";
    },
    clothing() {
      let jumpsuit =
        ITEMS[this.$store.getters["inventory/equipment"].jumpsuit.itemId];
      return jumpsuit ? jumpsuit.overlay : BASE_CLOTHING;
		},
		baseShoes() {
			return BASE_SHOES;
		},
    hair() {
      let hairId = this.$store.getters["customization/hair"];
      return HAIR[hairId];
    },
    hairColor() {
      return this.$store.getters["customization/hairColor/hsl"];
    },
    hasHat() {
      if (!this.showEquipment) return false;
      let headItem =
        ITEMS[this.$store.getters["inventory/equipment"].head.itemId];
      if (!headItem) return false;
      return headItem.isHat;
    },
    frills() {
      let frillsId = this.$store.getters["customization/frills"];
      return FRILLS[frillsId];
    },
    horns() {
      let hornsId = this.$store.getters["customization/horns"];
      return HORNS[hornsId];
    },
    moth() {
      let mothId = this.$store.getters["customization/moth"];
      return MOTH[mothId];
    },

    playerOverlayIcons() {
      if (!this.showEquipment) return [];
      let icons = [];
      let equipment = this.$store.getters["inventory/equipment"];
      for (let [equipmentSlot, { itemId }] of Object.entries(equipment)) {
        if (!itemId) continue;
        let item = ITEMS[itemId];
        if (this.$store.getters["inventory/checkRestricted"](itemId)) continue;
        if (item.overlay) {
          if (item.equipmentSlot == "jumpsuit") continue;
          icons.push({
            icon: item.overlay,
            appearInBack: item.overlayAppearInBack
          });
        }
      }
      return icons;
    },

    companion() {
      let companionItemId = this.$store.getters["inventory/equipment"].companion
        .itemId;
      if (!companionItemId) return null;
      return ITEMS[companionItemId];
    }
  }
};
</script>

<style scoped>
.skin,
.hair {
  background-size: cover;
  image-rendering: pixelated;

  background-blend-mode: multiply;

  background-color: white;
  mask-mode: alpha;
  mask-size: cover;
}

.companion-overlay {
  width: 50%;
  height: 50%;
  top: 58%;
  left: 55%;
}

.appear-in-back {
  z-index: 0;
  filter: blur(3px);
}
</style>