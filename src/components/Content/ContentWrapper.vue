<template>
  <div class="content-wrapper">
    <div class="background" :class="{reversed: reversed}"></div>
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
import ContentBartending from "./ContentBartending";
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
    ContentBartending,
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
}
.dark-mode .background {
  filter: brightness(0.6) !important;
}

.background {
  /* background-image: url("~@/assets/art/misc/background.png"); */
  background-image: url("~@/assets/art/misc/background-alt.jpg");
  background-size: cover;
  background-position: right center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
}
.background.reversed {
  background-image: url("~@/assets/art/misc/background-alt-reversed.jpg");
}
.big-bottom-margin {
  margin-bottom: 8rem;
}
</style>	