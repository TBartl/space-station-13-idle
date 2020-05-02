<template>
  <div class="content-mining">
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row">
        <div class="col-2" v-for="[actionId, action] in Object.entries(actions)" :key="actionId">
          <mining-action :action="action" :actionId="actionId" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { JOB, ACTIONS } from "@/data/mining";
import ContentAbstract from "@/components/Content/ContentAbstract";
import MiningAction from "@/components/Content/Mining/MiningAction";
export default {
  extends: ContentAbstract,
  components: { MiningAction },
  computed: {
    job() {
      return JOB;
    },
    actions() {
      return ACTIONS;
    }
  }
};
</script>

<style scoped>
</style>