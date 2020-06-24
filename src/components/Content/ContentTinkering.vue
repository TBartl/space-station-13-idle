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
        infoId="tinkering"
        :icon="require('@/assets/art/jobinfo/tinkering.png')"
        title="Hits-The-Wizard the Ashwalker hisses..."
        :options="[
					{name: 'Back'},
					{name: 'Junk?', icon: require('@/assets/art/graytiding/junk.png'), iconClass:'mx--0'},
					{name: 'Recycling?', icon: require('@/assets/art/tinkering/burnjunk.png'), iconClass:'mx--0'},
					{name: 'Weaponsss?', icon: require('@/assets/art/combat/items/melee_c4.png'), iconClass:'mx--1'},
					{name: 'Armor?', icon: require('@/assets/art/combat/items/arm_b2.png'), iconClass:'mx--1'},
					{name: 'Upgrade?', icon: require('@/assets/art/tinkering/upgrade1.png'), iconClass:'mx--1'}
				]"
      >
        <template slot="Back">
          <span>
            You nanotrasssen dogsss think you're ssso advanced with all your fancy
            <img
              class="mx--1"
              :src="require('@/assets/art/fabrication/icon.png')"
            />
            <b>ssscience</b>.
          </span>
          <span>
            But usss ashwalkersss can craft
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/melee_c4.png')"
            />
            <b>weaponsss</b> and
            <img class="mx--2" :src="require('@/assets/art/combat/items/arm_b2.png')" />
            <b>armor</b> jussst asss robussst using only the
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/junk.png')"
            />
            <b>natural resssourcesss</b> of thisss ssstation.
          </span>
        </template>
        <template slot="Junk?">
          <span>
            <img class="mx--0" :src="require('@/assets/art/graytiding/junk.png')" />
            <b>"Junk"</b>? Bah, you humansss are all too narrow minded.
          </span>
          <span>
            In the handsss of a ssskilled craftssslizard like myssself, thisss
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/junk.png')"
            />
            <b>"Junk"</b> can be made into all sssorts of
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/items/melee_c4.png')"
            />
            <img class="mx--2" :src="require('@/assets/art/combat/items/arm_b2.png')" />
            <b>Ussseful Ssstuff</b>.
          </span>
          <span>
            The bigger challenge isss getting my handsss on it. For sssomeone like myssself, Nanatrosssan isssn't exactly giving their
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/junk.png')"
            />
            <b>"Junk"</b> away. That'sss where a bit of
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/icon.png')"
            />
            <b>Graytiding</b> can help.
          </span>
        </template>
        <template slot="Recycling?">
          <span>
            Outssside of crafting, sometimesss I jussst like to ssset this
            <img
              class="mx--0"
              :src="require('@/assets/art/tinkering/burnjunk.png')"
            />
            <b>Ssstuff</b> ablaze.
          </span>
          <span>
            It remindsss me of my homeland, but I guesss the fire could also be usssed to generate
            <img
              class="mx--0"
              :src="require('@/assets/art/engineering/power.png')"
            />
            <b>Power</b> in the handsss of a ssskilled
            <img
              class="mx--2"
              :src="require('@/assets/art/engineering/icon.png')"
            />
            <b>Engineer</b>.
          </span>
        </template>
        <template slot="Weaponsss?">
          <span>
            The only reliable
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/melee_c4.png')"
            />
            <b>Weapon</b> issss the one you craft yourself.
          </span>
          <span>
            Why wassste time making ammo for a
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/items/gune_energy.png')"
            />
            <b>gun</b> when a good ssspear can do the job?
          </span>
        </template>
        <template slot="Armor?">
          <span>
            Only cowardsss fight from within a
            <img
              class="mx--0"
              :src="require('@/assets/art/fabrication/mechripley.png')"
            />
            <b>Mech</b>.
          </span>
          <span>
            The
            <img class="mx--2" :src="require('@/assets/art/combat/items/arm_b3.png')" />
            <b>Armor</b> you make here will let you
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/black_shoes.png')"
            />
            <b>Dodge</b> a lot more effectively. It alssso won't ssslow you down as you
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/evasion.png')"
            />
            <b>Move</b> from prey to prey.
          </span>
        </template>
        <template slot="Upgrade?">
          <span>
            An
            <img class="mx--0" :src="require('@/assets/art/tinkering/upgrade1.png')" />
            <b>Upgrade</b> from
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>Cargo</b>? Bah, who needsss that.
          </span>
          <span>Tinkering is the bessst job, upgrade or not.</span>
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
            :actionName="'CRAFT'"
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
import { JOB } from "@/data/tinkering";
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
      return "tinkering";
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