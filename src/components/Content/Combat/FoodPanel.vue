<template>
  <div class="w-100 d-flex flex-column align-items-center">
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary food-group" @click="eat">
        <div v-if="food">
          <span>({{foodCount}})</span>
          <img class="food-icon" :src="food.icon" />
          <span>+{{food.healAmount}} HP</span>
        </div>
        <span v-else>No food</span>
      </button>
      <button
        id="food-dropdown-button"
        type="button"
        class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
      ></button>
      <equipment-dropdown target="food-dropdown-button" equipmentSlot="food" />
    </div>
  </div>
</template>


<script>
import ITEMS from "@/data/items";
import EquipmentDropdown from "@/components/Content/Combat/EquipmentDropdown";
export default {
  components: { EquipmentDropdown },
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
</style>