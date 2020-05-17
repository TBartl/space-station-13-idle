<template>
  <div
    class="content-block clickable p-1 my-1 d-flex flex-column flex-md-row align-items-center"
    @click="buy"
  >
    <img :src="icon" class="pixelated mr-2 purchase-icon" alt />
    <div class="d-flex flex-column">
      <span class="name">{{name}} x100</span>
      <span class="description">{{purchase.description}}</span>
      <span class="requires">Requires: Nothing!</span>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import { PURCHASES } from "@/data/shop";
export default {
  props: ["purchaseId"],
  computed: {
    item() {
      return ITEMS[this.purchase.item];
    },
    purchase() {
      return PURCHASES[this.purchaseId];
    },
    icon() {
      if (this.purchase.icon) return this.purchase.icon;
      if (this.item) return this.item.icon;
      return null;
    },
    name() {
      if (this.purchase.name) return this.purchase.name;
      if (this.item) return this.item.name;
      return "Missing name";
    }
  },
  methods: {
    buy() {
      this.$store.commit("inventory/changeItemCount", {
        itemId: this.purchase.item,
        count: 100
      });
    }
  }
};
</script>

<style>
.purchase-icon {
  width: 64px;
}
.name {
  font-size: 18px;
}
.description {
  color: rgb(144, 144, 144);
  font-size: 14px;
}
.requires {
  color: rgb(97, 97, 97);
  font-size: 15px;
}
</style>