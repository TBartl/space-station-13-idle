<template>
  <div
    class="potion-header content-block d-flex flex-row align-items-center justify-content-center"
  >
    <span class="chem-title mr-2">CHEM:</span>
    <div class="overlay-div position-relative potion-slot mr-2" :id="target" tabindex="0">
      <img :src="require('@/assets/art/chemistry/potion.png')" />
      <img v-if="currentPotionItem" :src="currentPotionItem.icon" />

      <span v-if="currentCount > 1" class="potion-count primary-bubble">{{currentCount |cleanNum}}</span>
    </div>
    <item-popover
      v-if="currentPotionItemId"
      :itemId="currentPotionItemId"
      :target="target"
      placement="left"
    />
    <b-popover :target="target" triggers="click blur" placement="bottom" delay="0">
      <div class="d-flex flex-column align-items-center">
        <potion-header-item
          class="w-100"
          v-for="(itemId, index) in validItems"
          :key="index"
          :itemId="itemId"
        />
        <button v-if="currentPotionItemId" class="btn btn-outline-danger" @click="remove">REMOVE</button>
        <span v-if="!currentPotionItemId && validItems.length == 0">No chems available for this job.</span>
      </div>
    </b-popover>
    <div v-if="currentPotion" class="d-flex flex-column align-items-center">
      <p class="charge-title">CHARGES</p>
      <p class="charge-number">{{charges}}/{{maxCharges}}</p>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import PotionHeaderItem from "@/components/Content/PotionHeaderItem";
import ItemPopover from "@/components/ItemPopover";
export default {
  props: ["jobId"],
  components: { PotionHeaderItem, ItemPopover },
  computed: {
    id() {
      return this._uid.toString();
    },
    target() {
      return this.id;
    },
    validItems() {
      return Object.keys(this.$store.getters["inventory/bank"]).filter(
        itemId => {
          let item = ITEMS[itemId];
          // Are we a potion?
          if (!item.potionJob) return false;

          // Do we belong to this job?
          if (item.potionJob != this.jobId) return false;

          let potionData = this.$store.getters["potions/get"](item.potionJob);
          // Has the job ever had a potion?
          if (!potionData) return true;

          // Is the potion the same as ours?
          return potionData.itemId != itemId;
        }
      );
    },
    currentPotion() {
      return this.$store.getters["potions/get"](this.jobId);
    },
    currentPotionItemId() {
      if (!this.currentPotion) return null;
      return this.currentPotion.itemId;
    },
    currentPotionItem() {
      if (!this.currentPotionItemId) return null;
      return ITEMS[this.currentPotionItemId];
    },
    currentCount() {
      if (!this.currentPotionItemId) return null;
      let count = this.$store.getters["inventory/bank"][
        this.currentPotionItemId
      ];
      return count ? count : 0;
    },
    charges() {
      if (!this.currentPotion) return 0;
      return this.currentPotion.charges;
    },
    maxCharges() {
      if (!this.currentPotion) return 0;
      return ITEMS[this.currentPotion.itemId].potionCharges;
    }
  },
  methods: {
    remove() {
      this.$store.dispatch("potions/remove", this.jobId);
    }
  }
};
</script>

<style scoped>
.content-block {
  padding: 01rem 0 !important;
}
.potion-count {
  position: absolute;
  bottom: -8px;
  right: -6px;
  font-size: 10px;
}
.potion-slot:hover {
  cursor: pointer;
  box-shadow: 0 0.3rem 2.5rem #3680c5;
  transform: translateY(-2px);
}

.overlay-div {
  width: 32px;
  height: 32px;
}
.charge-title {
  font-size: 11px;
}
.charge-number {
  margin-top: -0.5rem;
}
</style>