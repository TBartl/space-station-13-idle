<template>
  <div class="content-block d-flex flex-column align-items-center">
    <h5>Validhunting Target</h5>
    <div class="enemies w-100 mt-2">
      <zone-enemy
        :enemyId="targetEnemyId"
				:showValidhunting="true"
      />
    </div>
  </div>
</template>

<script>
import ZoneEnemy from "@/components/Content/Combat/ZoneEnemy";
export default {
  components: { ZoneEnemy },
  computed: {
    targetEnemyId() {
      return this.$store.getters["validhunting/targetEnemyId"];
    },
  }
};
</script>

<style scoped>
.enemies {
  padding: 4px;
  background-color: rgb(230, 230, 230);
}
.dark-mode .enemies {
  background-color: rgb(31, 32, 37);
}
</style>