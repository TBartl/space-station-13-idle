<template>
  <div
    class="content-block clickable p-1 d-flex flex-column flex-md-row align-items-center"
    @click="buy"
  >
    <img :src="purchase.icon" class="pixelated mr-2 purchase-icon" alt />
    <div class="d-flex flex-column">
      <span class="name">{{purchase.name}} x100</span>
      <span class="description">{{purchase.description}}</span>
      <span class="requires">Requires: Nothing!</span>
    </div>
  </div>
</template>

<script>
import { PURCHASES } from "@/data/shop";
export default {
  props: ["purchaseId"],
  computed: {
    purchase() {
      return PURCHASES[this.purchaseId];
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