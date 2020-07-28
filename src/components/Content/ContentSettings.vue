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

            <div class="custom-control custom-switch">
              <input
                v-model="inventoryFullStop"
                type="checkbox"
                class="custom-control-input"
                id="inventoryFullStop"
              />
              <label
                class="custom-control-label"
                for="inventoryFullStop"
              >Stop Actions when Full Inventory</label>
            </div>

            <div class="custom-control custom-switch">
              <input
                v-model="pocketsEmptyStop"
                type="checkbox"
                class="custom-control-input"
                id="pocketsEmptyStop"
              />
              <label
                class="custom-control-label"
                for="pocketsEmptyStop"
              >Stop Combat when Pockets Empty</label>
            </div>

            <div class="custom-control custom-switch">
              <input
                v-model="darkMode"
                type="checkbox"
                class="custom-control-input"
                id="darkMode"
              />
              <label
                class="custom-control-label"
                for="darkMode"
              >Dark Mode [EXPERIMENTAL!]</label>
            </div>

            <div class="custom-control custom-switch">
              <input
                v-model="chronoPanelEnabled"
                type="checkbox"
                class="custom-control-input"
                id="chronoPanelEnabled"
              />
              <label
                class="custom-control-label"
                for="chronoPanelEnabled"
              >Show Mini Chrono Panel when Time is Banked</label>
            </div>
            <div class="custom-control custom-switch">
              <input
                v-model="showVirtualLevels"
                type="checkbox"
                class="custom-control-input"
                id="showVirtualLevels"
              />
              <label
                class="custom-control-label"
                for="showVirtualLevels"
              >Show Virtual Levels Beyond {{maxLevel}}</label>
            </div>
            
            <div class="custom-control custom-switch">
              <input
                v-model="showFullValues"
                type="checkbox"
                class="custom-control-input"
                id="showFullValues"
              />
              <label
                class="custom-control-label"
                for="showFullValues"

              >Display Full Item Counts in Jobs (may look ugly with huge numbers)</label>
            </div>
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="exportDataClicked"
            >Export Data</button>
            <div class="d-flex flex-row align-items-center">
              <button
                type="button"
                class="btn btn-danger my-1 d-block flex-shrink-0 mr-2"
                :class="{'cheats-disabled': !fileData}"
                @click="importDataClicked"
              >Import Data</button>
              <input
                type="file"
                class="form-control-file"
                accept="application/JSON"
                @change="importDataChanged"
              />
            </div>
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
            <button
              v-if="!cheatsEnabled"
              type="button"
              class="btn btn-danger my-1 d-block"
              @click="openEnableCheats"
            >Enable Cheats</button>
            <div :class="{'cheats-disabled': !cheatsEnabled}">
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
              <div class="custom-control custom-switch">
                <input
                  v-model="infiniteChrono"
                  type="checkbox"
                  class="custom-control-input"
                  id="infiniteChrono"
                />
                <label class="custom-control-label" for="infiniteChrono">Infinite Chronosphere Time</label>
              </div>
              <div class="custom-control custom-switch">
                <input
                  v-model="extraChronoOptions"
                  type="checkbox"
                  class="custom-control-input"
                  id="extraChronoOptions"
                />
                <label
                  class="custom-control-label"
                  for="extraChronoOptions"
                >Extra Chronosphere Options</label>
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
  </div>
</template>

<script>
import { EventBus } from "@/utils/eventBus.js";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ModalResetData from "@/components/Modals/ModalResetData";
import ModalLevelAllJobs from "@/components/Modals/ModalLevelAllJobs";
import ModalSkillLeveler from "@/components/Modals/ModalSkillLeveler";
import ModalEnableCheats from "@/components/Modals/ModalEnableCheats";
import { MAX_LEVEL } from "@/data/experience";

import ENEMIES from "@/data/enemies";
import { calcRobustness } from "@/utils/combatUtils";
import { reducer } from "@/state/store";

