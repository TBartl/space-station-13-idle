<template>
  <div class="toast-content">
    <div class="d-flex flex-row align-items-center">
      <img :src="item.icon" alt />
      <span>{{count}}</span>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
export default {
  props: ["content"],
  computed: {
    item() {
      return ITEMS[this.content.itemId];
    },
    count() {
      var count = this.content.count;
      return (count < 0 ? "" : "+") + count;
    }
  }
};
</script>

<style scoped>
.toast-content {
  font-size: 32x;
  margin: auto;
  background-color: rgba(78, 78, 78, 0.472);
  color: white;
  border-radius: 8px;
  padding: 0.25rem 0.75rem;
  margin-bottom: 0.5rem;
}
</style>