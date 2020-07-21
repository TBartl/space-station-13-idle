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
					{name: 'Simulation Reset?', icon: require('@/assets/art/chrono/bluetime-empty.png'), iconClass:'mx--1'},
					{name: 'Chrono Shop?', icon: require('@/assets/art/chrono/bluetime.png'), iconClass:'mx--1'},
				]"
      >
        <template slot="Back">
          <div v-if="!$store.getters['chrono/previousResetPotential']">
            <p>Listen, I don't know how to break this to you but...</p>
            <p>I have reasons to believe we may be trapped inside a simulation.</p>
          </div>
          <div v-else>
            <p>It's nice to see you again, old friend.</p>
            <p>I guess that means the reset worked?</p>
          </div>
        </template>
        <template slot="Time Bank?">
          <span>When the simulation is closed, time will continue outside our reality in the "real world".</span>
          <span>
            All of the time that passes out there will get stored in this
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/timebank.png')"
            />
            <b>Time Bank</b>.
          </span>
          <span>We can tap into this lost time, get back to where we should be.</span>
          <span>
            While using the time stored in the
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/timebank.png')"
            />
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
        <template slot="Simulation Reset?">
          <span>
            With an
            <img class="mx--0" :src="require('@/assets/art/chrono/bluetime-empty.png')" />
            <b>Empty Bluespace Time Device</b>, we might just be able to reset this simulation back to where it all started.
          </span>
          <span>
            Unfortunately, my evil
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/enemies/boss/doppleganger.png')"
            />
            <b>Doppelgänger</b> from another timeline is the only person I know that has that kind of
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/bluetime-empty.png')"
            />
            <b>Equipment</b>.
          </span>
          <span>
            If you can manage to take him down and bring me the
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/bluetime-empty.png')"
            />
            <b>Device</b>... Well, we might be able to get our hands on some
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/bluetime.png')"
            />
            <b>Bluespace Time</b>.
          </span>
        </template>
        <template slot="Chrono Shop?">
          <span>
            If you reset the simulation, you'll find yourself with some
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/bluetime.png')"
            />
            <b>Bluespace Time</b>.
          </span>
          <span>
            You can use this for all sorts of stuff, like upgrading the
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/timebank.png')"
            />
            <b>Time Bank</b> or gaining progress towards certain
            <img
              class="mx--1"
              :src="require('@/assets/art/mining/icon.png')"
            />
            <img class="mx--0" :src="require('@/assets/art/engineering/icon.png')" />
            <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
            <b>Jobs</b>.
          </span>
          <span>
            Something tells me the developers of this simulation might even add more options to this shop soon, so you may want to hold off on spending
            <i>all</i> your
            <img class="mx--0" :src="require('@/assets/art/chrono/bluetime.png')" />
            <b>Bluespace Time</b> now.
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
                @click="tab='reset'"
                :class="tab=='reset' ? 'btn-primary' : 'btn-outline-primary'"
              >Simulation Reset</button>
              <button
                class="btn btn-lg"
                @click="tab='shop'"
                :class="tab=='shop' ? 'btn-primary' : 'btn-outline-primary'"
              >Chrono Shop</button>
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

      <div v-if="tab=='reset'" class="row">
        <div class="col-12">
          <div class="content-block">
            <h5>Simulation Reset</h5>
            <hr />
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <div class="audit py-3 px-4 mr-md-5">
                <h5 class="text-center mb-2">Reset Potential</h5>
                <div v-for="(section, index) in auditSections" :key="index" class="mb-3">
                  <p class="description text-uppercase" v-if="section.name">{{section.name}}</p>
                  <div
                    v-for="(threshold, thresholdIndex) in section.thresholds"
                    :key="'t'+thresholdIndex"
                    class="d-flex flex-row align-items-center justify-content-between my-1"
                    :class="{'disabled': threshold.disabled || threshold.count == 0}"
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
                    <span class="mr-1">+{{$store.getters['chrono/resetPotential']}}</span>
                    <img :src="require('@/assets/art/chrono/bluetime.png')" class="mx--1" />
                  </div>
                </div>
              </div>
              <div class="my-2 my-md-0">
                <p>By resetting the simulation, you'll gain the Bluespace Time listed</p>
                <p
                  class="my-1"
                >This Bluespace Time can be used at the Chrono Shop in all future runs</p>
                <p>Other than this Bluespace Time, your save data will be wiped clean</p>
                <div class="reset-container my-2">
                  <shop-purchase purchaseId="resetSimulation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tab=='shop'" class="row">
        <div class="col-12">
          <div class="content-block w-auto mb-3">
            <img :src="require('@/assets/art/chrono/bluetime.png')" class="mx--1" />
            x{{bluetimeCount}}
          </div>

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
import ShopPurchase from "@/components/Content/Shop/ShopPurchase";
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
  components: { ProgressBar, ShopSection, ShopPurchase },
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
    bluetimeCount() {
      let count = this.$store.getters["inventory/bank"]["bluetime"];
      return count ? count : 0;
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
            },
            {
              name: "Previous Resets",
              count: this.$store.getters["chrono/previousResetPotential"]
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
  width: 280px;
}
.disabled {
  opacity: 0.4;
}
.reset-container {
  background-color: rgba(119, 119, 119, 0.397);
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
	max-width: 520px;
}
</style>
