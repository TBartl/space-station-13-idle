<template>
  <div class="d-flex flex-column align-items-center m-3 text-center">
    <h3 class="text-center mb-3">Welcome Back!</h3>
    <span>
      Your time offline has been converted for use at the
      <img
        :src="require('@/assets/art/chrono/icon.png')"
        class="mx--1"
      />
      <b>Chronosphere</b>.
    </span>
    <span class="mt-2 description">TOTAL TIME AVAILABLE:</span>
    <span>{{remainingTimeText}}</span>
    <span v-if="oldExport"><br><b class="chrono">You've earned an Export Bonus!</b><br>
       Export your save to keep your data backed up and earn 30 extra minutes in your Time Bank.</span>
    <button class="btn btn-primary mt-3" @click="confirmationClicked">OK</button>
  </div>
</template>

<script>
export default {
  computed: {
    remainingTimeText() {
      return this.$store.getters["chrono/remainingTimeText"];
    },
    oldExport() {
      return this.$store.getters["chrono/oldExport"];
    }
  },
  methods: {
    confirmationClicked() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.chrono {
  color: rgb(28, 160, 221);
  max-width: 130px;
  font-size: 14px;
}
</style>
