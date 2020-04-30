<template>
  <div class="sidebar">
    <div class="sidebar-title p-3 mb-2">
      <img src="@/assets/art/misc/logo.png" alt />
      <span>SS13 Idle</span>
    </div>
    <p class="items-header">{{version}}</p>

    <sidebar-item
      id="shop"
      text="Cargo Terminal"
      :icon="require('@/assets/art/sidebar/cargo.png')"
    />
    <sidebar-item
      id="inventory"
      text="Inventory"
      :icon="require('@/assets/art/sidebar/backpack.png')"
    />
		
    <p class="items-header">Jobs</p>
    <sidebar-item
      v-for="job in allJobs"
      :key="job.id"
      :id="job.id"
      :text="job.name"
      :icon="job.icon"
			:color="job.color"
    />
  </div>
</template>

<script>
import { ALL_JOBS } from "@/data/jobs";
import SidebarItem from "./SidebarItem";

export default {
  name: "Sidebar",
  components: { SidebarItem },
  computed: {
    version() {
      return `Alpha v${process.env.PACKAGE_VERSION}`;
    },
    allJobs() {
      return ALL_JOBS;
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 230px;
  height: 100%;
  color: #ebebeb;
  background-color: #2c343f;
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
</style>