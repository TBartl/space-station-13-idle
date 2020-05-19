<template>
  <tr>
    <td>
      <img :src="icon" />
    </td>
    <td>{{level}}/{{maxLevel}}</td>
    <td>{{xp}}/{{nextLevelXP}}</td>
    <td width="99%">
      <progress-bar style="border-radius: 0 !important" :progress="progress" />
    </td>
  </tr>
</template>

<script>
import { mapState } from "vuex";
import ProgressBar from "@/components/ProgressBar";
import { MAX_LEVEL, xpFromLevel, levelFromXP } from "@/data/experience";
export default {
  components: { ProgressBar },
  props: ["jobId", "icon"],
  computed: {
    ...mapState({
      xp(state, getters) {
        return getters[this.jobId + "/xp"];
      },
      level(state, getters) {
        return getters[this.jobId + "/level"];
      },
      maxLevel() {
        return MAX_LEVEL;
      },
      thisLevelXP() {
        return xpFromLevel(this.level);
      },
      nextLevelXP() {
        return xpFromLevel(this.level + 1);
      },
      progress() {
        return (
          (this.xp - this.thisLevelXP) / (this.nextLevelXP - this.thisLevelXP)
        );
      }
    })
  }
};
</script>

<style scoped>
td {
  padding: 0.2rem 1.2rem 0.2rem 0.3rem !important;
	vertical-align: middle !important;
}
td:last-child {
	padding-right: 0 !important;
}
</style>