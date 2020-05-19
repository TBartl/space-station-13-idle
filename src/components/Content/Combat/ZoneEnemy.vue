<template>
  <div
    class="content-block enemy p-1 d-flex flex-column flex-md-row align-items-center justify-content-between"
  >
    <div class="d-flex flex-column flex-md-row align-items-center">
      <img :src="enemy.icon" class="pixelated mr-2" alt />
      <div class="d-flex flex-column">
        <span class="name">{{enemy.name}}</span>
        <div class="robustness">
          <robustness-badge class="mt-1" :stats="basedStats" mobType="enemy" />
        </div>
      </div>
    </div>
    <div class="d-flex flex-column mr-2">
      <button type="button" :id="id" class="btn btn-primary btn-sm w-100">View Loot</button>
      <b-popover :target="id" triggers="click blur" placement="top" delay="0">
        <item-chance :data="enemy" />
      </b-popover>
      <button type="button" class="btn btn-danger btn-sm w-100 mt-1" @click="fight">Fight!</button>
    </div>
  </div>
</template>

<script>
import { ENEMIES } from "@/data/combat";
import RobustnessBadge from "@/components/Content/Combat/RobustnessBadge";
import ItemChance from "@/components/ItemTable/ItemChance";
import { mapActions } from "vuex";
import { getBasedStats } from "@/utils/combatUtils";
export default {
  components: { RobustnessBadge, ItemChance },
  props: ["enemyId"],
  computed: {
    id() {
      return this._uid.toString();
    },
    enemy() {
      return ENEMIES[this.enemyId];
    },
    basedStats() {
      return getBasedStats(this.enemy.stats);
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
</style>