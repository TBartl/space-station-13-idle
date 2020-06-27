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
            <span>ITEMS</span>
          </div>
          <div
            v-if="itemsExpanded"
            class="content-block content-block-bottom d-flex flex-row flex-wrap"
          >
            <div v-for="(entry, index) in Object.entries(items)" :key="index">
              <img class="item" :src="entry[1].icon" :id="id + '-item-' + index" />
              <b-popover
                :target="id + '-item-' + index"
                triggers="hover"
                placement="top"
                delay="0"
              >
                <div class="d-flex flex-column align-items-center">
                  <h6>{{entry[1].name}}</h6>
                  <span>Found: 420</span>
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
            <span>ENEMIES</span>
          </div>
          <div
            v-if="enemiesExpanded"
            class="content-block content-block-bottom d-flex flex-row flex-wrap"
          >
            <div v-for="(entry, index) in Object.entries(enemies)" :key="index">
              <img class="enemy" :src="entry[1].icon" :id="id + '-enemy-' + index" />
              <b-popover
                :target="id + '-enemy-' + index"
                triggers="hover"
                placement="top"
                delay="0"
              >
                <div class="d-flex flex-column align-items-center">
                  <h6>{{entry[1].name}}</h6>
                  <span>Killed: 420</span>
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
    id() {
      return this._uid.toString();
    },
    items() {
      return ITEMS;
    },
    enemies() {
      return ENEMIES;
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
  width: 68px;
  padding: 2px;
}
</style>