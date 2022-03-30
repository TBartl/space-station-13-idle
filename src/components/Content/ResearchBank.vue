<template>
  <div class="research-bank">
    <div
      class="content-block bank-block d-flex flex-column flex-sm-row align-items-center justify-content-around p-2"
      :style="{'border-color': color}"
    >
      <div class="d-flex align-items-center">
        <span class="mr-1">
          <img
              :src="require('@/assets/art/research/researchIcon.png')"
          />
          RESEARCH POINTS BANKED:</span>
      </div>
      <div class="d-flex align-items-center">
        <span class="p-1 rndPoints rounded">{{rndPoints | cleanNum}}/{{rndPointsMax | cleanNum}}</span>
      </div>
    </div>
    <progress-bar style="border-radius: 0 !important" :progress="progress" />
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import { rndPoint, rndPointsMax } from "@/state/research";
import { mapGetters, mapState } from "vuex";
export default {
  components: { ProgressBar },
  props: ["jobId", "color"],
  computed: {
    ...mapState({
      rndPoints(){
        return this.$store.getters["research/rndPoints"];
      },
      rndPointsMax(){
        return this.$store.getters["research/rndPointsMax"];
      },
      progress() {
        return (this.rndPoints / this.rndPointsMax);
      }
    })
  }
};
</script>

<style scoped>
.bank-block {
  border-top: 4px solid red;
  border-radius: 4px 4px 0 0;
}
.rndPoints {
  background-color: #449fe9;
}

.dark-mode .rndPoints {
  color: white !important;
}
</style>