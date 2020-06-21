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
            <button type="button" class="btn btn-primary" @click="resetClicked">Reset Data</button>
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
              class="btn btn-primary my-1"
              @click="openItemSpawner"
            >Open Item Spawner</button>
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="openLevelAllJobs"
            >Max All Jobs</button>
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="openSkillLeveler"
            >Level Individual Jobs</button>
            <button
              type="button"
              class="btn btn-primary my-1 d-block"
              @click="getSomeCash"
            >Get $1,000,000</button>
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
import ContentAbstract from "@/components/Content/ContentAbstract";
import ModalResetData from "@/components/Modals/ModalResetData";
import ModalItemSpawner from "@/components/Modals/ModalItemSpawner";
import ModalLevelAllJobs from "@/components/Modals/ModalLevelAllJobs";
import ModalSkillLeveler from "@/components/Modals/ModalSkillLeveler";
export default {
  extends: ContentAbstract,
  // eslint-disable-next-line
  components: { ModalResetData, ModalItemSpawner, ModalSkillLeveler },
  computed: {},
  methods: {
    resetClicked() {
      this.$modal.show(ModalResetData, {}, { height: "auto", width: "320px" });
    },
    openItemSpawner() {
      this.$modal.show(
        ModalItemSpawner,
        {},
        { height: "600px", width: "980px" }
      );
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