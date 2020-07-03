<template>
  <div :class="{simplified: simplified}">
    <div v-for="(subData, index) in data.itemTables" :key="index">
      <span>{{(subData.chance*100).toLocaleString()}}% chance for...</span>
      <div class="sub-table">
        <item-chance-a-b-c
          v-if="subData.item || subData.items"
          :data="subData"
          :simplified="simplified"
        />
        <item-chance-d v-if="subData.itemTable" :data="subData" :simplified="simplified" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemChanceABC from "@/components/ItemTable/ItemChanceABC";
import ItemChanceD from "@/components/ItemTable/ItemChanceD";
export default {
  components: { ItemChanceABC, ItemChanceD },
  props: ["data", "simplified"]
};
</script>

<style scoped>
.sub-table {
  margin-left: 0.4rem;
  padding-left: 0.5rem;
  border-left: 4px solid rgba(124, 124, 124, 0.233);
}
.simplified span {
	font-size: 13px;
	opacity: .8;
}
</style>