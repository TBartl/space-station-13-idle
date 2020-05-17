<template>
  <div>
    <button :id="target" class="m-1 equipment-slot">
      <img :src="icon" class="pixelated" />
    </button>
    <equipment-dropdown :target="target" :equipmentSlot="equipmentSlot" />
  </div>
</template>

<script>
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

.equipment-slot img {
  width: 48px;
}
</style>

