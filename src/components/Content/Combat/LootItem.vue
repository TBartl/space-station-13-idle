<template>
  <div>
    <button class="item" :id="id" @click="lootItem">
      <img class="pixelated" :src="item.icon" />
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
      return ITEMS.get(this.itemId);
    }
  },
  methods: {
    lootItem() {
      this.$store.commit("changeItemCount", {
        itemId: this.itemId,
        count: this.count
      });
      this.$store.commit("combat/removeLootItem", this.index);
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