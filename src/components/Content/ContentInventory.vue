<template>
  <div class="content-inventory">
    <content-header
      text="Inventory"
      :icon="require('@/assets/art/sidebar/backpack.png')"
      color="rgb(218, 125, 29)"
    />

    <div class="content-container">
      <div class="row">
        <div class="col-12 items d-flex flex-row flex-wrap">
          <inventory-item
            v-for="item in orderedItems"
            :key="item"
            :itemId="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ITEMS from "@/data/items";
import ContentAbstract from "@/components/Content/ContentAbstract";
import InventoryItem from "@/components/Content/Inventory/InventoryItem";
export default {
  extends: ContentAbstract,
  components: { InventoryItem },
  computed: {
    ...mapGetters(["inventory"]),
    orderedItems() {
      var toReturn = Array.from(ITEMS.keys())
        .filter(itemId => this.inventory[itemId])
      return toReturn;
    }
  }
};
</script>

<style scoped>
</style>