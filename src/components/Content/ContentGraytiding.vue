<template>
  <div>
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>

      <job-info
        infoId="graytiding"
        :icon="require('@/assets/art/jobinfo/graytiding.png')"
        title="Lexia Black the Assistant says..."
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

      <div class="row food my-2">
        <div class="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-2 offset-xl-5">
          <div class="content-block">
            <progress-bar
              class="mb-2 black-background"
              :progress="health / maxHealth"
              :text="`${Math.round(health)}/${maxHealth}`"
              :customClass="'bg-danger'"
            />
            <food-panel />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 col-xl-2"
          v-for="[actionId, action] in viewableActions"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'GRAYTIDE'"
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
import { JOB } from "@/data/graytiding";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import GenericAction from "@/components/Content/GenericAction";
import PotionHeader from "@/components/Content/PotionHeader";
import ProgressBar from "@/components/ProgressBar";
import FoodPanel from "@/components/Content/Combat/FoodPanel";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  components: {
    GenericAction,
    ExperienceHeader,
    PotionHeader,
    ProgressBar,
    FoodPanel
  },
  computed: {
    jobId() {
      return "graytiding";
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
    },
    health() {
      return this.$store.getters["playerMob/health"];
    },
    maxHealth() {
      return this.$store.getters["playerMob/stats"].maxHealth;
    }
  }
};
</script>

<style scoped>
.black-background {
  background-color: rgb(61, 61, 61) !important;
}
</style>