<template>
  <div>
    <div class="item" :id="`item-${id}`">
      <img class="pixelated" :src="item.icon" />
      <span>{{count}}</span>
    </div>
    <b-popover :target="`item-${id}`" triggers="hover" placement="top" delay="0">
      <div class="popup d-flex flex-column align-items-center">
        <h6 class="title">{{item.name}}</h6>
        <div class="d-flex align-items-center">
          <img class="pixelated" :src="require('@/assets/art/misc/coin.png')" />
          <span>{{item.sellPrice}}</span>
        </div>
      </div>
    </b-popover>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import { mapGetters } from "vuex";
export default {
  props: ["itemId"],
  data() {
    return {
      hover: false
    };
  },
  computed: {
    ...mapGetters(["inventory"]),
    id() {
      return this._uid;
    },
    item() {
      return ITEMS.get(this.itemId);
    },
    count() {
      return this.inventory[this.itemId];
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 64px;
  border-radius: 4px;
  padding-bottom: 0.25rem;
  margin: 0.5rem;
  cursor: pointer;
}
.item:hover {
  background-color: rgb(206, 233, 255);
}
.item img {
  width: 64px;
}
.popup img {
	width: 20px;
	margin-right: .1rem;

}
</style>