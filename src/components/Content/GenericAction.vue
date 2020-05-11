<template>
  <div
    class="action content-block text-muted"
    :class="{'locked': locked || !hasItems}"
    @click="tryStartAction(actionId)"
  >
    <div v-if="!locked" class="d-flex flex-column align-items-center">
      <p class="action-title">{{actionName}}</p>
      <p class="text-uppercase text-center">{{actionTitle}}</p>
      <p class="action-time mt-1 text-center">{{action.xp}} XP / {{action.time}} SECONDS</p>
      <img :id="'action-icon-'+id" :src="action.icon" alt class="pixelated mt-2 mb-2" />
      <b-popover :target="'action-icon-'+id" triggers="hover" placement="top" delay="0">
        <item-chance :data="action" />
      </b-popover>
      <div
        v-if="action.requiredItems"
        class="requirements d-flex flex-column align-items-center mb-2"
      >
        <span v-if="!hasItems" class="danger-bubble color-weight text-light">MISSING ITEMS</span>
        <item-requirement
          v-for="(entry, index) in Object.entries(action.requiredItems)"
          :key="index"
          :itemId="entry[0]"
          :count="entry[1]"
        />
      </div>
      <progress-bar :progress="progress" v-if="hasItems" />
    </div>
    <div v-else class="d-flex flex-column align-items-center">
      <span>LOCKED</span>
      <img :src="require('@/assets/art/misc/airlock.png')" alt class="pixelated mt-2 mb-2" />
      <span class="danger-bubble">LEVEL {{action.requiredLevel}}</span>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import ProgressBar from "@/components/ProgressBar";
import ItemChance from '@/components/ItemTable/ItemChance';
import ItemRequirement from "@/components/ItemRequirement";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  components: { ProgressBar, ItemChance, ItemRequirement },
  props: ["jobId", "actionName", "action", "actionId"],
  computed: {
    ...mapGetters(["chronoSpeed"]),
    ...mapState({
      id() {
        return this._uid.toString();
      },
      currentActionId(state, getters) {
        return getters[this.jobId + "/currentActionId"];
      },
      currentProgress(state, getters) {
        return getters[this.jobId + "/currentProgress"];
      },
      level(state, getters) {
        return getters[this.jobId + "/level"];
      },
      hasActionRequiredItems(state, getters) {
        return getters[this.jobId + "/hasActionRequiredItems"];
      }
    }),
    item() {
      return ITEMS.get(this.action.item);
    },
    progress() {
      if (this.currentActionId != this.actionId) return 0;
      return this.currentProgress / this.action.time;
    },
    locked() {
      return this.level < this.action.requiredLevel;
    },
    hasItems() {
      return this.hasActionRequiredItems(this.actionId);
    },
    actionTitle() {
      if (this.action.name) return this.action.name;
      if (this.action.item) return this.item.name;
      return "BAD TITLE";
    }
  },
  methods: {
    tryStartAction(actionId) {
      this.$store.dispatch(`${this.jobId}/tryStartAction`, actionId);
    }
  }
};
</script>

<style scoped>
.action {
  transition: transform 0.15s ease-out, opacity 0.15s ease-out,
    box-shadow 0.15s ease-out, -webkit-transform 0.15s ease-out;
  margin-bottom: 1.9rem;
}
.action.locked {
  background-color: rgb(68, 68, 68);
  border-top: 4px solid #953d3d !important;
  color: rgb(255, 255, 255) !important;
}
.action:not(.locked):hover {
  cursor: pointer;
  box-shadow: 0 0.5rem 2.5rem #e6e6e6;
  transform: translateY(-2px);
}

.action img {
  height: 64px;
}

.action-title {
  font-size: 14px;
}
.action-time {
  font-size: 12px;
}

.danger-bubble {
  font-size: 14px;
}
</style>