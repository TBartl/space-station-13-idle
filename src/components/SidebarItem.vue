<template>
  <div
    class="item"
    :class="{'visible-item': id == visibleSidebarItem}"
    @click="setVisibleSidebarItem(id)"
  >
    <img :src="icon" alt />
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
  max-width: 20px;
  margin-right: 8px;
}
.visible-item {
  color: rgba(255, 255, 255, 0.931);
}
</style>