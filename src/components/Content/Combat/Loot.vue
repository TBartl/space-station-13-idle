<template>
  <div class="content-block">
    <div class="d-flex flex-row align-items-center justify-content-between">
      <span class="loot-title">Loot ({{drops.length}}/{{maxDrops}})</span>
      <div >
        <button type="button" id="view-enemy-loot" class="my-1 btn btn-primary mr-1">View Enemy Drops</button>
        <b-popover target="view-enemy-loot" triggers="click blur" placement="top" delay="0" :customClass="$store.getters['settings/darkModeClass']">
          <item-chance :data="enemy" />
        </b-popover>
        <button class="my-1 btn btn-primary" @click="lootAll">Loot all</button>
      </div>
    </div>
    <div class="loot-grid w-100 d-flex flex-row flex-wrap">
      <loot-item
        v-for="(drop, index) in drops"
        :key="index"
        :itemId="drop.itemId"
        :count="drop.count"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import ENEMIES from "@/data/enemies";
import { mapGetters } from "vuex";
import LootItem from "@/components/Content/Combat/LootItem";
import ItemChance from "@/components/ItemTable/ItemChance";

export default {
  components: { LootItem, ItemChance },
  computed: {
    ...mapGetters("combat", ["targetEnemy", "drops", "maxDrops"]),
    enemy() {
      return ENEMIES[this.targetEnemy];
    }
  },
  methods: {
    lootAll() {
      this.$store.dispatch("combat/lootAll");
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
  min-height: 109px;
  box-shadow: inset 0 0 10px #00000018;
}
.dark-mode .loot-grid {
	background-color: #2C2D33;
}
</style>