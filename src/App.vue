<template>
  <div id="app">
    <div class="mega-container">
      <sidebar />
      <content-container />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import ContentContainer from "@/components/Content/ContentContainer.vue";
export default {
  name: "App",
  components: {
		Sidebar,
		ContentContainer
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
	flex-direction: row;
	align-items: stretch;
}
</style>
