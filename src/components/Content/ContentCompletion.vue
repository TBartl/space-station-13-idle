<template>
  <div class="content-settings">
    <content-header
      text="Completion"
      :icon="require('@/assets/art/sidebar/trophy.png')"
      color="rgb(231, 150, 28)"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-12 mb-3" v-if="resets > 0">
          <div class="content-block content-block-top">
            <img :src="require('@/assets/art/chrono/bluetime.png')" class="mr-2" />
            <span class="mr-1">Reset Count: {{resets}}</span>
          </div>
        </div>
        <div class="col-12">
          <div
            class="content-block content-block-top clickable"
            :class="{expanded: itemsExpanded}"
            @click="itemsExpanded = !itemsExpanded"
          >
            <img :src="require('@/assets/art/misc/eyes.png')" class="mr-2" />
            <span class="mr-1">ITEMS</span>
            <span class="primary-bubble">{{$store.getters['completion/itemPercent']}}%</span>
          </div>
          <div
            v-if="itemsExpanded"
            class="content-block content-block-bottom d-flex flex-row flex-wrap"
          >
            <div v-for="(entry, index) in Object.entries(items)" :key="index">
              <img
                class="item"
                :class="{hidden: !getItem(entry[0])}"
                :src="entry[1].icon"
                :id="id + '-item-' + index"
              />
              <b-popover
                v-if="getItem(entry[0])"
                :target="id + '-item-' + index"
                triggers="hover"
                placement="top"
                delay="0"
                :customClass="$store.getters['settings/darkModeClass']"
              >
                <div class="d-flex flex-column align-items-center">
                  <h6>{{entry[1].name}}</h6>
                  <span>Found: {{getItem(entry[0])}}</span>
                </div>
              </b-popover>
            </div>
          </div>
        </div>
        <div class="col-12 mt-3">
          <div
            class="content-block content-block-top clickable"
            :class="{expanded: enemiesExpanded}"
            @click="enemiesExpanded = !enemiesExpanded"
          >
            <img :src="require('@/assets/art/misc/eyes.png')" class="mr-2" />
            <span class="mr-1">ENEMIES</span>
            <span class="primary-bubble">{{$store.getters['completion/enemyPercent']}}%</span>
          </div>
          <div
            v-if="enemiesExpanded"
            class="content-block content-block-bottom d-flex flex-row flex-wrap"
          >
            <div v-for="(entry, index) in Object.entries(enemies)" :key="index">
              <img
                class="enemy"
                :class="{hidden: !getEnemy(entry[0])}"
                :src="entry[1].icon"
                :id="id + '-enemy-' + index"
              />
              <b-popover
                v-if="getEnemy(entry[0])"
                :target="id + '-enemy-' + index"
                triggers="hover"
                placement="top"
                delay="0"
                :customClass="$store.getters['settings/darkModeClass']"
              >
                <div class="d-flex flex-column align-items-center">
                  <h6>{{entry[1].name}}</h6>
                  <span>Killed: {{getEnemy(entry[0])}}</span>
                </div>
              </b-popover>
            </div>
          </div>
        </div>

        <div class="col-12 my-3">
          <div
            class="content-block content-block-top clickable"
            :class="{expanded: jobsExpanded}"
            @click="jobsExpanded = !jobsExpanded"
          >
            <img :src="require('@/assets/art/misc/eyes.png')" class="mr-2" />
            <span class="mr-1">JOBS</span>
            <span class="primary-bubble">{{$store.getters['completion/jobPercent']}}%</span>
          </div>
          <div v-if="jobsExpanded" class="content-block content-block-bottom d-flex flex-row">
            <div class="d-flex flex-column align-items-center w-50">
              <h5 class="pt-2">Levels</h5>
              <div class="jobs">
                <div v-for="(job, index) in jobsLevelSorted" :key="index" class="bar my-1">
                  <div
                    class="bar-fill"
                    :style="{'background-color': job.color, 'width': (100*job.level / maxLevel) +'%'}"
                  ></div>

                  <div
                    class="position-relative d-flex flex-row align-items-center justify-content-between w-100"
                  >
                    <img :src="job.icon" alt />
                    <span>{{job.level}}/{{maxLevel}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column align-items-center w-50">
              <h5 class="pt-2">Time</h5>
              <div class="jobs">
                <div v-for="(job, index) in jobsTimeSorted" :key="index" class="bar my-1">
                  <div
                    class="bar-fill"
                    :style="{'background-color': job.color, 'width': (100*job.time / jobsTimeSorted[0].time) +'%'}"
                  ></div>

                  <div
                    class="position-relative d-flex flex-row align-items-center justify-content-between w-100"
                  >
                    <img :src="job.icon" alt />
                    <span>{{job.time | time}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/utils/eventBus.js";
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapGetters } from "vuex";

import ITEMS from "@/data/items";
import ENEMIES from "@/data/enemies";
import { ALL_JOBS } from "@/data/jobs";
import { MAX_LEVEL } from "@/data/experience";

export default {
  extends: ContentAbstract,
  components: {},
  data() {
    return {
      itemsExpanded: false,
      enemiesExpanded: false,
      jobsExpanded: false
    };
  },
  computed: {
    ...mapGetters("completion", ["getItem", "getEnemy"]),
    id() {
      return this._uid.toString();
    },
    items() {
      return Object.values(ITEMS).filter(itemId => !itemId.nocomplete);
    },
    enemies() {
      return ENEMIES;
    },
    jobs() {
      return ALL_JOBS.map(job => {
        return Object.assign({}, job, {
          time: this.$store.getters["completion/jobTime"](job.id),
          level: Math.min(this.$store.getters[job.id + "/level"], MAX_LEVEL)
        });
      });
    },
    jobsLevelSorted() {
      return [...this.jobs].sort((a, b) => b.level - a.level);
    },
    jobsTimeSorted() {
      return [...this.jobs].sort((a, b) => b.time - a.time);
    },
    maxLevel() {
      return MAX_LEVEL;
    },
    resets() {
      return this.$store.getters["completion/simulationResetCount"];
    }
  },
  filters: {
    time(time) {
      let minutes = Math.round(time / 60);
      let hours = Math.floor(minutes / 60);
      minutes = minutes % 60;

      var s = `${minutes} mins`;
      if (hours) s = `${hours} hours ` + s;
      return s;
    }
  }
};
</script>

<style scoped>
.item {
  width: 68px;
  padding: 2px;
}
.enemy {
  width: 100px;
  padding: 2px;
}

@media (max-width: 768px) {
  .item {
    width: 36px;
  }
  .enemy {
    width: 36px;
  }
}

.hidden {
  filter: brightness(0.15) opacity(0.2);
}
.dark-mode .hidden {
  filter: brightness(0.1) opacity(0.2);
}

.bar {
  background-color: rgba(89, 141, 253, 0.137);
  position: relative;
  padding: 2px 4px;
  width: 100%;
  max-width: 600px;
}
.dark-mode .bar span {
  color: rgb(241, 241, 241);
}
.dark-mode .bar {
  background-color: rgba(89, 141, 253, 0.082);
}

.bar-fill {
  background-color: rgb(97, 30, 30);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  opacity: 0.8;
}
.jobs {
  width: 100%;
  max-width: 620px;
  padding: 0px 12px;
}
</style>