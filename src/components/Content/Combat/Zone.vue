<template>
  <div>
    <div
      class="content-block content-block-top clickable"
      :class="{'expanded': expanded}"
      @click="expanded=!expanded"
    >
      <div class="d-flex align-items-top">
        <img :src="zone.icon" class="pixelated mr-2" alt />
        <div class="d-flex flex-column align-items-left">
          <span class="zone-title mr">{{zone.name}}</span>
          <span class="zone-difficulty">Robustness Range:</span>
          <div class="zone-difficulty mt-1">
            <span class="danger-bubble">{{robustnessMin}}</span>
            <span class="mx-1">-</span>
            <span class="danger-bubble">{{robustnessMax}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-block content-block-bottom" v-if="expanded">
      <hr class="mt-0 mb-2" />
      <div class="enemies">
        <zone-enemy v-for="(enemyId, index) in zone.enemies" :key="index" :enemyId="enemyId" />
      </div>
    </div>
  </div>
</template>
<script>
import { ENEMIES } from "@/data/combat";
import ZoneEnemy from "@/components/Content/Combat/ZoneEnemy";
export default {
  components: { ZoneEnemy },
  props: ["zone"],
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    robustnessLevels() {
      return this.zone.enemies.map(enemy => ENEMIES[enemy].robustness);
    },
    robustnessMin() {
      return Math.min(...this.robustnessLevels);
    },
    robustnessMax() {
      return Math.max(...this.robustnessLevels);
    }
  }
};
</script>

<style scoped>
.zone-title {
  font-size: 24px;
}
img {
  height: 96px;
}
.zone-difficulty {
  font-size: 13px;
}
.enemies {
  padding: 4px;
  background-color: rgb(230, 230, 230);
}
</style>