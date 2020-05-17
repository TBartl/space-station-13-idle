<template>
  <button
    v-if="count <= totalCount"
    class="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-between w-100"
    @click="sellItem({'itemId': itemId, 'count': count})"
  >
    <span>Sell x{{count | cleanNum}}</span>
    <div class="mr-3"></div>
    <inventory-price-display :price="totalSellPrice" />
  </button>
</template>

<script>
import ITEMS from "@/data/items";
import InventoryPriceDisplay from "@/components/Content/Inventory/InventoryPriceDisplay";
import { mapActions } from "vuex";
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
  },
  methods: {
    ...mapActions(["sellItem"])
  }
};
</script>

<style scoped>
.sell {
	padding: 0.25rem;
	border-color: rgb(226, 226, 226);
	transition: background-color .2s;
}
.sell:hover{
	background-color: rgb(181, 213, 226);
}
</style>