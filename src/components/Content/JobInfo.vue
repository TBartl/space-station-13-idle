<template>
  <div class="row my-2">
    <div class="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
      <div class="content-block d-flex flex-column flex-md-row">
        <div class="d-flex flex-row flex-md-column justify-content-center">
          <img class="avatar" :src="icon" />
        </div>
        <div class="d-flex flex-column justify-content-center w-100">
          <p class="info-title mb-1">{{title}}</p>
          <slot :name="current" />
          <div
            v-if="options"
            class="d-flex flex-row align-items-center justify-content-center mt-1"
          >
            <button
              v-for="(option, index) in filteredOptions"
              :key="index"
              class="btn btn-outline-primary mt-1 mx-1"
              @click="current=option.name"
            >
              <img v-if="option.icon" :src="option.icon" class="mx--2" />
              <span>{{option.name}}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "options"],
  data() {
    return {
      current: this.options[0].name
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option => option.name != this.current);
    }
  }
};
</script>

<style scoped>
.avatar {
  width: 64px;
}
@media (min-width: 1200px) {
  .avatar {
    width: 128px;
  }
}
.info-title {
  font-weight: bold;
}
</style>