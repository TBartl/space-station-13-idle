<template>
  <div class="progress w-100" :style="text ? 'height: unset !important': ''">
    <div
      class="progress-bar progress-bar-striped font-weight-bold"
      :class="[customClass]"
      :style="`width: ${progress*100}%;`"
    >
      <span v-if="text" class="progress-text">{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
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
.progress-text {
	font-size: 14px;
	padding: .2rem;
}
</style>