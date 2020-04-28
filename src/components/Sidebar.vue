<template>
  <div class="sidebar">
    <div class="sidebar-title">
			<img src="@/assets/art/misc/logo.png" alt="">
      <span>SS13 Idle</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.sidebar {
  width: 230px;
  height: 100%;
  color: #ebebeb;
	background-color: #424d5d;
	font-size: 18px;
}
.sidebar-title {
  color: whitesmoke;
  padding: 20px;
	font-weight: bold;
	background-color: #2c343f;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.sidebar-title img {
	width: 50px;
	margin-right: 10px;
}
</style>