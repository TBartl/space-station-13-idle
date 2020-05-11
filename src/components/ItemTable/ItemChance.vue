<template>
  <div class="d-flex flex-column align-items-center">
    <item-chance-a-b-c v-if="data.item || data.items" :data="data" />
    <item-chance-d v-if="data.itemTable" :data="data" />
    <item-chance-e v-if="data.itemTables" :data="data" />
  </div>
</template>

<script>
import ItemChanceABC from "@/components/ItemTable/ItemChanceABC";
import ItemChanceD from "@/components/ItemTable/ItemChanceD";
import ItemChanceE from "@/components/ItemTable/ItemChanceE";
export default {
  components: { ItemChanceABC, ItemChanceD, ItemChanceE },
  props: ["data"]
};
</script>