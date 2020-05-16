<template>
  <div>
    <content-header
      text="Combat"
      :icon="require('@/assets/art/combat/combatIcon.png')"
      color="rgb(175, 99, 99)"
    />
    <div class="content-container">
      <div class="row" v-if="targetEnemy == null">
        <div class="col-12 col-lg-6 col-xl-4" v-for="(zone, index) in zones" :key="index">
          <zone :zone="zone" class="mb-3"/>
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
          <mob-card mobType="player" />
        </div>
        <div class="col-2">
          <mob-card mobType="enemy" />
        </div>
        <div class="col-4">
          <loot />
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
import MobCard from "@/components/Content/Combat/MobCard";
import Loot from "@/components/Content/Combat/Loot";
export default {
  extends: ContentAbstract,
  components: {
    Zone,
    RunAway,
    CombatExperience,
    CombatPlayerPanel,
    MobCard,
    Loot
  },
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