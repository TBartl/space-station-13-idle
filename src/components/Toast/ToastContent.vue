<template>
  <div>
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