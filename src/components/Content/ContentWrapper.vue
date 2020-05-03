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
import ContentScavenging from "./ContentScavenging";
import ContentSettings from "./ContentSettings";

export default {
  name: "ContentWrapper",
  components: {
    ContentShop,
    ContentInventory,
    ContentMining,
    ContentScavenging,
    ContentSettings
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