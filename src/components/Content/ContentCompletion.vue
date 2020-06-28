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

export default {
  extends: ContentAbstract,
  components: {},
  data() {
    return {
      itemsExpanded: false,
      enemiesExpanded: false
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
</style>