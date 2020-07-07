<template>
  <div class="sidebar position-relatives" :class="{'expanded': expanded}">
    <div class="backing" @click="expanded = false"></div>
    <div class="sidebar-content">
      <div class="sidebar-title p-3 mb-2">
        <img class="no-pixel" src="@/assets/art/misc/logo.png" alt />
        <span>SS13 Idle</span>
      </div>
      <p class="items-header">{{version}}</p>

      <sidebar-item id="shop" text="Cargo" :icon="require('@/assets/art/sidebar/cargo.png')">
        <div>
          <inventory-price-display :price="money" />
        </div>
      </sidebar-item>
      <sidebar-item
        id="inventory"
        text="Inventory"
        :icon="require('@/assets/art/sidebar/backpack.png')"
        :textColor="bankItemIds.length == bankSlots ? 'rgb(255, 113, 113)' : ''"
      >
        <span
          :style="{color: bankItemIds.length == bankSlots ?  'rgb(255, 113, 113)': ''}"
        >{{bankItemIds.length}}/{{bankSlots}}</span>
      </sidebar-item>

      <p class="items-header">Jobs</p>
      <sidebar-item
        v-for="job in nonCombatJobs"
        :key="job.id"
        :id="job.id"
        :text="job.name"
        :icon="job.icon"
        :color="job.color"
        :textColor="getJobColor(job)"
        :locked="checkJobLocked(job)"
      >
        <span>{{getLevelText(job)}}</span>
      </sidebar-item>

      <div class="items-header flex-row align-items-center justify-content-between">
        <span>Combat</span>
        <span :class="healthClass">({{playerHealth}}/{{playerMaxHealth}})</span>
      </div>
      <sidebar-item
        v-for="job in combatJobs"
        :key="job.id"
        id="combat"
        :text="job.name"
        :icon="job.icon"
        :color="job.color"
        :textColor="getJobColor(job)"
        :locked="checkJobLocked(job)"
      >
        <span>{{getLevelText(job)}}</span>
      </sidebar-item>

      <p class="items-header">Other</p>
      <sidebar-item
        id="customization"
        text="Customization"
        :icon="require('@/assets/art/customization/icon.png')"
      />
      <sidebar-item
        id="chronosphere"
        text="Chronosphere"
        :icon="require('@/assets/art/sidebar/chronohelmet.png')"
        :textColor="chronoSpeed != 1 ? '#3ac5ff' : ''"
      >
        <span style="color: '#3ac5ff'">{{chronoSpeed}}x</span>
      </sidebar-item>
      <sidebar-item
        id="completion"
        text="Completion"
        :icon="require('@/assets/art/sidebar/trophy.png')"
      />
      <sidebar-item id="settings" text="Settings" :icon="require('@/assets/art/sidebar/gear.png')" />
      <sidebar-item id="about" text="About" :icon="require('@/assets/art/misc/logo-square.png')" />
      <a class href="https://discord.gg/HwbK9XQ" target="_blank">
        <sidebar-item text="Discord" :icon="require('@/assets/art/misc/discord.png')" />
      </a>
    </div>
    <img
      class="button-toggle"
      src="@/assets/art/sidebar/hamburger-icon.png"
      @click="expanded = !expanded"
    />
  </div>
</template>

<script>
import { ALL_JOBS } from "@/data/jobs";
import SidebarItem from "./SidebarItem";
import InventoryPriceDisplay from "@/components/Content/Inventory/InventoryPriceDisplay";
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {
      expanded: true
    };
  },
  components: { SidebarItem, InventoryPriceDisplay },
  computed: {
    money() {
      return this.$store.getters["inventory/money"];
    },
    version() {
      return `Alpha v${process.env.PACKAGE_VERSION}`;
    },
    nonCombatJobs() {
      return ALL_JOBS.filter(job => !job.isCombat);
    },
    combatJobs() {
      return ALL_JOBS.filter(job => job.isCombat);
    },
    playerHealth() {
      return Math.round(this.$store.getters["playerMob/health"]);
    },
    playerMaxHealth() {
      return this.$store.getters["playerMob/stats"].maxHealth;
    },
    healthClass() {
      return this.playerHealth == this.playerMaxHealth
        ? "health-full"
        : "health-damaged";
    },
    bankItemIds() {
      return this.$store.getters["inventory/bankItemIds"];
    },
    bankSlots() {
      return this.$store.getters["inventory/bankSlots"];
    },
    chronoSpeed() {
      return this.$store.getters["chrono/speed"];
    }
  },
  methods: {
    getLevelText(job) {
      return `${this.$store.getters[job.id + "/visualLevel"]}/50`;
    },
    getJobColor(job) {
      var isGreen = false;

      if (job.isCombat) {
        isGreen = this.$store.getters["combat/targetEnemy"];
      } else {
        isGreen = this.$store.getters[job.id + "/active"];
      }
      if (isGreen) {
        return "#50c22e";
      }
    },
    checkJobLocked(job) {
      return this.$store.getters[job.id + "/locked"];
    }
  }
};
</script>

<style scoped>
.sidebar {
  color: #ebebeb;
  transition: transform 0.3s;
  animation-timing-function: ease-out;
}

@media (max-width: 768px) {
  .sidebar {
    z-index: 100;

    position: fixed;
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 1);
    transform: translate(-240px, 0px);
  }

  .sidebar.expanded {
    transform: translate(0px, 0px);
  }
}

.sidebar-content {
  width: 230px;
  height: 100%;
  overflow-y: auto;
  z-index: 1;
  background-color: #2c343f;
}
.sidebar-content::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.sidebar-content::-webkit-scrollbar-track {
  background: #2c343f;
}

/* Handle */
.sidebar-content::-webkit-scrollbar-thumb {
  background: rgba(109, 109, 109, 0.5);
}

/* Handle on hover */
.sidebar-content::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.sidebar-title {
  color: whitesmoke;
  font-weight: bold;
  background-color: #424d5d;
  display: flex;
  align-items: center;
}
.sidebar-title img {
  width: 50px;
  margin-right: 10px;
}

.items-header {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  padding: 1rem 1rem 0.25rem 1rem;
  font-weight: bold;
}

.health-damaged {
  color: rgb(202, 80, 80);
}
.health-full {
  color: green;
}

a:hover,
a:focus {
  color: unset;
  text-decoration: unset;
}

.button-toggle {
  display: none;
}

@media (max-width: 768px) {
  .button-toggle {
    position: fixed;
    display: inline-block;
    width: 64px;
    height: 64px;

    left: 240px;
    top: 0;
    margin: 10px;
    cursor: pointer;
    opacity: 0.82;
    transition: opacity 0.3s;
    animation-timing-function: ease-out;
  }

  .expanded .button-toggle {
    opacity: 1;
  }

  .backing {
    display: inline-block;
    left: 0;
    width: 800px;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    z-index: -20;
    pointer-events: none;
    transition: background-color 0.3s;
    animation-timing-function: ease-out;
  }
  .expanded .backing {
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: all;
  }
}
</style>