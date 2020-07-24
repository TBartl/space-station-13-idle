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
        infoId="cargonia"
        :icon="require('@/assets/art/jobinfo/cargonia.png')"
        title="Moffew the Quartermaster flutters..."
        :options="[
          {name: 'Back'},
          {name: 'Money?', icon: require('@/assets/art/misc/coin.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>
          Just act like you are doing your duty bringing in shipments             <img
              :src="require('@/assets/art/cargonia/mineral2.png')"
            />. Once we have enough arms             <img
              :src="require('@/assets/art/combat/items/hand/gunR_naggant.png')"
            /> we can declare our independence for good. Keep an eye out for anyone that might support the cause or be willing to contribute funds<img
              :src="require('@/assets/art/validhunting/guilty.png')"
            />.
          </span>
        </template>
        <template slot="Money?">
          <span>I'm gonna pop some tags.</span>
          <span>Only got twenty dollars in my pocket.</span>
          <span>
            Wait you're still here? What are you doing go move freight!
            <img
              :src="require('@/assets/art/shop/items/droppod.png')"
            />
            <b>NOW!</b>.
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
            :actionName="'SMUGGLE'"
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
import { JOB } from "@/data/cargonia";
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
      return "cargonia";
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
