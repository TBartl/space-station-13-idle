<template>
  <div class="d-flex flex-column align-items-center">
    <item-chance-a-b-c v-if="data.item || data.items" :data="data" />
    <item-chance-d v-if="data.itemTable" :data="data" />
  </div>
</template>

<script>
import ItemChanceABC from "@/components/ItemTable/ItemChanceABC";
import ItemChanceD from "@/components/ItemTable/ItemChanceD";
export default {
  components: { ItemChanceABC, ItemChanceD },
  props: ["data"]
};
</script>