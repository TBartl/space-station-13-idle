<template>
  <div>
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row mb-4">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>

      <job-info
        infoId="tinkering"
        :icon="require('@/assets/art/jobinfo/tinkering.png')"
        title="Hits-The-Wizard the Ashwalker hisses..."
        :options="[
					{name: 'Back'},
					{name: 'Junk?', icon: require('@/assets/art/graytiding/junk.png'), iconClass:'mx--0'},
					{name: 'Recycling?', icon: require('@/assets/art/tinkering/burnjunk.png'), iconClass:'mx--0'},
					{name: 'Weaponsss?', icon: require('@/assets/art/combat/items/melee_c4.png'), iconClass:'mx--1'},
					{name: 'Armor?', icon: require('@/assets/art/combat/items/arm_b2.png'), iconClass:'mx--1'},
					{name: 'Upgrade?', icon: require('@/assets/art/tinkering/upgrade1.png'), iconClass:'mx--1'}
				]"
      >
        <template slot="Back">
          <span>
            You nanotrasssen dogsss think you're ssso advanced with all your fancy
            <img
              class="mx--1"
              :src="require('@/assets/art/fabrication/icon.png')"
            />
            <b>ssscience</b>.
          </span>
          <span>
            But usss ashwalkersss can craft
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/melee_c4.png')"
            />
            <b>weaponsss</b> and
            <img class="mx--2" :src="require('@/assets/art/combat/items/arm_b2.png')" />
            <b>armor</b> jussst asss robussst using only the
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/junk.png')"
            />
            <b>natural resssourcesss</b> of thisss ssstation.
          </span>
        </template>
        <template slot="REPLACEME">
          <span>REPLACEME</span>
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
            :actionName="'CRAFT'"
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
import { JOB } from "@/data/tinkering";
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
      return "tinkering";
    },
    ...mapState({
      level(state, getters) {
        return getters[this.jobId + "/level"];
      }
    }),
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