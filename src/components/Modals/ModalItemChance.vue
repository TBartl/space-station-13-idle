<template>
  <div>
    <item-chance class="p-2" :data="data" />
  </div>
</template>

<script>
import ItemChance from "@/components/ItemTable/ItemChance";
export default {
  components: { ItemChance },
  props: ["data"]
};
</script>