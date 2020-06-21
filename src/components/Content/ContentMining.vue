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
        infoId="mining"
        :icon="require('@/assets/art/jobinfo/mining.png')"
        title="Lathius Talram the Shaft Miner says..."
        :options="[
					{name: 'Back'},
					{name: 'Metal?', icon: require('@/assets/art/mining/SheetIron.png'), iconClass:'mx--2'}
				]"
      >
        <template slot="Back">
          <span>
            No time to chat. Have to get down there and mine some
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetIron.png')"
            />
            <b>Metal</b>.
          </span>
        </template>
        <template slot="Metal?">
          <span>What, you're still here?</span>
          <span class="mt-1">
            Yeah,
            <img class="mx--2" :src="require('@/assets/art/mining/SheetIron.png')" />
            <b>Metal</b>. Not much else to mine.
          </span>
          <span class="mt-1">What's it used for? You sure do ask a lot of questions.</span>
          <span class="mt-1">
            I think those purple-shirts down at
            <img
              class="mx--0"
              :src="require('@/assets/art/fabrication/icon.png')"
            />
            <b>Fabrication</b> might turn it into weapons or something.
          </span>
          <span class="mt-1">
            Or maybe they just sell it straight for
            <img
              class="mx--0 mr-1"
              :src="require('@/assets/art/misc/coin.png')"
            />
            <b>Money</b>.
          </span>
          <span class="mt-1">
            Don't really know. And as long as my tools are getting
            <img
              class="mx--0 mr-1"
              :src="require('@/assets/art/mining/upgrade1.png')"
            />
            <b>Upgraded</b>, I don't really care.
          </span>
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
            :actionName="'MINE'"
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
import { JOB } from "@/data/mining";
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
      return "mining";
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
img {
  width: 32px;
}
</style>