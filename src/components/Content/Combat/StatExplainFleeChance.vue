<template>
  <b-popover :target="target" triggers="hover" placement="right" delay="0">
    <p>COMMAND_RATIO: {{commandRatio*100 | stat}}%</p>
    <br />
    <p>baseFleeChance: {{baseFleeChance*100 | stat}}%</p>
    <p>command: {{stats.command | stat}}</p>
    <br />
    <p>commandReduction = command * COMMAND_RATIO</p>
    <p class="pl-3">= {{stats.command | stat}} * {{commandRatio*100 | stat}}%</p>
    <p class="pl-3">= {{commandReduction*100 | stat}}%</p>
    <br />
    <p>fleeChance = baseFleeChance - commandReduction</p>
    <p class="pl-3">= {{baseFleeChance*100 | stat}}% - {{commandReduction*100 | stat}}%</p>
    <p class="pl-3">= {{fleeChance*100 | stat}}%</p>
  </b-popover>
</template>

<script>
export default {
  props: ["mobType", "target"],
  computed: {
    stats() {
      return this.$store.getters[this.mobType + "Mob/stats"];
    },
    baseFleeChance() {
      return this.$store.getters[this.mobType + "Mob/baseFleeChance"];
    },
    fleeChance() {
      return this.$store.getters[this.mobType + "Mob/fleeChance"];
    },
    commandRatio() {
      return this.$store.getters[this.mobType + "Mob/commandRatio"];
    },
    commandReduction() {
      return this.$store.getters[this.mobType + "Mob/commandReduction"];
    }
  }
};
</script>

<style scoped>
</style>