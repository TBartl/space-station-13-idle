<template>
  <div class="content-settings">
    <content-header
      text="Settings"
      :icon="require('@/assets/art/sidebar/chronohelmet.png')"
      color="#3ac5ff"
    />
    <div class="content-container">
      <job-info
        infoId="chronosphere"
        :icon="require('@/assets/art/jobinfo/chronosphere.png')"
        title="Kor Phaeron the Chrono Legionnaire says..."
        :options="[
					{name: 'Back'},
					{name: '???'}
				]"
      >
        <template slot="Back">
          <span>Listen, I don't know how to break this to you but...</span>
          <span>I have reasons to believe we may be trapped inside a simulation.</span>
        </template>
        <template slot="???">
          <span>When the simulation is closed, time will continue outside our reality in the "real world".</span>
          <span>We can tap into this lost time, get back to where we should be.</span>
          <span>While using lost time, everything in our simulation will run at an accelerated rate.</span>
          <span>
            And I mean everything:
            <img class="mx--1" :src="require('@/assets/art/mining/icon.png')" />
            <b>Job Actions</b> will complete faster, you and your
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/enemies/mouse.png')"
            />
            <b>Enemies</b> will hit in smaller intervals...
          </span>
          <span>
            Heck, your
            <img class="mx--0" :src="require('@/assets/art/combat/health.gif')" />
            <b>Health</b> will even regenerate quicker. I bet you didn't even know
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/health.gif')"
            />
            <b>Health</b> regen was a mechanic, did you?
          </span>
        </template>
      </job-info>

      <div class="row">
        <div class="col-12">
          <div class="content-block">
            <h5>Chronosphere</h5>
            <hr />
            <button
              type="button"
              class="btn"
              v-for="speed in speeds"
              :key="speed"
              :class="[chronoSpeed == speed ? 'btn-primary' : 'btn-secondary']"
              @click="setChronoSpeed(speed)"
            >{{speed}}x</button>
            <h6 class="mt-2">This feature is WIP; so right now you have infinite lost time to spend.</h6>
            <h6 class="mt-2">Thanks for testing the game!</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapGetters, mapMutations } from "vuex";
export default {
  extends: ContentAbstract,
  computed: {
    ...mapGetters(["chronoSpeed"]),
    speeds() {
      return [0.01, 1, 2, 5, 10, 25, 100, 250, 500, 1000];
    }
  },
  methods: {
    ...mapMutations(["setChronoSpeed"])
  }
};
</script>

<style scoped>
.btn {
  margin-right: 0.5rem;
}
</style>
