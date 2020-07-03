<template>
  <div>
    <content-header
      text="Combat"
      :icon="require('@/assets/art/combat/combatIcon.png')"
      color="rgb(175, 99, 99)"
    />
    <div class="content-container">
      <content-combat-job-info />
      <div class="row">
        <div class="col-12 mb-3" v-if="inCombat">
          <run-away />
        </div>
        <div class="col-12">
          <combat-experience />
        </div>
        <div class="col-12 col-xl-4 mb-3">
          <combat-player-panel />
        </div>
        <div class="col-6 col-xl-2 mb-3">
          <mob-card mobType="player" />
        </div>
        <div class="col-12 col-xl-6 mb-3" v-if="!inCombat">
          <validhunting />
        </div>
        <div class="col-6 col-xl-2 mb-3" v-if="inCombat">
          <mob-card mobType="enemy" />
        </div>
        <div class="col-12 col-xl-4" v-if="inCombat">
          <loot />
        </div>
      </div>
      <div class="row" v-if="!inCombat">
        <div
          class="col-12 col-lg-6 col-xl-4"
          v-for="(normZone, index) in normalZones"
          :key="'norm'+index"
        >
          <zone :zone="normZone" class="mb-3" />
        </div>
        <div class="col-12 mt-2 d-flex flex-row align-items-center">
          <h2 class="text-white">BOSSES</h2>
        </div>
        <div
          class="col-12 col-lg-6 col-xl-4"
          v-for="(bossZone, index) in bossZones"
          :key="'boss-'+index"
        >
          <zone :zone="bossZone" class="mb-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapState, mapGetters } from "vuex";
import ZONES from "@/data/zones";
import Zone from "@/components/Content/Combat/Zone";
import RunAway from "@/components/Content/Combat/RunAway";
import CombatExperience from "@/components/Content/Combat/CombatExperience";
import CombatPlayerPanel from "@/components/Content/Combat/CombatPlayerPanel";
import MobCard from "@/components/Content/Combat/MobCard";
import Loot from "@/components/Content/Combat/Loot";
import Validhunting from "@/components/Content/Combat/Validhunting";
import ContentCombatJobInfo from "@/components/Content/ContentCombatJobInfo";
export default {
  extends: ContentAbstract,
  components: {
    Zone,
    RunAway,
    CombatExperience,
    CombatPlayerPanel,
    MobCard,
    Loot,
    Validhunting,
    ContentCombatJobInfo
  },
  computed: {
    ...mapGetters("combat", ["targetEnemy"]),
    normalZones() {
      return ZONES.filter(zone => !zone.boss);
    },
    bossZones() {
      return ZONES.filter(zone => zone.boss);
    },
    inCombat() {
      return this.targetEnemy != null;
    }
  }
};
</script>

<style scoped>
</style>