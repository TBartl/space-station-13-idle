<template>
  <div v-if="!dismissed" class="row my-2">
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
              <img v-if="option.icon" :src="option.icon" class="option-icon" :class="option.iconClass" />
              <span>{{option.name}}</span>
            </button>
          </div>

          <div class="d-flex flex-column align-items-end w-100">
            <span class="dismiss" @click="dismiss">DISMISS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infoId", "icon", "title", "options"],
  data() {
    return {
      current: this.options[0].name
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option => option.name != this.current);
    },
    dismissed() {
      return this.$store.getters["info/dismissed"](this.infoId);
    }
  },
  methods: {
    dismiss() {
      this.$store.commit("info/dismiss", this.infoId);
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
.dismiss {
  color: gray;
  font-size: 12px;
  margin-bottom: -32px;
  cursor: pointer;
}
.option-icon {
	width: 32px;
}
</style>