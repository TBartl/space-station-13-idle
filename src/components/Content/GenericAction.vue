<template>
  <div
    class="action content-block text-muted"
    :class="{'locked': locked || !hasItems}"
    @click="tryStartAction(actionId)"
  >
    <div v-if="!visualLocked" class="d-flex flex-column align-items-center">
      <div v-if="uncompleted"><u><p class="action-title">{{_actionName}}</p></u></div>
      <div v-else><p class="action-title">{{_actionName}}</p></div>
      <p class="text-uppercase text-center">{{actionTitle}}</p>
      <p
        class="action-time mt-1 text-center"
      >{{action.xp | stat}} XP / {{action.time | stat}} SECONDS</p>
      <img :id="'action-icon-'+id" :src="icon" alt class="mt-2" />
      <!-- <b-popover :target="'action-icon-'+id" triggers="hover" placement="right" delay="0" :customClass="$store.getters['settings/darkModeClass']">
        <item-chance :data="action" />
      </b-popover>-->

      <p
        class="failure text-center mt-1"
        v-if="action.failure"
      >{{action.failure.chance*100 | cleanNum}}% chance to fail and lose {{action.failure.damage}} health</p>

      <p
        class="failure text-center mt-1"
        v-if="action.healthCost"
      >Costs {{action.healthCost}} health</p>

			<p class="chrono" v-if="action.chronoProhibited">Chrono Prohibited</p>

      <span v-if="locked" class="danger-bubble text-center mt-1">LEVEL {{action.requiredLevel}}
        {{needsAbsentUpgrade ? " (NEEDS RESEARCH) " : ""}}
      </span>

      <div class="d-flex flex-row align-items-center mt-2">
        <div v-if="action.requiredItems" class="requirements d-flex flex-column align-items-center">
          <span
            class="danger-bubble color-weight text-light text-center mb-1"
            :class="hasItems ? 'orange-bubble' : 'danger-bubble'"
          >USES</span>
          <item-requirement
            v-for="(entry, index) in Object.entries(action.requiredItems)"
            :key="index"
            :itemId="entry[0]"
            :count="entry[1]"
          />
        </div>
        <div v-if="action.requiredItems" class="d-flex flex-row align-items-center">
          <img :src="require('@/assets/art/misc/arrows.png')" alt class="arrows" />
        </div>

        <div class="d-flex flex-column align-items-center">
          <span
            class="color-weight text-light text-center"
            :class="hasItems ? 'primary-bubble' : 'secondary-bubble'"
          >GIVES</span>
          <item-chance :data="action" :simplified="true" />
        </div>
      </div>
      <progress-bar class="mt-2" :progress="currentPercent" v-if="!locked && hasItems" />
    </div>
    <div v-else class="d-flex flex-column align-items-center">
      <span>LOCKED</span>
      <img :src="require('@/assets/art/misc/airlock.png')" alt class="mt-2 mb-2" />
      <span class="danger-bubble">LEVEL {{action.requiredLevel}}
        {{action.levelReduced ? " (CHEM REDUCED) " : ""}}</span>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import ProgressBar from "@/components/ProgressBar";
