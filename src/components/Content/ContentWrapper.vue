<template>
  <div class="content-wrapper" :class="{reversed: reversed}">
    <component :is="'content-' + visibleSidebarItem" class="w-100 big-bottom-margin" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContentShop from "./ContentShop";
import ContentInventory from "./ContentInventory";
import ContentEngineering from "./ContentEngineering";
import ContentChemistry from "./ContentChemistry";
import ContentMining from "./ContentMining";
import ContentXenobiology from "./ContentXenobiology";
import ContentBotany from "./ContentBotany";
import ContentCooking from "./ContentCooking";
import ContentGraytiding from "./ContentGraytiding";
import ContentTinkering from "./ContentTinkering";
import ContentShitposting from "./ContentShitposting";
import ContentFabrication from "./ContentFabrication";
import ContentCombat from "./ContentCombat";
import ContentSettings from "./ContentSettings";
import ContentChronosphere from "./ContentChronosphere";
import ContentCompletion from "./ContentCompletion";
import ContentItemSpawner from "./ContentItemSpawner";
import ContentAbout from "@/components/Content/ContentAbout";
import ContentCustomization from "@/components/Content/ContentCustomization";

export default {
  name: "ContentWrapper",
  components: {
    ContentShop,
    ContentInventory,
    ContentEngineering,
    ContentChemistry,
    ContentMining,
    ContentGraytiding,
    ContentTinkering,
    ContentShitposting,
    ContentFabrication,
    ContentXenobiology,
    ContentBotany,
    ContentCooking,
    ContentCombat,
    ContentSettings,
    ContentChronosphere,
    ContentCompletion,
    ContentItemSpawner,
    ContentAbout,
    ContentCustomization
  },
  computed: {
    ...mapGetters(["visibleSidebarItem"]),
    reversed() {
      return this.$store.getters["cheats/cheatsEnabled"];
    }
  }
};
</script>

<style scoped>
.content-wrapper {
  flex: 1;

  /* background-image: url("~@/assets/art/misc/background.png"); */
  background-image: url("~@/assets/art/misc/background-alt.jpg");
  background-size: cover;
  background-position: right center;
}

.content-wrapper.reversed {
  background-image: url("~@/assets/art/misc/background-alt-reversed.jpg");
}
.big-bottom-margin {
	margin-bottom: 8rem;
}
</style>	