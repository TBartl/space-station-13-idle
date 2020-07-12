<template>
  <div class="d-flex flex-column align-items-center m-3">
    <shop-purchase
      class="w-100"
      v-for="(purchaseId, index) in purchaseIds"
      :key="index"
      :purchaseId="purchaseId"
      :hideChain="true"
    />
  </div>
</template>

<script>
export default {
  name: "modal-purchase-chain",
  props: ["purchaseIds"],
  components: {},
  beforeCreate: function() {
    // Circular dependency, we gotta define this here
    this.$options.components.ShopPurchase = require("@/components/Content/Shop/ShopPurchase").default;
  }
};
</script>