export default {
  extends: ContentAbstract,
  data() {
    return {
      fileData: null
    };
  },
  computed: {
    showAllActions: {
      get() {
        return this.$store.getters["cheats/showAllActions"];
      },
      set(value) {
        this.$store.commit("cheats/setShowAllActions", value);
      }
    },
    infiniteChrono: {
      get() {
        return this.$store.getters["cheats/infiniteChrono"];
      },
      set(value) {
        this.$store.commit("cheats/setInfiniteChrono", value);
      }
    },
    extraChronoOptions: {
      get() {
        return this.$store.getters["cheats/extraChronoOptions"];
      },
      set(value) {
        this.$store.commit("cheats/setExtraChronoOptions", value);
      }
    },
    showVirtualLevels: {
      get() {
        return this.$store.getters["settings/showVirtualLevels"];
      },
      set(value) {
        this.$store.commit("settings/setShowVirtualLevels", value);
      }
    },
	showFullValues: {
      get() {
        return this.$store.getters["settings/showFullValues"];
      },
      set(value) {
        this.$store.commit("settings/setShowFullValues", value);
      }
    },
    inventoryFullStop: {
      get() {
        return this.$store.getters["settings/inventoryFullStop"];
      },
      set(value) {
        this.$store.commit("settings/setInventoryFullStop", value);
      }
    },
    pocketsEmptyStop: {
      get() {
        return this.$store.getters["settings/pocketsEmptyStop"];
      },
      set(value) {
        this.$store.commit("settings/setPocketsEmptyStop", value);
      }
    },
    chronoPanelEnabled: {
      get() {
        return this.$store.getters["settings/chronoPanelEnabled"];
      },
      set(value) {
        this.$store.commit("settings/setChronoPanelEnabled", value);
      }
    },
    darkMode: {
      get() {
        return this.$store.getters["settings/darkMode"];
      },
      set(value) {
        this.$store.commit("settings/setDarkMode", value);
      }
    },
    cheatsEnabled() {
      return this.$store.getters["cheats/cheatsEnabled"];
    },
    maxLevel() {
      return MAX_LEVEL;
    }
  },
  methods: {
    openEnableCheats() {
      this.$modal.show(
        ModalEnableCheats,
        {},
        { height: "auto", width: "420px" }
      );
    },
    resetInfoClicked() {
      this.$store.commit("info/resetAll");
      EventBus.$emit("toast", { text: "Tutorials reset!", duration: 3000 });
    },
    exportDataClicked() {
      let file = new Blob([JSON.stringify(reducer(this.$store.state))], {
        type: "text/plain"
      });

      let el = document.createElement("a");
      let url = URL.createObjectURL(file);
      el.href = url;
      el.download = "SpaceStationIdleSave.json";
      document.body.appendChild(el);
      el.click();
      setTimeout(function() {
        document.body.removeChild(el);
        window.URL.revokeObjectURL(url);
      }, 0);

      EventBus.$emit("toast", { text: "Data exported!", duration: 3000 });
    },
    importDataChanged(event) {
      this.fileData = null;

      let files = event.target.files;
      if (files.length == 0) {
        return;
      }

      let reader = new FileReader();
      reader.addEventListener("load", event => {
        this.fileData = event.target.result;
      });
      reader.readAsText(files[0]);
    },
    importDataClicked() {
      if (!this.fileData) {
        EventBus.$emit("toast", { text: "No file to import!", duration: 3000 });
        return;
      }

      this.$store.dispatch("setData", JSON.parse(this.fileData));
      this.$store.dispatch("chrono/updateOfflineTime");
      EventBus.$emit("toast", { text: "Data imported!", duration: 3000 });
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
      EventBus.$emit("toast", { text: "Task Complete!", duration: 3000 });

      // In case I ever want to simulate this again:
      // let table = [
      //   ["Player Level", "Target", "Target Robust", "Count", "XP Reward"]
      // ];
      // let totalKills = 0;
      // let totalDamage = 0;
      // let pushTable = () => {
      //   let enemy = ENEMIES[this.$store.getters["validhunting/targetEnemyId"]];
      //   table.push([
      //     this.$store.getters["validhunting/level"],
      //     enemy.name,
      //     calcRobustness(enemy.stats, "enemy"),
      //     this.$store.getters["validhunting/targetCount"],
      //     this.$store.getters["validhunting/xpReward"].toLocaleString()
      //   ]);
      //   totalDamage += enemy.stats.maxHealth * this.$store.getters["validhunting/targetCount"];
      // };
      // while (this.$store.getters["validhunting/level"] < 50) {
      //   pushTable();
      //   totalKills += this.$store.getters["validhunting/targetCount"];
      //   this.$store.dispatch("validhunting/completeTask", true);
      // }
      // pushTable();
      // console.table(table);
      // console.log("Total damage:", totalDamage);
      // console.log("Final kill count:", totalKills);
    }
  }
};
</script>

<style scoped>
.cheats-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none !important;
}
.cheats-disabled * {
  pointer-events: none !important;
}
</style>
