<template>
  <div class="d-flex flex-row align-items-center">
    <img :src="item.icon" :id="id" class="mx--0" />
    <item-popover :itemId="itemId" :target="id" />
    <div :style="{opacity: itemCount >= count ? 1: .5}">
      <span>x{{count}}</span>
      <span class="ml-1">({{itemCount ? itemCount : 0 | aggressive}})</span>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import ItemPopover from "@/components/ItemPopover";
import { mapGetters } from "vuex";
export default {
  props: ["itemId", "count"],
  components: { ItemPopover },
  computed: {
    bank() {
      return this.$store.getters["inventory/bank"];
    },
    equipment() {
      return this.$store.getters["inventory/equipment"];
    },
    id() {
      return this._uid.toString();
    },
    item() {
      if (!ITEMS[this.itemId]) console.log(this.itemId);
      return ITEMS[this.itemId];
    },
    bankCount() {
      return this.bank[this.itemId] || 0;
    },
    equipmentCount() {
      let count = 0;
      for (let [equipmentId, equipment] of Object.entries(this.equipment)) {
          let equipmentItemId = equipment.itemId;
          if (!equipmentItemId || equipmentItemId != this.itemId) continue;
          count += equipment.count;
          // No item can be in more than one slot, so we're done.
          break;
      }
      return count;
    },
    itemCount() {
      return this.bankCount + this.equipmentCount;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 32px;
}
span {
  font-size: 14px;
}

.mx--0 {
	margin-bottom: -8px;
}
</style>