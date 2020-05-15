<template>
  <div class="content-block">
    <div class="d-flex flex-row align-items-center justify-content-between">
      <span class="loot-title">Loot ({{drops.length}}/{{maxDrops}})</span>
      <button class="btn btn-primary" @click="lootAll">Loot all</button>
    </div>
    <div class="loot-grid w-100 d-flex flex-row flex-wrap">
      <loot-item
        v-for="(drop, index) in drops"
        :key="index"
        :itemId="drop.item"
        :count="drop.count"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { ENEMIES } from "@/data/combat";
import { acquireItemFrom } from "@/utils/itemChanceUtils";
import { mapGetters } from "vuex";
import LootItem from "@/components/Content/Combat/LootItem";

export default {
  components: { LootItem },
  computed: {
    ...mapGetters("combat", ["targetEnemy", "drops", "maxDrops"]),
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
.loot-grid {
  background-color: rgb(233, 233, 233);
  margin-top: 0.5rem;
  border-radius: 4px;
  min-height: 20px;
  box-shadow: inset 0 0 10px #00000018;
}
</style>