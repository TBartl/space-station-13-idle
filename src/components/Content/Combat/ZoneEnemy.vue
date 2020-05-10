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
      <button type="button" class="btn btn-primary" @click="viewLoot">View Loot</button>
      <button type="button" class="btn btn-danger mx-2" @click="fight">Fight!</button>
    </div>
  </div>
</template>

<script>
import { ENEMIES } from "@/data/combat";
import ModalItemChance from "@/components/Modals/ModalItemChance";
export default {
  props: ["enemyId"],
  computed: {
    enemy() {
      return ENEMIES[this.enemyId];
    }
  },
  methods: {
    fight() {
      console.log("TODO");
    },
    viewLoot() {
      this.$modal.show(
        ModalItemChance,
        { data: this.enemy },
        { height: "auto", 'width': "220px" }
      );
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