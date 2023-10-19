<template>
  <div class="shitposting">
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row mb-4 sticky">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="mt-2 mt-md-0 col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>

      <job-info
        infoId="shitposting"
        :icon="require('@/assets/art/jobinfo/shitposting.png')"
        title="Player420 the Shit Poster says..."
        :options="[
					{name: 'Back'},
					{name: 'Shitposting?', icon: require('@/assets/art/shitposting/icon.png'), iconClass:'mx--1'},
					{name: 'OK?'},
					{name: 'I\'m leaving now'},
				]"
      >
        <template slot="Back">
          <span>This kills tactical chairs. Running behind chairs that are pointed up to obscure your character, making it harder to hit. Yes, i am serious.</span>
        </template>
        <template slot="Shitposting?">
          <span>This is just like, George Orwell's book, nineteen eighty four.</span>
        </template>
        <template slot="OK?">
          <span>When they say "people are just going to do [x]" they really mean "I am going to do [x] specifically because this change pisses me off as a form of protest"</span>
        </template>
        <template slot="I'm leaving now">
          <span>It's not your codebase. It's our codebase. You can imply soft power as much as you want, but you don't have it. Division between the server and project is absolute. I'm not interested in reading dezzmont platitudes for the billionth time and won't be checking back in this thread.</span>
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
