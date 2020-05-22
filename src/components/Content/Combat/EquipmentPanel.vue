<template>
  <div class="rounded bg-dark text-light p-1">
    <div class="d-flex flex-row align-items-center">
      <equipment-slot
        equipmentSlot="hand"
        :icon="require('@/assets/art/combat/equipment/hand.png')"
      />
      <equipment-slot
        equipmentSlot="chest"
        :icon="require('@/assets/art/combat/equipment/chest.png')"
      />
      <equipment-slot
        equipmentSlot="head"
        :icon="require('@/assets/art/combat/equipment/head.png')"
      />
      <equipment-slot
        equipmentSlot="face"
        :icon="require('@/assets/art/combat/equipment/face.png')"
      />
      <equipment-slot
        equipmentSlot="limb"
        :icon="require('@/assets/art/combat/equipment/limb.png')"
      />
      <equipment-slot
        equipmentSlot="jumpsuit"
        :icon="require('@/assets/art/combat/equipment/jumpsuit.png')"
      />
      <equipment-slot
        equipmentSlot="neck"
        :icon="require('@/assets/art/combat/equipment/neck.png')"
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