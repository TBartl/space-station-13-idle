<template>
  <div>
    <div class="d-flex flex-row align-items-center">
      <span class="mr-2">H:</span>
      <input type="range" v-model="hue" class="form-control-range" min="0" max="360" />
    </div>
    <div class="d-flex flex-row align-items-center">
      <span class="mr-2">S:</span>
      <input type="range" v-model="saturation" class="form-control-range" min="0" max="100" />
    </div>
    <div class="d-flex flex-row align-items-center">
      <span class="mr-2">L:</span>
      <input type="range" v-model="lightness" class="form-control-range" min="0" max="99" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["propPath"],
  computed: {
    hue: {
      get() {
        return this.$store.getters[`${this.propPath}/hue`];
      },
      set(value) {
        this.$store.commit(`${this.propPath}/setHue`, value);
      }
    },
    saturation: {
      get() {
        return this.$store.getters[`${this.propPath}/saturation`];
      },
      set(value) {
        this.$store.commit(`${this.propPath}/setSaturation`, value);
      }
    },
    lightness: {
      get() {
        return this.$store.getters[`${this.propPath}/lightness`];
      },
      set(value) {
        this.$store.commit(`${this.propPath}/setLightness`, value);
      }
    }
  }
};
</script>