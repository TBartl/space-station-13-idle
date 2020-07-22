<template>
  <div class="content-block d-flex flex-column align-items-center">
    <span class="text-uppercase text-center">{{name}}</span>
    <robustness-badge
      :stats="stats"
      :mobType="mobType"
      :overrideRobustness="mobType=='enemy' ? enemy.overrideRobustness : undefined"
    />
    <div class="body-icon mt-2">
      <div ref="body" class="img-body w-100 h-100">
        <div v-if="mobType == 'player'" class="w-100 h-100">
          <player-display :showEquipment="true" />
        </div>
        <img v-else class="w-100" :src="icon" :class="{'rotate-90': health==0}" />
      </div>
    </div>
    <progress-bar
      class="mt-2 black-background"
      :progress="healthPercent"
      :text="health != 0 ? `${Math.ceil(health)}/${stats.maxHealth}` : 'Dead'"
      :customClass="'bg-danger'"
    />
    <progress-bar
      v-if="!targetEnemy || !moveProgress"
      class="mt-1 black-background"
      :progress="swingProgress"
      :text="`Attack Speed: ${stats.attackSpeed.toFixed(1)}s`"
    />
    <progress-bar
      v-if="!targetEnemy || (moveProgress && mobType == 'player')"
      class="mt-1 black-background"
      :progress="moveProgress"
      :customClass="'bg-success'"
      :text="`Move Speed: ${moveTime.toFixed(1)}s`"
    />

    <div v-if="moveProgress && mobType == 'enemy'" class="fake-bar mt-2"></div>
		<div class="w-100 mt-2">
      <div class="stat" :id="`${mobType}-stat-max-hit`">
        <img :src="require('@/assets/art/combat/skull.png')" />
        <span class="stat-desc">Hit:</span>
        <span>{{Math.round(minHit)}} - {{Math.round(maxHit)}}</span>
        <img class="ml-1 damage-type" :src="damageTypeImage" />
      </div>
      <stat-explain-max-hit :target="`${mobType}-stat-max-hit`" :mobType="mobType" />
		</div>
    <div v-if="targetEnemy" class="w-100">
      <div class="stat" :id="`${mobType}-stat-hit-chance`">
        <img :src="require('@/assets/art/combat/precision.png')" />
        <span class="stat-desc">Hit Chance:</span>
        <span>{{+(hitChance*100).toFixed(1)}}%</span>
      </div>
      <stat-explain-hit-chance :target="`${mobType}-stat-hit-chance`" :mobType="mobType" />
    </div>

    <div v-if="mobType == 'player' && companion" class="w-100">
      <div class="stat" :id="`${mobType}-stat-flee-chance`">
        <img :src="require('@/assets/art/combat/command.png')" />
        <span class="stat-desc">Flee Chance:</span>
        <span>{{+(fleeChance*100).toFixed(1)}}%</span>
      </div>
      <stat-explain-flee-chance :target="`${mobType}-stat-flee-chance`" :mobType="mobType" />
    </div>

    <stats-panel class="mt-2" :stats="stats" :showAll="true" />

    <div v-if="isValidhuntingTarget" class="mt-1 d-flex flex-row align-items-center">
      <img :src="validhuntingIcon" />
      <span class="mr-1 remaining-kills-desc">Remaining Kills:</span>
      <span>{{validhuntingCount}}</span>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/utils/eventBus.js";

import Velocity from "velocity-animate";
import ITEMS from "@/data/items";
import ENEMIES from "@/data/enemies";
import { mapGetters } from "vuex";
import RobustnessBadge from "@/components/Content/Combat/RobustnessBadge";
import ProgressBar from "@/components/ProgressBar";
import StatExplainMaxHit from "@/components/Content/Combat/StatExplainMaxHit";
import StatExplainHitChance from "@/components/Content/Combat/StatExplainHitChance";
import StatExplainFleeChance from "@/components/Content/Combat/StatExplainFleeChance";
import StatsPanel from "@/components/Content/Combat/StatsPanel";
import PlayerDisplay from "@/components/PlayerDisplay";

const playerBaseIcon = require("@/assets/art/combat/player.png");
import { JOB as VALIDHUNTING_JOB } from "@/data/validhunting";

const BRUTE_ICON = require("@/assets/art/combat/brute-damage.png");
const BURN_ICON = require("@/assets/art/combat/burn-damage.png");

export default {
  components: {
    RobustnessBadge,
    ProgressBar,
    StatExplainMaxHit,
    StatExplainHitChance,
    StatExplainFleeChance,
    StatsPanel,
    PlayerDisplay
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
    minHit() {
      return this.$store.getters[this.mobType + "Mob/minHit"];
    },
    hitChance() {
      return this.$store.getters[this.mobType + "Mob/hitChance"];
    },
    fleeChance() {
      return this.$store.getters[this.mobType + "Mob/fleeChance"];
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
    companion() {
      if (this.mobType != "player") return null;
      let companionItemId = this.$store.getters["inventory/equipment"].companion
        .itemId;
      if (!companionItemId) return null;
      return ITEMS[companionItemId];
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
    },
    damageTypeImage() {
      return this.stats.damageType == "brute" ? BRUTE_ICON : BURN_ICON;
    }
  },
  mounted() {
    EventBus.$on("swing", mobType => {
      if (this.$store.getters["chrono/speed"] > 5) return;
      if (mobType == this.mobType) {
        if (!this.$refs.body) return;
        let promise = Velocity(
          this.$refs.body,
          { translateX: this.mobType == "player" ? "70px" : "-70px" },
          50
        );
        if (!promise) return;
        promise.then(() => {
          if (!this.$refs.body) return;
          Velocity(this.$refs.body, { translateX: "0px" }, 50);
        });
      }
    });

    EventBus.$on("getHit", mobType => {
      if (this.$store.getters["chrono/speed"] > 5) return;
      if (mobType == this.mobType) {
        if (!this.$refs.body) return;
        this.$refs.body.style.filter =
          "contrast(0) sepia(1) saturate(100) hue-rotate(0deg)";
        setTimeout(() => {
          if (!this.$refs.body) return;
          this.$refs.body.style.filter = "unset";
        }, 300);
      }
    });

    EventBus.$on("dodge", mobType => {
      if (this.$store.getters["chrono/speed"] > 5) return;
      if (mobType == this.mobType) {
        if (!this.$refs.body) return;
        Velocity(this.$refs.body, { opacity: 0.3 }, 200).then(() => {
          if (!this.$refs.body) return;
          Velocity(this.$refs.body, { opacity: 1 }, 200);
        });
      }
    });
  }
};
</script>

<style scoped>
.body-icon {
  width: 128px;
  height: 128px;
  background-color: #ececec;
  border-radius: 0.5rem;
}
.dark-mode .body-icon {
  background-color: rgb(75, 77, 88);
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

.dark-mode .stat {
  background-color: rgb(80, 86, 95);
  border: 1px solid #4a4f53 !important;
}
.dark-mode .stat-desc {
	color: rgb(159, 166, 187);
}

.stat img {
  width: 32px;
}
.remaining-kills-desc {
  color: rgba(187, 187, 187, 0.733);
}
.damage-type {
  width: 15px !important;
}

.fake-bar {
  height: 22px;
}
.img-body {
  transform: translateX(0px);
}
</style>