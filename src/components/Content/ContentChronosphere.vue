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
            <div class="d-flex flex-column align-items-center">
              <h5 class="mb-2">Target Speed</h5>
              <div>
                <button
                  type="button"
                  class="btn"
                  v-for="speed in speeds"
                  :key="speed"
                  :class="[chronoSpeed == speed ? 'btn-primary' : 'btn-secondary']"
                  @click="setDesiredChronoSpeed(speed)"
                >{{speed}}x</button>
              </div>
              <progress-bar
                class="mt-1 black-background chrono-bar"
                :progress=".5"
                :text="`Lost Time Remaining: 1`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import ProgressBar from "@/components/ProgressBar";
export default {
  extends: ContentAbstract,
  components: { ProgressBar },
  computed: {
    speeds() {
      return [1, 2, 5, 10, 25, 100, 250, 500, 1000];
    },
    chronoSpeed() {
      return this.$store.getters["chrono/speed"];
    },
    desiredChronoSpeed() {
      return this.$store.getters["chrono/desiredSpeed"];
    }
  },
  methods: {
    setDesiredChronoSpeed(val) {
      this.$store.commit("chrono/setDesiredSpeed", val);
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 0.25rem;
}

.chrono-bar {
	max-width: 800px;
}

.black-background {
  background-color: rgb(61, 61, 61) !important;
}
</style>
