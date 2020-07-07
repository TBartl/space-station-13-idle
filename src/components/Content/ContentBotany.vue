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
        infoId="botany"
        :icon="require('@/assets/art/jobinfo/botany.png')"
        title="Daisy Holmes the Botanist says..."
        :options="[
					{name: 'Back'},
					{name: 'Seeds?', icon: require('@/assets/art/botany/seed.png'), iconClass:'mx--2'},
					{name: 'Plants?', icon: require('@/assets/art/botany/PlantPepperhot.png'), iconClass:'mx--2'},
					{name: 'Stats?', icon: require('@/assets/art/combat/precision.png'), iconClass:'mx--0'}
				]"
      >
        <template slot="Back">
          <span>
            Before I became a
            <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
            <b>Botanist</b>, I had a crippling addiction to space weed.
          </span>
          <span>
            Now, I also get to grow cool
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>Plants</b>.
          </span>
        </template>
        <template slot="Seeds?">
          <span>
            Thanks to science, you can grow any type of
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>Plant</b> from just a single type of Seed.
          </span>
          <span>
            Head down to
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>Cargo</b> and you can order some, assuming you have the
            <img
              class="mx--2"
              :src="require('@/assets/art/misc/coin-padded.png')"
            />
            <b>Cash</b>.
          </span>
        </template>
        <template slot="Plants?">
          <span>
            Most of the
            <img class="mx--2" :src="require('@/assets/art/botany/PlantPepperhot.png')" />
            <b>Plants</b> you'll grow here can be eaten to restore your
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/health.gif')"
            />
            <b>Health</b>.
          </span>
          <span>
            While I prefer my produce
            <i>au naturel</i>, you can also
            <img class="mx--2" :src="require('@/assets/art/cooking/icon.png')" />
            <b>Cook</b> it to bring out even more flavor.
          </span>
        </template>
        <template slot="Stats?">
          <span>They say you are what you eat.</span>
          <span>
            Depending on the
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>Food</b> you're using, you'll find that some of your
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/precision.png')"
            />
            <img class="mx--1" :src="require('@/assets/art/combat/skull.png')" />
            <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
            <b>Combat Stats</b> will be improved or lowered.
          </span>
          <span>
            These
            <img class="mx--0" :src="require('@/assets/art/combat/precision.png')" />
            <img class="mx--1" :src="require('@/assets/art/combat/skull.png')" />
            <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
            <b>Stat</b> changes will be applied just by having the
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>Food</b> equipped, even if you aren't eating it. Crazy, huh?
          </span>
        </template>
      </job-info>

      <div class="row my-3" v-if="this.$store.getters['upgrades/get']('botanyTrays')">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="content-block">
            <div class="d-flex flex-row align-items-center">
              <img :src="require('@/assets/art/botany/upgrade1.png')" />
              <h5 class="mb-1">Upgrades</h5>
            </div>
            <div class="custom-control custom-switch mt-1">
              <input
                v-model="upgradeLeftEnabled"
                type="checkbox"
                class="custom-control-input"
                id="upgradeLeftEnabled"
              />
              <label class="custom-control-label" for="upgradeLeftEnabled">Upgrade Enabled (Left)</label>
            </div>
            <div
              class="custom-control custom-switch mt-1"
              v-if="this.$store.getters['upgrades/get']('botanyTrays') > 1"
            >
              <input
                v-model="upgradeRightEnabled"
                type="checkbox"
                class="custom-control-input"
                id="upgradeRightEnabled"
              />
              <label class="custom-control-label" for="upgradeRightEnabled">Upgrade Enabled (Right)</label>
            </div>
          </div>
        </div>
      </div>

      <div class="tier row" v-for="(tierEntries, tier) in viewableTieredActions" :key="tier">
        <div class="col-12">
          <span class="tier-text">TIER {{tier+1}}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in tierEntries"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'GROW'"
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
import { JOB } from "@/data/botany";
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
      return "botany";
    },
    job() {
      return JOB;
    },
    viewableTieredActions() {
      let entries = this.$store.getters[this.jobId + "/filteredActionEntries"];

      let highestTier = 0;
      entries.forEach(entry => {
        highestTier = Math.max(entry[1].tier, 0);
      });
      let tiers = [];
      for (let t = 0; t < highestTier; t++) tiers.push([]);

      for (let entry of entries) {
        let tier = entry[1].tier;
        tiers[tier - 1].push(entry);
      }

      return tiers;
    },
    upgradeLeftEnabled: {
      get() {
        return this.$store.getters["botany/upgradeLeftEnabled"];
      },
      set(value) {
        this.$store.commit("botany/setUpgradeLeftEnabled", value);
      }
    },
    upgradeRightEnabled: {
      get() {
        return this.$store.getters["botany/upgradeRightEnabled"];
      },
      set(value) {
        this.$store.commit("botany/setUpgradeRightEnabled", value);
      }
    }
  }
};
</script>


<style scoped>
.tier-text {
  font-size: 20;
  font-weight: bold;
  color: rgba(245, 245, 245, 0.555);
}
</style>