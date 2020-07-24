<template>
  <b-popover
    :target="target"
    triggers="hover"
    :placement="popoverPlacement"
    delay="10"
    :customClass="$store.getters['settings/darkModeClass']"
  >
    <div class="popup d-flex flex-column align-items-center">
      <h6 class="title">{{item.name}}</h6>
      <div class="d-flex align-items-center mt-1" v-if="item.equipmentSlot">
        <img class="equippable-icon" :src="require(`@/assets/art/combat/equipment/${item.equipmentSlot}.png`)" alt="" />
        <span class="equippable-name d-md-block text-uppercase ml-1">{{item.equipmentSlot}}</span>
      </div>
      <span v-if="item.healAmount" class="mt-1">Heals +{{item.healAmount}} HP</span>
      <div
        class="requirement p-1 mt-1 rounded d-flex flex-row align-items-center"
        :class="requirement.class"
        v-for="(requirement, index) in requirements"
        :key="'req'+index"
      >
        <span>Requires:</span>
        <img class="mx-1" :src="requirement.icon" alt />
        <span>{{requirement.text}}</span>
      </div>
      <span
        v-for="(allow, index) in allows"
        :key="'allow'+index"
        class="success-bubble mt-1"
      >Enables: {{allow.toUpperCase()}}</span>
      <span
        v-for="(restriction, index) in restrictions"
        :key="'restriction'+index"
        class="warning-bubble mt-1"
      >Restriction: {{restriction.toUpperCase()}}</span>
      <span class="description mt-1" v-if="item.description">{{item.description}}</span>
      <span class="potion-charges mt-1" v-if="item.potionCharges">Charges: {{item.potionCharges}}</span>
      <span
        class="description mt-1"
        v-if="item.stats && item.stats.moveTime != undefined"
      >{{item.stats.moveTime > 0 ? `+${item.stats.moveTime}` : item.stats.moveTime}} move time</span>
      <span
        class="description mt-1"
        v-if="item.stats && item.stats.attackSpeed != undefined"
      >Attack Speed: {{item.stats.attackSpeed}}s</span>
      <span
        class="description mt-1"
        v-if="item.fleeChance"
      >{{item.fleeChance}}% base chance to flee whenever you get hit</span>
      <stats-panel class="mt-1" v-if="item.stats" :stats="item.stats" />
      <inventory-price-display v-if="item.sellPrice" class="mt-1" :price="item.sellPrice" />
    </div>
  </b-popover>
</template>

<script>
import ITEMS from "@/data/items";
import InventoryPriceDisplay from "@/components/Content/Inventory/InventoryPriceDisplay";
import StatsPanel from "@/components/Content/Combat/StatsPanel";
import { ALL_JOBS } from "@/data/jobs";
import { getEquipmentSlot } from "@/utils/equipmentUtils";

export default {
  props: ["itemId", "target", "placement"],
  components: { StatsPanel, InventoryPriceDisplay },
  computed: {
    item() {
      return ITEMS[this.itemId];
    },
    popoverPlacement() {
      return this.placement ? this.placement : "bottom";
    },
    requirements() {
      if (!this.item.requires) return;
      return Object.entries(this.item.requires).map(entry => {
        let jobId = entry[0];
        let job = ALL_JOBS.find(job => job.id == jobId);
        if (!job) {
          console.error("Could not find job:", jobId);
          return;
        }
        let requiredLevel = entry[1];
        let jobLevel = this.$store.getters[jobId + "/level"];
        return {
          icon: job.icon,
          text: "lvl" + requiredLevel,
          class: jobLevel >= requiredLevel ? "alert-success" : "alert-danger"
        };
      });
    },
    allows() {
      let allows = [];
      if (this.item.liftsRestrictions) {
        allows = allows.concat(this.item.liftsRestrictions);
      }
      if (this.item.ammoType && getEquipmentSlot(this.itemId) == "pocket") {
        allows = allows.concat(this.item.ammoType);
      }
      return allows;
    },
    restrictions() {
      let restrictions = [];
      if (this.item.restrictions) {
        restrictions = restrictions.concat(this.item.restrictions);
      }
      if (this.item.ammoType && getEquipmentSlot(this.itemId) == "hand") {
        restrictions = restrictions.concat(this.item.ammoType);
      }
      return restrictions;
    }
  }
};
</script>

<style scoped>
.requirement {
  font-size: 14px;
}
.requirement img {
  width: 32px;
}
.description {
  max-width: 200px;
  text-align: center;
  white-space: pre-wrap;
}
.potion-charges {
  font-weight: bold;
  color: gray;
}
.equippable-name {
  font-size: 12px;
  font-weight: bold;
  color: rgb(152, 156, 165);
}
.equippable-icon {
  width: 24px;
  height: 24px;
}
@media (min-width: 768px) {
  .equippable-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
