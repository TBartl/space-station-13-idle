<template>
  <div class="content-inventory">
    <content-header
      text="Inventory"
      :icon="require('@/assets/art/sidebar/backpack.png')"
      color="rgb(218, 125, 29)"
    />

    <div class="content-container">
      <job-info
        infoId="inventory"
        :icon="require('@/assets/art/jobinfo/inventory.png')"
        title="????? the Guy In The Locker Next To Yours says..."
        :options="[
					{name: 'Back'},
					{name: 'Inventory?', icon: require('@/assets/art/sidebar/backpack.png'), iconClass:'mx--1'}
				]"
      >
        <template slot="Back">
          <span>I... I can hear you out there. You... you're not a cop, right?</span>
          <span
            class="mt-1"
          >That's a relief. Can you do me a favor and uh... don't mention me to anyone else. OK?</span>
        </template>
        <template slot="Inventory?">
          <span>There's a lot of valuables out on the station.</span>
          <span
            class="mt-1"
          >If you don't keep your stuff safe, someone might just snatch it up and hide themselves in a locker before you can track them down.</span>
          <span class="mt-1">If you want more space, the guys down at
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>Cargo</b> might be able to help you out.
          </span>
        </template>
      </job-info>

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