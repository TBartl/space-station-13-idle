<template>
  <b-popover :target="target" triggers="hover" placement="top" delay="0">
    <p>PRECISION: {{stats.precision | stat}}</p>
    <p>TARGET_EVASION: {{targetStats.evasion | stat}}</p>
    <p>SIGMA: {{hitSigma | stat}}</p>
    <br />
    <p>DIFF = PRECISION - TARGET_EVASION</p>
    <p class="pl-3">= {{stats.precision | stat}} - {{targetStats.evasion | stat}}</p>
    <p class="pl-3">= {{hitDiff | stat}}</p>
    <br />
    <p>HIT_CHANCE = zTest(DIFF / SIGMA)</p>
    <p class="pl-3">= zTest({{hitDiff | stat}} / {{hitSigma | stat}})</p>
    <p class="pl-3">= {{hitChance | stat}}</p>
  </b-popover>
</template>

<script>
export default {
  props: ["mobType", "target"],
  computed: {
    stats() {
      return this.$store.getters[this.mobType + "Mob/stats"];
    },
    targetStats() {
      return this.$store.getters[this.mobType + "Mob/targetStats"];
    },
    hitSigma() {
      return this.$store.getters[this.mobType + "Mob/hitSigma"];
    },
    hitDiff() {
      return this.$store.getters[this.mobType + "Mob/hitDiff"];
    },
    hitChance() {
      return this.$store.getters[this.mobType + "Mob/hitChance"];
    }
  }
};
</script>

<style scoped>
</style>