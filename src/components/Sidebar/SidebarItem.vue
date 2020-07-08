<template>
  <div
    class="sidebar-item d-flex align-items-center justify-content-between"
    :class="{'locked': locked}"
    @click="setVisibleSidebarItem(id)"
  >
    <div class="d-flex align-items-center">
      <img :src="icon" alt />
      <span :style="textStyle">{{locked ? "LOCKED" : text}}</span>
    </div>
    <div>
      <slot v-if="!locked" />
      <div v-else class="mr-1">🔒</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["text", "icon", "id", "textColor", "locked"],
  computed: {
    ...mapGetters(["visibleSidebarItem"]),
    textStyle() {
      if (this.locked) {
        return { color: "#9a4b4b" };
      }
      if (this.id == this.visibleSidebarItem) {
        return { color: "rgba(255, 255, 255, 0.931)" };
      }
      if (this.text) {
        return { color: this.textColor };
      }
      return "";
    }
  },
  methods: {
    setVisibleSidebarItem() {
			if (this.locked) return;
			if (!this.id) return;
      this.$store.commit("setVisibleSidebarItem", this.id);
    }
  }
};
</script>

<style scoped>
.sidebar-item {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.3rem 1rem;
}

.sidebar-item:not(.locked):hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
}
img {
  width: 32px;
  height: 32px;
  object-fit: cover;
  margin-right: 8px;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
</style>