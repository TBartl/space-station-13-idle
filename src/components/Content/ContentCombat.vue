<template>
  <div>
    <content-header
      text="Combat"
      :icon="require('@/assets/art/combat/combatIcon.png')"
      color="#a4a4a9"
    />
    <div class="content-container">
      <div class="row" v-if="targetEnemy == null">
        <div class="col-4" v-for="(zone, index) in zones" :key="index">
          <zone :zone="zone" />
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-12 mb-3">
					<run-away />
				</div>
        <div class="col-4">
          <div class="content-block">A</div>
        </div>
        <div class="col-2">
          <div class="content-block">B</div>
        </div>
        <div class="col-2">
          <div class="content-block">C</div>
        </div>
        <div class="col-4">
          <div class="content-block">D</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapState, mapGetters } from "vuex";
import Zone from "@/components/Content/Combat/Zone";
import RunAway from "@/components/Content/Combat/RunAway";
import { ZONES } from "@/data/combat";
export default {
  extends: ContentAbstract,
  components: { Zone, RunAway },
  computed: {
    ...mapGetters("combat", ["targetEnemy"]),
    zones() {
      return ZONES;
    }
  }
};
</script>

<style scoped>
</style>