<template>
  <div class="content-inventory">
    <content-header
      text="Inventory"
      :icon="require('@/assets/art/sidebar/backpack.png')"
      color="rgb(218, 125, 29)"
    />
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
export default {
  extends: ContentAbstract,
  computed: {}
};
</script>
