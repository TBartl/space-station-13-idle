<template>
  <div class="rounded bg-dark text-light p-1 d-flex flex-column align-items-center">
    <div class="d-flex flex-row align-items-center">
      <equipment-slot
        equipmentSlot="face"
        :icon="require('@/assets/art/combat/equipment/face.png')"
        :restrictedIcon="require('@/assets/art/combat/equipment/face-red.png')"
      />
      <equipment-slot
        equipmentSlot="head"
        :icon="require('@/assets/art/combat/equipment/head.png')"
        :restrictedIcon="require('@/assets/art/combat/equipment/head-red.png')"
      />
      <equipment-slot
        equipmentSlot="neck"
        :icon="require('@/assets/art/combat/equipment/neck.png')"
        :restrictedIcon="require('@/assets/art/combat/equipment/neck-red.png')"
      />
    </div>
    <div class="d-flex flex-row align-items-center">
      <equipment-slot
        equipmentSlot="jumpsuit"
        :icon="require('@/assets/art/combat/equipment/jumpsuit.png')"
        :restrictedIcon="require('@/assets/art/combat/equipment/jumpsuit-red.png')"
      />
      <equipment-slot
        equipmentSlot="chest"
        :icon="require('@/assets/art/combat/equipment/chest.png')"
        :restrictedIcon="require('@/assets/art/combat/equipment/chest-red.png')"
      />
      <equipment-slot
        equipmentSlot="limb"
        :icon="require('@/assets/art/combat/equipment/limb.png')"
        :restrictedIcon="require('@/assets/art/combat/equipment/limb-red.png')"
      />
    </div>
    <div class="d-flex flex-row align-items-center">
      <equipment-slot
        equipmentSlot="hand"
        :icon="require('@/assets/art/combat/equipment/hand.png')"
        :restrictedIcon="require('@/assets/art/combat/equipment/hand-red.png')"
      />
      <equipment-slot
        equipmentSlot="pocket"
        :icon="require('@/assets/art/combat/equipment/pocket.png')"
        :restrictedIcon="require('@/assets/art/combat/equipment/pocket-red.png')"
      />
      <equipment-slot
        equipmentSlot="companion"
        :icon="require('@/assets/art/combat/equipment/companion.png')"
        :restrictedIcon="require('@/assets/art/combat/equipment/companion-red.png')"
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