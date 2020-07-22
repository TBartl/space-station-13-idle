<template>
  <b-popover :target="target" triggers="hover" placement="right" delay="0" :customClass="$store.getters['settings/darkModeClass']">
    <p>BASE_DPS: {{baseDps | stat}}</p>
    <p>POWER_RATIO: {{powerRatio | stat}}</p>
		<br>
    <p>power: {{stats.power | stat}}</p>
    <p>atkSpeed: {{stats.attackSpeed | stat}}</p>
    <p>luck: {{stats.power | stat}}</p>
    <p v-if="targetProtection">targetProtection: {{targetProtection}}%</p>
    <br />
    <p>dps = BASE_DPS + POWER_RATIO * power</p>
    <p class="pl-3">= {{baseDps | stat}} + {{powerRatio | stat}} * {{stats.power | stat}}</p>
    <p class="pl-3">= {{dps | stat}}</p>
    <br />
    <p>maxHit = dps * atkSpeed{{targetProtection ? " * (1-targetProtection)" : ""}}</p>
    <p class="pl-3">= {{dps | stat}} * {{stats.attackSpeed | stat}}{{targetProtection ? " * (100%-"+targetProtection+"%)" : ""}}</p>
    <p class="pl-3">= {{maxHit | stat}}</p>
    <br />
    <p>minHit = maxHit * luck</p>
    <p class="pl-3">= {{maxHit | stat}} * {{stats.luck}}%</p>
    <p class="pl-3">= {{minHit | stat}}</p>
  </b-popover>
</template>

<script>
export default {
  props: ["mobType", "target"],
  computed: {
    stats() {
      return this.$store.getters[this.mobType + "Mob/stats"];
    },
    baseDps() {
      return this.$store.getters[this.mobType + "Mob/baseDps"];
    },
    powerRatio() {
      return this.$store.getters[this.mobType + "Mob/powerRatio"];
    },
    targetProtection() {
      return this.$store.getters[this.mobType + "Mob/targetProtection"];
    },
    dps() {
      return this.$store.getters[this.mobType + "Mob/dps"];
    },
    maxHit() {
      return this.$store.getters[this.mobType + "Mob/maxHit"];
    },
    minHit() {
      return this.$store.getters[this.mobType + "Mob/minHit"];
    }
  }
};
</script>

<style scoped>
</style>