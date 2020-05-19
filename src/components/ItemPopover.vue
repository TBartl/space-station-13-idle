<template>
  <b-popover :target="target" triggers="hover" placement="top" delay="0">
    <div class="popup d-flex flex-column align-items-center">
      <h6 class="title">{{item.name}}</h6>
      <span v-if="item.healAmount" class="mt-1">Heals +{{item.healAmount}} HP</span>
      <span v-if="item.equipmentSlot" class="mt-1">Equippable</span>
			<stats-panel v-if="item.stats" :stats="item.stats" />
      <inventory-price-display v-if="item.sellPrice" class="mt-1" :price="item.sellPrice" />
    </div>
  </b-popover>
</template>

<script>
import ITEMS from "@/data/items";
import InventoryPriceDisplay from "@/components/Content/Inventory/InventoryPriceDisplay";
import StatsPanel from "@/components/Content/Combat/StatsPanel";

export default {
  props: ["itemId", "target"],
  components: { StatsPanel, InventoryPriceDisplay },
  computed: {
    item() {
      return ITEMS[this.itemId];
    }
  }
};
</script>