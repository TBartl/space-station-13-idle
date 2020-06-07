<template>
  <div>
    <div class="d-flex flex-row align-items-center">
      <img class="mr-1 my-1" :src="content.icon" />
      <span>{{content.text}}</span>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
export default {
  props: ["content"]
};
</script>