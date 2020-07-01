<template>
  <div class="content-block">
    <div class="player-block">
      <p class="player-block-header">FOOD</p>

      <progress-bar
        class="mb-2 d-lg-none black-background"
        :progress="health / maxHealth"
        :text="`${Math.ceil(health)}/${maxHealth}`"
        :customClass="'bg-danger'"
      />
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
  </div>
</template>

<script>
import FoodPanel from "@/components/Content/Combat/FoodPanel";
import EquipmentPanel from "@/components/Content/Combat/EquipmentPanel";
import CombatFocusPanel from "@/components/Content/Combat/CombatFocusPanel";
import ProgressBar from "@/components/ProgressBar";
export default {
  components: { FoodPanel, EquipmentPanel, CombatFocusPanel, ProgressBar },

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

.black-background {
  background-color: rgb(61, 61, 61) !important;
}
</style>