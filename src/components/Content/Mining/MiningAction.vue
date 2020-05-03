<template>
  <div class="action text-muted" :class="{'locked': locked}" @click="tryStartAction(actionId)">
    <div v-if="!locked" class="d-flex flex-column align-items-center">
      <p class="action-title">MINE</p>
      <p class="text-uppercase">{{item.name}}</p>
      <p class="action-time mt-1">{{action.xp}} XP / {{action.time}} SECONDS</p>
      <img :src="action.icon" alt class="pixelated mt-2" />
      <progress-bar class="mt-3" :progress="progress" />
    </div>
    <div v-else class="d-flex flex-column align-items-center">
      <span>LOCKED</span>
      <img :src="require('@/assets/art/misc/airlock.png')" alt class="pixelated mt-2" />
      <span class="danger">LEVEL {{action.requiredLevel}}</span>
    </div>
  </div>
</template>

<script>
import { ITEMS } from "@/data/mining";
import ProgressBar from "@/components/ProgressBar";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { ProgressBar },
  props: ["action", "actionId"],
  computed: {
    ...mapGetters("mining", ["currentActionId", "currentProgress", "level"]),
    item() {
      return ITEMS.get(this.action.item);
    },
    progress() {
      if (this.currentActionId != this.actionId) return 0;
      return this.currentProgress / this.action.time;
    },
    locked() {
      return this.level < this.action.requiredLevel;
    }
  },
  methods: {
    ...mapActions("mining", ["tryStartAction"])
  }
};
</script>

<style scoped>
.action {
  padding: 10px;
  background-color: rgb(251, 251, 251);
  border-top: 4px solid #c78329 !important;
  border-radius: 0.25rem;
  transition: transform 0.15s ease-out, opacity 0.15s ease-out,
    box-shadow 0.15s ease-out, -webkit-transform 0.15s ease-out;
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

.danger {
	font-size: 14px;
	margin-top: .5rem;
	padding: .15rem .25rem;
	background-color: rgb(179, 43, 43);
	border-radius: 8px;
}
</style>