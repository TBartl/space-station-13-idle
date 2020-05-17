<template>
  <div class="content-shop">
    <content-header text="Cargo" :icon="require('@/assets/art/sidebar/cargo.png')" color="#febb33" />
    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <shop-section v-for="(section, index) in sections" :key="index" :section="section" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import ShopSection from "@/components/Content/Shop/ShopSection";
import { SECTIONS } from "@/data/shop";
export default {
  extends: ContentAbstract,
  components: { ShopSection },
  computed: {
    sections() {
      return SECTIONS;
    }
  }
};
</script>
