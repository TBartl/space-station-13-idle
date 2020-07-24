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
        infoId="traitor"
        :icon="require('@/assets/art/jobinfo/traitor.png')"
        title="Syndicate Ansible crackles..."
        :options="[
          {name: 'Back'},
          {name: 'Telecrystal?', icon: require('@/assets/art/traitor/telecrystal.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>
          Some idiot left their communicator open and now there's Telecrystals            <img
              :src="require('@/assets/art/shop/items/telecrystal.png')"
            /> all over this station. The syndicate isn't sending you unlimited gear to you so you get these instead.            <img
              :src="require('@/assets/art/traitor/telecrystal.png')"
            />
          </span>
        </template>
        <template slot="Telecrystal?">
          <span>You get twenty of them.</span>
          <span>Spend them however you want in your uplink below, because you're not getting more.</span>
          <span>
            I know they are ugly but you have to use
            <img
              :src="require('@/assets/art/traitor/telecrystal.png')"
            />
            rather than the normal pure red ones.
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
            :actionName="'PURCHASE'"
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
import { JOB } from "@/data/traitor";
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
      return "traitor";
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
