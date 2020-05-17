<template>
  <div class="content-block d-flex flex-column align-items-center">
    <span class="text-uppercase mb-2 text-center">{{name}}</span>
    <div v-if="mobType == 'player'" class="pixelated body-icon overlay-div mb-2">
      <img v-for="(icon, index) in playerOverlayIcons" :key="index" :src="icon" />
    </div>
    <img v-else class="pixelated body-icon mb-2" :src="icon" :class="{'rotate-90': health==0}" />
    <progress-bar
      class="mb-2 black-background"
      :progress="healthPercent"
      :text="health != 0 ? `${health}/${stats.maxHealth}` : 'Dead'"
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
    <span>Stats: TODO</span>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import { ENEMIES } from "@/data/combat";
import { mapGetters } from "vuex";
import ProgressBar from "@/components/ProgressBar";
const playerBaseIcon = require("@/assets/art/combat/player.png");
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
      return this.$store.getters["combat/moveTime"];
    },
    playerOverlayIcons() {
      let icons = [];
      let hidePlayer = false;
      let equipment = this.$store.getters["inventory/equipment"];
      for (let [equipmentSlot, { itemId }] of Object.entries(equipment)) {
        if (!itemId) continue;
        let item = ITEMS[itemId];
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
</style>