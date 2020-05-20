<template>
  <b-popover :target="target" triggers="hover" placement="top" delay="0">
    <div class="popup d-flex flex-column align-items-center">
      <h6 class="title">{{item.name}}</h6>
      <span v-if="item.healAmount" class="mt-1">Heals +{{item.healAmount}} HP</span>
      <span v-if="item.equipmentSlot" class="mt-1">Equippable</span>
      <div
        class="requirement p-1 my-1 rounded d-flex flex-row align-items-center"
        :class="requirement.class"
        v-for="(requirement, index) in requirements"
        :key="index"
      >
        <span>Requires:</span>
        <img class="mx-1" :src="requirement.icon" alt />
        <span>{{requirement.text}}</span>
      </div>
      <stats-panel v-if="item.stats" :stats="item.stats" />
      <inventory-price-display v-if="item.sellPrice" class="mt-1" :price="item.sellPrice" />
    </div>
  </b-popover>
</template>

<script>
import ITEMS from "@/data/items";
import InventoryPriceDisplay from "@/components/Content/Inventory/InventoryPriceDisplay";
import StatsPanel from "@/components/Content/Combat/StatsPanel";
import { ALL_JOBS } from "@/data/jobs";

export default {
  props: ["itemId", "target"],
  components: { StatsPanel, InventoryPriceDisplay },
  computed: {
    item() {
      return ITEMS[this.itemId];
    },
    requirements() {
      if (!this.item.requires) return;
      return Object.entries(this.item.requires).map(entry => {
        let jobId = entry[0];
        let job = ALL_JOBS.find(job => job.id == jobId);
				let requiredLevel = entry[1];
				let jobLevel = this.$store.getters[jobId + "/level"];
				console.log(jobLevel, requiredLevel);
        return {
          icon: job.icon,
          text: requiredLevel,
          class: (jobLevel >= requiredLevel) ? "alert-success" : "alert-danger"
        };
      });
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
</style>