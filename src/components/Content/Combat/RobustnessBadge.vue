<template>
  <div>
    <span class="robustness danger-bubble">ROBUSTNESS: {{robustness}}</span>
  </div>
</template>

<script>
import { calcRobustness } from "@/utils/combatUtils";
export default {
  props: ["stats", "mobType"],
  computed: {
    robustness() {
      return calcRobustness(this.stats, this.mobType);
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
