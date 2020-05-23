<template>
  <div>
    <button
      :id="id"
      class="btn btn-outline-primary d-flex flex-row align-items-center w-100"
      @click="equip"
    >
      <span>({{itemCount}})</span>
      <img class="potion-icon" :src="item.icon" />
    </button>
    <item-popover :itemId="itemId" :target="id" placement="left" />
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import ItemPopover from "@/components/ItemPopover";
export default {
  props: ["itemId"],
  components: { ItemPopover },
  computed: {
    id() {
      return this._uid.toString();
    },
    item() {
      return ITEMS[this.itemId];
    },
    itemCount() {
      return this.$store.getters["inventory/bank"][this.itemId];
    }
  },
  methods: {
    equip() {
      this.$store.commit("potions/set", this.itemId);
    }
  }
};
</script>

<style scoped>
.potion-icon {
  width: 32px;
}
</style>