<template>
  <b-popover :target="target" triggers="hover" placement="right" delay="0">
    <p>PRECISION: {{stats.precision | stat}}</p>
    <p>TARGET_EVASION: {{targetStats.evasion | stat}}</p>
    <p>INTERVAL: {{hitSigma | stat}}</p>
    <br />
    <p>DIFF = PRECISION - TARGET_EVASION</p>
    <p class="pl-3">= {{stats.precision | stat}} - {{targetStats.evasion | stat}}</p>
    <p class="pl-3">= {{hitDiff | stat}}</p>
    <br />
		<p>SIGMA = DIFF / INTERVAL</p>
    <p class="pl-3">= {{(hitDiff / hitSigma) | stat}}</p>
		<br />
    <p>HIT_CHANCE = zTest(SIGMA)</p>
    <p class="pl-3">= zTest({{hitDiff | stat}} / {{hitSigma | stat}})</p>
    <p class="pl-3">= {{(hitChance*100).toFixed(1)}}%</p>
		<img class="w-100 curve" :src="curve" alt="">
  </b-popover>
</template>

<script>
const curves = {
	"-3.0": require("@/assets/art/misc/math/curve_-3.0.png"),
	"-2.5": require("@/assets/art/misc/math/curve_-2.5.png"),
	"-2.0": require("@/assets/art/misc/math/curve_-2.0.png"),
	"-1.5": require("@/assets/art/misc/math/curve_-1.5.png"),
	"-1.0": require("@/assets/art/misc/math/curve_-1.0.png"),
	"-0.5": require("@/assets/art/misc/math/curve_-0.5.png"),
	"0.0": require("@/assets/art/misc/math/curve_0.0.png"),
	"0.5": require("@/assets/art/misc/math/curve_0.5.png"),
	"1.0": require("@/assets/art/misc/math/curve_1.0.png"),
	"1.5": require("@/assets/art/misc/math/curve_1.5.png"),
	"2.0": require("@/assets/art/misc/math/curve_2.0.png"),
	"2.5": require("@/assets/art/misc/math/curve_2.5.png"),
	"3.0": require("@/assets/art/misc/math/curve_3.0.png"),
}
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
		},
		curve() {
			let sigma = this.hitDiff / this.hitSigma;
			sigma = Math.round(sigma * 2) / 2;
			sigma = Math.sign(sigma) * Math.min(Math.abs(sigma), 3);
			sigma = sigma.toFixed(1);
			return curves[sigma];
		}
  }
};
</script>

<style scoped>
/* Set the size ahead of time so we don't get screwed by the loading+modal wombo combo */
.curve{
	width: 256px;
	height: 137px;
}
</style>