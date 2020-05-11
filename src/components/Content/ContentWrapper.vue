<template>
  <div class="content-wrapper">
    <component :is="'content-' + visibleSidebarItem" class="w-100" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContentShop from "./ContentShop";
import ContentInventory from "./ContentInventory";
import ContentMining from "./ContentMining";
import ContentXenobiology from "./ContentXenobiology";
import ContentGraytiding from "./ContentGraytiding";
import ContentFabrication from "./ContentFabrication";
import ContentCombat from "./ContentCombat";
import ContentSettings from "./ContentSettings";
import ContentChronosphere from "./ContentChronosphere";

export default {
  name: "ContentWrapper",
  components: {
    ContentShop,
    ContentInventory,
    ContentMining,
		ContentGraytiding,
		ContentFabrication,
		ContentXenobiology,
		ContentCombat,
		ContentSettings,
		ContentChronosphere
  },
  computed: {
    ...mapGetters(["visibleSidebarItem"])
  }
};
</script>

<style scoped>
.content-wrapper {
  flex: 1;
}
</style>	