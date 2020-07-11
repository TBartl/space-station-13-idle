<template>
  <div class="content-settings">
    <content-header
      text="Settings"
      :icon="require('@/assets/art/chrono/icon.png')"
      color="#3ac5ff"
    />
    <div class="content-container">
      <job-info
        infoId="chronosphere"
        :icon="require('@/assets/art/jobinfo/chronosphere.png')"
        title="Kor Phaeron the Chrono Legionnaire says..."
        :options="[
					{name: 'Back'},
					{name: 'Time Bank?', icon: require('@/assets/art/chrono/icon.png'), iconClass:'mx--2'},
					{name: 'Chrono Shop?', icon: require('@/assets/art/chrono/bluetime.png'), iconClass:'mx--1'},
					{name: 'Recursion?', icon: require('@/assets/art/chrono/bluetime-empty.png'), iconClass:'mx--1'},
				]"
      >
        <template slot="Back">
          <span>Listen, I don't know how to break this to you but...</span>
          <span>I have reasons to believe we may be trapped inside a simulation.</span>
        </template>
        <template slot="Time Bank?">
          <span>When the simulation is closed, time will continue outside our reality in the "real world".</span>
          <span>
            All of the time that passes out there will get stored in this
            <b>Time Bank</b>.
          </span>
          <span>We can tap into this lost time, get back to where we should be.</span>
          <span>
            While using the time stored in the
            <b>Time Bank</b>, everything in our simulation will run at an accelerated rate.
          </span>
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

      <div class="row my-4">
        <div class="col-12">
          <div class="d-flex flex-row justify-content-center">
            <div class="btn-group btn-group-toggle">
              <button
                class="btn btn-lg"
                @click="tab='bank'"
                :class="tab=='bank' ? 'btn-primary' : 'btn-outline-primary'"
              >Time Bank</button>
              <button
                class="btn btn-lg"
                @click="tab='shop'"
                :class="tab=='shop' ? 'btn-primary' : 'btn-outline-primary'"
              >Chrono Shop</button>
              <button
                class="btn btn-lg"
                @click="tab='recursion'"
                :class="tab=='recursion' ? 'btn-primary' : 'btn-outline-primary'"
              >Recursion</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tab=='bank'" class="row time-bank">
        <div class="col-12">
          <div class="content-block">
            <h5>Time Bank</h5>
            <hr />
            <div class="d-flex flex-column align-items-center">
              <h6 class="mb-2">Desired Speed:</h6>
              <div>
                <button
                  type="button"
                  class="btn"
                  v-for="speed in speeds"
                  :key="speed"
                  :class="[desiredChronoSpeed == speed ? 'btn-primary' : 'btn-secondary']"
                  @click="setDesiredChronoSpeed(speed)"
                >{{speed}}x</button>
              </div>
              <progress-bar
                class="mt-1 black-background chrono-bar"
                :progress="barPercent"
                :text="remainingTimeText"
                :customClass="active ? 'progress-bar-animated' : ''"
              />
              <span class="mt-1 max">MAX: {{maxHours}} HOURS</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tab=='shop'" class="row">
        <div class="col-12">
          <shop-section v-for="(section, index) in sections" :key="index" :section="section" />
        </div>
      </div>

      <div v-if="tab=='recursion'" class="row">
        <div class="col-12">
          <div class="content-block">
            <h5>Recursion</h5>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import ProgressBar from "@/components/ProgressBar";
import ShopSection from "@/components/Content/Shop/ShopSection";
import { SECTIONS } from "@/data/chronoshop";

export default {
  extends: ContentAbstract,
  components: { ProgressBar, ShopSection },
  data() {
    return {
      tab: "bank"
    };
  },
  computed: {
    speeds(state, getters) {
      return this.$store.getters["chrono/speeds"];
    },
    chronoSpeed() {
      return this.$store.getters["chrono/speed"];
    },
    desiredChronoSpeed() {
      return this.$store.getters["chrono/desiredSpeed"];
    },
    remainingTimeText() {
      if (this.infinite) return "INFINTE (cheater)";
      return this.$store.getters["chrono/remainingTimeText"] + " remaining";
    },
    barPercent() {
      if (this.infinite) return 1;
      return (
        this.$store.getters["chrono/remainingTime"] /
        this.$store.getters["chrono/maxDuration"]
      );
    },
    maxHours() {
      return this.$store.getters["chrono/maxHours"];
    },
    active() {
      return this.$store.getters["chrono/active"];
    },
    infinite() {
      return this.$store.getters["cheats/infiniteChrono"];
    },
    sections() {
      return SECTIONS;
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
.time-bank .btn {
  margin: 0.25rem;
}

.chrono-bar {
  max-width: 800px;
}

.max {
  font-size: 12px;
  color: gray;
}
</style>
