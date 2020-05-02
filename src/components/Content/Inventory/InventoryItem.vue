<template>
  <div class="item">
    <img class="pixelated" :src="item.icon" />
    <span>{{count}}</span>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import { mapGetters } from "vuex";
export default {
  props: ["itemId"],
  computed: {
    ...mapGetters(["inventory"]),
    item() {
      return ITEMS.get(this.itemId);
    },
    count() {
      return this.inventory[this.itemId];
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 60px;
  border-radius: 4px;
  padding: 0 0.5rem 0.25rem 0.5rem;
  margin: 0.5rem;
}
.item img {
  width: 64px;
}
</style>