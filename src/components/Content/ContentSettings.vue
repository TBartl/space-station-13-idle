<template>
  <div class="content-settings">
    <content-header
      text="Settings"
      :icon="require('@/assets/art/sidebar/gear.png')"
      color="rgb(231, 150, 28)"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <div class="content-block">
            <h5>SETTINGS</h5>
            <hr />
            <button type="button" class="btn btn-primary" @click="resetClicked">Reset Data</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import ModalResetData from "@/components/Modals/ModalResetData";
export default {
  extends: ContentAbstract,
  // eslint-disable-next-line
  components: { ModalResetData },
  computed: {},
  methods: {
    resetClicked() {
      this.$modal.show(ModalResetData, {}, { height: "auto", width: "320px" });
    }
  }
};
</script>
