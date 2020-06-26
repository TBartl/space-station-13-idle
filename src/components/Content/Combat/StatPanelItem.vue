<template>
  <div class="stat-detail" :class="valueClass" :id="id">
    <div class="w-100 d-flex flex-row align-items-center justify-content-center">
      <img :src="icon" class="mr-1" />
      <span>{{value ? value : 0}}{{showPercent ? "%" : ""}}</span>
    </div>
    <b-popover :target="id" triggers="hover" placement="top" delay="0">
      <div class="d-flex flex-column align-items-center">
        <h6>{{name}}</h6>
        <span>{{description}}</span>
      </div>
    </b-popover>
  </div>
</template>

<script>
export default {
  props: ["value", "name", "description", "icon", "showPercent"],
  computed: {
    id() {
      return this._uid.toString();
    },
    valueClass() {
      if (!this.value || this.value == 0) return "empty";
      return this.value > 0 ? "positive" : "negative";
    }
  }
};
</script>

<style scoped>
img {
  width: 32px;
}

.positive {
  border: 1px solid rgba(135, 148, 138, 0.322) !important;
  background-color: rgba(176, 216, 179, 0.438) !important;
}

.empty {
  opacity: 0.2;
}

.negative {
  border: 1px solid rgba(148, 135, 135, 0.322) !important;
  background-color: rgba(216, 176, 176, 0.438) !important;
}
</style>