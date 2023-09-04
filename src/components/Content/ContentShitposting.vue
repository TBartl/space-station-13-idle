<template>
  <div class="shitposting">
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
        infoId="shitposting"
        :icon="require('@/assets/art/jobinfo/shitposting.png')"
        title="Player420 the Shit Poster says..."
        :options="[
					{name: 'Back'},
					{name: 'Shitposting?', icon: require('@/assets/art/shitposting/icon.png'), iconClass:'mx--1'},
					{name: 'OK?'},
					{name: '...'},
					{name: 'I\'m leaving now'},
				]"
      >
        <template slot="Back">
          <span>This kills tactical chairs. Running behind chairs that are pointed up to obscure your character, making it harder to hit. Yes, i am serious.</span>
        </template>
        <template slot="Shitposting?">
          <span>This is just like, George Orwell's book, nineteen eighty four.</span>
        </template>
        <template slot="OK?">
          <span>When they say "people are just going to do [x]" they really mean "I am going to do [x] specifically because this change pisses me off as a form of protest"</span>
        </template>
        <template slot="...">
          <span>For your entertainment, here's some of the alphabet of SS13, the variable names of real code:
		A - Atom, area, admins, augury, advanced disease, arrivals shuttle, asset, award
		B - Blob, button, blue, area again (for some reason), blindfold, bomb
		C - Carbon, client, simple_animal in create_random_spawn for some reason, count, corner, circuit, cinematic
		D - Datum, design, bank account (yes, really), duct, drone
		E - Radial entry, explosive, eye, ethereal, edible, emitter
		F - Flat, frame, flasher, fire alarm, fire ball, filter, foam
		G - Green, ghost, guardian, gloves, goal, high five (again, for seemingly no reason), gang
		H - Human, holder, hunter, item (as both h and H in drag_drop.dm), holopad
		I - Item, icon, interview, organ, implant, ID, image, immobilized
		J - Icon again, job, jaunt, jetpack, cult spell (for seemingly no reason)
		K - Keycard, knockdown, kinetic blast, knife
		L - List, living, lighting, laws, limb, lungs, loot, turf
		M - Mob, month, matrix, mode, machine, message, mobile
		N - Nuke, new player, new, area for some reason in weather.dm, nozzle, node
		O - Object, observer, objective, robot (for some reason), closet, outfit, body parts
		P - Client, paper, node, pack, plumbing, point, player details, projectile
		Q - Turf, carbon, query, quirk, reagents
		R - Regex, ref, robot, mech, radio, role
		S - Silicon, swarmer, shuttle, shelter, start, symptom
		T - Turf, techweb, quirk, tackle, temperature, cyborg gun
		U - Under, uplink, user, turf, upgrade
		V - Vote, vomit, rods, mask, vampire
		W - Weakref, weather, item, wound, particle, wall
		X - Xenobio, extract, golem, paper
		Y - We don't seem to have used Y as a variable name for anything other than y coordinates. Hooray!
		Z - Plasma tank, drone, victim
	  </span>
        </template>
        <template slot="I'm leaving now">
          <span>Before you go, please see this translation guide: https://www.oranges.net.nz/tglist.html</span>
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
            :actionName="'DISCUSS'"
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
import { JOB } from "@/data/shitposting";
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
      return "shitposting";
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
</style>
