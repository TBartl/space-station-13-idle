<template>
  <div v-if="shouldShow" class="chrono-panel">
    <div class="content-block d-flex flex-column align-items-center">
      <div class="d-flex flex-row align-items-center">
        <img :src="require('@/assets/art/chrono/icon.png')" alt />
        <span>CHRONO</span>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-sm"
          v-for="speed in speeds"
          :key="speed"
          :class="[desiredChronoSpeed == speed ? 'btn-primary' : 'btn-secondary']"
          @click="setDesiredChronoSpeed(speed)"
        >{{speed}}x</button>
      </div>
      <progress-bar
        class="mt-1 black-background chrono-bar"
        :progress="barPercent"
        :text="remainingTimeText"
        :customClass="active ? 'progress-bar-animated' : ''"
      />
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
export default {
  components: { ProgressBar },
  computed: {
    shouldShow() {
      if (!this.$store.getters["settings/chronoPanelEnabled"]) return false;
      if (this.infinite) return true;
      return this.$store.getters["chrono/remainingTime"] > 0;
    },
    speeds() {
      return this.$store.getters["chrono/speeds"].slice(0, 7);
    },
    desiredChronoSpeed() {
      return this.$store.getters["chrono/desiredSpeed"];
    },

    barPercent() {
      if (this.infinite) return 1;
      return (
        this.$store.getters["chrono/remainingTime"] /
        this.$store.getters["chrono/maxDuration"]
      );
    },
    infinite() {
      return this.$store.getters["cheats/infiniteChrono"];
    },
    remainingTimeText() {
      if (this.infinite) return "INFINTE";
      return this.$store.getters["chrono/remainingTimeText"];
    },
    active() {
      return this.$store.getters["chrono/active"];
    }
  },
  methods: {
    setDesiredChronoSpeed(val) {
      this.$store.commit("chrono/setDesiredSpeed", val);
    }
  }
};
</script>

<style scoped>
.chrono-panel {
  position: fixed;
  right: 0;
  bottom: 0;
  opacity: 0.6;
  transition: opacity 0.1s;
}
.chrono-panel:hover {
  opacity: 1;
}
.content-block {
  padding: 0.5rem;
  border-top-color: rgb(58, 148, 184);
  margin-right: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 3px 3px 5px 5px #000000b0;
}
.btn:not(:last-child) {
  margin-right: 0.25rem;
}
</style>