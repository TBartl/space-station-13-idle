<template>
  <div class="content-block">
    <div class="player-block">
      <p class="player-block-header">FOOD</p>
      <food-panel />
    </div>
    <div class="player-block">
      <p class="player-block-header">EQUIPMENT</p>
      <equipment-panel />
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
export default {
  components: { FoodPanel, EquipmentPanel }
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
.player-block-header{
	margin-bottom: .25rem;
}
</style>