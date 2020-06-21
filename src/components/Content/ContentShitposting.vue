<template>
  <div>
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row mb-2">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>

      <job-info
        infoId="REPLACEME"
        :icon="require('@/assets/art/jobinfo/REPLACEME.png')"
        title="REPLACEME the REPLACEME says..."
        :options="[
					{name: 'Back'},
					{name: 'REPLACEME', icon: require('@/assets/art/debug/A.png'), iconClass:'mx--1'}
				]"
      >
        <template slot="Back">
          <span>REPLACEME</span>
          <span>
            Example
            <img class="mx--2" :src="require('@/assets/art/mining/SheetIron.png')" />
            <b>Weighted</b>.
          </span>
        </template>
        <template slot="REPLACEME">
          <span>REPLACEME</span>
        </template>
      </job-info>

      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 col-xl-2"
          v-for="[actionId, action] in viewableActions"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'DISCUSS'"
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
import { JOB } from "@/data/shitposting";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import PotionHeader from "@/components/Content/PotionHeader";
import GenericAction from "@/components/Content/GenericAction";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  components: { GenericAction, ExperienceHeader, PotionHeader },
  computed: {
    jobId() {
      return "shitposting";
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
      return this.$store.getters[this.jobId + "/filteredActionEntries"];
    }
  }
};
</script>

<style scoped>
</style>