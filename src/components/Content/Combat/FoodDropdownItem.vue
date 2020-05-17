<template>
  <button class="btn btn-outline-primary d-flex flex-row align-items-center" @click="equip">
    <span>({{itemCount}})</span>
    <img class="food-icon pixelated" :src="item.icon" />
    <span>+{{item.healAmount}} HP</span>
  </button>
</template>

<script>
import ITEMS from "@/data/items";
export default {
  props: ["itemId"],
  computed: {
    item() {
      return ITEMS[this.itemId];
    },
    itemCount() {
      return this.$store.getters["inventory/bank"][this.itemId];
    }
  },
  methods: {
    equip() {
      this.$store.dispatch("inventory/equipFood", this.itemId);
    }
  }
};
</script>