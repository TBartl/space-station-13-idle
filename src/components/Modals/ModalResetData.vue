<template>
  <div class="d-flex flex-column align-items-center m-5">
    <h3 class="text-center mb-4">Are you sure you want to reset all of your progress?</h3>
    <button class="btn btn-danger" @click="resetClicked">RESET PROGRESS</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["resetData"]),
    resetClicked() {
      this.resetData();
      this.$emit("close");
    }
  }
};
</script>