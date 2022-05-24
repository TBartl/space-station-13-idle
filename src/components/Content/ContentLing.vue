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
        infoId="ling"
        :icon="require('@/assets/art/jobinfo/ling_anim.gif')"
        title="MONKEY(413) the totally normal monkey chimpers..."
        :options="[
          {name: 'Back'},
          {name: 'Ook?', icon: require('@/assets/art/jobinfo/ling_anim.gif'), iconClass:'mx--0'},
          {name: 'Cultivate', icon: require('@/assets/art/jobinfo/heart_anim.gif'), iconClass:'mx--0'},
          {name: 'Parasite', icon: require('@/assets/art/ling/headcrab.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>Ook?</span>
        </template>
        <template slot="Ook?">
          <span>
            Not convinced huh? You want ultimate control over your body too? All it takes is some
            <img
              :src="require('@/assets/art/jobinfo/heart_anim.gif')"
              class="mx--2"
            />
            <b>Cultivation</b>, and one tiny
            <img :src="require('@/assets/art/ling/headcrab.png')" class="mx--1" />
            <b>Alien Parasite</b>.
          </span>
          <span>You can let it in you however you want, but I would advise the mouth or anus. I'd advise you pick one and just go for it. Don't start in one place then give up halfway. You'll regret it.</span>
        </template>
        <template slot="Cultivate">
          <span>Find your center and focus inward.</span>
          <span>
            You can use foreign
            <img
              :src="require('@/assets/art/cooking/meatAnimal.png')"
              class="mx--0"
            />
            <b>Biomatter</b>
            to assist you. Focus on the tone of the muscle fiber and the twitch of your nerves.
          </span>
          <span>It will take a while but you can eventually break through to the next level of physical perfection. Don't be discouraged if you don't get it right away.</span>
        </template>
        <template slot="Parasite">
          <span>They are a little red slug, about the size of your forearm.</span>
          <span>
            Security tends to keep a pretty
            <img
              :src="require('@/assets/art/shop/items/seccrate.png')"
              class="mx--0"
            />
            <b>Tight Lid</b>. They are worth alot of money to the right buyer.
          </span>
          <span>
            Just keep checking crates until you find one, and remember
            <B>DON'T EAT IT!</B>
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
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'FORM'"
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
import { JOB } from "@/data/ling";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import PotionHeader from "@/components/Content/PotionHeader";
import GenericAction from "@/components/Content/GenericAction";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  components: {
    GenericAction,
    ExperienceHeader,
    PotionHeader
  },
  computed: {
    jobId() {
      return "ling";
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