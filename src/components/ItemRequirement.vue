<template>
  <div class="d-flex fledx-row align-items-center">
    <img :src="item.icon" :id="id" />
    <item-popover :itemId="itemId" :target="id" />
    <span :style="{opacity: bankCount >= count ? 1: .5}">x{{count}} ({{bankCount ? bankCount : 0}})</span>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import ItemPopover from "@/components/ItemPopover";
import { mapGetters } from "vuex";
export default {
  props: ["itemId", "count"],
  components: { ItemPopover },
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
    bankCount() {
      return this.bank[this.itemId];
    }
  }
};
</script>

<style scoped>
img {
  max-width: 32px;
}
span {
	font-size: 14px;
}
</style>