import ItemChance from "@/components/ItemTable/ItemChance";
import ItemRequirement from "@/components/ItemRequirement";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  components: { ProgressBar, ItemChance, ItemRequirement },
  props: ["jobId", "actionName", "action", "actionId"],
  computed: {
    ...mapState({
      id() {
        return this._uid.toString();
      },
      currentActionId(state, getters) {
        return getters[this.jobId + "/currentActionId"];
      },
      currentPercent(state, getters) {
        if (this.currentActionId != this.actionId) return 0;
        return getters[this.jobId + "/actionCoroutine/percent"];
      },
      level(state, getters) {
        return getters[this.jobId + "/level"];
      },
      hasActionRequiredItems(state, getters) {
        return getters[this.jobId + "/hasActionRequiredItems"];
      }
    }),
    item() {
      return ITEMS[this.action.item];
    },
    visualLocked() {
      if (this.$store.getters["cheats/showAllActions"] || this.$store.getters['upgrades/get']('chronoScrying')) return false;
      if(this.level >= this.action.requiredLevel && this.needsAbsentUpgrade) return false;
      return this.locked;
    },
    locked() {
      if(this.level < this.action.requiredLevel || this.needsAbsentUpgrade) return true;
      return false;
    },
    needsAbsentUpgrade() { // return true if the upgrade requirement is NOT met
      if(!this.action.requiredUpgrade) return false;
      if(this.action.requiredUpgradeTier && this.action.requiredUpgradeTier > this.$store.getters['upgrades/get'](this.action.requiredUpgrade)) return true;
      if(this.action.requiredUpgrade && !this.$store.getters['upgrades/get'](this.action.requiredUpgrade)) return true;
      return false;
    },
    uncompleted() { // find items in output and return true if any of them are absent from our completion page
      if(!this.$store.getters['settings/showCompletionLines']) return false;
      if(this.action.item){
        var itemCount = this.$store.getters["completion/getItem"](this.action.item) || 0;
        if(!itemCount){
          //console.log("Not enough of "+this.action.item+"! Returning true (1)...");
          return true; 
        }
      } else if(this.action.items){
        var itemCount = this.$store.getters["completion/getItem"](this.action.items.id) || 0;
        if(!itemCount){
          //console.log("Not enough of "+this.action.items.id+"! Returning true (2)...");
          return true; 
        }
      } else if(this.action.itemTable){
        for (let i = 0; i < this.action.itemTable.length; i++){
          var itemCount = this.$store.getters["completion/getItem"](this.action.itemTable[i].id) || 0;
          if(!itemCount){
            //console.log("Not enough of "+this.action.itemTable[i].id+"! Returning true (3)...");
            return true; 
          }
        }
      } else if(this.action.itemTables){
        for (let tables of this.action.itemTables){
          if(tables.itemTable){
            for (let subData of tables.itemTable) {
              var itemCount = this.$store.getters["completion/getItem"](subData.id) || 0;
              if(!itemCount){
                //console.log("Not enough of "+subData.id+"! Returning true (4)...");
                return true; 
              }
            }
          } else if(tables.items){
            var itemCount = this.$store.getters["completion/getItem"](tables.items.id) || 0;
            if(!itemCount){
              //console.log("Not enough of "+tables.items.id+"! Returning true (5)...");
              return true; 
            }
          } else if(tables.item){
            var itemCount = this.$store.getters["completion/getItem"](tables.item) || 0;
            if(!itemCount){
              //console.log("Not enough of "+tables.items+"! Returning true (6)...");
              return true; 
            }
          }
        }
      }
      return false;
    },
    hasItems() {
      return this.hasActionRequiredItems(this.actionId);
    },
    _actionName() {
      if (this.action.actionName) return this.action.actionName;
      return this.actionName;
    },
    actionTitle() {
      if (this.action.name) return this.action.name;
      if (this.action.item) return this.item.name;
      if (this.action.items) return ITEMS[this.action.items.id].name;
      if (this.action.itemTables)
        return ITEMS[this.action.itemTables[0].item].name;
      return "BAD NAME";
    },
    icon() {
      if (this.action.icon) return this.action.icon;
      if (this.action.item) return this.item.icon;
      return null;
    }
  },
  methods: {
    tryStartAction(actionId) {
      this.$store.dispatch(`${this.jobId}/tryStartAction`, actionId);
    }
  }
};
</script>

<style scoped>
.action {
  transition: transform 0.15s ease-out, opacity 0.15s ease-out,
    box-shadow 0.15s ease-out, -webkit-transform 0.15s ease-out;
  margin-bottom: 1.9rem;
}
.action:not(.locked):hover {
  cursor: pointer;
  box-shadow: 0 0.5rem 2.5rem #e6e6e6;
  transform: translateY(-2px);
}

.action img {
  height: 64px;
}

.action-title {
  font-size: 14px;
}
.action-time {
  font-size: 12px;
}

.danger-bubble,
.success-bubble,
.primary-bubble,
.secondary-bubble {
  font-size: 14px;
  opacity: 0.8;
  margin-left: 4px;
}
.secondary-bubble {
  background-color: rgb(95, 95, 95);
}
.failure {
  color: rgb(221, 99, 28);
  max-width: 130px;
  font-size: 14px;
}
.chrono {
  color: rgb(28, 160, 221);
  max-width: 130px;
  font-size: 14px;
}
.nets {
  color: rgba(255, 255, 255, 0.767);
}
.arrows {
  height: unset !important;
  opacity: 0.4;
  margin: 0px 0.83rem;
}
</style>