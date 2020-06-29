<template>
  <tr>
    <td>
      <img :src="icon" />
    </td>
    <td>{{level}}/{{maxLevel}}</td>
    <td class="xp">{{Math.round(xp) | cleanNum}}/{{nextLevelXP | cleanNum}}</td>
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
        return getters[this.jobId + "/virtualXp"];
      },
      level(state, getters) {
        return getters[this.jobId + "/visualLevel"];
      },
      maxLevel() {
        return MAX_LEVEL;
      },
      thisLevelXP() {
        return xpFromLevel(this.level);
      },
      nextLevelXP() {
        let level = this.level + 1;
        if (!this.$store.getters["settings/showVirtualLevels"])
          level = Math.min(level, MAX_LEVEL);
        return xpFromLevel(level);
      },
      progress() {
        if (
          !this.$store.getters["settings/showVirtualLevels"] &&
          this.level == MAX_LEVEL
        )
          return 1;
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
.xp {
  min-width: 130px;
}
</style>