<template>
  <div class="action text-muted" @click="tryStartAction(actionId)">
    <p class="action-title">MINE</p>
    <p class="text-uppercase">{{item.name}}</p>
    <p class="action-time mt-1">{{action.time}} SECONDS</p>
    <img :src="action.icon" alt class="pixelated mt-2" />
    <progress-bar class="mt-3" :progress="progress" />
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
    ...mapGetters("mining", ["currentActionId", "currentProgress"]),
    item() {
      return ITEMS.get(this.action.item);
    },
    progress() {
      if (this.currentActionId != this.actionId) return 0;
      return this.currentProgress / this.action.time;
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
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.25rem;
  transition: transform 0.15s ease-out, opacity 0.15s ease-out,
    box-shadow 0.15s ease-out, -webkit-transform 0.15s ease-out;
}
.action:hover {
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
</style>