<template>
  <div>
    <button class="inventory-item" :id="id" @click="lootItem">
      <img :src="item.icon" />
      <span>{{count | cleanNum}}</span>
    </button>
    <item-popover :target="id" :itemId="itemId" />
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import { mapGetters } from "vuex";
import ItemPopover from "@/components/ItemPopover";
export default {
  props: ["itemId", "count", "index"],
  components: { ItemPopover },
  computed: {
    id() {
      return this._uid.toString();
    },
    item() {
      return ITEMS[this.itemId];
    }
  },
  methods: {
    lootItem() {
      this.$store.dispatch("combat/lootItem", this.index);
    }
  }
};
</script>

<style scoped>
</style>