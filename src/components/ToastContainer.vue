<template>
  <div class="toast-container">
    <transition-group
      class="list"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <toast v-for="toast in toasts" :key="toast.id" :args="toast"/>
    </transition-group>
  </div>
</template>

<script>
import Velocity from "velocity-animate";
import { uniqueId } from "lodash";
import { EventBus } from "@/utils/eventBus.js";
import Toast from "@/components/Toast";
const TOAST_LENGTH = 800;

export default {
  components: {
    Toast
  },
  data() {
    return {
      toasts: []
    };
  },
  mounted() {
    EventBus.$on("itemCountChanged", ({ itemId, count }) => {
			if (count <=  0) return;
      let toast = { itemId, count, id: uniqueId() };
      this.toasts.push(toast);
      setTimeout(() => {
        let toastIndex = this.toasts.indexOf(toast);
        this.toasts.splice(toastIndex, 1);
      }, TOAST_LENGTH);
    });
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
			el.style.bottom = "-40px";
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 1, bottom: "0px" }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0, bottom: "40px" }, { complete: done });
      }, delay);
    }
  }
};
</script>