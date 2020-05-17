<template>
  <div class="content-inventory">
    <content-header
      text="Inventory"
      :icon="require('@/assets/art/sidebar/backpack.png')"
      color="rgb(218, 125, 29)"
    />

    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <button
            class="btn btn-primary run-away d-flex flex-row align-items-center"
            @click="quickSort"
          >Quick Sort Bank</button>
        </div>
        <div class="col-12 items d-flex flex-row flex-wrap">
          <inventory-item v-for="itemId in bankItemIds" :key="itemId" :itemId="itemId" />
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
    bankItemIds() {
      return Object.keys(this.$store.getters["inventory/bank"]).filter(
        itemId => itemId != "money"
      );
    }
  },
  methods: {
    quickSort() {
      this.$store.commit("inventory/quickSort");
    }
  }
};
</script>

<style scoped>
.items {
  margin: 0 -0.5rem;
}
</style>