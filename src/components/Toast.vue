// TODO: Update this to take a generic component

<template>
  <div class="custom-toast d-flex">
    <div class="toast-content">
      <div class="d-flex flex-row align-items-center">
        <img :src="item.icon" alt />
        <span>{{count}}</span>
      </div>
    </div>
  </div>
</template>


<script>
import ITEMS from "@/data/items";
export default {
  props: ["args"],
  computed: {
    item() {
      return ITEMS.get(this.args.itemId);
    },
    count() {
      var count = this.args.count;
      return (count < 0 ? "" : "+") + count;
    }
  }
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
.toast-content {
  font-size: 32x;
  margin: auto;
  background-color: rgba(78, 78, 78, 0.472);
  color: white;
  border-radius: 8px;
  padding: 0.25rem 0.75rem;
  margin-bottom: 0.5rem;
}
img {
  width: 32px;
}
</style>