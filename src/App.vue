<template>
  <div id="app">
		<toast-container />
    <div class="mega-container">
      <sidebar/>
      <content-wrapper />
    </div>
    <modals-container />
  </div>
</template>

<script>
import ToastContainer from '@/components/ToastContainer'
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import ContentWrapper from "@/components/Content/ContentWrapper.vue";
export default {
  name: "App",
  components: {
		ToastContainer,
    Sidebar,
    ContentWrapper
  }
};
</script>

<style>
body {
  background-image: url("~@/assets/art/misc/background.png");
  background-size: cover;
}
</style>


<style scoped>
#app {
  height: 100%;
}

.mega-container {
  height: 100%;
  display: flex;
  align-items: stretch;
}
.mega-container * {
	height: 100%;
	overflow-y: auto;
}
</style>
