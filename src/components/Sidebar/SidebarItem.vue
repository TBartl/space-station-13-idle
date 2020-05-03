<template>
  <div
    class="item d-flex align-items-center justify-content-between"
    :class="{'visible-item': id == visibleSidebarItem}"
    @click="setVisibleSidebarItem(id)"
  >
    <div class="d-flex align-items-center">
      <img :src="icon" alt class="pixelated" />
      <span>{{text}}</span>
    </div>
		<div><slot/></div>
		
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  props: ["text", "icon", "id"],
  computed: {
    ...mapGetters(["visibleSidebarItem"])
  },
  methods: {
    ...mapMutations(["setVisibleSidebarItem"])
  }
};
</script>

<style scoped>
.item {
  font-size: 14px;
  color: rgb(255, 255, 255, 0.5);
  padding: 0.3rem 1rem;
}
.item:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
}
img {
  width: 32px;
  margin-right: 8px;
  padding: 2px;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.visible-item {
  color: rgba(255, 255, 255, 0.931);
}
</style>