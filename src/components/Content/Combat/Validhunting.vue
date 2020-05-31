<template>
  <div class="content-block d-flex flex-column align-items-center">
    <h5>Validhunting Targets</h5>
    <div class="enemies w-100 mt-2">
      <zone-enemy
        v-for="(target, index) in targets"
        :key="index"
        :enemyId="target.enemyId"
        :validhuntingCount="target.count"
      />
    </div>
  </div>
</template>

<script>
import ZoneEnemy from "@/components/Content/Combat/ZoneEnemy";
export default {
  components: { ZoneEnemy },
  computed: {
    targets() {
      return this.$store.getters["validhunting/targets"];
    }
  }
};
</script>

<style scoped>
.enemies {
  padding: 4px;
  background-color: rgb(230, 230, 230);
}
</style>