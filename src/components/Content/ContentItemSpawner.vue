<template>
  <div class="content-settings">
    <content-header
      text="Item Spawner"
      :icon="require('@/assets/art/sidebar/gear.png')"
      color="rgb(231, 150, 28)"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <div class="content-block">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/utils/eventBus.js";
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapGetters } from "vuex";

import ITEMS from "@/data/items";
import ItemPopover from "@/components/ItemPopover";

export default {
  extends: ContentAbstract,
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
span {
  font-size: 10px;
}
</style>