<template>
  <div class="d-flex flex-column align-items-center m-3 text-center">
		<h4 class="mb-2">{{item.name}}</h4>
    <item-chance :data="item" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ItemChance from "@/components/ItemTable/ItemChance";
import ITEMS from "@/data/items";

export default {
  props: ["itemId"],
	components: { ItemChance },
	computed: {
		item() {
			return ITEMS[this.itemId];
		}
	}
};
</script>