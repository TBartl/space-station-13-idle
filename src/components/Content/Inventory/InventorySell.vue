<template>
  <button
    v-if="count <= totalCount"
    class="sell d-flex align-items-center justify-content-between w-100"
  >
    <span>Sell x{{count}}</span>
    <div class="mr-3"></div>
    <inventory-price-display :price="totalSellPrice" />
  </button>
</template>

<script>
import ITEMS from "@/data/items";
import InventoryPriceDisplay from "@/components/Content/Inventory/InventoryPriceDisplay";
export default {
  components: { InventoryPriceDisplay },
  props: ["itemId", "count", "totalCount"],
  computed: {
    item() {
      return ITEMS.get(this.itemId);
    },
    totalSellPrice() {
      return this.item.sellPrice * this.count;
    }
  }
};
</script>

<style scoped>
.sell {
  padding: 0.25rem;
}
</style>