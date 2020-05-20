<template>
  <b-popover :target="target" triggers="click blur" placement="bottom" delay="0">
    <equipment-dropdown-item
      class="w-100"
      v-for="(itemId, index) in validItems"
      :key="index"
      :itemId="itemId"
    />
    <button v-if="currentItemId" class="btn btn-outline-danger w-100" @click="unequip">UNEQUIP</button>
    <span v-if="!currentItemId && validItems.length == 0">No {{equipmentSlot}} items available.</span>
  </b-popover>
</template>

<script>
import EquipmentDropdownItem from "@/components/Content/Combat/EquipmentDropdownItem";
import { getBankItemsOfSlot } from "@/utils/equipmentUtils";
export default {
  components: { EquipmentDropdownItem },
  props: ["target", "equipmentSlot"],
  computed: {
    currentItemId() {
      return this.$store.getters["inventory/equipment"][this.equipmentSlot]
        .itemId;
    },
    validItems() {
      return getBankItemsOfSlot(
        this.$store.getters["inventory/bank"],
        this.equipmentSlot
      ).filter(itemId => this.$store.getters["inventory/canEquip"](itemId));
    }
  },
  methods: {
    unequip() {
      this.$store.dispatch("inventory/unequip", this.currentItemId);
    }
  }
};
</script>