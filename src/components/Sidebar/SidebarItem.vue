<template>
  <div
    class="item"
    :class="{'visible-item': id == visibleSidebarItem}"
    @click="setVisibleSidebarItem(id)"
  >
    <img :src="icon" alt class="pixelated" />
    <span>{{text}}</span>
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
  font-size: 16px;
  color: rgb(255, 255, 255, 0.5);
  padding: 0.3rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
}
img {
  max-width: 40px;
  margin-right: 8px;
  padding: 2px;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
}
.visible-item {
  color: rgba(255, 255, 255, 0.931);
}
</style>