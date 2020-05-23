<template>
  <div>
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row">
        <div class="col-12 mb-4">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="col-6 col-md-4 col-lg-3 col-xl-2" v-for="[actionId, action] in viewableActions" :key="actionId">
          <generic-action
            :jobId="jobId"
            :actionName="'SYNTHIZE'"
            :action="action"
            :actionId="actionId"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findLastIndex } from "lodash";
import { JOB } from "@/data/chemistry";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import GenericAction from "@/components/Content/GenericAction";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  components: { GenericAction, ExperienceHeader },
  computed: {
    jobId() {
      return "chemistry";
    },
    ...mapState({
      level(state, getters) {
        return getters[this.jobId + "/level"];
      }
    }),
    job() {
      return JOB;
    },
    viewableActions() {
			let actions = this.$store.getters[this.jobId + "/completeActions"];
      let entries = Object.entries(actions);
      let lastActionable = findLastIndex(entries, entry => {
        return this.level >= entry[1].requiredLevel;
      });

      return entries.slice(0, lastActionable + 2);
    }
  }
};
</script>

<style scoped>
</style>