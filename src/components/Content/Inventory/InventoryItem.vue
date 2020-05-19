<template>
  <div>
    <button class="item" :id="id">
      <img :src="item.icon" />
      <span>{{count | cleanNum}}</span>
    </button>
    <item-popover :target="id" :itemId="itemId" />
    <b-popover :target="id" triggers="click blur" placement="bottom" delay="0">
      <div class="popup d-flex flex-column align-items-center">
        <h6 class="title">{{item.name}}</h6>
        <button
          v-if="item.healAmount || item.equipmentSlot"
          class="mt-1 btn btn-primary btn-sm"
          @click="$store.dispatch('inventory/equip', itemId)"
        >Equip {{item.healAmount ? "food" : item.equipmentSlot}}</button>
        <div v-if="item.sellPrice" class="mt-1">
          <inventory-sell :itemId="itemId" :count="1" :totalCount="count" />
          <inventory-sell :itemId="itemId" :count="10" :totalCount="count" />
          <inventory-sell :itemId="itemId" :count="100" :totalCount="count" />
          <inventory-sell :itemId="itemId" :count="1000" :totalCount="count" />
          <inventory-sell
            :itemId="itemId"
            :count="count"
            :totalCount="count"
            v-if="count != 1 && count != 10 && count != 100 && count != 1000"
          />
        </div>
        <span v-else class="mt-1">Can't be sold</span>
      </div>
    </b-popover>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import { mapGetters } from "vuex";
import InventorySell from "@/components/Content/Inventory/InventorySell";
import ItemPopover from "@/components/ItemPopover";
export default {
  props: ["itemId"],
  components: { InventorySell, ItemPopover },
  computed: {
    bank() {
      return this.$store.getters["inventory/bank"];
    },
    id() {
      return this._uid.toString();
    },
    item() {
      return ITEMS[this.itemId];
    },
    count() {
      return this.bank[this.itemId];
    }
  }
};
</script>

<style scoped>
.item {
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 64px;
  border-radius: 4px;
  padding-bottom: 0.25rem;
  margin: 0.5rem;
  cursor: pointer;
}
.item:hover {
  background-color: rgb(206, 233, 255);
}
.item img {
  width: 64px;
}
</style>