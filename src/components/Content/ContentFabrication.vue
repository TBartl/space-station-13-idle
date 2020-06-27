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
        infoId="fabrication"
        :icon="require('@/assets/art/jobinfo/fabrication.png')"
        title="Flameo Hotman the Roboticist says..."
        :options="[
					{name: 'Back'},
					{name: 'Resources?', icon: require('@/assets/art/engineering/power.png'), iconClass:'mx--0'},
					{name: 'Guns?', icon: require('@/assets/art/combat/items/gune_energy.png'), iconClass:'mx--0'},
					{name: 'Ammo?', icon: require('@/assets/art/combat/items/ammo_b1.png'), iconClass:'mx--2'},
					{name: 'Mechs?', icon: require('@/assets/art/fabrication/mechripley.png'), iconClass:'mx--0'}
				]"
      >
        <template slot="Back">
          <span>Listen man, I'm going to be upfront with you; I don't actually know how any of this stuff works.</span>
          <span>I just press some buttons and let the fabricator do its thing.</span>
        </template>
        <template slot="Resources?">
          <span>
            You'll need to feed these printers both
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetIron.png')"
            />
            <b>Ore</b> and
            <img class="mx--0" :src="require('@/assets/art/engineering/power.png')" />
            <b>Power</b> before they'll go brrrrr.
          </span>
          <span>
            Assuming they're still alive, you can probably get the
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetIron.png')"
            />
            <b>Ore</b> from our
            <img class="mx--0" :src="require('@/assets/art/mining/icon.png')" />
            <b>Miners</b>
          </span>
          <span>
            As for the
            <img class="mx--0" :src="require('@/assets/art/engineering/power.png')" />
            <b>Power</b>, you'll need to make sure the
            <img
              class="mx--2"
              :src="require('@/assets/art/engineering/icon.png')"
            />
            <b>Engineers</b> are doing their job.
          </span>
        </template>
        <template slot="Guns?">
          <span>
            Unlike the
            <img class="mx--2" :src="require('@/assets/art/combat/items/melee_b2.png')" />
            <b>Primitive Weapons</b> you'll get from
            <img class="mx--2" :src="require('@/assets/art/tinkering/icon.png')" />
            <b>Tinkering</b>, the
            <img class="mx--0" :src="require('@/assets/art/combat/items/gune_energy.png')" />
            <b>Guns</b> you can fabricate here will be far more
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/precision.png')"
            />
            <b>Precise</b>, and can dish out both
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/brute-damage.png')"
            />
            <b>Brute</b> and
            <img class="mx--0" :src="require('@/assets/art/combat/burn-damage.png')" />
            <b>Burn</b> damage.
          </span>
          <span>
            The downside is that they take
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/ammo_b1.png')"
            />
            <b>ammo</b> to use. Thankfully you can fabricate more of it here.
          </span>
        </template>
        <template slot="Ammo?">
          <span>
            Every shot you take with a
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/items/gune_energy.png')"
            />
            <b>gun</b> will use up some of your
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/ammo_b1.png')"
            />
            <b>ammo</b>.
          </span>
          <span>
            Make sure you're matching the right type of
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/ammo_b1.png')"
            />
            <b>ammo</b> with the type of
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/items/gune_energy.png')"
            />
            <b>gun</b>, or your gun won't work.
          </span>
        </template>
        <template slot="Mechs?">
          <span>
            Unlike the
            <img class="mx--2" :src="require('@/assets/art/combat/items/arm_b3.png')" />
            <b>crude armor</b> you'll get from
            <img class="mx--2" :src="require('@/assets/art/tinkering/icon.png')" />
            <b>Tinkering</b>, the
            <img class="mx--0" :src="require('@/assets/art/fabrication/mechripley.png')" />
            <b>mechs</b> you'll make here will be far more durable and powerful all around.
          </span>
          <span>
            That said, you'll find that these
            <img
              class="mx--0"
              :src="require('@/assets/art/fabrication/mechripley.png')"
            />
            <b>mechs</b> won't be as quick to manuever, so you'll find yourself
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/black_shoes.png')"
            />
            <b>evading</b> and
            <img class="mx--0" :src="require('@/assets/art/combat/evasion.png')" />
            <b>moving</b> a lot slower while piloting one.
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
            :actionName="'FABRICATE'"
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
import { JOB } from "@/data/fabrication";
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
      return "fabrication";
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