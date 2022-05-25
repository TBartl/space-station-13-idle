<template>
  <div>
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
        infoId="bartending"
        :icon="require('@/assets/art/jobinfo/bartending.png')"
        title="Naomi Teagarden the Bartender says..."
        :options="[
          {name: 'Back'},
          {name: 'Drinks?', icon: require('@/assets/art/bartending/arnoldpalmer.png'), iconClass:'mx--2'},
          {name: 'Mixing?', icon: require('@/assets/art/bartending/icon.png'), iconClass:'mx--1'},
          {name: 'Getting Drunk?', icon: require('@/assets/art/bartending/anim/gargleblaster.gif'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>
            <i>New here, huh</i>?
          </span>
          <span>
            It's time to mix up a nice
            <img
              class="mx--2"
              :src="require('@/assets/art/bartending/anim/singulo.gif')"
            />
            <b>
              <i>Singulo</i>
            </b>.
          </span>
          <span>If you aren't intimidated by the machinery, you're ready.</span>
        </template>
        <template slot="Drinks?">
          <span>
            That's right, you can mix yourself up some strong-as-hell
            <img
              class="mx--2"
              :src="require('@/assets/art/bartending/whiterussian.png')"
            />
            <b>drinks</b> here. They can rejuvenate you just like food does.
          </span>
        </template>
        <template slot="Mixing?">
          <span>Yeah. So as you get more skilled, you'll learn how to make more complicated things.</span>
          <span>
            I, for one, can make you just about anything. How's about a
            <img
              class="mx--2"
              :src="require('@/assets/art/bartending/silencer.png')"
            />
            <b>Silencer</b> for that mouth of yours?
          </span>
        </template>
        <template slot="Getting Drunk?">
          <span>
            That's how alcohol works. The
            <img
              class="mx--0"
              :src="require('@/assets/art/bartending/anim/changelingsting.gif')"
            />
            <b>stronger the mix</b> you make, the more it'll affect you.
          </span>
        </template>
      </job-info>

      <div class="row my-3" v-if="this.$store.getters['upgrades/get']('drinkTable')">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="content-block">
            <div class="d-flex flex-row align-items-center">
              <img :src="require('@/assets/art/bartending/upgrade1.png')" />
              <h5 class="mb-1">Upgrades</h5>
            </div>
            <p>
              <b>Unique Drinks:</b>
              {{$store.getters['bartending/drinkTableCount']}}/{{$store.getters['bartending/drinkTableMax']}}
            </p>
            <p>
              <b>Bonus:</b>
              {{(100*$store.getters["bartending/drinkTableBonus"]).toFixed()}}%
            </p>
          </div>
        </div>
      </div>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{typedEntry[0]}}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action :jobId="jobId" :actionName="'MIX'" :action="action" :actionId="actionId" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findLastIndex } from "lodash";
import { JOB } from "@/data/bartending";
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
      return "bartending";
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