<template>
  <b-popover :target="target" triggers="hover" placement="top" delay="0">
    <div class="popup d-flex flex-column align-items-center">
      <h6 class="title">{{item.name}}</h6>
      <inventory-price-display class="mt-1" :price="item.sellPrice" />
    </div>
  </b-popover>
</template>

<script>
import ITEMS from "@/data/items";
import InventoryPriceDisplay from "@/components/Content/Inventory/InventoryPriceDisplay";

export default {
  props: ["itemId", "target"],
  components: { InventoryPriceDisplay },
  computed: {
    item() {
      return ITEMS.get(this.itemId);
    }
  }
};
</script>