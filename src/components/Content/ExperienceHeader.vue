<template>
  <div class="experience-header">
    <div
      class="experience-block d-flex align-items-center justify-content-around bg-white p-2"
      :style="{'border-color': color}"
    >
      <div class="d-flex align-items-center">
        <span class="mr-1">LEVEL</span>
        <span class="p-1 level rounded">95/99</span>
      </div>
      <div class="d-flex align-items-center">
        <span class="mr-1">XP</span>
        <span class="p-1 xp rounded">{{xp}}/456,789,012</span>
      </div>
    </div>
    <progress-bar style="border-radius: 0 !important" />
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import { mapGetters, mapState } from "vuex";
export default {
  components: { ProgressBar },
  props: ["jobId", "color"],
  computed: {
    ...mapState({
      xp(state, getters) {
        return getters[this.jobId + "/xp"];
      }
    })
  }
};
</script>

<style scoped>
.experience-block {
  border-top: 4px solid red;
  border-radius: 4px 4px 0 0;
}
.level {
  background-color: #e99c44;
}
.xp {
  background-color: #449fe9;
}
</style>