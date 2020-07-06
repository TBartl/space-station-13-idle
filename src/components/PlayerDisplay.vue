<template>
  <div class="overlay-div w-100 h-100">
    <div
      class="skin"
      :style="{backgroundImage: 'url('+skin+')', maskImage: 'url('+skin+')', backgroundColor: skinColor}"
    />
    <div
      class="hair"
      :style="{backgroundImage: 'url('+hair+')', maskImage: 'url('+hair+')', backgroundColor: hairColor}"
    />
    <img :src="clothing" />
  </div>
</template>

<script>
import { BASE_CLOTHING, RACES, HAIR } from "@/data/customization";

export default {
  computed: {
    skin() {
      return RACES[this.$store.getters["customization/race"]].skin;
    },
    skinColor() {
      return this.$store.getters["customization/skinColor/hsl"];
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