<template>
  <div class="item-spawner overflow-auto h-100">
    <button
      class="inventory-item d-inline-block"
      v-for="pair in Object.entries(allItems)"
      :key="pair[0]"
      :id="id+pair[0]"
      @click="addItem(pair[0])"
    >
      <img :src="pair[1].icon" />
      <span>{{pair[0]}}</span>
      <item-popover :target="id+pair[0]" :itemId="pair[0]" />
    </button>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import ItemPopover from "@/components/ItemPopover";
export default {
  components: { ItemPopover },
  computed: {
    id() {
      return this._uid.toString();
    },
    allItems() {
      return ITEMS;
    }
  },
  methods: {
    addItem(itemId) {
      this.$store.commit("inventory/changeItemCount", { itemId, count: 1 });
    }
  }
};
</script>

<style scoped>
.item-spawner {
  background-color: rgb(218, 218, 218);
}
span {
  font-size: 10px;
}
</style>