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
        infoId="chemistry"
        :icon="require('@/assets/art/jobinfo/chemistry.png')"
        title="Mikal Blak the Chemist says..."
        :options="[
					{name: 'Back'},
					{name: 'Power?', icon: require('@/assets/art/engineering/power.png'), iconClass:'mx--0'},
					{name: 'Bases?', icon: require('@/assets/art/chemistry/chemOil.png'), iconClass:'mx--1'},
					{name: 'CHEMs?', icon: require('@/assets/art/chemistry/faunaPerfume.png'), iconClass:'mx--1'},
					{name: 'Combat?', icon: require('@/assets/art/combat/precision.png'), iconClass:'mx--0'},
				]"
      >
        <template slot="Back">
          <span>Flourine, Uranium, Carbon, Potassium, Arsenic, Sulfur...</span>
          <span>I'm sorry, did you need something?</span>
        </template>
        <template slot="Power?">
          <span>
            These chem dispensers use up a lot of
            <img
              class="mx--0"
              :src="require('@/assets/art/engineering/power.png')"
            />
            <b>Power</b>.
          </span>
          <span>
            You'll need to
            <i>periodically</i> check up on the
            <img class="mx--2" :src="require('@/assets/art/engineering/icon.png')" />
            <b>Engineers</b> to make sure you're stocked up.
          </span>
        </template>
        <template slot="Bases?">
          <span>
            Before you can make any
            <img
              class="mx--2"
              :src="require('@/assets/art/chemistry/faunaPerfume.png')"
            />
            <b>CHEMms</b>, you'll need to synthesize the individual
            <img
              class="mx--2"
              :src="require('@/assets/art/chemistry/chemOil.png')"
            />
            <b>Bases</b> that make it up.
          </span>
          <span>
            You can speed up this process with
            <img
              class="mx--0"
              :src="require('@/assets/art/chemistry/upgrade1.png')"
            />
            <b>Upgrades</b> from
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>Cargo</b>.
          </span>
        </template>
        <template slot="CHEMs?">
          <span>
            <img class="mx--2" :src="require('@/assets/art/chemistry/faunaPerfume.png')" />
            <b>CHEMs</b> provide unique bonuses to individual
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/icon.png')"
            />
            <img class="mx--0" :src="require('@/assets/art/engineering/icon.png')" />
            <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
            <b>Jobs</b>.
          </span>
          <span>
            Each
            <img class="mx--2" :src="require('@/assets/art/chemistry/faunaPerfume.png')" />
            <b>CHEM</b> you make will have a limited number of
            <img
              class="mx--2"
              :src="require('@/assets/art/chemistry/faunaPerfume.png')"
            />
            <b>CHEM</b> before it depletes.
          </span>
          <span>
            You can equip
            <img
              class="mx--2"
              :src="require('@/assets/art/chemistry/faunaPerfume.png')"
            />
            <b>CHEMs</b> near the top section of each job.
          </span>
        </template>
        <template slot="Combat?">
          <span>
            All these specialized
            <img class="mx--2" :src="require('@/assets/art/chemistry/faunaPerfume.png')" />
            <b>CHEMs</b> and you
            <i>also</i> want something for
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/precision.png')"
            />
            <b>Combat?</b>
          </span>
          <span>Man, the technology just isn't there for that.</span>
          <span>I mean uhh... that sounds dangerous and I don't want to get involved with anything like that.</span>
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
            :actionName="'SYNTHESIZE'"
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
import PotionHeader from "@/components/Content/PotionHeader";
import GenericAction from "@/components/Content/GenericAction";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  components: { GenericAction, ExperienceHeader, PotionHeader },
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