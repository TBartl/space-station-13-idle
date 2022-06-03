<template>
  <div id="app" :class="{'dark-mode' : darkMode}">
    <toast-container />
    <div class="mega-container">
      <sidebar />
      <content-wrapper class="content-wrapper" />
    </div>
    <panels-container />
    <modals-container />
  </div>
</template>

<script>
import ToastContainer from "@/components/Toast/ToastContainer";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import ContentWrapper from "@/components/Content/ContentWrapper.vue";
import ModalUpdate from "@/components/Modals/ModalUpdate";
import ModalWelcomeBack from "@/components/Modals/ModalWelcomeBack";
import PanelsContainer from "@/components/Panels/PanelsContainer";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    ToastContainer,
    Sidebar,
    ContentWrapper,
    PanelsContainer
  },
  computed: {
    ...mapGetters(["welcomeMessageSeen"]),
    darkMode() {
      return this.$store.getters["settings/darkMode"];
    }
  },
  methods: {
    ...mapMutations(["setWelcomeMessageSeen"])
  },
  mounted() {
    if (!this.$store.state.update4Seen) {
      this.$modal.show(ModalUpdate, {}, { height: "auto", width: "360px" });
      this.$store.state.update4Seen = true;
    } else if (this.$store.getters["chrono/lastGain"] > 30 * 1000 || this.$store.getters["chrono/oldExport"]) {
      this.$modal.show(
        ModalWelcomeBack,
        {},
        { height: "auto", width: "400px" }
      );
    }
  }
};
</script>

<style scoped>
#app {
  height: 100%;
}

.mega-container {
  height: 100%;
  display: flex;
  align-items: stretch;
}
.mega-container * {
  height: 100%;
}
.content-wrapper {
  overflow-y: auto;
}
</style>
