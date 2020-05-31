<template>
  <button class="btn btn-primary d-flex flex-column align-items-center" @click="completeTask">
    <p>Task complete!</p>
    <div>
      <span class="mr-1 validhunting-desc">Collect</span>
      <span>+{{validhuntingXP | cleanNum}}</span>
      <img :src="validhuntingIcon" />
      <span>XP</span>
    </div>
  </button>
</template>

<script>
import { JOB as VALIDHUNTING_JOB } from "@/data/validhunting";
export default {
  computed: {
    validhuntingXP() {
      return this.$store.getters["validhunting/xpReward"];
    },
    validhuntingIcon() {
      return VALIDHUNTING_JOB.icon;
    }
  },
  methods: {
    completeTask() {
      this.$store.dispatch("validhunting/completeTask");
    }
  }
};
</script>