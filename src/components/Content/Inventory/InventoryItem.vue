<template>
  <div>
    <button class="inventory-item" :id="id">
      <img :src="item.icon" />
      <span>{{count | cleanNum}}</span>
    </button>
    <item-popover :target="id" :itemId="itemId" />
    <b-popover ref="popover" :target="id" triggers="click blur" placement="bottom" delay="30" :customClass="$store.getters['settings/darkModeClass']">
      <div class="popup d-flex flex-column align-items-center">
        <h6 class="title">{{item.name}}</h6>
        <button
          v-if="canEquip"
          class="mt-1 btn btn-primary btn-sm"
          @click="$store.dispatch('inventory/equip', itemId)"
        >Equip {{item.healAmount ? "food" : item.equipmentSlot}}</button>
        <span v-if="isEquipped" class="description">Already Equipped</span>

        <div v-if="item.potionJob" class="mt-1">
          <button
            v-if="canEquipChem"
            class="mt-1 btn btn-primary btn-sm"
            @click="$store.dispatch('potions/set', itemId); $refs.popover.$emit('close');"
          >Equip CHEM</button>
          <span v-else class="description">Already Equipped</span>
        </div>
        <button v-if="canOpen" class="mt-1 btn btn-primary btn-sm" @click="open">Open!</button>
        <button v-if="canOpen" class="mt-1 btn btn-primary btn-sm" @click="viewOdds">View Odds</button>
        <div v-if="item.sellPrice" class="mt-1">
          <inventory-sell :itemId="itemId" :count="1" :totalCount="count" />
          <inventory-sell :itemId="itemId" :count="10" :totalCount="count" />
          <inventory-sell :itemId="itemId" :count="100" :totalCount="count" />
          <inventory-sell :itemId="itemId" :count="1000" :totalCount="count" />
          <inventory-sell
            :itemId="itemId"
            :count="count"
            :totalCount="count"
            v-if="count != 1 && count != 10 && count != 100 && count != 1000"
          />
        </div>
        <span v-else class="mt-1">Can't be sold</span>
      </div>
    </b-popover>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import { mapGetters } from "vuex";
import InventorySell from "@/components/Content/Inventory/InventorySell";
import ItemPopover from "@/components/ItemPopover";
import ModalItemChance from "@/components/Modals/ModalItemChance";
import { acquireItemFrom } from "@/utils/itemChanceUtils";

export default {
  props: ["itemId"],
  components: { InventorySell, ItemPopover },
  computed: {
    bank() {
      return this.$store.getters["inventory/bank"];
    },
    id() {
      return this._uid.toString();
    },
    item() {
      return ITEMS[this.itemId];
    },
    count() {
      return this.bank[this.itemId];
    },
    canEquip() {
      return this.$store.getters["inventory/canEquip"](this.itemId);
    },
    isEquipped() {
      return this.$store.getters["inventory/isEquipped"](this.itemId);
    },
    canEquipChem() {
      let potionData = this.$store.getters["potions/get"](this.item.potionJob);
      if (!potionData) return true;
      return potionData.itemId != this.itemId;
    },
    canOpen() {
      return (
        this.item.item ||
        this.item.items ||
        this.item.itemTable ||
        this.item.itemTables
      );
    }
  },
  methods: {
    open() {
      if (!this.canOpen) return;

      this.$store.commit("inventory/changeItemCount", {
        itemId: this.itemId,
        count: -1
      });

      let yieldedItems = acquireItemFrom(this.item);
      for (let [itemId, count] of Object.entries(yieldedItems)) {
        if (count == 0) continue;
        this.$store.commit("inventory/changeItemCount", { itemId, count });
      }
    },
    viewOdds() {
      this.$modal.show(
        ModalItemChance,
        { itemId: this.itemId },
        { height: "auto", width: "420px" }
      );
    }
  }
};
</script>

<style scoped>
</style>