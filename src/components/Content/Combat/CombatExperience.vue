<template>
  <div class="mb-3">
    <div
      class="content-block content-block-top clickable"
      :class="{expanded: expanded}"
      @click="expanded = !expanded"
    >
      <img :src="require('@/assets/art/misc/eyes.png')" class="mr-2" />
      <span>Toggle Skill Progress</span>
    </div>
    <div v-if="expanded" class="content-block content-block-bottom">
      <table class="table table-sm pt-2">
        <thead>
          <tr>
            <th></th>
            <th>LEVEL</th>
            <th>XP</th>
            <th>PROGRESS</th>
          </tr>
        </thead>
        <tbody>
          <combat-experience-item
            v-for="(job, index) in jobs"
            :key="index"
            :jobId="job.id"
            :icon="job.icon"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CombatExperienceItem from "@/components/Content/Combat/CombatExperienceItem";
import { COMBAT_JOBS } from "@/data/jobs";
export default {
  components: { CombatExperienceItem },
  data() {
    return {
      expanded: true
    };
  },
  computed: {
    jobs() {
      return COMBAT_JOBS;
    }
  }
};
</script>

<style scoped>
table {
  vertical-align: center;
}
th {
  font-size: 13px;
  color: rgb(132, 135, 143);
}
</style>