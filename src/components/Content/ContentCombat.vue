<template>
  <div>
    <content-header
      text="Combat"
      :icon="require('@/assets/art/combat/combatIcon.png')"
      color="#a4a4a9"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-4" v-for="(zone, index) in zones" :key="index">
          <zone :zone="zone" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapState } from "vuex";
import Zone from "@/components/Content/Combat/Zone";
import { ZONES } from "@/data/combat";
export default {
  extends: ContentAbstract,
  components: { Zone },
  computed: {
    zones() {
      return ZONES;
    }
  }
};
</script>

<style scoped>
</style>