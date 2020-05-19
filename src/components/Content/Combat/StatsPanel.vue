<template>
  <div class="stats-panel d-flex flex-row flex-wrap-reverse justify-content-center">
    <div
      class="stat-detail d-flex flex-row align-items-center"
      v-for="(detail, index) in statDetails"
      :key="index"
    >
      <img :src="detail.icon" class="pixelated mr-1" />
      <span>{{stats[detail.id]}}{{detail.id == "protection" ? "%" : ""}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stats"],
  computed: {
    statDetails() {
      return [
        {
          id: "maxHealth",
          icon: require("@/assets/art/combat/health.gif")
        },
        {
          id: "evasion",
          icon: require("@/assets/art/combat/evasion.png")
        },
        {
          id: "precision",
          icon: require("@/assets/art/combat/precision.png")
        },
        {
          id: "protection",
          icon: require("@/assets/art/combat/armor.png")
        },
        {
          id: "power",
          icon: require("@/assets/art/combat/skull.png")
        }
      ].reverse(); //flex-wrap-reverse'ing
    }
  }
};
</script>

<style scoped>
.stats-panel {
  width: 140px;
}
.stat-detail {
  display: inline-block;
  width: 50%;
  padding: 2px 4px;
  border: 1px solid rgba(135, 138, 148, 0.322);
  background-color: rgba(176, 200, 216, 0.438);
}
img {
  width: 32px;
}
</style>