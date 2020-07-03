<template>
  <div class="toast-container">
    <transition-group
      class="list"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <toast
        v-for="toast in activeToasts"
        :key="toast.id"
        :toast="toast"
        :data-duration="toast.duration"
      />
    </transition-group>
  </div>
</template>

<script>
import Velocity from "velocity-animate";
import { uniqueId } from "lodash";
import { EventBus } from "@/utils/eventBus.js";
import Toast from "@/components/Toast/Toast";
const TOAST_LENGTH = 1000;

export default {
  components: {
    Toast
  },
  data() {
    return {
      activeToasts: [],
      pendingToast: null
    };
  },
  mounted() {
    EventBus.$on("toast", toast => {
      this.addToastContent(toast);
    });
  },
  methods: {
    addToastContent(toastContent) {
      if (this.pendingToast) {
        this.pendingToast.contents.push(toastContent);
      } else {
        var toast = {
          contents: [toastContent],
          id: uniqueId()
        };
				if (toastContent.duration) toast.duration = toastContent.duration;

        this.pendingToast = toast;
        setTimeout(() => {
          this.activeToasts.push(toast);
          delete this.pendingToast;
          setTimeout(() => {
            let toastIndex = this.activeToasts.indexOf(toast);
            this.activeToasts.splice(toastIndex, 1);
          });
        });
      }
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.bottom = "-40px";
    },
    enter: function(el, done) {
      Velocity(
        el,
        { opacity: 1, bottom: "0px" },
        { duration: TOAST_LENGTH / 2, complete: done }
      );
    },
    leave: function(el, done) {
      let duration = TOAST_LENGTH / 2;
      let dataDuration = el.getAttribute("data-duration");
      if (dataDuration) duration = parseInt(dataDuration);

      Velocity(
        el,
        { opacity: 0, bottom: "40px" },
        { duration, complete: done }
      );
    }
  }
};
</script>