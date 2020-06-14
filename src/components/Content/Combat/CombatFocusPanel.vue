<template>
  <div class="d-flex flex-xl-row flex-column align-items-center justify-content-center">
    <div v-for="focus in focuses" :key="focus.id">
      <button
        :id="id+focus.id"
        type="button"
        class="btn mx-1 mb-1"
        :class="[currentFocus == focus.id ? 'btn-primary' : 'btn-secondary']"
        @click="$store.commit('combat/setFocus',focus.id)"
      >
        <img :src="focus.icon" />
        <span>{{focus.name}}</span>
      </button>
      <b-popover :target="id+focus.id" triggers="hover" placement="top" delay="0">
        <div class="focus-text d-flex flex-column align-items-center">
          <p class="focus-bonus">{{focus.bonus}}</p>
          <p class="text-center">{{focus.description}}</p>
        </div>
      </b-popover>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this._uid.toString();
    },
    currentFocus() {
      return this.$store.getters["combat/focus"];
    },
    focuses() {
      let focuses = [
        {
          name: "Precision",
          id: "precision",
          bonus: "+5 precision bonus",
          description: "Damage dealt is gained as precision XP",
          icon: require("@/assets/art/combat/precision.png")
        },
        {
          name: "Power",
          id: "power",
          bonus: "+5 power bonus",
          description: "Damage dealt is gained as power XP",
          icon: require("@/assets/art/combat/skull.png")
        },
        {
          name: "Evasion",
          id: "evasion",
          bonus: "+5 evasion bonus",
          description: "Damage dealt is gained as evasion XP",
          icon: require("@/assets/art/combat/black_shoes.png")
        }
      ];
      if (this.$store.getters["upgrades/get"]("xenobiologyUnlocked")) {
        focuses.push({
          name: "Command",
          id: "command",
          bonus: "+5 command bonus",
          description: "Damage dealt is gained as command XP",
          icon: require("@/assets/art/combat/command.png")
        });
      }
      return focuses;
    }
  }
};
</script>

<style scoped>
.focus-text {
  max-width: 180px;
}
.focus-bonus {
  font-weight: bold;
}
</style>