<template>
  <div>
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row mb-4">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="mt-2 mt-md-0 col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>

      <job-info
        infoId="engineering"
        :icon="require('@/assets/art/jobinfo/engineering.png')"
        title="Kyle Spier-Swenson the Station Engineer says..."
        :options="[
					{name: 'Back'},
					{name: 'Generating Power?', icon: require('@/assets/art/engineering/power.png'), iconClass:'mx--0'},
					{name: 'Uses For Power?', icon: require('@/assets/art/engineering/power.png'), iconClass:'mx--0'}
				]"
      >
        <template slot="Back">
          <span>...</span>
          <span>...</span>
          <span>Hmm? Oh no I wasn't sleeping, I was just... resting my eyes.</span>
        </template>
        <template slot="Generating Power?">
          <span>
            You want to know how to make
            <img
              class="mx--0"
              :src="require('@/assets/art/engineering/power.png')"
            />
            <b>Power</b>?
          </span>
          <span>
            A trained, 130 IQ STEM major engineer like myself can make power from just about anything:
            <img
              class="mx--2"
              :src="require('@/assets/art/chemistry/chemOil.png')"
            />
            <b>Chemicals</b>,
            <img class="mx--0" :src="require('@/assets/art/tinkering/burnjunk.png')" />
            <b>Junk</b>,
            <img class="mx--2" :src="require('@/assets/art/botany/PlantPotatobattery.png')" />
            <b>Plants</b>, you name it.
          </span>
          <span>For a smooth-brain like yourself? Maybe the stationary bicycle is more your speed.</span>
        </template>
        <template slot="Uses For Power?">
          <span>
            Are you dense? We're on a space station and you don't even know what
            <img
              class="mx--0"
              :src="require('@/assets/art/engineering/power.png')"
            />
            <b>Power</b> can do?
          </span>
          <span>
            Outside of keeping all of our vital systems running, I guess the "scientists" down in
            <img
              class="mx--0"
              :src="require('@/assets/art/fabrication/icon.png')"
            />
            <b>Fabrication</b> use it for their toys, and the
            <img
              class="mx--1"
              :src="require('@/assets/art/chemistry/icon.png')"
            />
            <b>Chemists</b> use it to synthesize their drugs.
          </span>
        </template>
      </job-info>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{typedEntry[0]}}</span>
        </div>
        <div
          class="col-6 col-md-4 col-lg-3 col-xl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'ELECTRIFY'"
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
import { JOB } from "@/data/engineering";
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
      return "engineering";
    },
    job() {
      return JOB;
    },
    viewableTypedActionEntries() {
      let entries = this.$store.getters[this.jobId + "/filteredActionEntries"];

      let toReturn = {}; // type: [entries]
      for (let entry of entries) {
        let type = entry[1].type;
        if (!toReturn[type]) toReturn[type] = [entry];
        else toReturn[type].push(entry);
      }

      return toReturn;
    }
  }
};
</script>

<style scoped>
.type-text {
  font-size: 20;
  font-weight: bold;
  color: rgba(245, 245, 245, 0.555);
}
</style>