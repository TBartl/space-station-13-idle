<template>
  <div class="d-flex flex-row justify-content-center">
    <button
      type="button"
      class="btn mx-1"
      v-for="focus in focuses"
      :key="focus.id"
      :class="[currentFocus == focus.id ? 'btn-primary' : 'btn-secondary']"
      @click="$store.commit('combat/setFocus',focus.id)"
    >
      <img :src="focus.icon" />
      <span>{{focus.name}}</span>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    currentFocus() {
      return this.$store.getters["combat/focus"];
    },
    focuses() {
      return [
        {
          name: "Precision",
          id: "precision",
          icon: require("@/assets/art/combat/precision.png")
        },
        {
          name: "Power",
          id: "power",
          icon: require("@/assets/art/combat/skull.png")
        },
        {
          name: "Evasion",
          id: "evasion",
          icon: require("@/assets/art/combat/black_shoes.png")
        }
      ];
    }
  }
};
</script>

<style scoped>
</style>