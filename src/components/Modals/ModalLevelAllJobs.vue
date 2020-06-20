<template>
  <div class="d-flex flex-column align-items-center m-5">
    <h3 class="text-center mb-4">Are you sure you want to level all jobs to the max level?</h3>
    <button class="btn btn-primary" @click="levelJobsClicked">CONFIRM</button>
  </div>
</template>

<script>
import { MAX_LEVEL, xpFromLevel } from "@/data/experience";
import { ALL_JOBS } from "@/data/jobs";

export default {
  methods: {
    levelJobsClicked() {
      let xpDiff = xpFromLevel(MAX_LEVEL);
      ALL_JOBS.forEach(job => {
        this.$store.commit(job.id + "/addXP", xpDiff);
      });
    }
  }
};
</script>