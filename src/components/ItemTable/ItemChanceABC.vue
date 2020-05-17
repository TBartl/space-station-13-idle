<template>
  <div v-if="valid" class="d-flex flex-row align-items-center">
    <span v-if="chance" class="mr-2">{{cleanedChance}}</span>
    <img :src="item.icon" class="pixelated mr-1" />
    <span>{{countText}}&nbsp;</span>
    <span>{{item.name}}</span>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
export default {
  props: ["chance", "data"],
  computed: {
    valid() {
      if (this.data.item) return true;
      // ID can be null
      return this.data.items.id;
    },
    item() {
      if (this.data.item) return ITEMS[this.data.item];
      return ITEMS[this.data.items.id];
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