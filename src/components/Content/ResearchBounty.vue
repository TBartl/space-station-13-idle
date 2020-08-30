<template>
  <div
    class="content-block p-1 d-flex flex-column flex-md-row align-items-center justify-content-between"
  >

    <div>
      <span class="mr-1 bounty-desc">Items needed:</span>
        <item-requirement
            v-for="(entry, index) in Object.entries(bountyItemsList)"
            :key="index"
            :itemId="entry[0]"
            :count="entry[1]"
        />
    </div>
    <div>
      <span class="mr-1 bounty-desc">Reward:</span>
      <span>{{researchXPReward | cleanNum}}</span>
      <img :src="researchIcon" />
      <span> XP, and </span>
      <span>{{researchPointsReward | cleanNum}}</span>
      <img :src="require('@/assets/art/research/researchIcon.png')" />
      <span>research points</span>
    </div>

    <div class="d-flex flex-column mr-2">
      <button
        type="button"
        class="btn btn-primary btn-sm w-100"
        @click="reroll"
      >Reroll</button>
      <button
        type="button"
        class="btn btn-danger btn-sm w-100 mt-1"
        @click="analyze"
      >Analyze</button>
    </div>

  </div>
</template>

<script>
import { mapActions } from "vuex";
import { JOB as RESEARCH_JOB } from "@/data/research";
import ItemRequirement from "@/components/ItemRequirement";

export default {
  components: {ItemRequirement},
  props: [],
  computed: {
    researchIcon() {
      return RESEARCH_JOB.icon;
    },
    bountyItemsList() {
      return this.$store.getters["research/researchBountyItems"];
    },
    researchXPReward() {
      return this.$store.getters["research/xpReward"];
    },
    researchPointsReward() {
      return this.$store.getters["research/pointsReward"];
    }
  },
  methods: {
    ...mapActions("research", ["destructiveAnalysis"]),
    ...mapActions("research", ["rollNewBounty"]),
    analyze() {
      this.destructiveAnalysis();
    },
    reroll() {
      this.rollNewBounty();
    }
  }
};
</script>

<style scoped>
img {
  width: 64px;
}
.name {
  font-size: 18px;
}
</style>
