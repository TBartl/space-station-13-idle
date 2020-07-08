<template>
  <div
    class="content-header d-flex flex-row align-items-center justify-content-between"
    :style="{'background-color': color}"
  >
    <div>
      <img :src="icon" alt />
      <span>{{text}}</span>
    </div>
    <!-- <div class="player-icon" @click="openCustomization">
      <player-display :showEquipment="true" />
    </div>-->
  </div>
</template>

<script>
// Too laggy
// import PlayerDisplay from "@/components/PlayerDisplay";
export default {
  props: ["icon", "text", "color"],
  // components: { PlayerDisplay },
  methods: {
    openCustomization() {
      this.$store.commit("setVisibleSidebarItem", "customization");
    }
  }
};
</script>


<style scoped>
.content-header {
  display: flex;
  align-items: center;
  padding: 11.5px 16px;
}
img {
  background-color: white;
  border-radius: 8px;
  padding: 2px;
  margin-right: 10px;
  width: 36px;
}
span {
  font-size: 18px;
  font-weight: bold;
  color: #373737;
}
.player-icon {
  border: 1px solid rgba(0, 0, 0, 0.376);
  padding: 2px;
  background-color: white;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 3px 3px 3px 1px #00000048;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out;
}
.player-icon:hover {
  transform: translateY(-2px);
  background-color: rgb(227, 235, 240);
}
</style>