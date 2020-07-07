<template>
  <div class="overlay-div w-100 h-100">
    <div
      class="skin"
      :style="{backgroundImage: 'url('+skin+')', maskImage: 'url('+skin+')', backgroundColor: skinColor}"
    />
    <img :src="clothing" />
    <div
      v-if="race.hair"
      class="hair"
      :style="{backgroundImage: 'url('+hair+')', maskImage: 'url('+hair+')', backgroundColor: hairColor}"
    />
    <div
      v-if="race.frills"
      class="hair"
      :style="{backgroundImage: 'url('+frills+')', maskImage: 'url('+frills+')', backgroundColor: skinColor}"
    />
    <div
      v-if="race.horns"
      class="hair"
      :style="{backgroundImage: 'url('+horns+')', maskImage: 'url('+horns+')', backgroundColor: skinColor}"
    />
  </div>
</template>

<script>
import { BASE_CLOTHING, RACES, HAIR, HORNS, FRILLS } from "@/data/customization";

export default {
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
      return BASE_CLOTHING;
    },
    hair() {
      let hairId = this.$store.getters["customization/hair"];
      return HAIR[hairId];
    },
    hairColor() {
      return this.$store.getters["customization/hairColor/hsl"];
    },
    frills() {
      let frillsId = this.$store.getters["customization/frills"];
      return FRILLS[frillsId];
    },
    horns() {
      let hornsId = this.$store.getters["customization/horns"];
      return HORNS[hornsId];
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

  background-color: #ffe0d1;
  mask-mode: alpha;
  mask-size: cover;
}
</style>