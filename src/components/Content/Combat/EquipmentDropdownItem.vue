<template>
  <div>
    <button
      :id="id"
      class="btn d-flex flex-row align-items-center w-100"
      :class="{'cant-equip': !canEquip, 'btn-outline-primary': canEquip, 'btn-danger': !canEquip }"
      @click="equip"
    >
      <span>({{itemCount}})</span>
      <img class="equipment-icon" :src="item.icon" />
      <span v-if="item.healAmount">+{{item.healAmount}} HP</span>
    </button>
    <item-popover :itemId="itemId" :target="id" placement="right" />
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
    },
    canEquip() {
      return this.$store.getters["inventory/canEquip"](this.itemId);
    }
  },
  methods: {
    equip() {
      if (!this.canEquip) return;
      this.$store.dispatch("inventory/equip", this.itemId);
    }
  }
};
</script>

<style scoped>
.equipment-icon {
  width: 48px;
}
.cant-equip {
  cursor: not-allowed !important;
}
</style>
