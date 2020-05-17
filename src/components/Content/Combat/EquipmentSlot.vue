<template>
  <div>
    <button :id="target" class="m-1 equipment-slot">
      <div class="overlay-div">
        <img :src="icon" />
        <img :src="equippedIcon" />
      </div>
    </button>
    <equipment-dropdown :target="target" :equipmentSlot="equipmentSlot" />
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import EquipmentDropdown from "@/components/Content/Combat/EquipmentDropdown";
export default {
  components: { EquipmentDropdown },
  props: ["equipmentSlot", "icon"],
  computed: {
    id() {
      return this._uid.toString();
    },
    target() {
      return "equipment-slot-" + this.id;
    },
    equipped() {
      return this.$store.getters["inventory/equipment"][this.equipmentSlot];
    },
    equippedItem() {
      if (!this.equipped.itemId) return;
      return ITEMS[this.equipped.itemId];
    },
    equippedIcon() {
      if (!this.equippedItem) return this.icon;
      return this.equippedItem.icon;
    }
  }
};
</script>

<style scoped>
.equipment-slot {
  cursor: pointer;
  padding: 0;
  border: none;
  outline: 0;
  transition: transform 0.15s ease-out, opacity 0.15s ease-out,
    box-shadow 0.15s ease-out, -webkit-transform 0.15s ease-out;
}

.equipment-slot:hover {
  cursor: pointer;
  box-shadow: 0 0.3rem 2.5rem #3680c5;
  transform: translateY(-2px);
}

.overlay-div {
	width: 48px;
	height: 48px;
}
</style>

