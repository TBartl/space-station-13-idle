<template>
  <div class="progress w-100">
    <div
      class="progress-bar progress-bar-striped progress-bar-animated"
      :style="`width: ${progress*100}%`"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.progress-bar {
  transition: none !important;
}
</style>