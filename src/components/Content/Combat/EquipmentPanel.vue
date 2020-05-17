<template>
  <div class="rounded bg-dark text-light p-1">
    <div class="d-flex flex-row align-items-center">
      <equipment-slot
        equipmentSlot="hand"
        :icon="require('@/assets/art/combat/equipment/hand.png')"
      />
      <equipment-slot
        equipmentSlot="chest"
        :icon="require('@/assets/art/combat/equipment/uniform.png')"
      />
      <equipment-slot
        equipmentSlot="pocket"
        :icon="require('@/assets/art/combat/equipment/pocket.png')"
      />
    </div>
  </div>
</template>

<script>
import EquipmentSlot from "@/components/Content/Combat/EquipmentSlot";
export default {
  components: { EquipmentSlot }
};
</script>