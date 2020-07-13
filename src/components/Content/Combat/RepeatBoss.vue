<template>
  <div v-if="isBoss && !bossAlive" class="content-block mt-3">
    <h6>FIGHT ANOTHER BOSS</h6>
    <div class="black-background mt-1 px-2 py-1">
      <shop-purchase
        v-for="(shopPurchase, purchaseIndex) in targetZone.purchases"
        :key="purchaseIndex"
        :purchaseId="shopPurchase"
      />
    </div>
  </div>
</template>

<script>
import ZONES from "@/data/zones";
import ShopPurchase from "@/components/Content/Shop/ShopPurchase";
export default {
  components: { ShopPurchase },
  computed: {
    targetId() {
      return this.$store.getters["combat/targetEnemy"];
    },
    targetZone() {
      // This assumes that enemies will only belong to one zone, which seems like is the case right now
      return ZONES.find(zone => zone.enemies.includes(this.targetId));
    },
    isBoss() {
      if (!this.targetZone) return false;
      return this.targetZone.boss;
		},
		bossAlive() {
			return this.$store.getters["enemyMob/health"]
		}
  }
};
</script>
