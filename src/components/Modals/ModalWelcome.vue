<template>
  <div class="d-flex flex-column align-items-center m-5 text-center">
    <h3 class="text-center mb-3">Welcome, Playtester!</h3>
    <span>This game has not been released to the public yet.</span>
    <span class="my-3">Please avoid sharing links to it without asking one of the devs first.</span>
    <button class="btn btn-primary" @click="confirmationClicked">GOT IT!</button>
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