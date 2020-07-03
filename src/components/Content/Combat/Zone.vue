<template>
  <div>
    <div
      class="content-block content-block-top clickable"
      :class="{'expanded': expanded}"
      @click="expanded=!expanded"
    >
      <div class="d-flex flex-column flex-md-row align-items-center align-items-md-top">
        <img :src="zone.icon" class="mr-2" alt />
        <div class="d-flex flex-column align-items-left">
          <span class="zone-title mr">{{zone.name}}</span>
          <span class="zone-difficulty">Robustness Range:</span>
          <div class="zone-difficulty mt-1">
            <span :class="[robustnessMinCssClass]">{{robustnessMin}}</span>
            <span class="mx-1">-</span>
            <span :class="[robustnessMaxCssClass]">{{robustnessMax}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-block content-block-bottom" v-if="expanded">
      <div v-if="zone.purchases">
        <hr class="mt-0 mb-2" />

        <div class="enemies">
          <shop-purchase
            v-for="(shopPurchase, purchaseIndex) in zone.purchases"
            :key="purchaseIndex"
            :purchaseId="shopPurchase"
          />
        </div>
      </div>
      <hr class="mt-0 mb-2" />
      <div class="enemies">
        <zone-enemy
          v-for="(enemyId, index) in zone.enemies"
          :key="index"
          :enemyId="enemyId"
          :restrictFight="zone.boss"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { calcRobustness, getRobustnessCssClass } from "@/utils/combatUtils";
import ENEMIES from "@/data/enemies";
import ZoneEnemy from "@/components/Content/Combat/ZoneEnemy";
import ShopPurchase from "@/components/Content/Shop/ShopPurchase";

export default {
  components: { ZoneEnemy, ShopPurchase },
  props: ["zone"],
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    robustnessLevels() {
      return this.zone.enemies.map(enemy =>
        calcRobustness(ENEMIES[enemy].stats, "enemy")
      );
    },
    robustnessMin() {
      return Math.min(...this.robustnessLevels);
    },
    robustnessMax() {
      return Math.max(...this.robustnessLevels);
    },
    robustnessMinCssClass() {
      return getRobustnessCssClass(
        calcRobustness(this.$store.getters["playerMob/stats"], "player"),
        this.robustnessMin
      );
    },
    robustnessMaxCssClass() {
      return getRobustnessCssClass(
        calcRobustness(this.$store.getters["playerMob/stats"], "player"),
        this.robustnessMax
      );
    }
  }
};
</script>

<style scoped>
.zone-title {
  font-size: 24px;
}
img {
  width: 150px;
  height: 90px;
}
.zone-difficulty {
  font-size: 13px;
}
.enemies {
  padding: 4px;
  background-color: rgb(230, 230, 230);
}
</style>