<template>
  <div class="content-settings">
    <content-header
      text="Completion"
      :icon="require('@/assets/art/sidebar/trophy.png')"
      color="rgb(231, 150, 28)"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <div
            class="content-block content-block-top clickable"
            :class="{expanded: itemsExpanded}"
            @click="itemsExpanded = !itemsExpanded"
          >
            <img :src="require('@/assets/art/misc/eyes.png')" class="mr-2" />
            <span class="mr-1">ITEMS</span>
            <span
              class="primary-bubble"
            >{{Math.floor(100 * itemsComplete / Object.keys(items).length)}}%</span>
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
            <span
              class="primary-bubble"
            >{{Math.floor(100 * enemiesComplete / Object.keys(enemies).length)}}%</span>
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
            :class="{expanded: timeExpanded}"
            @click="timeExpanded = !timeExpanded"
          >
            <img :src="require('@/assets/art/misc/eyes.png')" class="mr-2" />
            <span class="mr-1">TIME</span>
          </div>
          <div
            v-if="timeExpanded"
            class="content-block content-block-bottom d-flex flex-column align-items-center"
          >
            <h5 class="pt-2">Job Time</h5>
            <div v-for="(job, index) in jobs" :key="index" class="bar my-1">
              <div
                class="bar-fill"
                :style="{'background-color': job.color, 'width': (100*job.time / jobs[0].time) +'%'}"
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
</template>

<script>
import { EventBus } from "@/utils/eventBus.js";
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapGetters } from "vuex";

import ITEMS from "@/data/items";
import ENEMIES from "@/data/enemies";
import { ALL_JOBS } from "@/data/jobs";

export default {
  extends: ContentAbstract,
  components: {},
  data() {
    return {
      itemsExpanded: false,
      enemiesExpanded: false,
      timeExpanded: true
    };
  },
  computed: {
    ...mapGetters("completion", ["getItem", "getEnemy"]),
    id() {
      return this._uid.toString();
    },
    items() {
      return ITEMS;
    },
    enemies() {
      return ENEMIES;
    },
    itemsComplete() {
      return Object.keys(ITEMS).filter(itemId => this.getItem(itemId)).length;
    },
    enemiesComplete() {
      return Object.keys(ENEMIES).filter(enemyId => this.getEnemy(enemyId))
        .length;
    },
    jobs() {
      return ALL_JOBS.map(job => {
        return Object.assign({}, job, {
          time: this.$store.getters["completion/jobTime"](job.id)
        });
      }).sort((a, b) => b.time - a.time);
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
.bar {
  background-color: rgba(89, 141, 253, 0.137);
  position: relative;
  padding: 2px 4px;
  width: 100%;
  max-width: 600px;
}
.bar-fill {
  background-color: rgb(97, 30, 30);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  opacity: 0.8;
}
</style>