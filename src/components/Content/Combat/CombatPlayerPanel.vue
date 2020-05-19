<template>
  <div class="content-block">
    <div class="player-block">
      <p class="player-block-header">FOOD</p>
      <food-panel />
    </div>
    <div class="player-block">
      <p class="player-block-header">EQUIPMENT</p>
      <div class="d-flex flex-column flex-xl-row align-items-center">
        <div class="mb-2 mb-xl-0 mr-xl-3">
          <equipment-panel />
        </div>
        <div>
          <stats-panel :stats="stats" />
        </div>
      </div>
    </div>
    <div class="player-block">
      <p class="player-block-header">ATTACK STYLE</p>
      <p>todo</p>
    </div>
  </div>
</template>

<script>
import FoodPanel from "@/components/Content/Combat/FoodPanel";
import EquipmentPanel from "@/components/Content/Combat/EquipmentPanel";
import StatsPanel from "@/components/Content/Combat/StatsPanel";
export default {
  components: { FoodPanel, EquipmentPanel, StatsPanel },
  computed: {
    stats() {
      return this.$store.getters["playerMob/stats"];
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
</style>