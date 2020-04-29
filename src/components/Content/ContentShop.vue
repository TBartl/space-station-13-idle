<template>
  <div class="content-shop">
    <content-header
      text="Cargo Terminal"
      :icon="require('@/assets/art/sidebar/cargo.png')"
      color="#febb33"
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
