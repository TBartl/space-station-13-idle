<template>
  <div class="d-flex align-items-center">
    <img class="pixelated" :src="require('@/assets/art/misc/coin.png')" />
    <span>{{price | cleanNum}}</span>
  </div>
</template>

<script>
export default {
  props: ["price"]
};
</script>

<style scoped>
img {
  width: 20px;
  margin-right: 0.1rem;
}
</style>