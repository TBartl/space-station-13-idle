<template>
  <div class="d-flex flex-column align-items-center m-3 text-center">
    <h3 class="text-center mb-3">Welcome Back!</h3>
    <span>
      Your time offline has been converted for use at the
      <img
        :src="require('@/assets/art/sidebar/chronohelmet.png')"
        class="mx--1"
      />
      <b>Chronosphere</b>.
    </span>
    <span class="mt-2 description">TOTAL TIME AVAILABLE:</span>
    <span>{{remainingTimeText}}</span>
    <button class="btn btn-primary mt-3" @click="confirmationClicked">OK</button>
  </div>
</template>

<script>
export default {
  computed: {
    remainingTimeText() {
      return this.$store.getters["chrono/remainingTimeText"];
    }
  },
  methods: {
    confirmationClicked() {
      this.$emit("close");
    }
  }
};
</script>