<template>
  <div id="app">
    <div class="mega-container">
      <Sidebar />
      <Content />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Content from "@/components/Content.vue";
export default {
  name: "App",
  components: {
		Sidebar,
		Content
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
