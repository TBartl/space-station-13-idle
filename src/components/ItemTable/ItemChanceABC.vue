<template>
  <div v-if="valid" class="d-flex flex-row align-items-center">
    <span v-if="chance" class="mr-2">{{cleanedChance}}</span>
    <img :src="item.icon" :id="id" class="mr-1" />
    <item-popover :itemId="itemId" :target="id" placement="right" />
    <span>{{countText}}&nbsp;</span>
    <span>{{item.name}}</span>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import ItemPopover from "@/components/ItemPopover";
export default {
  props: ["chance", "data"],
  components: { ItemPopover },
  computed: {
    id() {
      return this._uid.toString();
    },
    valid() {
      if (this.data.item) return true;
      // ID can be null
      return this.data.items.id;
    },
    itemId() {
      if (this.data.item) return this.data.item;
      return this.data.items.id;
    },
    item() {
      let item = ITEMS[this.itemId];
      if (!item) console.log("Bad item in table:", this.itemId);
      return item;
    },
    countText() {
      // A
      if (this.data.item) return "1";

      let count = this.data.items.count;

      // B
      if (typeof count == "number") return count;

      // C
      if (typeof count == "object") return `${count[0]}-${count[1]}`;
      return 1;
    },
    cleanedChance() {
      let chance = (this.chance * 100).toFixed(2);
      if (chance.length <= 4) chance = "  " + chance;
      return chance + "%";
    }
  }
};
</script>

<style scoped>
span {
  white-space: pre;
}
img {
  width: 32px;
}
</style>