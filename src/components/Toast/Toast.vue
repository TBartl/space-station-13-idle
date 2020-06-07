<template>
  <div class="custom-toast d-flex">
    <div class="toast-content">
      <toast-content v-for="(content, index) in toast.contents" :key="index" :content="content" />
    </div>
  </div>
</template>


<script>
import ToastContent from "@/components/Toast/ToastContent";
export default {
  components: { ToastContent },
  props: ["toast"]
};
</script>

<style scoped>
.custom-toast {
  position: fixed;
  color: white;
  bottom: 0;
  z-index: 1000;
  left: 0;
  right: 0;
  pointer-events: none;
  text-align: center;
}
img {
  width: 32px;
}
</style>

<style scoped>
.toast-content {
  font-size: 32x;
  margin: auto;
  background-color: rgba(78, 78, 78, 0.472);
  color: white;
  border-radius: 8px;
  padding: 0.25rem 0.75rem;
  margin-bottom: 0.5rem;
}
</style>