<template>
  <div>
    <item-chance-a-b-c v-if="data.item || data.items" :data="data" />
  </div>
</template>

<script>
import ItemChanceABC from "@/components/ItemTable/ItemChanceABC";
export default {
  components: { ItemChanceABC },
  props: ["data"]
};
</script>