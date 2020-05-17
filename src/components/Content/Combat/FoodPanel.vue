<template>
  <div class="w-100 d-flex flex-column align-items-center">
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary food-group" @click="eat">
        <div v-if="food">
          <span>({{foodCount}})</span>
          <img class="food-icon pixelated" :src="food.icon" />
          <span>+{{food.healAmount}} HP</span>
        </div>
        <span v-else>No food</span>
      </button>
      <button
        id="food-dropdown-button"
        type="button"
        class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        v-if="food || validFoodItems.length"
      ></button>

      <b-popover target="food-dropdown-button" triggers="click blur" placement="bottom" delay="0">
        <food-dropdown-item
          class="w-100"
          v-for="(itemId, index) in validFoodItems"
          :key="index"
          :itemId="itemId"
        />
        <button v-if="food" class="btn btn-outline-danger w-100" @click="unequip">UNEQUIP</button>
      </b-popover>
    </div>
  </div>
</template>


<script>
import ITEMS from "@/data/items";
import FoodDropdownItem from "@/components/Content/Combat/FoodDropdownItem";
export default {
  components: { FoodDropdownItem },
  computed: {
    foodId() {
      return this.$store.getters["inventory/equipment"].food.itemId;
    },
    food() {
      if (!this.foodId) return;
      return ITEMS[this.foodId];
    },
    foodCount() {
      return this.$store.getters["inventory/equipment"].food.count;
    },
    validFoodItems() {
      let bank = this.$store.getters["inventory/bank"];
      return Object.keys(bank).filter(itemId => ITEMS[itemId].healAmount);
    }
  },
  methods: {
    eat() {
      if (!this.food) return;
      this.$store.dispatch("inventory/eat");
    },
    unequip() {
      this.$store.dispatch("inventory/unequip", this.foodId);
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