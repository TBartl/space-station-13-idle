<template>
  <div class="custom-toast d-flex">
    <toast-content :content="toast.contents[0]" />
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
  text-align: center;
}
img {
  width: 32px;
}
</style>