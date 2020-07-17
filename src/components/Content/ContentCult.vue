<template>
  <div>
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row mb-2">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="mt-2 mt-md-0 col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>
      <job-info
        infoId="cult"
        :icon="require('@/assets/art/combat/enemies/ai_anim.gif')"
        title="ATHENA the AI core says..."
        :options="[
          {name: 'Back'},
          {name: 'New job?', icon: require('@/assets/art/mining/icon.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>
            System initializing. New job procedures activated.
          </span>
        </template>
        <template slot="New job?">
          <span>The administration has requested the creation of a new job.</span>
          <span>I have created a simple, minimalistic template with which to build off of.</span>
          <span>
            In order to continue, you're going to have to write the rest of the
            <img
              :src="require('@/assets/art/combat/enemies/ai_anim.gif')"
            />
            <b>Code</b>.
          </span>
        </template>
      </job-info>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in viewableActions"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'WRITE'"
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
import { JOB } from "@/data/cult";
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
      return "cult";
    },
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
img {
  width: 32px;
}
</style>