<template>
  <div class="content-block d-flex flex-column align-items-center">
    <span class="text-uppercase text-center">{{name}}</span>
    <robustness-badge class="mb-1" :stats="stats" :mobType="mobType" />
    <div v-if="mobType == 'player'" class="body-icon overlay-div mb-2">
      <img v-for="(icon, index) in playerOverlayIcons" :key="index" :src="icon" />
    </div>
    <img v-else class="body-icon mb-2" :src="icon" :class="{'rotate-90': health==0}" />
    <progress-bar
      class="mb-2 black-background"
      :progress="healthPercent"
      :text="health != 0 ? `${Math.round(health)}/${stats.maxHealth}` : 'Dead'"
      :customClass="'bg-danger'"
    />
    <progress-bar
      v-if="!targetEnemy || !moveProgress"
      class="mb-2 black-background"
      :progress="swingProgress"
      :text="`Attack Speed: ${stats.attackSpeed.toFixed(1)}s`"
    />
    <progress-bar
      v-if="!targetEnemy || (moveProgress && mobType == 'player')"
      class="mb-2 black-background"
      :progress="moveProgress"
      :customClass="'bg-success'"
      :text="`Move Speed: ${moveTime.toFixed(1)}s`"
    />
    <div v-if="targetEnemy" class="w-100">
      <div class="stat" :id="`${mobType}-stat-max-hit`">
        <img :src="require('@/assets/art/combat/skull.png')" />
        <span class="stat-desc">Max Hit:</span>
        <span>{{Math.round(maxHit)}}</span>
      </div>
      <stat-explain-max-hit :target="`${mobType}-stat-max-hit`" :mobType="mobType" />
      <div class="stat" :id="`${mobType}-stat-hit-chance`">
        <img :src="require('@/assets/art/combat/precision.png')" />
        <span class="stat-desc">Hit Chance:</span>
        <span>{{+(hitChance*100).toFixed(1)}}%</span>
      </div>
      <stat-explain-hit-chance :target="`${mobType}-stat-hit-chance`" :mobType="mobType" />
      <div v-if="isValidhuntingTarget" class="mt-1 d-flex flex-row align-items-center">
        <img :src="validhuntingIcon" />
        <span class="mr-1 remaining-kills-desc">Remaining Kills:</span>
        <span>{{validhuntingCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import ENEMIES from "@/data/enemies";
import { mapGetters } from "vuex";
import RobustnessBadge from "@/components/Content/Combat/RobustnessBadge";
import ProgressBar from "@/components/ProgressBar";
import StatExplainMaxHit from "@/components/Content/Combat/StatExplainMaxHit";
import StatExplainHitChance from "@/components/Content/Combat/StatExplainHitChance";
const playerBaseIcon = require("@/assets/art/combat/player.png");
import { JOB as VALIDHUNTING_JOB } from "@/data/validhunting";

export default {
  components: {
    RobustnessBadge,
    ProgressBar,
    StatExplainMaxHit,
    StatExplainHitChance
  },
  props: ["mobType"],
  computed: {
    ...mapGetters("combat", ["targetEnemy"]),
    enemy() {
      return ENEMIES[this.targetEnemy];
    },
    icon() {
      if (this.mobType == "player") {
        return playerIcon;
      } else if (this.mobType == "enemy") {
        return this.enemy.icon;
      }
      return null;
    },
    name() {
      if (this.mobType == "player") {
        return "You";
      } else if (this.mobType == "enemy") {
        return this.enemy.name;
      }
      return null;
    },
    health() {
      return this.$store.getters[this.mobType + "Mob/health"];
    },
    stats() {
      return this.$store.getters[this.mobType + "Mob/stats"];
    },
    maxHit() {
      return this.$store.getters[this.mobType + "Mob/maxHit"];
    },
    hitChance() {
      return this.$store.getters[this.mobType + "Mob/hitChance"];
    },
    healthPercent() {
      return this.health / this.stats.maxHealth;
    },
    swingProgress() {
      // Show the bar full when there's not an enemy
      if (!this.targetEnemy) return 1;
      return this.$store.getters[this.mobType + "Mob/swingCoroutine/percent"];
    },
    moveProgress() {
      // Show the bar full when there's not an enemy
      if (!this.targetEnemy) return 1;
      return this.$store.getters["combat/moveCoroutine/percent"];
    },
    moveTime() {
      return this.$store.getters["playerMob/stats"].moveTime;
    },
    playerOverlayIcons() {
      let icons = [];
      let hidePlayer = false;
      let equipment = this.$store.getters["inventory/equipment"];
      for (let [equipmentSlot, { itemId }] of Object.entries(equipment)) {
        if (!itemId) continue;
        let item = ITEMS[itemId];
        if (this.$store.getters["inventory/checkRestricted"](itemId)) continue;
        if (item.overlay) {
          icons.push(item.overlay);
        }
        if (item.overlayHidePlayer) {
          hidePlayer = true;
        }
      }
      if (!hidePlayer) {
        icons.unshift(playerBaseIcon);
      }
      return icons;
    },
    isValidhuntingTarget() {
      return (
        this.mobType == "enemy" &&
        this.targetEnemy == this.$store.getters["validhunting/targetEnemyId"]
      );
    },
    validhuntingCount() {
      return this.$store.getters["validhunting/targetCount"];
    },
    validhuntingIcon() {
      return VALIDHUNTING_JOB.icon;
    }
  }
};
</script>

<style scoped>
.body-icon {
  width: 64px;
  height: 64px;
  background-color: #ececec;
  border-radius: 0.5rem;
}

@media (min-width: 1200px) {
  .body-icon {
    width: 128px;
    height: 128px;
  }
}
.black-background {
  background-color: rgb(61, 61, 61) !important;
}
.rotate-90 {
  transform: rotate(90deg);
}

.stat {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  border: 1px solid #dee2e6 !important;
  transition: background-color 0.15s;
  background-color: white;
  font-weight: bold;
}
.stat:hover {
  background-color: rgba(124, 124, 124, 0.096);
}
.stat-desc {
  color: rgb(112, 112, 112);
  margin-right: 0.4rem;
  margin-left: 0.25rem;
  font-weight: normal;
}
.stat img {
  width: 32px;
}
.remaining-kills-desc {
  color: gray;
}
</style>