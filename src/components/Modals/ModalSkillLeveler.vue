<template>
  <div class="skill-leveler overflow-auto h-100">
    <button
      class="inventory-item d-inline-block"
      v-for="job in allJobs"
      :key="job.id"
      @click="levelJob(job.id)"
    >
      <img :src="job.icon" />
      <p>{{job.name}}</p>
      <p>{{$store.getters[job.id+'/level']}}/{{maxLevel}}</p>
    </button>
  </div>
</template>

<script>
import { xpFromLevel } from "@/data/experience";
import { ALL_JOBS } from "@/data/jobs";
import { MAX_LEVEL } from "@/data/experience";

export default {
  components: {},
  computed: {
    id() {
      return this._uid.toString();
    },
    allJobs() {
      return ALL_JOBS;
    },
    maxLevel() {
      return MAX_LEVEL;
    }
  },
  methods: {
    levelJob(jobId) {
      let level = this.$store.getters[jobId + "/level"];
      let xpDiff = xpFromLevel(level + 1) - xpFromLevel(level);
      this.$store.commit(jobId + "/addXP", xpDiff);
    }
  }
};
</script>

<style scoped>
.skill-leveler {
  background-color: rgb(218, 218, 218);
}
p {
  font-size: 10px;
}
</style>