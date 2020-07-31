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
        infoId="cult"
        :icon="require('@/assets/art/cult/narsie_anim.gif')"
        title="An intrusive thought..."
        :options="[
          {name: 'Back'},
          {name: '...', icon: require('@/assets/art/combat/items/pill5.png'), iconClass:'mx--0'},
          {name: 'Self Care', icon: require('@/assets/art/botany/PlantBanana.png'), iconClass:'mx--0'},
          {name: 'Something Nice', icon: require('@/assets/art/combat/items/cloak/capcloak.png'), iconClass:'mx--0'},
          {name: 'Cuddly Pets', icon: require('@/assets/art/combat/enemies/runtime.png'), iconClass:'mx--0'},
        ]"
      >
        <template slot="Back">
          <span>
            <img :src="require('@/assets/art/shop/items/cultpart_anim.gif')"/>
          </span>
        </template>

        <template slot="...">
          <span>
            <img :src="require('@/assets/art/combat/enemies/boss/cult4_anim.gif')"/>
            <img :src="require('@/assets/art/cult/blood.png')"/>
            <img :src="require('@/assets/art/combat/enemies/chaplain.png')"/>
            <img :src="require('@/assets/art/shop/items/startcult.png')"/>
          </span>
        </template>

        <template slot="Self Care">
          <span>
           <img :src="require('@/assets/art/cult/blood1.png')"/> 
           <img :src="require('@/assets/art/cult/blood1.png')"/> 
           <img :src="require('@/assets/art/cult/blood1.png')"/> 
           <img :src="require('@/assets/art/cult/blood1.png')"/> 
          </span>
        </template>

        <template slot="Something Nice">
          <span>
            <img :src="require('@/assets/art/cult/Raisedead_rune.png')"/>
            <img :src="require('@/assets/art/cult/Manifest_rune.png')"/>
            <img :src="require('@/assets/art/cult/Sacrifice_rune.png')"/>
            <img :src="require('@/assets/art/cult/Apocalypse.png')"/>
          </span>
        </template>

        <template slot="Cuddly Pets">
          <span>
            <img :src="require('@/assets/art/combat/enemies/Ian.png')"/>              
            <img :src="require('@/assets/art/combat/enemies/pete.png')"/>
            <img :src="require('@/assets/art/combat/enemies/bee_anim.gif')"/>
          </span>          

          <span>
           <img :src="require('@/assets/art/cult/blood1.png')"/> 
           <img :src="require('@/assets/art/cult/blood1.png')"/> 
           <img :src="require('@/assets/art/cult/blood1.png')"/> 
          </span>

          <span>
            <img :src="require('@/assets/art/cult/narsian.png')"/>              
            <img :src="require('@/assets/art/cult/behemoth_anim.gif')"/>
            <img :src="require('@/assets/art/cult/harvester_anim.gif')"/>
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
            :actionName="'INVOKE'"
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
import { JOB } from "@/data/cult";
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
      return "cult";
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