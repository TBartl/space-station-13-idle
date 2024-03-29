<template>
  <div
    class="content-block p-1 my-1 d-flex flex-column flex-md-row align-items-center"
    :class="[canPurchase ? 'clickable' :'locked']"
    @click="buy"
  >
    <img
      :id="'purchase'+id"
      :src="icon"
      class="mr-2 purchase-icon d-md-block"
      :class="{'d-none': hideChain}"
    />

    <item-popover
      v-if="purchase.item"
      :target="'purchase'+id"
      :itemId="purchase.item"
      placement="right"
    />

    <div class="d-flex flex-column w-100">
      <span class="name">{{name}}</span>
      <span class="description">{{purchase.description}}</span>
      <div v-if="canOpen">
        <button class="my-1 btn btn-primary btn-sm" @click.stop="viewOdds">View Odds</button>
      </div>
      <div v-if="upgradeChain.length > 1 && upgradeChain.length < 99 && !hideChain">
        <button class="my-1 btn btn-primary btn-sm" @click.stop="viewChain">View Chain</button>
      </div>
      <div class="requires d-flex flex-row align-items-center flex-wrap">
        <span class="requires mr-1">Requires:</span>
        <div
          v-for="(pair, index) in Object.entries(requiredLevels)"
          :key="'level'+index"
          class="d-flex flex-row align-items-center"
        >
          {{allJobs[pair[0]]}}
          <img :src="allJobs.find(job => job.id == pair[0]).icon" />
          <span>lvl{{pair[1]}}</span>
        </div>
        <div
          v-for="(pair, index) in Object.entries(requiredItems)"
          :key="'item'+index"
          class="d-flex flex-row align-items-center mr-1"
        >
          <img :id="id+index" :src="items[pair[0]].icon" />
          <item-popover :target="id+index" :itemId="pair[0]" />
          <span>x{{pair[1] | cleanNum}}</span>
        </div>
        <div 
        v-if=purchase.requiredResearchPoints
        class="d-flex flex-row align-items-center mr-1">
          <span><img :src="require('@/assets/art/research/researchIcon.png')" />x{{purchase.requiredResearchPoints}}</span>
        </div>
        <div 
        v-if=purchase.otherText
        class="d-flex flex-row align-items-center mr-1">
          <span>{{purchase.otherText}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import PURCHASES from "@/data/purchases";
import ItemPopover from "@/components/ItemPopover";
import ModalItemChance from "@/components/Modals/ModalItemChance";
import ModalPurchaseChain from "@/components/Modals/ModalPurchaseChain";
import { ALL_JOBS } from "@/data/jobs";
export default {
  name: "shop-purchase",
  components: { ItemPopover },
  props: ["purchaseId", "hideChain"],
  computed: {
    id() {
      return this._uid.toString();
    },
    item() {
      return ITEMS[this.purchase.item];
    },
    items() {
      return ITEMS;
    },
    allJobs() {
      return ALL_JOBS;
    },
    purchase() {
      return PURCHASES[this.purchaseId];
    },
    icon() {
      if (this.purchase.icon) return this.purchase.icon;
      if (this.item) return this.item.icon;
      return null;
    },
    name() {
      if (this.purchase.name) return this.purchase.name;
      if (this.item) return this.item.name;
      return "Missing name";
    },
    canPurchase() {
      return this.$store.getters["inventory/canPurchase"](this.purchase);
    },
    requiredItems() {
      if (!this.purchase.requiredItems) return {};
      return this.purchase.requiredItems;
    },
    requiredLevels() {
      if (!this.purchase.requiredLevels) return {};
      return this.purchase.requiredLevels;
    },
    requiredResearchPoints(){
      return this.purchase.requiredResearchPoints;
    },
    canOpen() {
      if (!this.item) return false;
      if (this.item.itemTable || this.item.itemTables) return true;
      return false;
    },
    upgradeChain() {
      if (!this.purchase.upgrade) return [];
      return Object.entries(PURCHASES).filter(
        entry => entry[1].upgrade == this.purchase.upgrade
      );
    }
  },
  methods: {
    buy() {
      if (!this.canPurchase) return;
      this.$store.dispatch("inventory/purchase", this.purchase);
    },
    viewOdds() {
      this.$modal.show(
        ModalItemChance,
        { itemId: this.purchase.item },
        { height: "auto", width: "420px" }
      );
    },
    viewChain() {
      this.$modal.show(
        ModalPurchaseChain,
        { purchaseIds: this.upgradeChain.map(entry => entry[0]) },
        { height: "auto", width: "350px" }
      );
    }
  }
};
</script>

<style>
.purchase-icon {
  width: 64px;
  min-width: 64px;
}
.name {
  font-size: 18px;
}
.description {
  color: rgb(144, 144, 144);
  font-size: 14px;
}
.locked .description {
  color: rgb(214, 214, 214);
}
.dark-mode .locked .description {
  color: rgb(151, 151, 151);
}
.requires {
  color: rgb(97, 97, 97);
  font-size: 15px;
}
.dark-mode .requires {
  color: rgb(195, 195, 195);
}
.locked .requires {
  color: rgb(241, 241, 241);
}
.dark-mode .locked .requires {
  color: rgb(119, 119, 119);
}
.requires img {
  width: 32px;
}
</style>