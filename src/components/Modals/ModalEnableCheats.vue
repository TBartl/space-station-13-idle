<template>
  <div class="d-flex flex-column align-items-center m-5">
    <h3 class="text-center">Are you sure you want to enable cheats?</h3>

    <div class="cheater my-3">
      <p>You cheated not only the game, but yourself.</p>
      <p>You experienced a hollow victory.</p>
      <p>You didn't grow. You didn't improve.</p>
      <p>You took a shortcut and gained nothing.</p>
      <p>Nothing was risked and nothing was gained.</p>
      <p>It's sad that you don't know the difference.</p>
    </div>

    <h5 class="mb-3">THIS CANNOT BE REVERSED</h5>

    <button class="btn btn-danger" @click="enableCheats">Enable Cheats</button>
  </div>
</template>

<script>
export default {
  methods: {
    enableCheats() {
      this.$store.commit("cheats/enableCheats");
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.cheater {
  margin: auto;
  text-align: center;
  font-style: italic;
  color: rgb(179, 179, 179);
  font-size: 14px;
}
</style>