<template>
  <b-popover :target="target" triggers="hover" placement="top" delay="0">
		<p>POWER: {{stats.power | stat}}</p>
		<p>ATK_SPEED: {{stats.attackSpeed | stat}}</p>
		<p>BASE_DPS: {{baseDps | stat}}</p>
		<p>POWER_RATIO: {{powerRatio | stat}}</p>
		<br>
		<p>DPS = BASE_DPS + POWER_RATIO * POWER </p>
		<p class="pl-3">= {{baseDps | stat}} + {{powerRatio | stat}} * {{stats.power | stat}}</p>
		<p class="pl-3">= {{dps | stat}}</p>
		<br>
		<p>MAX_HIT = DPS * ATK_SPEED</p>
		<p class="pl-3">= {{dps | stat}} * {{stats.attackSpeed | stat}}</p>
		<p class="pl-3">= {{maxHit | stat}}</p>
		
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
    dps() {
      return this.$store.getters[this.mobType + "Mob/dps"];
		},
		maxHit() {
      return this.$store.getters[this.mobType + "Mob/maxHit"];
		}
  }
};
</script>

<style scoped>

</style>