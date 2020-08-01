<template>
  <div class="d-flex flex-column align-items-center m-3 text-center">
    <h3 class="text-center mb-3">Update 1.3 Released!</h3>

    <img :src="require('@/assets/art/misc/changelog3.png')" />

    <span
      class="my-3"
    >Full changelog of features, balance changes, and more are available on the Discord:</span>

    <a class="discord" href="https://discord.gg/HwbK9XQ" target="_blank">
      <img :src="require('@/assets/art/misc/fake_discord.png')" />
    </a>
    <button class="btn btn-primary mt-3" @click="confirmationClicked">Close</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    confirmationClicked() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  image-rendering: unset !important;
}
.discord {
  padding: 4px;
  border-radius: 4px;
  background-color: #36393f;
  max-width: 258x;
}
</style>