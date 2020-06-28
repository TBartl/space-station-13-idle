<template>
  <div class="content-settings">
    <content-header
      text="Settings"
      :icon="require('@/assets/art/sidebar/gear.png')"
      color="rgb(231, 150, 28)"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <div class="content-block">
            <h5>SETTINGS</h5>
            <hr />
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="resetInfoClicked"
            >Reset Dismissed Tutorials</button>
            <button
              type="button"
              class="btn btn-danger my-1 d-block"
              @click="resetDataClicked"
            >Reset ALL Data</button>
          </div>
        </div>
        <div class="col-12 mt-3">
          <div class="content-block">
            <h5>CHEATS</h5>
            <hr />
            <div class="cheater w-100">
              <p>You cheated not only the game, but yourself.</p>
              <p>You experienced a hollow victory.</p>
              <p>You didn't grow. You didn't improve.</p>
              <p>You took a shortcut and gained nothing.</p>
              <p>Nothing was risked and nothing was gained.</p>
              <p>It's sad that you don't know the difference.</p>
            </div>
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="openItemSpawner"
            >Open Item Spawner</button>
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="getSomeCash"
            >Get $1,000,000</button>
            <div class="custom-control custom-switch">
              <input
                v-model="showAllActions"
                type="checkbox"
                class="custom-control-input"
                id="showAllActions"
              />
              <label class="custom-control-label" for="showAllActions">Show All Actions</label>
            </div>
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="openSkillLeveler"
            >Level Individual Jobs</button>
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="openLevelAllJobs"
            >Max All Jobs</button>
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="completeCurrentValidhuntingTask"
            >Complete Current Validhunting Task</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/utils/eventBus.js";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ModalResetData from "@/components/Modals/ModalResetData";
import ModalLevelAllJobs from "@/components/Modals/ModalLevelAllJobs";
import ModalSkillLeveler from "@/components/Modals/ModalSkillLeveler";

import ENEMIES from "@/data/enemies";
import { calcRobustness } from "@/utils/combatUtils";

export default {
  extends: ContentAbstract,
  computed: {
    showAllActions: {
      get() {
        return this.$store.getters["cheats/showAllActions"];
      },
      set(value) {
        this.$store.commit("cheats/setShowAllActions", value);
      }
    }
  },
  methods: {
    resetInfoClicked() {
      this.$store.commit("info/resetAll");
      EventBus.$emit("toast", { text: "Tutorials reset!" });
    },
    resetDataClicked() {
      this.$modal.show(ModalResetData, {}, { height: "auto", width: "320px" });
    },
    openItemSpawner() {
      this.$store.commit("setVisibleSidebarItem", "item-spawner");
    },
    openLevelAllJobs() {
      this.$modal.show(
        ModalLevelAllJobs,
        {},
        { height: "auto", width: "320px" }
      );
    },
    openSkillLeveler() {
      this.$modal.show(
        ModalSkillLeveler,
        {},
        { height: "auto", width: "320px" }
      );
    },
    getSomeCash() {
      this.$store.commit("inventory/changeItemCount", {
        itemId: "money",
        count: 1000000
      });
    },
    completeCurrentValidhuntingTask() {
      this.$store.dispatch("validhunting/completeTask", true);
      EventBus.$emit("toast", { text: "Task Complete!" });

      // In case I ever want to simulate this again:
      // let table = [
      //   ["Player Level", "Target", "Target Robust", "Count", "XP Reward"]
      // ];
      // let totalKills = 0;
      // let pushTable = () => {
      //   let enemy = ENEMIES[this.$store.getters["validhunting/targetEnemyId"]];
      //   table.push([
      //     this.$store.getters["validhunting/level"],
      //     enemy.name,
      //     calcRobustness(enemy.stats, "enemy"),
      //     this.$store.getters["validhunting/targetCount"],
      //     this.$store.getters["validhunting/xpReward"].toLocaleString()
      //   ]);
      // };
      // while (this.$store.getters["validhunting/level"] < 50) {
      //   pushTable();
      //   totalKills += this.$store.getters["validhunting/targetCount"];
      //   this.$store.dispatch("validhunting/completeTask", true);
      // }
      // pushTable();
      // console.table(table);
      // console.log("Final kill count:", totalKills);
    }
  }
};
</script>

<style scoped>
.cheater {
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-style: italic;
  color: rgb(179, 179, 179);
  font-size: 14px;
}
</style>