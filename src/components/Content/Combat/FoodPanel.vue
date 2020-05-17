<template>
  <div class="w-100 d-flex flex-column align-items-center">
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary food-group" @click="eat">
				<div v-if="food">
        <span>({{foodCount}})</span>
        <img class="food-icon pixelated" :src="food.icon" />
        <span>+20 HP</span>
				</div>
				<span v-else>No food</span>
      </button>
      <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"></button>
    </div>
  </div>
</template>


<script>
import ITEMS from "@/data/items";

export default {
  computed: {
    food() {
      let foodId = this.$store.getters["inventory/foodId"];
      if (!foodId) return;
      return ITEMS.get(foodId);
    },
    foodCount() {
      return this.$store.getters["inventory/foodCount"];
    }
	},
	methods: {
		eat() {
			if (!this.food) return;
			this.$store.dispatch("inventory/eat");
		}
	}
};
</script>

<style scoped>
.food-group {
	font-size: 16px;
  padding: 0.12rem 0.55rem;
}
.food-icon {
  width: 48px;
}
</style>