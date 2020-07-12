<template>
  <div class="content-settings">
    <content-header
      text="Settings"
      :icon="require('@/assets/art/chrono/icon.png')"
      color="#3ac5ff"
    />
    <div class="content-container">
      <job-info
        infoId="chronosphere1"
        :icon="require('@/assets/art/jobinfo/chronosphere.png')"
        title="Kor Phaeron the Chrono Legionnaire says..."
        :options="[
					{name: 'Back'},
					{name: 'Time Bank?', icon: require('@/assets/art/chrono/timebank.png'), iconClass:'mx--0'},
					{name: 'Recursion?', icon: require('@/assets/art/chrono/bluetime-empty.png'), iconClass:'mx--1'},
					{name: 'Chrono Shop?', icon: require('@/assets/art/chrono/bluetime.png'), iconClass:'mx--1'},
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
                @click="tab='recursion'"
                :class="tab=='recursion' ? 'btn-primary' : 'btn-outline-primary'"
              >Recursion</button>
            </div>
              <button
                class="btn btn-lg"
                @click="tab='shop'"
                :class="tab=='shop' ? 'btn-primary' : 'btn-outline-primary'"
              >Chrono Shop</button>
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

      <div v-if="tab=='recursion'" class="row">
        <div class="col-12">
          <div class="content-block">
            <h5>Recursion</h5>
            <hr />
            <div class="audit py-3 px-4">
              <h5 class="text-center mb-2">Recursion Potential</h5>
              <div v-for="(section, index) in auditSections" :key="index" class="mb-3">
                <p class="description text-uppercase" v-if="section.name">{{section.name}}</p>
                <div
                  v-for="(threshold, thresholdIndex) in section.thresholds"
                  :key="'t'+thresholdIndex"
                  class="d-flex flex-row align-items-center justify-content-between my-1"
                  :class="{'disabled': threshold.disabled}"
                >
                  <span>{{threshold.name}}</span>
                  <div>
                    <span class="mr-1">+{{threshold.count}}</span>
                    <img :src="require('@/assets/art/chrono/bluetime.png')" class="mx--1" />
                  </div>
                </div>
              </div>
              <hr />
              <div class="d-flex flex-row align-items-center justify-content-between">
                <span>TOTAL</span>
                <div>
                  <span class="mr-1">+{{$store.getters['chrono/recursionPotential']}}</span>
                  <img :src="require('@/assets/art/chrono/bluetime.png')" class="mx--1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tab=='shop'" class="row">
        <div class="col-12">
          <shop-section v-for="(section, index) in sections" :key="index" :section="section" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import ProgressBar from "@/components/ProgressBar";
import ShopSection from "@/components/Content/Shop/ShopSection";
import {
  SECTIONS,
  BASE_BONUS,
  ITEM_INTERVALS,
  ENEMY_INTERVALS,
  JOB_INTERVALS
} from "@/data/chrono";

function createAuditSection(name, percent, intervals) {
  let section = {
    name: `${name} Bonuses (${percent}%)`,
    thresholds: []
  };
  intervals.forEach(interval =>
    section.thresholds.push({
      name: `${interval}%`,
      count: 1,
      disabled: percent < interval
    })
  );
  return section;
}

export default {
  extends: ContentAbstract,
  components: { ProgressBar, ShopSection },
  data() {
    return {
      tab: "shop"
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
    },
    itemPercent() {
      return this.$store.getters["completion/itemPercent"];
    },
    enemyPercent() {
      return this.$store.getters["completion/enemyPercent"];
    },
    jobPercent() {
      return this.$store.getters["completion/jobPercent"];
    },
    auditSections() {
      let sections = [
        {
          thresholds: [
            {
              name: "Base",
              count: BASE_BONUS
            }
          ]
        }
      ];

      sections.push(
        createAuditSection("Item", this.itemPercent, ITEM_INTERVALS)
      );
      sections.push(
        createAuditSection("Enemy", this.enemyPercent, ENEMY_INTERVALS)
      );
      sections.push(createAuditSection("Job", this.jobPercent, JOB_INTERVALS));

      return sections;
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
.audit {
  background-color: rgba(128, 128, 128, 0.178);
  border-radius: 8px;
  margin: auto;
  max-width: 280px;
}
.disabled {
  opacity: 0.4;
}
</style>
