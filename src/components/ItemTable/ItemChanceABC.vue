<template>
  <div class="d-flex flex-row align-items-center">
    <span class="mr-2">&nbsp;4.71%</span>
    <img :src="item.icon" class="pixelated mr-1" />
    <span>{{countText}}&nbsp;</span>
    <span>{{item.name}}</span>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
export default {
  props: ["data"],
  computed: {
    item() {
      if (this.data.item) return ITEMS.get(this.data.item);
      return ITEMS.get(this.data.items.id);
    },
    countText() {
      // A
      if (this.data.item) return "1";

      let count = this.data.items.count;

      // B
      if (typeof count == "number") return count;

			// C
      if (typeof count == "object") return `${count[0]}-${count[1]}`;
      return "";
    }
  }
};
</script>

<style scoped>
span {
  white-space: pre;
}
img {
  width: 32px;
}
</style>