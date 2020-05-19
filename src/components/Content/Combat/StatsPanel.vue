<template>
  <div class="stats-panel d-flex flex-row flex-wrap-reverse justify-content-center">
    <div
      class="stat-detail"
      v-for="(detail, index) in statDetails"
      :key="index"
      :id="id+'-'+detail.id"
    >
      <div class="w-100 d-flex flex-row align-items-center">
        <img :src="detail.icon" class="pixelated mr-1" />
        <span>{{stats[detail.id]}}{{detail.id == "protection" ? "%" : ""}}</span>
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
export default {
  props: ["stats"],
  computed: {
    id() {
      return this._uid.toString();
    },
    statDetails() {
      return [
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
          id: "protection",
          icon: require("@/assets/art/combat/armor.png"),
          name: "Protection",
          description: "Reduces damage taken"
        },
        {
          id: "power",
          icon: require("@/assets/art/combat/skull.png"),
          name: "Power",
          description: "Increases damage dealt"
        }
      ]
        .filter(detail => this.stats[detail.id] != undefined)
        .reverse(); //flex-wrap-reverse'ing
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
  padding: 2px 4px;
  border: 1px solid rgba(135, 138, 148, 0.322);
  background-color: rgba(176, 200, 216, 0.438);
}
img {
  width: 32px;
}
</style>