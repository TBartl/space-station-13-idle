<template>
  <div>
    <content-header text="Combat" :icon="require('@/assets/art/combat/combatIcon.png')" color="#a4a4a9" />
    <div class="content-container">
      <div class="row">
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  computed: {}
};
</script>

<style scoped>
</style>