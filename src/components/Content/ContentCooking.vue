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
        infoId="cooking"
        :icon="require('@/assets/art/jobinfo/cooking.png')"
        title="Korol Konents the Cook says..."
        :options="[
					{name: 'Back'},
					{name: 'Produce?', icon: require('@/assets/art/botany/PlantPepperhot.png'), iconClass:'mx--2'},
					{name: 'Meat?', icon: require('@/assets/art/cooking/meatAnimal.png'), iconClass:'mx--1'},
					{name: 'Quality?', icon: require('@/assets/art/cooking/upgrade1.png'), iconClass:'mx--0'},
					{name: 'Cannibalism?', icon: require('@/assets/art/cooking/meatFoot.png'), iconClass:'mx--2'}
				]"
      >
        <template slot="Back">
          <span>
            <i>Mamma mia</i>, it's-a time to cook-a a very-a spicy
            <img
              class="mx--2"
              :src="require('@/assets/art/cooking/pasta1.png')"
            />
            <b>
              <i>Spaghett</i>
            </b>.
          </span>
        </template>
        <template slot="Produce?">
          <span>
            The pigornes down in
            <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
            <b>Botany</b> might grow-a you some
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>Produrre</b>, unless they're
            <i>alto di droghe.</i>
          </span>
        </template>
        <template slot="Meat?">
          <span>You can't-a make an omelette without breaking a few eggs.</span>
          <span>
            If you want the freshest-a
            <img
              class="mx--2"
              :src="require('@/assets/art/cooking/meatAnimal.png')"
            />
            <b>Meat</b>, there's no better way to get it than straight from the
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/enemies/pete.png')"
            />
            <b>Source</b>.
          </span>
          <span>
            <i>Che macello!</i>
          </span>
        </template>
        <template slot="Quality?">
          <span>
            With the proper
            <img class="mx--2" :src="require('@/assets/art/cooking/upgrade1.png')" />
            <b>Equipment</b> you may just be able to prepare a dish
            <i>di qualità migliore</i>.
          </span>
          <span>
            These meals will
            <img class="mx--2" :src="require('@/assets/art/misc/coin-padded.png')" />
            <b>Sell</b> for more,
            <img class="mx--0" :src="require('@/assets/art/combat/health.gif')" />
            <b>Heal</b> for more, and even provide-a you with more
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/precision.png')"
            />
            <img class="mx--1" :src="require('@/assets/art/combat/skull.png')" />
            <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
            <b>Stats</b>.
          </span>
          <span>
            <i>Che fortuna!</i>
          </span>
        </template>
        <template slot="Cannibalism?">
          <span>
            <i>Frutti proibiti sono i più dolci.</i>
          </span>
          <span>
            <i>Tranquillo signore.</i> If you go telling-a the
            <img
              class="mx--0"
              :src="require('@/assets/art/jobinfo/shitcurity.png')"
            />
            <b>
              <i>Polizia</i>
            </b> just remember: revenge is a dish best served cold.
          </span>
          <span>
            You don't want to end up as someone's
            <i>pranzo</i>, do you?
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
            :actionName="'COOK'"
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
import { JOB } from "@/data/cooking";
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
      return JOB.id;
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