<template>
  <div class="content-block">
    <div class="player-block d-none d-xl-flex">
      <p class="player-block-header">FOOD</p>
      <food-panel />
    </div>
    <div class="player-block">
      <p class="player-block-header">EQUIPMENT</p>
      <div class="d-flex flex-column align-items-center">
        <equipment-panel />
      </div>
    </div>
    <div class="player-block">
      <p class="player-block-header">COMBAT FOCUS</p>
      <combat-focus-panel />
    </div>
    <div class="player-block d-flex d-xl-none">
      <p class="player-block-header">FOOD</p>
      <food-panel />
    </div>
  </div>
</template>

<script>
import FoodPanel from "@/components/Content/Combat/FoodPanel";
import EquipmentPanel from "@/components/Content/Combat/EquipmentPanel";
import CombatFocusPanel from "@/components/Content/Combat/CombatFocusPanel";
export default {
  components: { FoodPanel, EquipmentPanel, CombatFocusPanel },

  computed: {
    stats() {
      return this.$store.getters["playerMob/stats"];
    },
    health() {
      return this.$store.getters["playerMob/health"];
    },
    maxHealth() {
      return this.$store.getters["playerMob/stats"].maxHealth;
    }
  }
};
</script>

<style scoped>
.player-block {
  background-color: #ececec;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
}
.player-block:not(:last-child) {
  margin-bottom: 0.5rem;
}
.player-block-header {
  margin-bottom: 0.25rem;
}
.dark-mode .player-block {
  background-color: rgb(44, 45, 51);
}
</style>