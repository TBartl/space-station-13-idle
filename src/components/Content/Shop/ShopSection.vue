<template>
  <div class="mb-3" v-if="filteredPurchases.length">
    <div
      class="content-block content-block-top clickable"
      :class="{expanded: expanded}"
      @click="expanded = !expanded"
    >
      <img :src="require('@/assets/art/misc/eyes.png')" class="mr-2" />
      <span>{{section.name}}</span>
    </div>
    <div v-if="expanded" class="content-block content-block-bottom">
      <div class="purchases">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-12 col-lg-6 col-xl-4"
              v-for="(purchase, index) in filteredPurchases"
              :key="index"
            >
              <shop-purchase :purchaseId="purchase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopPurchase from "@/components/Content/Shop/ShopPurchase";
import { PURCHASES } from "@/data/shop";
export default {
  components: { ShopPurchase },
  props: ["section"],
  data() {
    return {
      expanded: true
    };
  },
  computed: {
    filteredPurchases() {
      return this.section.purchases.filter(purchase => {
        return this.$store.getters["inventory/shouldShowPurchase"](PURCHASES[purchase]);
      });
    }
  }
};
</script>

<style scoped>
.purchases {
  padding: 12px 0;
  background-color: rgb(230, 230, 230);
  border-radius: 4px;
}
</style>