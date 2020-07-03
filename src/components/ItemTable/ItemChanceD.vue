<template>
  <div :class="{simplified: simplified}">
    <item-chance-a-b-c
      v-for="(subData, index) in data.itemTable"
      :key="index"
      :data="{'items': subData}"
      :chance="weights[index]"
      :simplified="simplified"
    />
  </div>
</template>

<script>
import ItemChanceABC from "@/components/ItemTable/ItemChanceABC";
export default {
  components: { ItemChanceABC },
  props: ["data", "simplified"],
  computed: {
    weights() {
      let total = this.data.itemTable.reduce((total, subData) => {
        return total + subData.weight;
      }, 0);
      return this.data.itemTable.map(subData => subData.weight / total);
    }
  }
};
</script>