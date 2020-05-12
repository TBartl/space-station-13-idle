<template>
  <div class="content-block d-flex flex-column align-items-center">
    <span class="text-uppercase mb-2">{{isPlayer ? "Player" : enemy.name}}</span>
    <img
      class="pixelated body-icon mb-2"
      :src="isPlayer ? require('@/assets/art/combat/player.png') : enemy.icon"
    />
    <progress-bar class="mb-2" :progress="1" :text="'HP: 100/100'" :customClass="'bg-danger'"  />
    <progress-bar class="mb-2" :progress="1" :text="'Attack Speed: 2.4s'"  />
		<span>Stats: TODO</span>
  </div>
</template>

<script>
import { ENEMIES } from "@/data/combat";
import { mapGetters } from "vuex";
import ProgressBar from "@/components/ProgressBar";
export default {
  components: { ProgressBar },
  props: ["isPlayer"],
  computed: {
    ...mapGetters("combat", ["targetEnemy"]),
    enemy() {
      return ENEMIES[this.targetEnemy];
    }
  }
};
</script>

<style scoped>
.body-icon {
  min-width: 32px;
  width: 128px;
  max-width: 100%;
  background-color: #ececec;
  border-radius: 0.5rem;
}
</style>