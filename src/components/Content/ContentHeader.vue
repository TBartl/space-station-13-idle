<template>
  <div class="content-header" :style="{'background-color': color}">
    <img :src="icon" alt />
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  props: ["icon", "text", "color"]
};
</script>


<style scoped>
.content-header {
  display: flex;
  align-items: center;
  padding: 11.5px 16px;
}
img {
	background-color: white;
	border-radius: 8px;
	padding: 2px;
	margin-right: 10px;
}
span {
  font-size: 20px;
  font-weight: bold;
  color: #373737;
}
</style>