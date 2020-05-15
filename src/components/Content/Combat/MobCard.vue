<template>
  <div class="content-block d-flex flex-column align-items-center">
    <span class="text-uppercase mb-2 text-center">{{name}}</span>
    <img class="pixelated body-icon mb-2" :src="icon" :class="{'rotate-90': health==0}" />
    <progress-bar
      class="mb-2 black-background"
      :progress="healthPercent"
      :text="health != 0 ? `${health}/${stats.maxHealth}` : 'Dead'"
      :customClass="'bg-danger'"
    />
    <progress-bar
      v-if="!moveProgress"
      class="mb-2 black-background"
      :progress="swingProgress"
      :text="`Attack Speed: ${stats.attackSpeed.toFixed(1)}s`"
    />
    <progress-bar
      v-else-if="mobType == 'player'"
      class="mb-2 black-background"
      :progress="moveProgress"
      :customClass="'bg-success'"
      :text="`Moving: ${moveTime.toFixed(1)}s`"
    />
    <span>Stats: TODO</span>
  </div>
</template>

<script>
import { ENEMIES } from "@/data/combat";
import { mapGetters } from "vuex";
import ProgressBar from "@/components/ProgressBar";
const playerIcon = require("@/assets/art/combat/player.png");
export default {
  components: { ProgressBar },
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
    healthPercent() {
      return this.health / this.stats.maxHealth;
    },
    swingProgress() {
      return this.$store.getters[this.mobType + "Mob/swingCoroutine/percent"];
    },
    moveProgress() {
      return this.$store.getters["combat/moveCoroutine/percent"];
    },
    moveTime() {
      return this.$store.getters["combat/moveTime"];
    }
  }
};
</script>

<style scoped>
.body-icon {
  min-width: 32px;
  width: 128px;
  max-width: 100%;
  background-color: #ececec;
  border-radius: 0.5rem;
}
.black-background {
  background-color: rgb(61, 61, 61) !important;
}
.rotate-90 {
  transform: rotate(90deg);
}
</style>