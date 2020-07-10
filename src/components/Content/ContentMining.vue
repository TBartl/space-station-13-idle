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
        infoId="mining"
        :icon="require('@/assets/art/jobinfo/mining.png')"
        title="Lathius Talram the Shaft Miner says..."
        :options="[
					{name: 'Back'},
					{name: 'Mining?', icon: require('@/assets/art/mining/icon.png'), iconClass:'mx--0'},
					{name: 'Ore?', icon: require('@/assets/art/mining/SheetIron.png'), iconClass:'mx--2'}
				]"
      >
        <template slot="Back">
          <span>
            No time to chat. Have to get down there and
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/icon.png')"
            />
            <b>Mine</b> some
            <img class="mx--2" :src="require('@/assets/art/mining/SheetGlass.png')" />
            <b>Ore</b>.
          </span>
        </template>
        <template slot="Mining?">
          <span>What, you're still here?</span>
          <span>
            <img class="mx--0" :src="require('@/assets/art/mining/icon.png')" />
            <b>Mining</b>'s real easy, kid. Just go down there and click on whatever
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/OreIron.png')"
            />
            <b>Vein</b> it is that you want to mine.
          </span>
          <span>
            After a few seconds, you should have have yourself some fully processed
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetIron.png')"
            />
            <b>Ore</b>.
          </span>
          <span>
            Beginners start by pounding 
            <img
              class="mx--0"

              :src="require('@/assets/art/mining/OreGlass.png')"
            />
            <b>Sand</b> to make some
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetGlass.png')"
            /> <b>Glass</b>.
          </span>
          <span>
            Of course, you're probably going to need to build some experience up before you go after some of the
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetGold.png')"
            />
            <img class="mx--1" :src="require('@/assets/art/mining/SheetUranium.png')" />
            <img class="mx--1" :src="require('@/assets/art/mining/SheetDiamond.png')" />
            <b>fancier stuff</b>
          </span>
          <span></span>
        </template>
        <template slot="Ore?">
          <span>
            Yeah,
            <img class="mx--2" :src="require('@/assets/art/mining/SheetIron.png')" />
            <b>Ore</b>. Not much else to mine.
          </span>
          <span>What's it used for? You sure do ask a lot of questions.</span>
          <span>
            I think those purple-shirts down at
            <img
              class="mx--0"
              :src="require('@/assets/art/fabrication/icon.png')"
            />
            <b>Fabrication</b> might turn it into weapons or something, or you could just sell it straight for
            <img
              class="mx--2"
              :src="require('@/assets/art/misc/coin-padded.png')"
            />
            <b>Money</b>.
          </span>
          <span>
            Don't really know. And as long as my tools are getting
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/upgrade1.png')"
            />
            <b>Upgraded</b>, I don't really care.
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
