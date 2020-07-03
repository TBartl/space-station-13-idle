<template>
  <button
    class="btn btn-primary run-away d-flex flex-row align-items-center"
    @click="()=>{cancelAllActions()}"
  >
    <img :src="require('@/assets/art/combat/run.png')" alt />
    <span>{{runText}}</span>
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["cancelAllActions"])
  },
  computed: {
    runText() {
      return this.$store.getters["enemyMob/health"]
        ? "Yakety sax away"
        : "Leave";
    }
  }
};
</script>

<style scoped>
.run-away {
  font-size: 20px;
}
.run-away img {
  width: 48px;
  margin-right: 8px;
}
</style>