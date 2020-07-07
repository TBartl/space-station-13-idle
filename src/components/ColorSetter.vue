<template>
  <div>
    <div v-if="presets" class="d-flex flex-row align-items-center">
      <div
        v-for="(preset, index) in presets"
        :key="index"
        class="preset"
        :style="{backgroundColor: `hsl(${preset.hue},${preset.saturation}%,${preset.lightness}%)`}"
        @click="hue=preset.hue; saturation=preset.saturation; lightness=preset.lightness"
      ></div>
    </div>
    <div class="d-flex flex-row align-items-center">
      <span class="mr-2">H:</span>
      <input class="form-control-range hue" type="range" v-model="hue" min="0" max="360" />
    </div>
    <div class="d-flex flex-row align-items-center">
      <span class="mr-2">S:</span>
      <input
        type="range"
        v-model="saturation"
        class="form-control-range"
        :style="satStyle"
        min="0"
        max="100"
      />
    </div>
    <div class="d-flex flex-row align-items-center">
      <span class="mr-2">L:</span>
      <input
        type="range"
        v-model="lightness"
        class="form-control-range"
        :style="lightnessStyle"
        min="0"
        max="99"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["propPath", "presets"],
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
    },
    satStyle() {
      return {
        backgroundImage: `linear-gradient(to right,
					hsl(${this.hue},0%,${this.lightness}%) 0%,
					hsl(${this.hue},100%,${this.lightness}%) 100%)`
      };
    },
    lightnessStyle() {
      return {
        backgroundImage: `linear-gradient(to right,
					hsl(${this.hue},${this.saturation}%,0%) 0%,
					hsl(${this.hue},${this.saturation}%,50%) 50%,
					hsl(${this.hue},${this.saturation}%,100%) 100%)`
      };
    }
  }
};
</script>

<style scoped>
.hue {
  background-image: linear-gradient(
    to right,
    red 0%,
    #ff0 17%,
    lime 33%,
    cyan 50%,
    blue 66%,
    #f0f 83%,
    red 100%
  );
}

input[type="range"] {
  -webkit-appearance: none;
  border-radius: 4px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: white;
  border: 2px black solid;
  width: 18px;
  height: 18px;
  border-radius: 10px;
  cursor: pointer;
}

.preset {
  width: 12px;
  height: 24px;
  background-color: black;
  border-radius: 4px;
  margin-right: 0.25rem;
  cursor: pointer;
  border: 1px solid gray;
}
</style>