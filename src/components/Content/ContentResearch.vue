<template>
  <div>

    <!-- Top bar with job icon/name (values loaded from src/data/research.js) -->
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />


    <div class="content-container">

      <!-- XP bar and chem slot -->
      <div class="row mb-2">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="mt-2 mt-md-0 col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>

      <!-- Tutorial box -->
      <job-info
        infoId="research"
        :icon="require('@/assets/art/jobinfo/research.png')"
        title="Magni Bronzebeard the Research Director says..."
        :options="[
          {name: 'Back'},
          {name: 'Research?', icon: require('@/assets/art/research/researchIcon.png'), iconClass:'mx--0'},
		      {name: 'Development?', icon: require('@/assets/art/research/protolathe.png'), iconClass:'mx--0'},
		      {name: 'Tools?', icon: require('@/assets/art/research/tools/multitool.png'), iconClass:'mx--0'},
		      {name: 'Mech equipment?', icon: require('@/assets/art/fabrication/mechripleymkii.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>
            Who let you in here? You're not a scientist. Oh, well... I suppose as long as you bring us precious ores, I'll let you use our facilities.
          </span>
        </template>
        <template slot="Research?">
          <span>Here at R&D, we strive to create new technologies that have never been seen before.</span>
          <span>The computers basically do all the research work for us, so in here we're mostly doing development.</span>
		  <span>That said, there are some ideas we've been stuck on. If you can bring us some stuff to research, we can unlock new recipes in other departments.</span>
          <span>
            In order to continue, you're going to have to write the rest of the
            <img
              :src="require('@/assets/art/combat/enemies/ai_anim.gif')"
            />
            <b>Code</b>.
          </span>
        </template>
        <template slot="Development?">
          <span>Actually making stuff here usually requires something with unique functionality to make it out of, as well as some sweet, sweet ore.</span>
          <span>For example, x-ray goggles might require some meson goggles and uranium. Radioactivity makes things more scientific, you know.</span>
        </template>
        <template slot="Tools?">
          <span>I'm sure you've heard of potions from chemistry, right? Those are great and all, but our tools can give you cool temporary job upgrades without getting you addicted to meth.</span>
          <span>Just remember that operating machinery while under the influence is not advised. You can't use a tool and a potion at the same time.</span>
        </template>
        <template slot="Mech equipment?">
          <span>We've had the computer doing overtime on mech equipment research.</span>
          <span>When it's ready, we'll let you know.</span>
        </template>
      </job-info>

      <!-- Actions (generated from actions defined in src/data/research.js) -->
      <div class="row">
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in viewableActions"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'DEVELOP'"
            :action="action"
            :actionId="actionId"
          />
        </div>
      </div>

      <!-- Shop sections -->
      <div class="row">
        <div class="col-12">
          <shop-section v-for="(section, index) in sections" :key="index" :section="section" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { findLastIndex } from "lodash";
import { JOB } from "@/data/research";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import PotionHeader from "@/components/Content/PotionHeader";
import GenericAction from "@/components/Content/GenericAction";
import { mapState } from "vuex";
import ShopSection from "@/components/Content/Shop/ShopSection";
import { SECTIONS } from "@/data/recipesShop";//Dictates which file to load shop sections from
export default {
  extends: ContentAbstract,
  components: { GenericAction, ExperienceHeader, PotionHeader, ShopSection },
  computed: {
    jobId() {
      return "research";
    },
    job() {
      return JOB;
    },
    viewableActions() {
      return this.$store.getters[this.jobId + "/filteredActionEntries"];
    },
    sections() {//Enables shop sections to load properly
      return SECTIONS;
    }
  }
};
</script>

<style scoped>
img {
  width: 32px;
}
</style>
