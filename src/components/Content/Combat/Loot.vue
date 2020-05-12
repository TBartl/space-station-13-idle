<template>
  <div class="content-block">
    <div class="d-flex flex-row align-items-center justify-content-between">
      <span class="loot-title">Loot (0/16)</span>
      <button class="btn btn-primary" @click="lootAll">Loot all</button>
    </div>
  </div>
</template>

<script>
import { ENEMIES } from "@/data/combat";
import { acquireItemFrom } from "@/utils/itemChanceUtils";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("combat", ["targetEnemy"]),
    enemy() {
      return ENEMIES[this.targetEnemy];
    }
  },
  methods: {
    lootAll() {
      for (var i = 0; i < this.$store.state.chronoSpeed; i++) {
        acquireItemFrom(this.enemy, this.$store.commit);
      }
    }
  }
};
</script>

<style scoped>
.loot-title {
  font-size: 20px;
}
button {
  font-size: 16px;
}
</style>