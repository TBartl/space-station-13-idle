<template>
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
</template>

<script>
import { clone } from "lodash";
import { fixProtection } from "@/utils/combatUtils";

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
          description: "Increases total health pool"
        },
        {
          id: "evasion",
          icon: require("@/assets/art/combat/black_shoes.png"),
          name: "Evasion",
          description: "Increases dodge chance"
        },
        {
          id: "precision",
          icon: require("@/assets/art/combat/precision.png"),
          name: "Precision",
          description: "Increases hit chance"
        },
        {
          id: "command",
          icon: require("@/assets/art/combat/command.png"),
          name: "Command",
          description: "Reduces companion flee chance"
        },
        {
          id: "power",
          icon: require("@/assets/art/combat/skull.png"),
          name: "Power",
          description: "Increases damage dealt"
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
}
img {
  width: 32px;
}
</style>