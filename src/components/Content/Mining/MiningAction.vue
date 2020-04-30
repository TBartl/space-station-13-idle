<template>
  <div class="action text-muted">
    <p>MINE</p>
    <p>{{item.name}}</p>
    <p>{{action.time}} seconds</p>
  </div>
</template>

<script>
import { ITEMS } from "@/data/mining";
export default {
  props: ["action", "actionId"],
  computed: {
    item() {
      return ITEMS[this.action.item];
    }
  }
};
</script>

<style scoped>
.action {
	padding: 10px;
	background-color: rgb(251, 251, 251);
	border-top: 4px solid #c78329 !important;
  display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: .25rem;
	transition: transform .15s ease-out, opacity .15s ease-out, box-shadow .15s ease-out, -webkit-transform .15s ease-out;
}
.action:hover {
	cursor: pointer;
	box-shadow: 0 0.5rem 2.5rem #e6e6e6;
	transform: translateY(-2px);
}
</style>