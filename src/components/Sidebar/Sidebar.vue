<template>
  <div class="sidebar">
    <div class="sidebar-title p-3 mb-2">
      <img class="no-pixel" src="@/assets/art/misc/logo.png" alt />
      <span class="d-none d-md-block">SS13 Idle</span>
    </div>
    <p class="items-header d-none d-md-block">{{version}}</p>

    <sidebar-item id="shop" text="Cargo" :icon="require('@/assets/art/sidebar/cargo.png')">
      <div class="d-none d-md-block">
        <inventory-price-display :price="money" />
      </div>
    </sidebar-item>
    <sidebar-item
      id="inventory"
      text="Inventory"
      :icon="require('@/assets/art/sidebar/backpack.png')"
    >
      <span>{{bankItemIds.length}}/{{bankSlots}}</span>
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

    <div class="items-header d-none d-md-flex flex-row align-items-center justify-content-between">
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
    <a class href="https://discord.gg/HwbK9XQ" targe="_blank">
      <sidebar-item text="Discord" :icon="require('@/assets/art/misc/discord.png')" />
    </a>
  </div>
</template>

<script>
import { ALL_JOBS } from "@/data/jobs";
import SidebarItem from "./SidebarItem";
import InventoryPriceDisplay from "@/components/Content/Inventory/InventoryPriceDisplay";
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  components: { SidebarItem, InventoryPriceDisplay },
  computed: {
    ...mapGetters(["chronoSpeed"]),
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
    }
  },
  methods: {
    getLevelText(job) {
      return `${this.$store.getters[job.id + "/level"]}/50`;
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
  width: 90px;
  height: 100%;
  color: #ebebeb;
  background-color: #2c343f;
}
@media (min-width: 768px) {
  .sidebar {
    width: 230px;
  }
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
@media (max-width: 768px) {
  .items-header {
    padding-left: 0.5rem;
  }
}

a:hover,
a:focus {
  color: unset;
  text-decoration: unset;
}
</style>