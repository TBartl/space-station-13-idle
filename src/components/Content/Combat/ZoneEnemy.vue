<template>
  <div class="content-block enemy p-1 d-flex flex-row align-items-center justify-content-between">
    <div class="d-flex flex-row align-items-center">
      <img :src="enemy.icon" class="pixelated mr-2" alt />
      <div class="d-flex flex-column">
        <span class="name">{{enemy.name}}</span>
        <div class="robustness">
          <span class="mr-1">Robustness:</span>
          <span class="danger-bubble">{{enemy.robustness}}</span>
        </div>
      </div>
    </div>
    <div>
      <button type="button" :id="id" class="btn btn-primary">View Loot</button>
      <b-popover :target="id" triggers="click blur" placement="top" delay="0">
        <item-chance :data="enemy" />
      </b-popover>
      <button type="button" class="btn btn-danger mx-2" @click="fight">Fight!</button>
    </div>
  </div>
</template>

<script>
import { ENEMIES } from "@/data/combat";
import ItemChance from "@/components/ItemTable/ItemChance";
import { mapActions } from "vuex";
export default {
  components: { ItemChance },
  props: ["enemyId"],
  computed: {
    id() {
      return this._uid.toString();
    },
    enemy() {
      return ENEMIES[this.enemyId];
    }
  },
  methods: {
    ...mapActions("combat", ["startCombat"]),
    fight() {
      this.startCombat(this.enemyId);
    }
  }
};
</script>

<style scoped>
img {
  width: 64px;
}
.enemy {
  background-color: white;
  border-radius: 4px;
  border-top-color: rgb(184, 58, 58);
}
.enemy:not(:last-child) {
  margin-bottom: 0.3rem;
}
.name {
  font-size: 18px;
}
.robustness {
  font-size: 12px;
}
</style>