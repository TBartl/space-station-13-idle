<template>
  <div class="content-shop">
    <content-header text="Cargo" :icon="require('@/assets/art/sidebar/cargo.png')" color="#febb33" />
    <div class="content-container">
      <job-info
        infoId="REPLACEME"
        :icon="require('@/assets/art/jobinfo/REPLACEME.png')"
        title="REPLACEME the REPLACEME says..."
        :options="[
					{name: 'Back'},
					{name: 'REPLACEME', icon: require('@/assets/art/debug/A.png'), iconClass:'mx--1'}
				]"
      >
        <template slot="Back">
          <span>REPLACEME</span>
          <span>
            Example
            <img class="mx--2" :src="require('@/assets/art/mining/SheetIron.png')" />
            <b>Weighted</b>.
          </span>
        </template>
        <template slot="REPLACEME">
          <span>REPLACEME</span>
        </template>
      </job-info>

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
