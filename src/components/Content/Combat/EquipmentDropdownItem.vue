<template>
  <div>
    <button
      :id="id"
      class="btn btn-outline-primary d-flex flex-row align-items-center w-100"
      @click="equip"
    >
      <span>({{itemCount}})</span>
      <img class="equipment-icon" :src="item.icon" />
      <span v-if="item.healAmount">+{{item.healAmount}} HP</span>
    </button>
    <b-popover v-if="item.stats" :target="id" triggers="hover" placement="right" delay="0">
      <stats-panel :stats="item.stats" />
    </b-popover>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import StatsPanel from "@/components/Content/Combat/StatsPanel";
export default {
  props: ["itemId"],
  components: { StatsPanel },
  computed: {
    id() {
      return this._uid.toString();
    },
    item() {
      return ITEMS[this.itemId];
    },
    itemCount() {
      return this.$store.getters["inventory/bank"][this.itemId];
    }
  },
  methods: {
    equip() {
      this.$store.dispatch("inventory/equip", this.itemId);
    }
  }
};
</script>

<style scoped>
.equipment-icon {
  width: 48px;
}
</style>
