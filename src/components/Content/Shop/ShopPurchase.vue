<template>
  <div
    class="content-block p-1 my-1 d-flex flex-column flex-md-row align-items-center"
    :class="[canPurchase ? 'clickable' :'locked']"
    @click="buy"
  >
    <img :src="icon" class="mr-2 purchase-icon" alt />
    <div class="d-flex flex-column">
      <span class="name">{{name}}</span>
      <span class="description">{{purchase.description}}</span>
      <div class="requires d-flex flex-row align-items-center">
        <span class="requires mr-1">Requires:</span>
        <div
          v-for="(pair, index) in Object.entries(requiredItems)"
          :key="index"
          class="d-flex flex-row align-items-center"
        >
          <img :id="id+index" :src="items[pair[0]].icon" />
          <item-popover :target="id+index" :itemId="pair[0]" />
          <span>x{{pair[1] | cleanNum}}</span>
        </div>
        <span v-if="isFree">Free!</span>
      </div>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import { PURCHASES } from "@/data/shop";
import ItemPopover from "@/components/ItemPopover";
export default {
  components: { ItemPopover },
  props: ["purchaseId"],
  computed: {
    id() {
      return this._uid.toString();
    },
    item() {
      return ITEMS[this.purchase.item];
    },
    items() {
      return ITEMS;
    },
    purchase() {
      return PURCHASES[this.purchaseId];
    },
    icon() {
      if (this.purchase.icon) return this.purchase.icon;
      if (this.item) return this.item.icon;
      return null;
    },
    name() {
      if (this.purchase.name) return this.purchase.name;
      if (this.item) return this.item.name;
      return "Missing name";
    },
    canPurchase() {
      return this.$store.getters["inventory/canPurchase"](this.purchase);
    },
    requiredItems() {
      if (!this.purchase.requiredItems) return {};
      return this.purchase.requiredItems;
    },
    isFree() {
      if (this.purchase.requiredItems) return false;
      return false;
    }
  },
  methods: {
    buy() {
      if (!this.canPurchase) return;
      this.$store.dispatch("inventory/purchase", this.purchase);
    }
  }
};
</script>

<style>
.purchase-icon {
  width: 64px;
}
.name {
  font-size: 18px;
}
.description {
  color: rgb(144, 144, 144);
  font-size: 14px;
}
.locked .description {
  color: rgb(214, 214, 214);
}
.requires {
  color: rgb(97, 97, 97);
  font-size: 15px;
}
.locked .requires {
  color: rgb(241, 241, 241);
}
</style>