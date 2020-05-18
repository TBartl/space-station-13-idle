<template>
  <div>
    <span class="robustness danger-bubble">ROBUSTNESS: {{robustness}}</span>
  </div>
</template>

<script>
import { calcRobustness } from "@/utils/combatUtils";
export default {
  props: ["usePrefix", "stats"],
  computed: {
    robustness() {
      return calcRobustness(this.stats);
    }
  }
};
</script>


<style scoped>
.robustness {
  font-size: 13px;
	border-radius: 6px;
	padding: 4px 7px;
}
</style>
