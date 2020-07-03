<template>
  <div
    class="content-block enemy p-1 d-flex flex-column flex-md-row align-items-center justify-content-between"
  >
    <div class="d-flex flex-column flex-md-row align-items-center">
      <img :src="enemy.icon" class="mr-2" alt />
      <div class="d-flex flex-column">
        <span class="name">{{enemy.name}}</span>
        <div class="robustness">
          <robustness-badge class="mt-1" :stats="basedStats" mobType="enemy" :overrideRobustness="enemy.overrideRobustness" />
        </div>
      </div>
    </div>
    <div v-if="showValidhunting && validhuntingCount" class="validhunting-info">
      <div>
        <span class="mr-1 validhunting-desc">Kills Remaining:</span>
        <span>{{validhuntingCount}}</span>
      </div>
      <div>
        <span class="mr-1 validhunting-desc">Reward:</span>
        <span>{{validhuntingXP | cleanNum}}</span>
        <img :src="validhuntingIcon" />
        <span>XP</span>
      </div>
    </div>
    <div v-if="showValidhunting && validhuntingCount == 0">
      <validhunting-complete-button />
    </div>
    <div class="d-flex flex-column mr-2">
      <button type="button" :id="id" class="btn btn-primary btn-sm w-100">View Loot</button>
      <b-popover :target="id" triggers="click blur" placement="top" delay="0">
        <item-chance :data="enemy" />
      </b-popover>
      <button
        v-if="!restrictFight"
        type="button"
        class="btn btn-danger btn-sm w-100 mt-1"
        @click="fight"
      >Fight!</button>
    </div>
  </div>
</template>

<script>
import ENEMIES from "@/data/enemies";
import RobustnessBadge from "@/components/Content/Combat/RobustnessBadge";
import ValidhuntingCompleteButton from "@/components/Content/Combat/ValidhuntingCompleteButton";
import ItemChance from "@/components/ItemTable/ItemChance";
import { mapActions } from "vuex";
import { getBasedStats } from "@/utils/combatUtils";
import { JOB as VALIDHUNTING_JOB } from "@/data/validhunting";

export default {
  components: { RobustnessBadge, ItemChance, ValidhuntingCompleteButton },
  props: ["enemyId", "showValidhunting", "restrictFight"],
  computed: {
    id() {
      return this._uid.toString();
    },
    enemy() {
      return ENEMIES[this.enemyId];
    },
    basedStats() {
      return getBasedStats(this.enemy.stats);
    },
    validhuntingIcon() {
      return VALIDHUNTING_JOB.icon;
    },
    validhuntingCount() {
      return this.$store.getters["validhunting/targetCount"];
    },
    validhuntingXP() {
      return this.$store.getters["validhunting/xpReward"];
    }
  },
  methods: {
    ...mapActions("combat", ["startCombat"]),
    fight() {
      this.startCombat(this.enemyId);
    }
  }
};
</script>

<style scoped>
img {
  width: 64px;
}
.enemy {
  background-color: white;
  border-radius: 4px;
  border-top-color: rgb(184, 58, 58);
}
.enemy:not(:last-child) {
  margin-bottom: 0.3rem;
}
.name {
  font-size: 18px;
}
.robustness {
  font-size: 12px;
}
.validhunting-info img {
  width: 32px;
}
.validhunting-desc {
  color: rgb(158, 158, 158);
}
</style>