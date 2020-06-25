<template>
  <div class="content-settings">
    <content-header
      text="Settings"
      :icon="require('@/assets/art/sidebar/chronohelmet.png')"
      color="#3ac5ff"
    />
    <div class="content-container">
      <job-info
        infoId="chronosphere"
        :icon="require('@/assets/art/jobinfo/chronosphere.png')"
        title="Kor Phaeron the Chrono Legionnaire says..."
        :options="[
					{name: 'Back'},
					{name: 'REPLACEME', icon: require('@/assets/art/debug/A.png'), iconClass:'mx--1'}
				]"
      >
        <template slot="Back">
          <span>REPLACEME</span>
          <span>
            Example
            <img class="mx--2" :src="require('@/assets/art/mining/SheetIron.png')" />
            <b>Weighted</b>.
          </span>
        </template>
        <template slot="REPLACEME">
          <span>REPLACEME</span>
        </template>
      </job-info>

      <div class="row">
        <div class="col-12">
          <div class="content-block">
            <h5>Chronosphere</h5>
            <hr />
            <button
              type="button"
              class="btn"
              v-for="speed in speeds"
              :key="speed"
              :class="[chronoSpeed == speed ? 'btn-primary' : 'btn-secondary']"
              @click="setChronoSpeed(speed)"
            >{{speed}}x</button>
            <h6 class="mt-2">This feature is WIP; so right now everything is free!</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import { mapGetters, mapMutations } from "vuex";
export default {
  extends: ContentAbstract,
  computed: {
    ...mapGetters(["chronoSpeed"]),
    speeds() {
      return [0.01, 1, 2, 5, 10, 25, 100, 250, 500, 1000];
    }
  },
  methods: {
    ...mapMutations(["setChronoSpeed"])
  }
};
</script>

<style scoped>
.btn {
  margin-right: 0.5rem;
}
</style>
