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
        infoId="xenobiology"
        :icon="require('@/assets/art/jobinfo/xenobiology.png')"
        title="Nar Nar the Scientist flutters..."
        :options="[
					{name: 'Back'},
					{name: 'Slimes?', icon: require('@/assets/art/xenobio/SlimeGrey.gif'), iconClass:'mx--1'},
					{name: 'Slow?', icon: require('@/assets/art/xenobio/upgrade1.png'), iconClass:'mx--1'},
					{name: 'Benefits?', icon: require('@/assets/art/combat/health.gif'), iconClass:'mx--0'},
					{name: 'Command?', icon: require('@/assets/art/combat/command.png'), iconClass:'mx--1'},
					{name: 'Z?', icon: require('@/assets/art/jobinfo/xenobiology.png'), iconClass:'mx--0'}
				]"
      >
        <template slot="Back">
          <span>You look a bit puzzzled, chimpanzzzee-descendent citizzzen.</span>
          <span>
            <img class="mx--1" :src="require('@/assets/art/xenobio/icon.gif')" />
            <b>Xenobiology</b> is a hazzzardous place, it's a crazzzy idea to come in here without specializzzed knowledge of this zzzone.
          </span>
          <span>Don't worry, I sympathizzze with your situation, and would be abuzzz to help organizzze some instructions for you.</span>
          <span>You'll be amazzzed to see how much of a breezzze this is to pick up.</span>
        </template>
        <template slot="Slimes?">
          <span>
            Raising these
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeGrey.gif')" />
            <b>Oozzzes</b> is a doozzzy.
          </span>
          <span>
            First, you'll want to get a couple dozzzen Gray
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeGrey.gif')"
            />
            <b>Oozzzes</b>.
          </span>
          <span>
            Then, you can customizzze them into a completely different
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeOrange.gif')"
            />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimePurple.gif')" />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeBlue.gif')" />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeMetal.gif')" />
            <b>Color</b>.
          </span>
          <span>
            After you develop proper color analyzzzing ability, you'll be able to create even more personalizzzed
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeBluespace.gif')"
            />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeSepia.gif')" />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeCerulean.gif')" />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimePyrite.gif')" />
            <b>Oozzzes</b>.
          </span>
        </template>

        <template slot="Slow?">
          <span>
            If you want to minimizzze your time spent, you'll want to order some of the
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/upgrade1.png')"
            />
            <b>Optimizzzation Gizzzmos</b> from our local
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>"Amazzzon"</b>.
          </span>
          <span>
            You can utilizzze them to grow a larger sizzze of certain
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeGrey.gif')"
            />
            <b>Oozzzes</b> all at once.
          </span>
        </template>
        <template slot="Benefits?">
          <span>
            You can weaponizzze your
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeGrey.gif')"
            />
            <b>Oozzze</b> companion to emphasizzze your combat abilities.
          </span>
          <span>
            These
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeGrey.gif')" />
            <b>Oozzzes</b> can energizzze your attacks with more
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/skull.png')"
            />
            <b>Zzzeal</b>, light your strikes
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/burn-damage.png')"
            />
            <b>Ablazzze</b>, or even let you
            <img class="mx--1" :src="require('@/assets/art/combat/evasion.png')" />
            <b>Mobilizzze</b> faster from enemy-to-enemy.
          </span>
          <span>
            Make sure you prioritizzze the
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/command.png')"
            />
            <b>Command</b> combat style though, or you'll never gain experience and realizzze your
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/command.png')"
            />
            <b>Command</b> potential.
          </span>
        </template>
        <template slot="Command?">
          <span>
            Some of these
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeGrey.gif')" />
            <b>Oozzzes</b> can be quite lazzzy, demoralizzzed, or quick to freezzze up in a fight.
          </span>
          <span>
            You'll need to raise your
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/command.png')"
            />
            <b>Command</b> level before they'll recognizzze your authority. Otherwise they'll be more likely to waltzzz away mid-fight if you are hurt.
          </span>
          <span>
            With enough
            <img class="mx--1" :src="require('@/assets/art/combat/command.png')" />
            <b>Command</b>, you can even reach a flee chance of zzzero on some
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeGrey.gif')"
            />
            <b>Oozzzes</b>.
          </span>
        </template>
        <template slot="Z?">
          <span>Don't be a buzzzkill; it's not very jazzzed of you to agonizzze my bizzzare speech pattern.</span>
        </template>
      </job-info>

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
            :actionName="'RAISE'"
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
import { JOB } from "@/data/xenobiology";
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
      return "xenobiology";
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