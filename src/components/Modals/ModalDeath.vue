<template>
  <div class="d-flex flex-column align-items-center p-3 text-center">
    <h4 class="my-1">You were knocked into</h4>
    <img class="mx--0 crit" :src="require('@/assets/art/combat/health-crit.gif')" />
    <div v-if="lostItem">
      <p>While you were unconscious, someone stole something from you!</p>
      <h4>You lost your</h4>
      <h4>
        <img class="mx--0" :src="lostItem.icon" />
        {{lostItem.name}}!
      </h4>
    </div>
    <div v-else>
      <p class="my-2">Thankfully, you didn't have any items equipped to lose.</p>
      <h4>You lost nothing!</h4>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";

export default {
  props: ["lostItemId"],
  computed: {
    lostItem() {
      return ITEMS[this.lostItemId];
    }
  }
};
</script>

<style scoped>
.crit {
  width: 64px;
  margin-bottom: -1.5rem;
}
</style>