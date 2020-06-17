<template>
  <div class="d-flex flex-column align-items-center">
    <div class="stats-panel d-flex flex-row flex-wrap-reverse justify-content-center">
      <div
        class="stat-detail"
        v-for="(detail, index) in statDetails"
        :key="index"
        :id="id+'-'+detail.id"
      >
        <div class="w-100 d-flex flex-row align-items-center">
          <img :src="detail.icon" class="mr-1" />
          <span>{{fixedStats[detail.id]}}{{detail.id.includes("Protection") ? "%" : ""}}</span>
        </div>
        <b-popover :target="id+'-'+detail.id" triggers="hover" placement="top" delay="0">
          <div class="d-flex flex-column align-items-center">
            <h6>{{detail.name}}</h6>
            <span>{{detail.description}}</span>
          </div>
        </b-popover>
      </div>
    </div>
    <div
      v-if="stats.damageType"
      :id="id+'-damage-type'"
      class="attack-type stat-detail d-flex flex-row align-items-center"
    >
      <span class="mr-1">Type:</span>
      <img class="attack-type-image mr-1" :src="damageTypeImage" />
    </div>
    <b-popover
      v-if="stats.damageType"
      :target="id+'-damage-type'"
      triggers="hover"
      placement="top"
      delay="0"
    >
      <div class="d-flex flex-column align-items-center">
        <h6>Damage Type: {{stats.damageType.toUpperCase()}}</h6>
        <span>Damage dealt will be inflicted as {{stats.damageType}} damage</span>
      </div>
    </b-popover>
  </div>
</template>

<script>
import { clone } from "lodash";
import { fixProtection } from "@/utils/combatUtils";

const BRUTE_ICON = require("@/assets/art/combat/brute-damage.png");
const BURN_ICON = require("@/assets/art/combat/burn-damage.png");

export default {
  props: ["stats", "showAll"],
  computed: {
    id() {
      return this._uid.toString();
    },
    fixedStats() {
      let fixedStats = clone(this.stats);
      return fixProtection(fixedStats);
    },
    statDetails() {
      let details = [
        {
          id: "maxHealth",
          icon: require("@/assets/art/combat/health.gif"),
          name: "Max Health",
          description: "Increases total health pool",
          stretch: true
        },
        {
          id: "command",
          icon: require("@/assets/art/combat/command.png"),
          name: "Command",
          description: "Reduces companion flee chance"
        },
        {
          id: "evasion",
          icon: require("@/assets/art/combat/black_shoes.png"),
          name: "Evasion",
          description: "Increases dodge chance"
        },
        {
          id: "burnProtection",
          icon: require("@/assets/art/combat/armor-burn.png"),
          name: "Burn Protection",
          description: "Reduces damage taken from burn attacks"
        },
        {
          id: "bruteProtection",
          icon: require("@/assets/art/combat/armor-brute.png"),
          name: "Brute Protection",
          description: "Reduces damage taken from brute attacks"
        },
        {
          id: "precision",
          icon: require("@/assets/art/combat/precision.png"),
          name: "Precision",
          description: "Increases hit chance"
        },
        {
          id: "power",
          icon: require("@/assets/art/combat/skull.png"),
          name: "Power",
          description: "Increases damage dealt"
        }
      ];
      if (!this.showAll) {
        details = details.filter(detail => {
          if (this.fixedStats[detail.id] == undefined) return false;
          if (this.fixedStats[detail.id] == 0) return false;
          return true;
        });
      }
      details = details.reverse(); //flex-wrap-reverse'ing
      return details;
    },
    damageTypeImage() {
      return this.stats.damageType == "brute" ? BRUTE_ICON : BURN_ICON;
    }
  }
};
</script>

<style scoped>
.stats-panel {
  max-width: 140px;
}
.stat-detail {
  display: inline-block;
  width: 50%;
  min-width: 64px;
  padding: 2px 4px;
  border: 1px solid rgba(135, 138, 148, 0.322);
  background-color: rgba(176, 200, 216, 0.438);
  min-height: 36px;
}
img {
  width: 32px;
}
.attack-type-image {
  min-width: 15px;
  width: 15px;
  height: 15px;
}
</style>