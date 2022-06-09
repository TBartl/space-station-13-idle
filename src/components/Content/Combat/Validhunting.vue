<template>
  <div class="content-block d-flex flex-column align-items-center">
    <h5>Validhunting Target</h5>
    <p v-if="maxRerolls">Rerolls remaining: {{rerolls}}/{{maxRerolls}}</p>
    <div v-if="rerolls" class="d-flex flex-column mr-2" style="padding-top:10px"><button
        :id="reroll+reroll.id"
        type="button"
        class="btn btn-primary btn-sm w-100"
        @click="reroll"
    >Reroll</button></div>
    <div class="enemies w-100 mt-2">
      <zone-enemy
        :enemyId="targetEnemyId"
				:showValidhunting="true"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
import ZoneEnemy from "@/components/Content/Combat/ZoneEnemy";
export default {
  components: { ZoneEnemy },
  computed: {
    targetEnemyId() {
      return this.$store.getters["validhunting/targetEnemyId"];
    },
    rerolls() {
      return this.$store.getters["validhunting/getRerolls"];
    },
    maxRerolls() {
      return this.$store.getters["validhunting/maxRerolls"];
    },
  },
  methods: {
    ...mapActions("validhunting", ["rollNewBounty"]),
    ...mapMutations("validhunting", ["useReroll"]),
    reroll(){
      this.rollNewBounty();
      this.useReroll();
    }
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