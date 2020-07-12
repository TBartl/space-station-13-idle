<template>
  <div class="d-flex flex-column align-items-center m-3">
    <ShopPurchase :purchaseId="purchaseId" />
  </div>
</template>

<script>
import ShopPurchase from "@/components/Content/Shop/ShopPurchase";
import PURCHASES from "@/data/purchases";

export default {
  props: ["purchaseId"],
  components: { ShopPurchase },
  computed: {
    item() {
      return PURCHASES[this.purchaseId];
    }
  }
};
</script>