<template>
  <div>
    <content-header
      text="Combat"
      :icon="require('@/assets/art/combat/combatIcon.png')"
      color="rgb(175, 99, 99)"
    />
    <div class="content-container">
      <div class="row" v-if="targetEnemy == null">
        <div class="col-4" v-for="(zone, index) in zones" :key="index">
          <zone :zone="zone" />
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-12 mb-3">
          <run-away />
        </div>
        <div class="col-12">
          <combat-experience />
        </div>
        <div class="col-4">
          <combat-player-panel />
        </div>
        <div class="col-2">
          <div class="content-block">B</div>
        </div>
        <div class="col-2">
          <div class="content-block">C</div>
        </div>
        <div class="col-4">
          <div class="content-block">D</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapState, mapGetters } from "vuex";
import { ZONES } from "@/data/combat";
import Zone from "@/components/Content/Combat/Zone";
import RunAway from "@/components/Content/Combat/RunAway";
import CombatExperience from "@/components/Content/Combat/CombatExperience";
import CombatPlayerPanel from "@/components/Content/Combat/CombatPlayerPanel";
export default {
  extends: ContentAbstract,
  components: { Zone, RunAway, CombatExperience, CombatPlayerPanel },
  computed: {
    ...mapGetters("combat", ["targetEnemy"]),
    zones() {
      return ZONES;
    }
  }
};
</script>

<style scoped>
</style>